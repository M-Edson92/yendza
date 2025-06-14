# transportes/serializers.py

from rest_framework import serializers
from .models import Provincia, LocalParagem, Transportadora, Autocarro, Viagem

class ProvinciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provincia
        fields = ['id', 'nome']

class LocalParagemSerializer(serializers.ModelSerializer):
    provincia = ProvinciaSerializer(read_only=True)
    provincia_id = serializers.PrimaryKeyRelatedField(
        queryset=Provincia.objects.all(), source='provincia', write_only=True
    )

    class Meta:
        model = LocalParagem
        fields = ['id', 'nome', 'provincia', 'provincia_id']

class TransportadoraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transportadora
        fields = ['id', 'nome', 'contacto']

class AutocarroSerializer(serializers.ModelSerializer):
    transportadora = TransportadoraSerializer(read_only=True)
    transportadora_id = serializers.PrimaryKeyRelatedField(
        queryset=Transportadora.objects.all(), source='transportadora', write_only=True
    )

    class Meta:
        model = Autocarro
        fields = ['id', 'transportadora', 'transportadora_id', 'numero_assentos']

class ViagemSerializer(serializers.ModelSerializer):
    autocarro = AutocarroSerializer(read_only=True)
    autocarro_id = serializers.PrimaryKeyRelatedField(
        queryset=Autocarro.objects.all(), source='autocarro', write_only=True
    )
    origem = LocalParagemSerializer(read_only=True)
    origem_id = serializers.PrimaryKeyRelatedField(
        queryset=LocalParagem.objects.all(), source='origem', write_only=True
    )
    destino = LocalParagemSerializer(read_only=True)
    destino_id = serializers.PrimaryKeyRelatedField(
        queryset=LocalParagem.objects.all(), source='destino', write_only=True
    )

    class Meta:
        model = Viagem
        fields = [
            'id', 'autocarro', 'autocarro_id',
            'origem', 'origem_id',
            'destino', 'destino_id',
            'data', 'hora', 'preco', 'lugares_disponiveis'
        ]
