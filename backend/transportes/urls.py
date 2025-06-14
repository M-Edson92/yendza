# transportes/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter # type: ignore
from .views import ProvinciaViewSet, LocalParagemViewSet, AutocarroViewSet

router = DefaultRouter()
router.register(r'provincias', ProvinciaViewSet)
router.register(r'locais', LocalParagemViewSet)
router.register(r'autocarros', AutocarroViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
