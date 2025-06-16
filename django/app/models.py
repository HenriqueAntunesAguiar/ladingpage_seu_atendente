from django.db import models

class SetupProdutos(models.Model):
    nome_produto = models.TextField(blank=False)
    valor_produto = models.FloatField(blank=True)
    descricao_produto = models.TextField(blank=True)

class SetupDadosColetados(models.Model):
    nome_cliente = models.TextField(blank=False)
    carro_cliente = models.FloatField(blank=True)
    data_agendamento_cliente = models.DateField(blank=True)
    horario_agendamento_cliente = models.TimeField(blank=True)

class SetupBoasVindas(models.Model):
    boas_vindas = models.CharField()
   