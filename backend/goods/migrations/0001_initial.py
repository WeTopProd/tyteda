# Generated by Django 3.2 on 2023-07-04 15:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'Избранное',
                'verbose_name_plural': 'Избранные',
            },
        ),
        migrations.CreateModel(
            name='Goods',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('goods_type', models.CharField(choices=[('1', 'Кии'), ('2', 'Шары'), ('3', 'Аксессуары')], max_length=50, verbose_name='Тип товара')),
                ('title', models.CharField(max_length=150, verbose_name='Название товара')),
                ('description', models.CharField(max_length=255, verbose_name='Описание товара')),
                ('workshop', models.CharField(max_length=150, verbose_name='Мастерская товара')),
                ('diameter', models.FloatField(blank=True, null=True, verbose_name='Диаметр товара')),
                ('article', models.IntegerField(verbose_name='Артикул товара')),
                ('price', models.FloatField(verbose_name='Цена товара')),
                ('play', models.CharField(max_length=150, verbose_name='Принадлежность к игре')),
                ('count', models.IntegerField(default=1, verbose_name='Количество товара')),
                ('composition', models.IntegerField(blank=True, null=True, verbose_name='Составность товара')),
                ('structure', models.CharField(blank=True, max_length=150, null=True, verbose_name='Состав товара')),
                ('weight', models.IntegerField(blank=True, null=True, verbose_name='Вес товара')),
                ('type', models.CharField(blank=True, choices=[('case', 'Чехол'), ('sticker', 'Наклейка'), ('chalk', 'Мел'), ('glove', 'Перчатки')], max_length=150, null=True, verbose_name='Тип аксессуара')),
            ],
            options={
                'verbose_name': 'Товар',
                'verbose_name_plural': 'Товары',
                'ordering': ['-title'],
            },
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('images', models.ImageField(upload_to='backend_media/', verbose_name='Изображение')),
            ],
        ),
        migrations.CreateModel(
            name='ShoppingCart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField(default=1, verbose_name='Количество товара')),
                ('price', models.FloatField(verbose_name='Цена товара')),
                ('goods', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shopping_cart_goods', to='goods.goods', verbose_name='Покупка')),
            ],
            options={
                'verbose_name': 'Покупка',
                'verbose_name_plural': 'Покупки',
            },
        ),
    ]
