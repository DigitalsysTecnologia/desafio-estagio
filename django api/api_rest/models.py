from django.db import models

# Create your models here.
class User(models.Model):
    id = models.CharField(primary_key = True, max_length=100, default='')
    nome = models.CharField(max_length=150, default='')
    email = models.EmailField(default='')
    idade = models.IntegerField(default=0)
    
    def __str__(self):
        return f'Id: {self.id} | E-mail: {self.email}'

class UserTasks(models.Model):
    id_usuario = models.CharField(max_length=100, default='')
    tarefa = models.CharField(max_length=255, default='')