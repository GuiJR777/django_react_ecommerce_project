from django import views
from django.urls import path

from . import views

urlpatterns = [
    path("status/", views.health_check, name="health check"),
    path("routes/", views.get_routes, name="rotas"),
    path("products/", views.get_products, name="produtos"),
    path("products/<str:primary_key>", views.get_product, name="produto"),
]
