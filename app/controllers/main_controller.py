from flask import Blueprint, render_template

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def home():
    portfolio_items = [
        {
            'url': 'web-development',
            'image_url': 'portfolio/preview-web-development.jpg',
            'title': 'Приложение карты вузка',
            'description': 'Это портфолио веб-разработчика с 1 курса'
        },
        {
            'url': 'web-design',
            'image_url': 'portfolio/preview-web-design.jpg',
            'title': 'Дизайн приложения карт вуза',
            'description': 'Это портфолио веб-дизайнера со 2 курса'
        }
    ]
    return render_template('homePage.html', portfolio_items=portfolio_items)