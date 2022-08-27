from django.urls import path

from . import views

app_name = 'polls'
urlpatterns = [
    # ex: /
    # path('', views.index, name='index'),
    path('', views.index, name='index'),
    
    # ex: /5/
    path('<int:survey_id>/', views.detail, name='detail'),

    # ex: /5/1/results/
    path('<int:survey_id>/results/', views.results, name='results'),

    # ex: /5/vote/
    path('<int:survey_id>/vote/', views.vote, name='vote'),

    # ex: /billboard
    path('billboard/', views.billboard, name='billboard'),
]
