import { useState } from 'react'
import './App.css'
import RegistrationForm from './Pages/RegistrationForm/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login></Login> */}
      <RegistrationForm></RegistrationForm>
    </>
  )
}

export default App
