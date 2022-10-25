import rest_framework
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .products import products
from .serializers import ProductSerializer


@api_view(["GET"])
def health_check(request):
    return Response("OK")


@api_view(["GET"])
def get_routes(request):
    return Response(
        {
            "host/api/status/": {"method": "GET", "description": "Health Check."},
            "host/api/products/": {"method": "GET", "description": "Retorna todos os produtos cadastrados."},
            "host/api/products/{id do produto}": {
                "method": "GET",
                "description": "Retorna o produto do id especificado.",
            },
        }
    )


@api_view(["GET"])
def get_products(request):
    products = Product.objects.all()
    serializers = ProductSerializer(products, many=True)

    return Response(serializers.data)


@api_view(["GET"])
def get_product(request, primary_key):
    product = Product.objects.get(_id=primary_key)
    serializer = ProductSerializer(product, many=False)

    return Response(serializer.data)
