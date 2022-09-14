from rest_framework import viewsets

from .serializers import QuestionSerializer
from .models import Question

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all().order_by('text')
    serializer_class = QuestionSerializer 