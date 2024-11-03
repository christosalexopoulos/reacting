from flask import Flask, request, jsonify
from flask_cors import CORS
import openai  # or your preferred chatbot library

app = Flask(__name__)
CORS(app)  # This allows your React app to communicate with the Flask server

# Configure OpenAI (if using)
openai.api_key = 'your-api-key'

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')
    
    try:
        # Example using OpenAI
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": user_message}
            ]
        )
        bot_response = response.choices[0].message.content
        
        return jsonify({"response": bot_response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000) 