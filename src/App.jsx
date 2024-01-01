import { useState } from 'react'
import './App.css'
import CheckLength from './Pages/CreateContent/CheckLength'
import Navbar from './Pages/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      {/* <Login></Login> */}
      {/* <RegistrationForm></RegistrationForm> */}
      {/* <HomePage></HomePage> */}
      <CheckLength></CheckLength>
    </>
  )
}

export default App
