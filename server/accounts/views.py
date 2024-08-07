from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]

    def get_object(self):
        print(self.kwargs,self.args)
        if self.kwargs.get('pk', None) == 'me':
            self.kwargs['pk'] = self.request.user.pk
        return super(UserViewSet, self).get_object()


class VerifyToken(APIView):
    def get(self, request):
        print(self.request.user)
        print(request.headers)
        token_header = request.headers['Authorization'].split(' ')
        print(token_header)
        if len(token_header) == 2:
            token = token_header[1]
        else:
            token = None
        print(Token.objects.all())
        if token and Token.objects.filter(key=token).exists():
            return Response({'verified': True})
        return Response({'verified': False})