from dataclasses import field
from rest_framework import serializers
from .models import Survey
from .models import Question
from .models import Choice
from .models import Result

# class HeroSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Hero
#         fields = ('name', 'alias')

class SurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = ("name")

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ("text", "surveys")

class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ("option", "question_id")

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ("question_id", "choice_id", "survey_id", "sub_time")
