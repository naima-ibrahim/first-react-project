import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
function FirstPage() {

  const [message, setMessage] = useState("Ms.Naima");

  const navigate = useNavigate();

  function goToSecondPage() {
    const newMessage = "Mr.Majd";

    setMessage(newMessage);
    navigate('/second', {
      state: {
        message: newMessage
      }
    });
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1>Welcome to the First Page  {message}</h1>

      <button
        className="btn btn-primary mt-3"
        onClick={goToSecondPage}
      >
          Go to Second Page
      </button>
    </div>
  )
}

export default FirstPage
