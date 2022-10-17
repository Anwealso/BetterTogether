from django.urls import path

from .views import index

urlpatterns = [
    path('', index),

    path('survey/<str:surveyId>', index),
    path('event/<str:eventId>', index),
    path('submitted', index),
    path('register', index),
    path('login', index),
    path('logout', index),
    path('events', index),
    path('groups', index),
    path('together', index),
    path('together/events', index),
    path('together/groups', index),
    path('billboard/<str:billboardId>', index),
]