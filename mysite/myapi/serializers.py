from dataclasses import field
from rest_framework import serializers
from .models import Survey
from .models import Question
from .models import Choice
from .models import Result

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ['text']