import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import './App.css'

function App() {

  return <div>
    <BrowserRouter>
    <Link to="/">Allen</Link> | 
    <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
    <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <Routes>
        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
        <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
    </div>
}

function Landing() {
  return <div>
    Welcome to Allen
  </div>
}

function Class11Program() {
  return <div>
    NEET program for Class 11th
  </div>
}

function Class12Program() {
  const navigate = useNavigate()

  function redirectUser(){
    navigate("/")
  }

  return <div>
    NEET program for Class 12th
    <button onClick={redirectUser}> Go back to Landing page</button>
  </div>
}

export default App
