from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    # return HttpResponse("Hello, world. You're at the polls index.")

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html')