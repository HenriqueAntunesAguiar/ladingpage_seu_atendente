from django.contrib import admin
from django.urls import path
from app.views import setup

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',setup,name='setup')
]
