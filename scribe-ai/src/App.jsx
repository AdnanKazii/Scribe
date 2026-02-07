import { useState } from "react";

function App(){

  const [count,setCount] = useState(0)

  return (
    <div className="container">
      <title>Scribe</title>
      <h1 classname="title">Scribe AI</h1>
      <p>Upload audio. Get clean text. Simple.</p>

      <button onClick={() => setCount(count + 1)}>
        Press to continue
      </button>
    </div>
  );
}

export default App
