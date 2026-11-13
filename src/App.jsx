import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
function App() {

  return (
    <>
      <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/second" element={<SecondPage />} />
        </Routes>
    </>
  )
}

export default App
