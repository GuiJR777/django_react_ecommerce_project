# Generated by Django 4.1.2 on 2022-10-24 23:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0004_rename_reviews_review"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="shippingaddress",
            options={"verbose_name_plural": "addresses"},
        ),
    ]