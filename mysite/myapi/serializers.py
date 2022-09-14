from rest_framework import serializers
from .models import Survey
from .models import Question
from .models import Choice
from .models import Result

# class HeroSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Hero
#         fields = ('name', 'alias')