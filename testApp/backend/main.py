from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
	return "Hello from backend!"

credentials = {
	# username: password
	"chris": "pass",
	"test1": "test1",
	"test2": "test2",
}

@app.route('/login', methods=['POST'])
def handleLogin():
	return "Login Successful"
	

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8080)