

function App() {
  var count = 0
  return(
    <>
    <h1>Counter = {count}</h1>
    <button onClick={update}>Change</button>
    </>

  )
  function update(){
    ++count;
    console.log(count);
  }
  
  
}

export default App;
