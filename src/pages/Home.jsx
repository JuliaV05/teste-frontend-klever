import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react'
import Header from '../components/Header'
// import logo from '../screens/logo.svg'
import AddToken from './AddToken';

export default function Home() {
  const history = useNavigate();

  function handleClick() {
    history('addToken')
  };

  return (
    <div className="bg-purple-900 min-h-screen flex items-center justify-center">
      <Header />
    <button onClick={handleClick}>Add Token</button>
    </div>

  )
}
