from django.db import models
from django.contrib.auth.models import User

class Survey(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name


class Question(models.Model):
    text = models.CharField(max_length=120)
    surveys = models.ManyToManyField(Survey, related_name='questions')

    def __str__(self):
        return self.text


class Choice(models.Model):
    option = models.CharField(max_length=60)
    question_id = models.ForeignKey(Question, related_name='choices', on_delete=models.CASCADE)

    def __str__(self):
        return self.option


class Result(models.Model):
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_id = models.ForeignKey(Choice, on_delete=models.CASCADE)
    survey_id = models.ForeignKey(Survey, on_delete=models.CASCADE)
    sub_time = models.DateTimeField()

    def __str__(self):
        return str(self.choice_id)


class Event(models.Model):
    title = models.CharField(max_length=60)
    location = models.CharField(max_length=100)
    time = models.DateTimeField()
    description = models.CharField(max_length=300)
    image = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.title


class Attendance(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user} : {self.event}"
