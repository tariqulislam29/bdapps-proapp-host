import { useState } from 'react'
import './App.css'
import CheckLength from './Pages/CreateContent/CheckLength'
import Navbar from './Pages/Navbar/Navbar'
import List from './Pages/Application/List'
import New from './Pages/Application/New'
import RegistrationForm from './Pages/RegistrationForm/RegistrationForm'
import MyProfile from './Pages/Profile/MyProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      {/* <Login></Login> */}
      {/* <RegistrationForm></RegistrationForm> */}
      {/* <HomePage></HomePage> */}
      {/* <CheckLength></CheckLength> */}
      {/* <List></List> */}
      {/* <New></New> */}
      <MyProfile></MyProfile>
    </>
  )
}

export default App
