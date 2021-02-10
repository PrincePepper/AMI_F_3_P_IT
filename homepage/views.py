# Create your views here.
from rest_framework import viewsets

from .mixins import *
from .permissions import *
from .serializers import *


class PostViewSet(LikedMixin, viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
    permission_classes = (IsOwnerOrReadOnly,)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializer
    permission_classes = (WriteOnly | permissions.IsAdminUser,)


class YourUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = CurrentUserSerializer
    permission_classes = (ReadOnly,)

    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(email=user.email)
