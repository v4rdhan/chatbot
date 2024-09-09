from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework import response
from . serializer import *


class ReactView(APIView):
    def get(self, request):
        output = [{}]

