# api/urls.py
from django.urls import include, path
from rest_framework import routers

from .views import *


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register(r'surveys', SurveyViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'choices', ChoiceViewSet)
# router.register(r'token', MyTokenObtainPairView)
# router.register(r'register', RegisterView)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('get-survey', GetSurvey.as_view()),
    path('submit-survey', SubmitSurvey.as_view()),

    path('get-billboard', GetBillboard.as_view()),

    path('', include(router.urls)),


    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('test/', testEndPoint, name='test')

    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]