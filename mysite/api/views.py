# from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions

from .models import Survey, Question, Choice, Result
from .serializers import SurveySerializer, QuestionSerializer, ChoiceSerializer, ResultSerializer


# from django.shortcuts import render
# from django.http import JsonResponse

# from rest_framework import generics, status
# from rest_framework.views import APIView
# from rest_framework.response import Response

# from .serializers import RoomSerializer, CreateRoomSerializer, UpdateRoomSerializer
# from .models import Room


class SurveyViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Survey.objects.all()
    serializer_class = SurveySerializer
    # permission_classes = [permissions.IsAuthenticated]

class QuestionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class ChoiceViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer

class ResultViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Result.objects.all()
    serializer_class = ResultSerializer