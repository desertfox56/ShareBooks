# Generated by Django 4.2.1 on 2024-05-07 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0003_alter_book_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='age_restriction',
            field=models.CharField(blank=True, choices=[('0', '0+'), ('6+', '6+'), ('12+', '12+'), ('16+', '16+'), ('18+', '18+')], max_length=4, null=True),
        ),
    ]
