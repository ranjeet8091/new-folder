import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)} name="increment">
        Increment
      </button>
  
      <button onClick={() => setCount(count - 1)} name="decrement">
        Decrement
      </button>
      <div>Count:{count}</div>
    </>
  );
}

export default App;