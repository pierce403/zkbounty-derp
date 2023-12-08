from flask import Flask, send_from_directory, jsonify
import os

#app = Flask(__name__, static_folder='potato' )
app = Flask(__name__)

# Mock data for bounties
bounties = [
    {
        "id": 1,
        "title": "Authentication Module",
        "description": "A module that handles user authentication and security.",
        "amount": 2500
    },
    {
        "id": 2,
        "title": "Data Visualization Tool",
        "description": "A tool for visualizing complex datasets in a user-friendly manner.",
        "amount": 4000
    },
    {
        "id": 3,
        "title": "Payment Gateway Integration",
        "description": "Integrating a secure and efficient payment gateway for transactions.",
        "amount": 6000
    },
    {
        "id": 4,
        "title": "API Rate Limiter",
        "description": "A component to limit the number of API requests from a single user to prevent abuse.",
        "amount": 3500
    },
    {
        "id": 5,
        "title": "Mobile Responsiveness Optimizer",
        "description": "Enhancing the mobile user experience by optimizing responsiveness across devices.",
        "amount": 5000
    }
]

# list the bounties
@app.route('/api/bounties')
def get_bounties():
    return jsonify(bounties)

# serve up the react app
@app.route('/', defaults={'path':'path'})
@app.route('/<path:path>')
def serve(path):
    print("path:   " + path)
    if path != "" and os.path.exists('frontend' + '/' + path):
        print('path exists')
        return send_from_directory('frontend', path)
    else:
        print('path does not exist')
        return send_from_directory('frontend' , 'index.html')

if __name__ == '__main__':
    app.run()
