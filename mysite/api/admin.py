from django.contrib import admin
from .models import *

# class ResultAdmin(admin.ModelAdmin):
#     readonly_fields = ['sub_time']

admin.site.register(Survey)
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Result)
admin.site.register(Event)
admin.site.register(Attendance)
admin.site.register(Group)
# admin.site.register(Result, ResultAdmin)