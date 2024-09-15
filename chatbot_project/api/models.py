from django.db import models

# Create your models here.

# class Auth(models.Model):
#     username = models.CharField(max_length=30)
#     password = models.CharField(max_length=8)

class OrderStatus(models.Model):
    # serial_number = models.IntegerField(max_length=5)
    order_id = models.IntegerField(max_length=5, unique=True)
    order_status = models.CharField("") 
    
    def __str__(self):
        return self.order_id