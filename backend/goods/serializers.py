from rest_framework import serializers, validators

from .models import Goods, Favorite, ShoppingCart, Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('images', )


class GoodsSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    is_favorited = serializers.SerializerMethodField()
    is_in_shopping_cart = serializers.SerializerMethodField()

    class Meta:
        model = Goods
        fields = (
            'id',
            'goods_type',
            'title',
            'description',
            'workshop',
            'diameter',
            'article',
            'price',
            'play',
            'images',
            'count',
            'composition',
            'structure',
            'weight',
            'type',
            'is_favorited',
            'is_in_shopping_cart'
        )

    def in_list(self, obj, model):
        request = self.context.get('request')
        if request is None or request.user.is_anonymous:
            return False
        return model.objects.filter(user=request.user, goods=obj).exists()

    def get_is_favorited(self, obj):
        return self.in_list(obj, Favorite)

    def get_is_in_shopping_cart(self, obj):
        return self.in_list(obj, ShoppingCart)


class ShortGoodsSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Goods
        fields = (
            'id',
            'goods_type',
            'title',
            'images',
            'count',
            'price'
        )


class ShoppingCartSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShoppingCart
        fields = (
            'goods',
            'user',
            'count',
            'price'
        )


class FavoriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Favorite
        fields = (
            'user',
            'goods'
        )
        validators = [
            validators.UniqueTogetherValidator(
                queryset=Favorite.objects.all(),
                fields=('user', 'goods'),
                message='Кий уже добавлен в избранное'
            )
        ]

    def to_representation(self, instance):
        request = self.context['request']
        return ShortGoodsSerializer(
            instance.goods,
            context={'request': request}
        ).data
