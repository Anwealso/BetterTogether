from random import choices
from rest_framework import serializers
from .models import Survey, Question, Choice, Result


class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ["option", "question_id"]

class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(many=True)

    class Meta:
        model = Question
        fields = ["text", "choices", "surveys"]

class SurveySerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Survey
        fields = ["name", "questions"]

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ["question_id", "choice_id", "survey_id", "sub_time"]