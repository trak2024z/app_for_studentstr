# Generated by Django 4.1.7 on 2023-03-25 12:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('note', '0004_remove_note_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='description',
            field=models.CharField(max_length=10000),
        ),
    ]