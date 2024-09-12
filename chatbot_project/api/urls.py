from django.urls import path
from .views import login_view, logout_view, signup_view
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('signup/', signup_view, name='signup')
]
