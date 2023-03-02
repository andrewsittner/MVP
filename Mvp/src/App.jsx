import React, {useState} from 'react'
import './Css/App.css'
import Login from './Login'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx'
import { Route, Routes } from "react-router-dom"

function App() {

  const [currentUserID, setCurrentUserID] = useState('')
  const setUser = (id) => {
    setCurrentUserID(id)
  }
  return (
    <>
    <NavBar />
      <div className='App'>
        <Routes>
          <Route path="/login"  element={<Login setUser={setUser} />} />
          <Route path="/" element={<Home currentUserID={currentUserID} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
