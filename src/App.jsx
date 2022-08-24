import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'

export default function App() {
  let [count, setCount] = useState(0);
  function Increase() {
    setCount(count++)
  }
  function Decrease() {
    setCount(count--)
  }
  return (
    <main>
      <div className="btn-group d-flex flex-wrap">
        <button onClick={Increase} className="btn btn-primary me-5">Increase</button>
        <button onClick={Decrease} className="btn btn-primary">Decrease</button>
      </div>
      <h1>{count}</h1>
    </main>
  )
}
