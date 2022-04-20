import { useState } from 'react';
import '../styles/App.css';

function App() {
  let [text, setText] = useState('');

  const handleText = (event) => {
    let value = event.target.value;

    const remp = value.replace(/[aeou]/gi, 'i');
    setText(remp);
  };
  return (
    <div className="App">
      <form action="">
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          onChange={handleText}
        ></textarea>
      </form>
      <p>{text}</p>
    </div>
  );
}

export default App;
