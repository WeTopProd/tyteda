from django.db import models

from users.models import User


class Image(models.Model):
    images = models.ImageField(
        upload_to='backend_media/',
        verbose_name='Изображение'
    )
    goods = models.ForeignKey(
        "Goods",
        related_name='images',
        on_delete=models.CASCADE,


        verbose_name='Товар'
    )

    def __str__(self):
        return f'Картинка #{self.pk} для товара {self.goods.title}'


class Goods(models.Model):
    CHOICES_GOODS = (
        ('1', 'Кии'),
        ('2', 'Шары'),
        ('3', 'Аксессуары'),
    )
    CHOICES_TYPE = (
        ('case', 'Чехол'),
        ('sticker', 'Наклейка'),
        ('chalk', 'Мел'),
        ('glove', 'Перчатки')
    )
    goods_type = models.CharField(
        verbose_name='Тип товара',
        max_length=50,
        choices=CHOICES_GOODS
    )
    title = models.CharField(
        max_length=150,
        verbose_name='Название товара'
    )
    description = models.CharField(
        max_length=255,
        verbose_name='Описание товара'
    )
    workshop = models.CharField(
        max_length=150,
        verbose_name='Мастерская товара'
    )
    diameter = models.FloatField(
        verbose_name='Диаметр товара',
        blank=True,
        null=True
    )
    article = models.IntegerField(verbose_name='Артикул товара')
    price = models.FloatField(verbose_name='Цена товара')
    play = models.CharField(
        max_length=150,
        verbose_name='Принадлежность к игре'
    )
    image = models.ManyToManyField(
        Image,
        blank=True,
        related_name='goods_img'
    )
    count = models.IntegerField(
        default=1,
        verbose_name='Количество товара'
    )
    composition = models.IntegerField(
        verbose_name='Составность товара',
        blank=True,
        null=True
    )
    structure = models.CharField(
        max_length=150,
        verbose_name='Состав товара',
        blank=True,
        null=True
    )
    weight = models.IntegerField(
        verbose_name='Вес товара',
        blank=True,
        null=True
    )
    type = models.CharField(
        verbose_name='Тип аксессуара',
        max_length=150,
        choices=CHOICES_TYPE,
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'
        ordering = ['-title']

    def __str__(self):
        return f'Товар {self.title}'


class Favorite(models.Model):
    user = models.ForeignKey(
        User,
        related_name='favorites',
        on_delete=models.CASCADE
    )
    goods = models.ForeignKey(
        Goods,
        related_name='users_favorites',
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'Избранное'
        verbose_name_plural = 'Избранные'
        constraints = [
            models.UniqueConstraint(
                fields=['goods', 'user'],
                name='favorite_unique'
            )
        ]

    def __str__(self):
        return f'{self.user} added {self.goods} to favorite'


class ShoppingCart(models.Model):
    user = models.ForeignKey(
        User,
        verbose_name='Список покупок',
        related_name='shopping_cart',
        on_delete=models.CASCADE
    )
    goods = models.ForeignKey(
        Goods,
        verbose_name='Покупка',
        related_name='shopping_cart_goods',
        on_delete=models.CASCADE
    )
    count = models.IntegerField(
        default=1,
        verbose_name='Количество товара'
    )
    price = models.FloatField(verbose_name='Цена товара')

    class Meta:
        verbose_name = 'Покупка'
        verbose_name_plural = 'Покупки'
        constraints = [
            models.UniqueConstraint(
                fields=['goods', 'user'],
                name='shopping_cart_unique'
            )
        ]

    def __str__(self):
        return f'{self.user} added {self.goods} to shopping cart'
