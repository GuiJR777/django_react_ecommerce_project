from django import views
from django.urls import path

from . import views

urlpatterns = [
    path("", views.get_routes, name="routes"),
    path("products/", views.get_products, name="products"),
    path("products/<str:primary_key>", views.get_product, name="product"),
    ]
