import React from 'react'
import './App.css'

import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        俺最高 <LikeButton />
      </header>
    </div>
  )
}

function LikeButton() {
  // const count = 999
  const [count, setCount] = useState(999)
  const handleClick = () => {
    // const [count, setCount] = useState(999)
    setCount(count + 1)
  }

  return (
    <span className="likeButton" onClick={handleClick}>
      {' '}
      ❤️ {count}
    </span>
  )
}
export default App
