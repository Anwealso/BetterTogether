from django.urls import path

from .views import index

urlpatterns = [
    path('', index),

    path('survey/<str:surveyId>', index),
    path('submitted', index),
    path('register', index),
    path('login', index),

    path('billboard/<str:billboardId>', index),
]