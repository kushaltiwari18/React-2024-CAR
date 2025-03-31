import { useState } from 'react'

import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL)
  console.log(import.meta.env.VITE_APPWRITE_URL);
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>A Blog App With Apprite</h1>
    </>
  )
}

export default App
