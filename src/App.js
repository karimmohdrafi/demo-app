import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function update() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <h1>Counter = {count}</h1>
      <button onClick={update}>Change</button>
    </>
  );
}

export default App;