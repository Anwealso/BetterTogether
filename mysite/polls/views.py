import math

from django.http import Http404
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Survey, Choice, Question


def index(request):
    latest_survey_list = Survey.objects.order_by('-pub_date')[:5]
    context = {'latest_survey_list': latest_survey_list}
    return render(request, 'polls/index.html', context)


def detail(request, survey_id):
    survey = get_object_or_404(Survey, pk=survey_id)
    return render(request, 'polls/detail.html', {'survey': survey})


def results(request, survey_id):
    survey = get_object_or_404(Survey, pk=survey_id)
    return render(request, 'polls/results.html', {'survey': survey})


def vote(request, survey_id):
    survey = get_object_or_404(Survey, pk=survey_id)

    for question in survey.question_set.all():
        # print("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
        # print(question)
        try:
            # print(1)
            # print(f"QID: {question.id}")
            # print(question.choice_set.all())
            # print(request.POST)
            # print(request.POST[str(question.id)])
            selected_choice = question.choice_set.get(pk=request.POST[str(question.id)])
        except (KeyError, Choice.DoesNotExist):
            # print(2)
            # Redisplay the question voting form.
            return render(request, 'polls/detail.html', {
                'survey': survey,
                'error_message': "You didn't select a choice.",
            })
        else:
            # print(3)
            selected_choice.votes += 1
            selected_choice.save()
            
    # Always return an HttpResponseRedirect after successfully dealing
    # with POST data. This prevents data from being posted twice if a
    # user hits the Back button.
    return HttpResponseRedirect(reverse('polls:results', args=(survey.id,)))


def billboard(request):
    survey = get_object_or_404(Survey, pk=1)
    percentage = 0

    for question in survey.question_set.all():
        if question.question_text == "How lonely are you feeling today (1-3)":
            # Get the possible choices:
            choices = question.choice_set.all()

            # Get the percentage of people who picked the answer "3" (3/3 loneliness rating)
            total_votes = 0
            three_rated_votes = 0
            for choice in choices:
                if choice.choice_text == "3":
                    # 3 is the rating for very lonely
                    three_rated_votes = choice.votes
                    total_votes = total_votes + choice.votes
                else:
                    total_votes = total_votes + choice.votes
            percentage = three_rated_votes*100 / total_votes
            percentage = round(percentage, 2)

    # Return the percentage to be shown on the screen
    return render(request, 'polls/billboard.html', {'percentage': percentage})