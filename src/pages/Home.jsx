import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'

export default function Home() {
  const history = useNavigate();

  function addClick() {
    history('addToken')
  };

  function editClick() {
    history('editToken')
  };

  return (
    <div className="bg-purple-900 min-h-screen flex items-center justify-center">
      <Header />
    <button onClick={addClick}>Add Token</button>

    <table>
      <thead>
      <button onClick={editClick}>Editar</button>
        <tr>Tokens</tr>
        <tr>Balance</tr>
      </thead>
      <tbody>
        <tr>
          <button onClick={editClick}>Editar</button>
          <td>KLV</td>
          <td>10,250.50</td>
        </tr>
        <tr>
          <td>DVK</td>
          <td>50,250.71</td>
        </tr>
        <tr>
        <button onClick={editClick}>Editar</button>
          <td>KFI</td>
          <td>10</td>
        </tr>
      </tbody>

    </table>
    </div>

  )
}
