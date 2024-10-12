import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return <div>
    <a href="/">Allen</a> | <a href="/neet/online-coaching-class-11">Class 11</a> | <a href="/neet/online-coaching-class-12">Class 12</a>
    <BrowserRouter>
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
  return <div>
    NEET program for Class 12th
  </div>
}

export default App
