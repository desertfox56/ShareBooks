# Generated by Django 4.2.1 on 2024-05-11 22:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0007_alter_author_patronymic'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to='avatars'),
        ),
    ]
