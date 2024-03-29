import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
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
 const [authenticated, setAuthenticated] = useState(false);

 useEffect(() => {
   // Check if the user is authenticated based on the presence of a token in cookies
   const token = Cookies.get("data"); // Replace 'your_token_key' with the actual name of your token key
   setAuthenticated(!!token);
 }, []);
    

  return (
    <>
      <BrowserRouter>
        {authenticated ? (
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/checkLength" element={<CheckLength />} />
            <Route path="/application/list" element={<List />} />
            <Route path="/application/new" element={<New />} />
            <Route path="/myProfile/:userId" element={<MyProfile />} />
            <Route path="/updateProfile/:userId" element={<UpdateProfile />} />
            <Route
              path="/changePassword/:userId"
              element={<ChangePassword />}
            />
            <Route path="/errorList" element={<ErrorList />} />
            <Route path="/allContent" element={<AllContent />} />
            <Route path="/batchContent" element={<BatchContent />} />
            <Route path="/newContent" element={<NewContent />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/registationform" element={<RegistrationForm />} />

            <Route path="/*"  element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App
