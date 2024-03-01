// App.js

import React, { useState } from 'react';
import axios from 'axios';
import styles from './App.module.css';

function App() {
  const [text, setText] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:5000/api/convert', {
        text: text
      });

    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className={styles.App}>
      <h1>Text to Speech</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to convert to speech"
        />
        <br />
        <button className={styles.button} type="submit">Convert to Speech</button>
      </form>
    </div>
  );
}

export default App;
