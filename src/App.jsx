import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);


     return <div>
          <h1>
           {count}
          </h1>
          <div>
              <button onClick={()=>setCount(prevState => prevState + 1)}>+</button>
            <button onClick={()=>setCount(prevState => prevState - 1)}>-</button>
          </div>
     </div>

}

export default App
