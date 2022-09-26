from random import choices
from rest_framework import serializers
from .models import Survey, Question, Choice, Result


class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ["id", "option", "question_id"]

class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(many=True)

    class Meta:
        model = Question
        fields = ["id", "text", "choices", "surveys"]

class SurveySerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Survey
        fields = ["id", "name", "questions"]

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ["id", "question_id", "choice_id", "survey_id", "sub_time"]

# class SubmitSurveySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Survey
#         fields = ["name", "questions"]