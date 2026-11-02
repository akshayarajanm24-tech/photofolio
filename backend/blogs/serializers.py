
from rest_framework import serializers
from .models import Blog


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = [
            'id',
            'heading',
            'slug',
            'description',
            'image',
            'meta_title',
            'meta_description',
            'created_at',
            'updated_at',
        ]
