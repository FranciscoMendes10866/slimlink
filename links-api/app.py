from flask import Flask
from flask_cors import CORS
from services.Create import create

app = Flask(__name__)
CORS(app)

app.register_blueprint(create)
