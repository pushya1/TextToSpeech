import pyttsx3

engine = pyttsx3.init()

# Customizing speech properties
engine.setProperty('rate', 100)  # Speed of speech (words per minute)
engine.setProperty('volume', 1)  # Volume (0.0 to 1.0)

text = "Hello, how are you?"
engine.say(text)
engine.runAndWait()