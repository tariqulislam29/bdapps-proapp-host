import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AllContent from './Pages/AllContent/AllContent'
import List from './Pages/Application/List'
import New from './Pages/Application/New'
import BatchContent from './Pages/CreateContent/BatchContent'
import CheckLength from './Pages/CreateContent/CheckLength'
import NewContent from './Pages/CreateContent/NewContent'
import ErrorList from './Pages/ErrorList/ErrorList'
import HomePage from './Pages/HomePage/HomePage'
import Login from './Pages/Login/Login'
import ChangePassword from './Pages/Profile/ChangePassword'
import MyProfile from './Pages/Profile/MyProfile'
import UpdateProfile from './Pages/Profile/UpdateProfile'
import RegistrationForm from './Pages/RegistrationForm/RegistrationForm'

function App() {
 

 
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registationform" element={<RegistrationForm />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/checkLength" element={<CheckLength />} />
      <Route path="/application/list" element={<List />} />
      <Route path="/application/new" element={<New />} />
      <Route path="/myProfile" element={<MyProfile />} />
      <Route path="/updateProfile" element={<UpdateProfile />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/errorList" element={<ErrorList />} />
      <Route path="/allContent" element={<AllContent />} />
      <Route path="/batchContent" element={<BatchContent />} />
      <Route path="/newContent" element={<NewContent />} />
      </Routes>
    </BrowserRouter>
     
    
    </>
  )
}

export default App
