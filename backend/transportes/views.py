# transportes/views.py
from rest_framework import viewsets
from .models import Provincia, LocalParagem, Transportadora, Autocarro, Viagem
from .serializers import (
    ProvinciaSerializer,
    LocalParagemSerializer,
    TransportadoraSerializer,
    AutocarroSerializer,
    ViagemSerializer,
)

class ProvinciaViewSet(viewsets.ModelViewSet):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer

class LocalParagemViewSet(viewsets.ModelViewSet):
    queryset = LocalParagem.objects.all()
    serializer_class = LocalParagemSerializer

class TransportadoraViewSet(viewsets.ModelViewSet):
    queryset = Transportadora.objects.all()
    serializer_class = TransportadoraSerializer

class AutocarroViewSet(viewsets.ModelViewSet):
    queryset = Autocarro.objects.all()
    serializer_class = AutocarroSerializer

class ViagemViewSet(viewsets.ModelViewSet):
    queryset = Viagem.objects.all()
    serializer_class = ViagemSerializer
