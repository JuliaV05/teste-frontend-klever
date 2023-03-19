import React from "react";
import logo from '../assets/logo.svg'
import shootingStar from '../assets/shooting-star.svg'

export default function Header() {
  return (
    <div className="w-screen bg-red-400 px-4 py-5 flex justify-content align-center">
        <img src={logo} alt="Logo da Klever" className="h-10"/>
       <div>
       <img src={shootingStar} alt="Ícone estrela" className="h-10" />
       <h1>Wish Wallet</h1>
       </div>
    </div>
  )
}
