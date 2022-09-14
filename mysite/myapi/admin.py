from django.contrib import admin
from .models import Survey
from .models import Question
from .models import Choice
from .models import Result

admin.site.register(Survey)
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Result)