# Generated by Django 4.1.2 on 2022-10-24 23:52

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("base", "0003_order_shippingaddress_reviews_orderitem"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Reviews",
            new_name="Review",
        ),
    ]
