from flask import Blueprint

create = Blueprint('create', __name__, url_prefix='/api/links/v1')

@create.route('/create', methods=['POST'])
def index():
     return { 'msg' : 'Hello from the create service 🌈' }
