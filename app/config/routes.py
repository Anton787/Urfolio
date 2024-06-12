import os
from flask import Flask, url_for
from jinja2 import ChoiceLoader, FileSystemLoader
from app.controllers.main_controller import main_bp
from app.controllers.portfolio_controller import portfolio_bp

def create_app():
    app = Flask(__name__, template_folder='templates', static_folder='../assets')
    
    app.jinja_loader = ChoiceLoader([
        FileSystemLoader('app/templates'),
        FileSystemLoader('app/components'),
        FileSystemLoader('app/views'),

    ])

    @app.template_filter('style')
    def style_filter(filename):
        return url_for('static', filename=f'style/{filename}')

    @app.template_filter('image')
    def image_filter(filename):
        return url_for('static', filename=f'images/{filename}')
    
    @app.template_filter('icons')
    def icons_filter(filename):
        return url_for('static', filename=f'images/icons/{filename}')

    @app.template_filter('script')
    def script_filter(filename):
        return url_for('static', filename=f'javascripts/{filename}')
    
    @app.template_filter('font')
    def font_filter(filename):
        return url_for('static', filename=f'font/{filename}')
    
    @app.template_filter('safe_image')
    def safe_image_filter(filename):
        file_path = os.path.join(app.static_folder, 'images', filename)
        if not file_path or not os.path.exists(file_path):
            filename = 'project-photo.png'  # Замена на другой файл, если исходный не найден
        return url_for('static', filename=f'images/{filename}')
    
    # Регистрация маршрутов
    app.register_blueprint(main_bp)
    app.register_blueprint(portfolio_bp, url_prefix='/portfolio')
    # app.register_blueprint(portfolio_bp, url_prefix='/portfolio')

    return app