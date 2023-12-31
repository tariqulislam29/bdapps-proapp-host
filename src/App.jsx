import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login></Login> */}
      {/* <RegistrationForm></RegistrationForm> */}
      <HomePage></HomePage>
    </>
  )
}

export default App
