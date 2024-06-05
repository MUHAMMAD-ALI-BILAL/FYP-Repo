from flask import Flask, request, jsonify
import jwt
from functools import wraps
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
import joblib
import pandas as pd
from flask_cors import CORS
import logging
import os

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'lucky321a')  # Set your secret key here
app.config['MONGO_URI'] = os.environ.get('MONGO_URI', 'mongodb+srv://luqmanmughal734:fLash321a@cluster0.q1vskmh.mongodb.net/fyp')  # Set your MongoDB URI here

# Initialize PyMongo
mongo = PyMongo(app)
CORS(app, origins='*')

logging.basicConfig(level=logging.DEBUG)

# Load the trained model and vectorizer from pickle files
clf = joblib.load('decision_tree_model.pkl')
vectorizer = joblib.load('count_vectorizer.pkl')

# Load Data
data = pd.read_csv('dataset(1) (6).csv')

class User:
    def __init__(self, name, email, password_hash):
        self.name = name
        self.email = email
        self.password_hash = password_hash

    @staticmethod
    def get_by_email(email):
        user_data = mongo.db.users.find_one({"email": email})
        if user_data:
            return User(user_data['name'], user_data['email'], user_data['password_hash'])
        return None

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Token is missing'}), 401

        # Strip the 'Bearer ' part if it is included in the token
        if token.startswith("Bearer "):
            token = token.split(" ")[1]

        try:
            decoded_token = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            logging.debug(f"Decoded token: {decoded_token}")
            request.email = decoded_token['email']
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token has expired'}), 401
        except jwt.InvalidTokenError as e:
            logging.error(f"Token decoding error: {e}")
            return jsonify({'error': 'Invalid token'}), 401

        return f(*args, **kwargs)

    return decorated

@app.route('/signup', methods=['POST'])
def signup():
    try:
        content = request.json
        if not content or 'name' not in content or 'email' not in content or 'password' not in content or 'confirm_password' not in content:
            return jsonify({'error': 'Invalid input'}), 400

        name = content['name']
        email = content['email']
        password = content['password']
        confirm_password = content['confirm_password']

        if password != confirm_password:
            return jsonify({'error': 'Passwords do not match'}), 400

        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

        if User.get_by_email(email):
            return jsonify({'error': 'Email already exists'}), 400

        mongo.db.users.insert_one({'name': name, 'email': email, 'password_hash': hashed_password})
        return jsonify({'message': 'User created successfully'}), 201
    except Exception as e:
        logging.error(f"Error during signup: {e}")
        return jsonify({'error': 'User creation failed'}), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        content = request.json
        if not content or 'email' not in content or 'password' not in content:
            return jsonify({'error': 'Invalid input'}), 400

        email = content['email']
        password = content['password']

        user = User.get_by_email(email)
        if user and check_password_hash(user.password_hash, password):
            token = jwt.encode({'email': user.email}, app.config['SECRET_KEY'], algorithm='HS256')
            return jsonify({'token': token}), 200
        else:
            return jsonify({'error': 'Invalid email or password'}), 401
    except Exception as e:
        logging.error(f"Error during login: {e}")
        return jsonify({'error': 'Login failed'}), 500

@app.route('/predict', methods=['POST'])

def predict():
    try:
        content = request.json
        required_fields = ['case_description', 'motive', 'eyewitnesses', 'evidence']

        if not all(field in content for field in required_fields):
            return jsonify({'error': 'Missing required fields'}), 400

        new_case_description = content['case_description']
        new_motive = content['motive']
        new_eyewitnesses = content['eyewitnesses']
        new_evidence = content['evidence']

        yes_no_map = {"yes": 1, "no": 0}
        new_motive = new_motive.lower()
        new_eyewitnesses = new_eyewitnesses.lower()
        new_evidence = new_evidence.lower()

        new_input = {'motive': yes_no_map[new_motive],
                     'eyewitnesses': yes_no_map[new_eyewitnesses],
                     'evidence': yes_no_map[new_evidence]}

        new_input_df = pd.DataFrame([new_input])
        new_input_desc = vectorizer.transform([new_case_description])
        new_input_df = pd.concat([new_input_df, pd.DataFrame(new_input_desc.toarray())], axis=1)
        new_input_df.columns = new_input_df.columns.astype(str)
        prediction = clf.predict(new_input_df)[0]
        section_description = data.loc[data['judge_applied_sections'] == prediction, 'section_description'].iloc[0]

        return jsonify({'predicted_section': prediction, 'section_description': section_description}), 200

    except Exception as e:
        logging.error(f"Error in /predict endpoint: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True)
