
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
import json
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
# from django.views.decorators.csrf import csrf_exempt

# Login View
# @csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    if request.method == 'POST':
        # data = json.loads(request.body)
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Logged in successfully'}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)

# Logout View
# @csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'message': 'Logged out successfully'}, status=200)


