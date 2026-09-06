from flask import Flask, jsonify

app = Flask(__my-fullstack-ap__)

@app.route("/")
def home():
    return jsonify({
        "message": "Flask backend is running"
    })

@app.route("/api/hello")
def hello():
    return jsonify({
        "message": "Hello from Flask API"
    })

if __my-fullstack-ap__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
