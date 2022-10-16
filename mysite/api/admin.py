from django.contrib import admin
from .models import Survey
from .models import Question
from .models import Choice
from .models import Result
from .models import Event
from .models import Attendance

# class ResultAdmin(admin.ModelAdmin):
#     readonly_fields = ['sub_time']

admin.site.register(Survey)
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Result)
admin.site.register(Event)
admin.site.register(Attendance)
# admin.site.register(Result, ResultAdmin)