
from django.contrib import admin
from .models import Blog


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('heading', 'slug', 'created_at')
    search_fields = ('heading', 'description', 'slug')
    list_filter = ('created_at',)
    prepopulated_fields = {'slug': ('heading',)}
