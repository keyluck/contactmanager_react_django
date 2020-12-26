from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Contact(models.Model): 
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    notes = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="contacts", 
        on_delete=models.CASCADE, 
        null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    