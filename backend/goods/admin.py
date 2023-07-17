from django.contrib import admin

from .models import Goods, Image


class PostImageAdmin(admin.StackedInline):
    model = Image


@admin.register(Goods)
class GoodsAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'title',
        'compound',
        'weight',
        'calories',
        'price',
    )
    inlines = [PostImageAdmin]
    ordering = ('title', )
    search_fields = ('title', 'price', 'type',)
    list_filter = ('price', 'type',)


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    pass
