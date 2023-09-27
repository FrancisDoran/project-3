from flask import Flask, jsonify
from sqlalchemy import create_engine
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 
# Database connection
engine = create_engine('../api/sqlite:///lobbyist.db')

@app.route('/')
def index():
    # Fetch data from the database
    data = pd.read_sql("SELECT * FROM contact_table LIMIT 10", engine)
    
    # Return data as an HTML table
    return data.to_html()

@app.route('/api/data', methods=['GET'])
def get_data():
    # Fetch all data from the database
    data = pd.read_sql("SELECT * FROM contact_table", engine)

    # Convert dataframe to dictionary, then to JSON using jsonify
    return jsonify(data.to_dict(orient='records'))

if __name__ == "__main__":
    app.run(debug=True)
