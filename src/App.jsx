import { useState, useEffect } from 'react'
import Breeds from './components/breeds'
import './App.css'

function App() {
  return (
    <>
      <h1>Lista de razas de perros</h1>
      <Breeds/>
    </>
  )
}

export default App
