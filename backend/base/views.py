from django.http import JsonResponse
from django.shortcuts import render


def get_routes(request):
    return JsonResponse("Hello", safe=False)
