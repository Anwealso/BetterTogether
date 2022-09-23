from django.db import models

class Survey(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name


class Question(models.Model):
    text = models.CharField(max_length=60)
    surveys = models.ManyToManyField(Survey, related_name='questions')

    def __str__(self):
        return self.text + "_yeet"


class Choice(models.Model):
    option = models.CharField(max_length=60)
    question_id = models.ForeignKey(Question, related_name='choices', on_delete=models.CASCADE)

    def __str__(self):
        return self.option


class Result(models.Model):
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_id = models.ForeignKey(Choice, on_delete=models.CASCADE)
    survey_id = models.ForeignKey(Survey, on_delete=models.CASCADE)
    sub_time = models.TimeField()

    def __str__(self):
        return self.choice_id