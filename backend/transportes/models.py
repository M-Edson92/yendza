from django.db import models

class Provincia(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

class LocalParagem(models.Model):
    provincia = models.ForeignKey(Provincia, on_delete=models.CASCADE)
    nome = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.nome} ({self.provincia})"

class Transportadora(models.Model):
    nome = models.CharField(max_length=100)
    contacto = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.nome

class Autocarro(models.Model):
    transportadora = models.ForeignKey(Transportadora, on_delete=models.CASCADE)
    numero_assentos = models.PositiveIntegerField(default=50)

    def __str__(self):
        return f"{self.transportadora.nome} - {self.id}"

class Viagem(models.Model):
    autocarro = models.ForeignKey(Autocarro, on_delete=models.CASCADE)
    origem = models.ForeignKey(LocalParagem, on_delete=models.CASCADE, related_name="origens")
    destino = models.ForeignKey(LocalParagem, on_delete=models.CASCADE, related_name="destinos")
    data = models.DateField()
    hora = models.TimeField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    lugares_disponiveis = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.origem} → {self.destino} ({self.data})"
