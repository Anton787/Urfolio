from flask import Blueprint, render_template

portfolio_bp = Blueprint('portfolio', __name__)

@portfolio_bp.route('/<string:title>')
def portfolio_card(title):
    item = {
        'image_url': f'images/preview-{ title }.jpg',
        'title': f'Project { title }',
        'description': f'Description of project { title }'
    }
    return render_template('projects/project.html', item=item, portfolio_name=item['title'])