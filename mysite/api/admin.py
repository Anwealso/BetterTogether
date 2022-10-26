from django.contrib import admin
from .models import *

admin.site.register(Survey)
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Result)
admin.site.register(Event)
admin.site.register(Attendance)
admin.site.register(Group)