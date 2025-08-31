# This file operates a simple Flask-based PC-side web server to receive data from the ESP32.
# It listens for incoming POST requests containing JSON data and saves the data to a CSV file.
# The JSON data includes:
# 1) double: air temperature
# 2) int: relay state (0 or 1)
# 3) time??: timestamp 

from flask import Flask, request
import csv

app = Flask(__name__)

@app.route('/data', methods=['POST'])
def receive_data():
    data = request.get_json()
    with open("log.csv", "a") as f:
        f.write(f"{data['value']}\n")
    return "OK"

app.run(host="0.0.0.0", port=5000)
