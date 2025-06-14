from django.contrib import admin
from .models import Provincia, LocalParagem, Transportadora, Autocarro, Viagem

admin.site.register(Provincia)
admin.site.register(LocalParagem)
admin.site.register(Transportadora)
admin.site.register(Autocarro)
admin.site.register(Viagem)
