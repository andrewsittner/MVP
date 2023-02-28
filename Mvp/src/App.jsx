import React from 'react'
import './Css/App.css'
import Login from './Login'
import NavBar from './NavBar.jsx'
import GameList from './GameList.jsx'
function App() {

  return (
    <div className="App">
      {/* <Login/> */}
      <NavBar/>
      <GameList/>
    </div>
  )
}

export default App
