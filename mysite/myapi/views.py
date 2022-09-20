from rest_framework import viewsets
from django.db.models import Count

from .serializers import QuestionSerializer
from .models import Question

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all().order_by('text')
    serializer_class = QuestionSerializer 

    def get_queryset(self):
        return Question.objects.annotate(
            total_responses=Count('result')
        )