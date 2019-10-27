from .models import Post
from rest_framework import viewsets, permissions
from .serializers import PostSerializer

# Lead Viewset


class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    # permission_classes = [permissions.AllowAny]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def get_queryset(self):
        return self.request.user.posts.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
