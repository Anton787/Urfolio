from flask import render_template
from . import main

@main.route('/')
def home():
    portfolio_items = [
        {
            'image_url': 'static/images/image1.jpg',
            'title': 'Project 1',
            'description': 'Description of project 1'
        },
        {
            'image_url': 'static/images/image2.png',
            'title': 'Project 2',
            'description': 'Description of project 2'
        }
    ]
    return render_template('home.html', portfolio_items=portfolio_items)