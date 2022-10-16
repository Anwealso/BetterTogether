from django.shortcuts import render
from django.utils.timezone import make_aware
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status

from .models import Survey, Question, Choice, Result, Event, Attendance
from .serializers import SurveySerializer, QuestionSerializer, ChoiceSerializer, ResultSerializer, EventSerializer, AttendanceSerializer

import logging
from datetime import datetime

# Authentication Imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

# ---------------------------------------------------------------------------- #
#            VIEWS TO LIST OUT ALL THE OBJECTS OF A PARTICULAR CLASS           #
# ---------------------------------------------------------------------------- #
class SurveyViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Survey.objects.all()
    serializer_class = SurveySerializer
    # permission_classes = [permissions.IsAuthenticated]

class QuestionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class ChoiceViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer

class ResultViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

class EventViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Events to be viewed or edited.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class AttendanceViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Events to be viewed or edited.
    """
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

# class GetEvents(APIView):
#     serializer_class = SurveySerializer
#     lookup_url_kwarg = 'id'

#     def get(self, request, format=None):
#         survey_id = request.GET.get(self.lookup_url_kwarg)
#         if survey_id != None:
#             try:
#                 survey = Survey.objects.get(id=survey_id)
#                 # data = SurveySerializer(survey[0]).data
#                 data = SurveySerializer(survey).data
#                 # data['is_host'] = self.request.session.session_key == survey[0].host
#                 return Response(data, status=status.HTTP_200_OK)
#             except:
#                 return Response({'Survey Not Found': 'Invalid Survey ID.'}, status=status.HTTP_404_NOT_FOUND)

#         return Response({'Bad Request': 'Survey ID paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

# ---------------------------------------------------------------------------- #
#                             VIEWS FOR DATA INPUT                             #
# ---------------------------------------------------------------------------- #

class GetSurvey(APIView):
    serializer_class = SurveySerializer
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        survey_id = request.GET.get(self.lookup_url_kwarg)
        if survey_id != None:
            try:
                survey = Survey.objects.get(id=survey_id)
                # data = SurveySerializer(survey[0]).data
                data = SurveySerializer(survey).data
                # data['is_host'] = self.request.session.session_key == survey[0].host
                return Response(data, status=status.HTTP_200_OK)
            except:
                return Response({'Survey Not Found': 'Invalid Survey ID.'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Survey ID paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

class SubmitSurvey(APIView):
    # TODO: Create a serialiserr to convert the request into an object and invoke it here
    # serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        # if not self.request.session.exists(self.request.session.session_key):
        #     self.request.session.create()
        # logging.debug(request.data)

        # Check the db to see that the requested survey exists
        survey_id = request.data.get("surveyId")
        if survey_id != None:
            survey_instances = Survey.objects.filter(id=survey_id)
            if len(survey_instances) > 0:
                survey_instance = survey_instances[0]

                # TODO: Fix up this fiasco with the date not properly being shown in admin protal (and maybe not even being recorded)
                # sub_time = request.data.get("submitTime")
                # sub_time = make_aware(datetime.strptime(sub_time, "%d/%m/%Y, %H:%M:%S")) # convert datetime string format
                sub_time = make_aware(datetime.now())
                logging.debug(sub_time)

                for question in request.data.get("questions"):
                    # logging.debug(question)

                    question_instance = Question.objects.filter(id=question["id"])[0]
                    selected_choice_instance = Choice.objects.filter(id=question["selectedChoiceId"])[0]


                    # Save the survey results to the database
                    result = Result(question_id=question_instance, choice_id=selected_choice_instance, survey_id=survey_instance, sub_time=sub_time)
                    
                    logging.debug(result)
                    logging.debug(result.sub_time)
                    result.save()

                # return Response(ResultSerializer(result).data, status=status.HTTP_201_CREATED)

                return Response({'message': 'Survey Submitted!'}, status=status.HTTP_200_OK)

            return Response({'Bad Request': 'Invalid Survey ID'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'Bad Request': 'Invalid post data, did not find a survey ID'}, status=status.HTTP_400_BAD_REQUEST)

class SubmitAttendance(APIView):
    # TODO: Create a serialiserr to convert the request into an object and invoke it here
    # serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        # if not self.request.session.exists(self.request.session.session_key):
        #     self.request.session.create()
        # logging.debug(request.data)

        # Check the db to see that the requested survey exists
        # for question in request.data.get("questions"):
            # logging.debug(question)
        

        user_instance = User.objects.filter(id=request.data.get("user"))[0]
        event_instance = Event.objects.filter(id=request.data.get("event"))[0]


        # Save the survey results to the database
        result = Attendance(user = user_instance, event = event_instance)
        
        logging.debug(result)
        # logging.debug(result.sub_time)
        result.save()

        # return Response(ResultSerializer(result).data, status=status.HTTP_201_CREATED)

        return Response({'message': 'Survey Submitted!'}, status=status.HTTP_200_OK)

        # survey_id = request.data.get("surveyId")
        # if survey_id != None:
        #     survey_instances = Survey.objects.filter(id=survey_id)
        #     if len(survey_instances) > 0:
        #         survey_instance = survey_instances[0]

        #         # TODO: Fix up this fiasco with the date not properly being shown in admin protal (and maybe not even being recorded)
        #         # sub_time = request.data.get("submitTime")
        #         # sub_time = make_aware(datetime.strptime(sub_time, "%d/%m/%Y, %H:%M:%S")) # convert datetime string format
        #         sub_time = make_aware(datetime.now())
        #         logging.debug(sub_time)

        #         for question in request.data.get("questions"):
        #             # logging.debug(question)

        #             question_instance = Question.objects.filter(id=question["id"])[0]
        #             selected_choice_instance = Choice.objects.filter(id=question["selectedChoiceId"])[0]


        #             # Save the survey results to the database
        #             result = Result(question_id=question_instance, choice_id=selected_choice_instance, survey_id=survey_instance, sub_time=sub_time)
                    
        #             logging.debug(result)
        #             logging.debug(result.sub_time)
        #             result.save()

        #         # return Response(ResultSerializer(result).data, status=status.HTTP_201_CREATED)

        #         return Response({'message': 'Survey Submitted!'}, status=status.HTTP_200_OK)

        #     return Response({'Bad Request': 'Invalid Survey ID'}, status=status.HTTP_400_BAD_REQUEST)

        # return Response({'Bad Request': 'Invalid post data, did not find a survey ID'}, status=status.HTTP_400_BAD_REQUEST)


class GetBillboard(APIView):
    # serializer_class = SurveySerializer
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        billboard_id = int(request.GET.get(self.lookup_url_kwarg))

        if billboard_id != None:
            if billboard_id == 1:
                # Do billboard 0 logic...
                # Get the percentage votes for red
                
                logging.debug(Result.objects.filter(question_id=1))
                logging.debug(Result.objects.filter(question_id=1))

                num_red = len(Result.objects.filter(question_id=1).filter(choice_id=Choice.objects.filter(question_id=1).filter(option="4: Above Average")[0].id))
                num_blue = len(Result.objects.filter(question_id=1).filter(choice_id=Choice.objects.filter(question_id=1).filter(option="2: Below Average")[0].id))
                if num_red + num_blue == 0:
                    percentage_red = 0
                else:
                    percentage_red = num_red / (num_red + num_blue)

                # Package the data into the required json string format and send
                return Response({'text': percentage_red}, status=status.HTTP_200_OK)

            elif billboard_id == 2:
                # Do billboard 1 logic...
                # Get the percentage votes for blue                
                num_red = len(Result.objects.filter(question_id=1).filter(choice_id=Choice.objects.filter(question_id=1).filter(option="Red")[0].id))
                num_blue = len(Result.objects.filter(question_id=1).filter(choice_id=Choice.objects.filter(question_id=1).filter(option="Blue")[0].id))
                if num_red + num_blue == 0:
                    percentage_red = 0
                else:
                    percentage_blue = num_blue / (num_red + num_blue)
                    
                # Package the data into the required json string format and send
                return Response({'text': percentage_blue}, status=status.HTTP_200_OK)

            else:
                return Response({'Billboard Not Found': 'Invalid Billboard ID.'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Billboard ID paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)
