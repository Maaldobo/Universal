import { useState } from "react"

export default function Contador() {

  const [count, setCount] = useState(0)

  return (

    <div className="card">
      <h1>
        CONTADOR: 
      </h1>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        incremento
      </button>
      <button onClick={() => setCount((count) => count - 1)}>
        decremento
      </button>

    </div>


  )
}