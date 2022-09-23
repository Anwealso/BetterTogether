from django.urls import path

from .views import index

urlpatterns = [
    path('', index),
    path('join', index),
    path('survey/<str:surveyId>', index),
    path('billboard/<str:billboardId>', index)
]