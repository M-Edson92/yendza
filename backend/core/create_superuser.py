from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

def create_default_superuser():
    User = get_user_model()
    username = "yendza"
    password = "Desportivo"
    email = "moisesedson.manuel@gmail.com"

    if not User.objects.filter(username=username).exists():
        User.objects.create_superuser(username=username, email=email, password=password)
        print("Superuser criado com sucesso!")
    else:
        print("Superuser já existe.")
