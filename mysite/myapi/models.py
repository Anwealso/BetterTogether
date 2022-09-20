from django.db import models

# Create your models here.
# class Hero(models.Model):
#     name = models.CharField(max_length=60)
#     alias = models.CharField(max_length=60)
#     def __str__(self):
#         return self.name

# def validate_even(value):
#     if value % 2 != 0:
#         raise ValidationError(
#             _('%(value)s is not an even number'),
#             params={'value': value},
#         )


class Survey(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name


class Question(models.Model):
    text = models.CharField(max_length=60)
    surveys = models.ManyToManyField(Survey)

    def __str__(self):
        return self.text


class Choice(models.Model):
    option = models.CharField(max_length=60)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.option)


class Result(models.Model):
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_id = models.ForeignKey(Choice, on_delete=models.CASCADE)
    survey_id = models.ForeignKey(Survey, on_delete=models.CASCADE)
    sub_time = models.TimeField()

    def __str__(self):
        return str(self.choice_id)