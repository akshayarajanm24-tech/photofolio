
from django.db import models


class Blog(models.Model):
    heading = models.CharField(max_length=200)
    slug = models.SlugField(max_length=250, unique=True, null=True, blank=True)
    description = models.TextField()
    image = models.ImageField(upload_to='blogs/')

    meta_title = models.CharField(max_length=200, blank=True)
    meta_description = models.CharField(max_length=300, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.heading
