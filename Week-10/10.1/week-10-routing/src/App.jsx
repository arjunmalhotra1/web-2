import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet  } from "react-router-dom"
import './App.css'

function App() {
  const inputRef = useRef();
  

  function focusOnInput() {
    // document.getElementById("name").focus()
    inputRef.current.focus();
  }

  return <div>
    Sign up
    <input ref={inputRef} id="name" type={"text"}></input>
    <input type={"text"}></input>
    <button onClick={focusOnInput}> submit</button>
    </div>
}

export default App
