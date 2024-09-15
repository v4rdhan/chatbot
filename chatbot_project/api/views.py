
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
import json
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from .models import OrderStatus
from .serializers import OrderSerializer
from rest_framework.decorators import APIView


# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSignupSerializer
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






@api_view(['POST'])
@permission_classes([AllowAny])
def signup_view(request):
    serializer = UserSignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @csrf_exempt
# @permission_classes([AllowAny])
# class OrderStatusView(APIView):
#     def get(self, request, order_id):
#         try:
#             order = OrderStatus.objects.get(order_id=order_id)
#             serializer = OrderSerializer(order)
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         except OrderStatus.DoesNotExist:
#             return Response({"error": "Order not found"}, status=status.HTTP_404_NOT_FOUND)
        
# @csrf_exempt     
# @api_view(['GET'])
# def get_order_status(request, order_id):
#     try:
#         # Fetch the order by order_id
#         order = OrderStatus.objects.get(order_id=order_id)
#         # Serialize the order object
#         serializer = OrderSerializer(order)
#         # Return the serialized order data
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     except Order.DoesNotExist:
#         # Return 404 if the order is not found
#         return Response({"error": "Order not found"}, status=status.HTTP_404_NOT_FOUND)


@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def check_order_status(request):
    try:
        # Extract the JSON data from the request
        # data = json.loads(request.body)
        order_id = request.data.get('order_id')

        if not order_id:
            return Response({"error": "order_id not provided"}, status=status.HTTP_400_BAD_REQUEST)

        # Query the Order model for the given order_id
        try:
            order = OrderStatus.objects.get(order_id=order_id)
            # Return the order status as JSON
            # return JsonResponse({"fulfillmentText": order.order_id, "status": order.status}, status=status.HTTP_200_OK)
            return JsonResponse({"fulfillmentText": f"Received == {order.order_id}"}, status=status.HTTP_200_OK)
        except OrderStatus.DoesNotExist:
            return JsonResponse({"fulfillmentText": "Order not found"}, status=status.HTTP_404_NOT_FOUND)
    
    except json.JSONDecodeError:
        return Response({"error": "Invalid JSON data"}, status=status.HTTP_400_BAD_REQUEST)