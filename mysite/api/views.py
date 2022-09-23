from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status


from .models import Survey, Question, Choice, Result
from .serializers import SurveySerializer, QuestionSerializer, ChoiceSerializer, ResultSerializer


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