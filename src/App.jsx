import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);


     return <div>
          <h1>
              {count>10 ? "ASDASD" : "HAHSDUIASDHASID"} : {count}
     </h1>
          <div>
              <button onClick={()=>setCount(prevState => prevState + 1)}>+</button>
              <button onClick={()=>setCount(prevState => prevState - 1)}>-</button>
              <button onClick={()=>setCount(0)}>Reset</button>
          </div>
     </div>

}

export default App
