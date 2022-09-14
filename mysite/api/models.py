import datetime

from django.db import models
from django.utils import timezone


class Survey(models.Model):
    survey_name = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.survey_name

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

class Question(models.Model):
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)
    question_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    
    def __str__(self):
        return self.choice_text

# class Result(models.Model):
#     user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
#     submission_date = models.DateTimeField('date submitted')
#     survey_id = models.ForeignKey(Survey, on_delete=models.CASCADE)
#     choice_id = models.ForeignKey(Choice, on_delete=models.CASCADE)

#     def __str__(self):
#         # TODO: ...
#         return [self.user_id, self.submission_date, self.survey_id, self.choice_id]