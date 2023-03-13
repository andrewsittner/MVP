import React, {useState} from 'react'
import './Css/App.css'
import Login from './Login'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx'
import { Route, Routes } from "react-router-dom"
import '../Assets/KarmaFuture.ttf'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './particles-config'

function App() {

  const [currentUserID, setCurrentUserID] = useState('')
  const setUser = (id) => {
    setCurrentUserID(id)
  }
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="webPage">
    

    <NavBar currentUserID={currentUserID} />
      <div className='App'>
      <Particles id="particles-here" init={particlesInit} options={particlesConfig} />
        <Routes>
          <Route path="/login"  element={<Login setUser={setCurrentUserID} />} />
          <Route path="/" element={<Home currentUserID={currentUserID} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
