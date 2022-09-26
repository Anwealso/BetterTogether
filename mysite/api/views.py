from django.shortcuts import render
from django.utils.timezone import make_aware
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status

from .models import Survey, Question, Choice, Result
from .serializers import SurveySerializer, QuestionSerializer, ChoiceSerializer, ResultSerializer

import logging
from datetime import datetime

# from django.shortcuts import render
# from django.http import JsonResponse

# from rest_framework import generics, status
# from rest_framework.views import APIView
# from rest_framework.response import Response

# from .serializers import RoomSerializer, CreateRoomSerializer, UpdateRoomSerializer
# from .models import Room


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

        # serializer = self.serializer_class(data=request.data)
        # if serializer.is_valid():
        #     guest_can_pause = serializer.data.get('guest_can_pause')
        #     votes_to_skip = serializer.data.get('votes_to_skip')
        #     host = self.request.session.session_key
        #     queryset = Room.objects.filter(host=host)
        #     if queryset.exists():
        #         room = queryset[0]
        #         room.guest_can_pause = guest_can_pause
        #         room.votes_to_skip = votes_to_skip
        #         room.save(update_fields=['guest_can_pause', 'votes_to_skip'])
        #         self.request.session['room_code'] = room.code
        #         return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)
        #     else:
        #         room = Room(host=host, guest_can_pause=guest_can_pause,
        #                     votes_to_skip=votes_to_skip)
        #         room.save()
        #         self.request.session['room_code'] = room.code
        #         return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

        # return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


# class JoinRoom(APIView):
#     lookup_url_kwarg = 'code'

#     def post(self, request, format=None):
#         if not self.request.session.exists(self.request.session.session_key):
#             self.request.session.create()

#         code = request.data.get(self.lookup_url_kwarg)
#         if code != None:
#             room_result = Room.objects.filter(code=code)
#             if len(room_result) > 0:
#                 room = room_result[0]
#                 self.request.session['room_code'] = code
#                 return Response({'message': 'Room Joined!'}, status=status.HTTP_200_OK)

#             return Response({'Bad Request': 'Invalid Room Code'}, status=status.HTTP_400_BAD_REQUEST)

#         return Response({'Bad Request': 'Invalid post data, did not find a code key'}, status=status.HTTP_400_BAD_REQUEST)


# class CreateRoomView(APIView):
#     serializer_class = CreateRoomSerializer

#     def post(self, request, format=None):
#         if not self.request.session.exists(self.request.session.session_key):
#             self.request.session.create()

#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             guest_can_pause = serializer.data.get('guest_can_pause')
#             votes_to_skip = serializer.data.get('votes_to_skip')
#             host = self.request.session.session_key
#             queryset = Room.objects.filter(host=host)
#             if queryset.exists():
#                 room = queryset[0]
#                 room.guest_can_pause = guest_can_pause
#                 room.votes_to_skip = votes_to_skip
#                 room.save(update_fields=['guest_can_pause', 'votes_to_skip'])
#                 self.request.session['room_code'] = room.code
#                 return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)
#             else:
#                 room = Room(host=host, guest_can_pause=guest_can_pause,
#                             votes_to_skip=votes_to_skip)
#                 room.save()
#                 self.request.session['room_code'] = room.code
#                 return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

#         return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)