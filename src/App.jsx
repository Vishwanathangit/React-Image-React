import React from 'react';
import { useState } from 'react'
import Gallery from './Components/Gallery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Gallery />
    </>
  )
}

export default App
