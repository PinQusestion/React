import { useState } from 'react';
import './App.css'


function App() {
  const lightTheme = () => {
    console.log("Light");
  }
  const darkTheme = () => {
    console.log("Dark");
  }
  return (
    <>
      <h1 className='bg-green-400'>Theme Changer</h1>
    </>
  )
}

export default App
