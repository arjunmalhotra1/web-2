import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import './App.css'

function App() {

  function focusOnInput() {
    document.getElementById("name").focus()
  }

  return <div>
    Sign up
    <input id="name" type={"text"}></input>
    <input type={"text"}></input>
    <button onClick={focusOnInput}> submit</button>
    </div>
}

export default App
