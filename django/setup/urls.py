from django.contrib import admin
from django.urls import path
from app.views import Chat, ProcessGemini

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Chat, name='chat' ),
    path('process-question/',ProcessGemini, name='process-question'),
]
