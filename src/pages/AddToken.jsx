import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'

export default function AddToken() {
const history = useNavigate();
const [saveTokens, setSaveTokens] = useState([]);
const [save, setSave] = useState({token: '', balance: ''});

useEffect (() => {
  const savedData = localStorage.getItem('saveTokens');
  if(savedData) {
  setSaveTokens(JSON.parse(savedData))
  }
}, []);

  function backClick() {
    history('/')
  };


const handleChange = ({ target }) => {
  const { name, value } = target;
  setSave(prevState => ({
    ...prevState,
    [name]: value,
  }))    
};

const handleButton = (event) => {
  event.preventDefault();
    if(save.token.length === 0 || save.balance.length === 0 ) {
    alert('Inputs cannot be empty');
  } else {
    const updateTkns = [...saveTokens, save]
    setSaveTokens(updateTkns)
    console.log(updateTkns);
    localStorage.setItem('saveTokens', JSON.stringify(updateTkns));
  };
};

  return (
    <div>
      <Header />
    <button onClick={backClick}>Back</button>

    <form>
      <label htmlFor="token">Token</label>
        <input 
        type="text" 
        id="token" 
        name="token"
        value={save.token}
        onChange={handleChange}
        />
      <label htmlFor="balance">Balance</label>
        <input 
        type="number"
        id="balance" 
        name="balance"
        value={save.balance}
        onChange={handleChange}
        />
        <button
        type='button'
        onClick={handleButton}
        >Save</button>
    </form>
    </div>
  )
}

