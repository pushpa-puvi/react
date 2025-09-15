import { useState } from 'react'
import './App.css'

function App() {
  const [count, seCount] = useState(0);

  const handleIncrement =() => seCount (count + 1);
  const handleDecrement = () => {
    if (count > 0) {
    seCount (count - 1);
  }
}
  const handleReset = () => seCount (0);

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App
