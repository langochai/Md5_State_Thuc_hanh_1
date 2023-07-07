import { useState } from 'react'
import "./App.css"
function App() {
  const [count, setCount] = useState(0)
    function increase(){
      setCount((count)=>{
          return  count += 1
      })
    }
    function decrease(){
        setCount((count)=>{
            return  count -= 1
        })
    }
  return (
    <>
        <div style={{ textAlign: "center", padding: 30 }}>
            <button onClick={decrease}>Decrease</button>
            <span style={{ padding: 10 }}>{count}</span>
            <button onClick={increase}>Increase</button>
        </div>
    </>
  )
}

export default App
