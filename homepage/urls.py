from rest_framework import routers

from .views import *

# Создаем router и регистрируем наш ViewSet
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

router.register(r'notes', PostViewSet)

router.register(r'current_user', YourUserViewSet)

# URLs настраиваются автоматически роутером
urlpatterns = router.urls
