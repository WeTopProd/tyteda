from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.core.validators import validate_email
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from .managers import UserManager
from .validators import validate_phone_number


class User(AbstractBaseUser, PermissionsMixin):
    delivery_address = models.CharField(
        max_length=255,
        verbose_name='Улица доставки',
        blank=True,
    )
    email = models.EmailField(
        db_index=True,
        max_length=255,
        unique=True,
        verbose_name='Почта',
        error_messages={
            'unique': 'Пользователь с таким почтовым ящиком уже существует.',
        },
        validators=[validate_email],
    )
    phone = PhoneNumberField(
        verbose_name='Телефон',
        unique=True,
        error_messages={
            'unique': 'Пользователь с таким номером телефона уже существует.',
        },
        validators=[validate_phone_number]
    )
    first_name = models.CharField(
        max_length=255,
        verbose_name='Имя'
    )
    last_name = models.CharField(
        max_length=255,
        verbose_name='Фамилия'
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone', 'first_name', 'last_name', 'delivery_address']

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ('email',)

    def __str__(self):
        return self.email
