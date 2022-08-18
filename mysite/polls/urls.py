from django.urls import path

from . import views

app_name = 'polls'
urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    # ex: /polls/5/
    path('<int:question_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),
    # Reefly homepage test page
    path('reefly/', views.reefly, name='reefly'),
    # REST API to send to React
    # path('api/', views.QuestionView.as_view(), name='QuestionSerializer'),
    path('api/', views.QuestionView.as_view(), name='QuestionSerializer'),
]
