from django.shortcuts import get_object_or_404
from rest_framework import status, views, viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.validators import ValidationError
from rest_framework.response import Response
from django.db import transaction

from .pagination import CustomPagination
from .filters import GoodsFilter
from .models import Goods, ShoppingCart, Favorite, Order, OrderItem
from .permissions import IsAdminOrReadOnly
from .serializers import (GoodsSerializer, ShortGoodsSerializer,
                          FavoriteSerializer, ShoppingCartSerializer,
                          OrderSerializer)


class GoodsViewSet(viewsets.ModelViewSet):
    queryset = Goods.objects.all()
    permission_classes = (IsAdminOrReadOnly,)
    pagination_class = CustomPagination
    filter_backends = (DjangoFilterBackend,)
    filterset_class = GoodsFilter
    serializer_class = GoodsSerializer

    @action(
        detail=True,
        methods=('post', 'delete', 'patch'),
        permission_classes=(IsAuthenticated,)
    )
    def shopping_cart(self, request, pk):
        if request.method == 'POST':
            return self.add_goods(ShoppingCart, request, pk)
        if request.method == 'DELETE':
            return self.delete_goods(ShoppingCart, request, pk)
        if request.method == 'PATCH':
            return self.change_count(ShoppingCart, request, pk)

    def add_goods(self, model, request, pk):
        goods = get_object_or_404(Goods, pk=pk)
        user = self.request.user
        if model.objects.filter(goods=goods, user=user).exists():
            raise ValidationError('Товар уже добавлен')
        model.objects.create(goods=goods, user=user, price=goods.price)
        serializer = ShortGoodsSerializer(goods)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)

    def change_count(self, model, request, pk):
        goods = get_object_or_404(Goods, pk=pk)
        user = self.request.user
        shopping_cart = get_object_or_404(model, goods=goods, user=user)
        if 'count' in request.data:
            new_count = request.data['count']
            price = goods.price
            new_price = new_count * price
            shopping_cart.count = new_count
            shopping_cart.price = new_price
            shopping_cart.save()
        else:
            return Response({'error': 'Поле count не найдено'},
                            status=status.HTTP_400_BAD_REQUEST)
        serializer = ShoppingCartSerializer(shopping_cart)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def delete_goods(self, model, request, pk):
        goods = get_object_or_404(Goods, pk=pk)
        user = self.request.user
        obj = get_object_or_404(model, goods=goods, user=user)
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(
        detail=False,
        methods=['get'],
        permission_classes=[IsAuthenticated]
    )
    def basket(self, request):
        user = request.user
        shopping_cart = ShoppingCart.objects.filter(user=user)
        serializer = ShoppingCartSerializer(shopping_cart, many=True)

        for item in serializer.data:
            goods_id = item['goods']
            goods = get_object_or_404(Goods, id=goods_id)
            goods_serializer = GoodsSerializer(goods)
            item['goods'] = goods_serializer.data

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    @action(
        detail=False,
        methods=['post'],
        permission_classes=[IsAuthenticated]
    )
    def create_order(self, request):
        user = request.user
        shopping_cart = ShoppingCart.objects.filter(user=user)

        if not shopping_cart.exists():
            return Response({'error': 'Корзина пуста!'},
                            status=status.HTTP_400_BAD_REQUEST)

        total_price = 0
        cutlery = request.data.get('cutlery', 1)
        delivery_cost = request.data.get('delivery', 100)

        order_items_to_create = []

        for item in shopping_cart:
            total_price += item.price
            order_items_to_create.append(
                OrderItem(order=None, goods=item.goods, count=item.count,
                          price=item.price))

        total_price += delivery_cost

        with transaction.atomic():
            order = Order.objects.create(user=user, total_price=total_price,
                                         delivery=delivery_cost,
                                         cutlery=cutlery)

            for order_item in order_items_to_create:
                order_item.order = order
                order_item.save()

            shopping_cart.delete()

        serializer = OrderSerializer(order)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)

    @action(
        detail=False,
        methods=['get'],
        permission_classes=[IsAuthenticated]
    )
    def order_history(self, request):
        user = request.user
        orders = Order.objects.filter(user=user)
        serializer = OrderSerializer(orders, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class FavoriteView(views.APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request, favorite_id):
        user = request.user
        data = {
            'goods': favorite_id,
            'user': user.id
        }
        serializer = FavoriteSerializer(
            data=data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, favorite_id):
        user = request.user
        goods = get_object_or_404(Goods, id=favorite_id)
        Favorite.objects.filter(user=user, goods=goods).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
