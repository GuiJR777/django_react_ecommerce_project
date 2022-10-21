from rest_framework.decorators import api_view
from rest_framework.response import Response

from .products import products


@api_view(["GET"])
def get_routes(request):
    return Response("hello")

@api_view(["GET"])
def get_products(request):
    return Response(products)

@api_view(["GET"])
def get_product(request, primary_key):
    return Response(__get_product_by_id(primary_key))

def __get_product_by_id(primary_key: str) -> dict:
    for product in products:
        if product.get("_id") == primary_key:
            return product
