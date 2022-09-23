from rest_framework import serializers
from .models import Survey, Question, Choice, Result

class SurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = ["name"]

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ["text", "surveys"]

class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ["option", "question_id"]

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ["question_id", "choice_id", "survey_id", "sub_time"]