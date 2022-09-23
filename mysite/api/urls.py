# api/urls.py
from django.urls import include, path
from rest_framework import routers

from .views import *



# urlpatterns = [
#     path('survey', SurveyViewSet.as_view()),
#     path('question', QuestionViewSet.as_view()),
#     path('choice', ChoiceViewSet.as_view()),
#     path('result', ResultViewSet.as_view())
# ]


# OLD SETUP:
router = routers.DefaultRouter()
router.register(r'surveys', SurveyViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'choices', ChoiceViewSet)
router.register(r'results', ResultViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    # path('survey', SurveyViewSet.as_view()),

    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]