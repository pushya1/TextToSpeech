from flask import Flask, request
from flask_cors import CORS,cross_origin
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
import pyttsx3


@app.route('/api/convert', methods=['POST'])
def convert_text_to_speech():
    data = request.json
    text = data['text']
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()
    return "ok";



if __name__ == '__main__':
    app.run(debug=True)
