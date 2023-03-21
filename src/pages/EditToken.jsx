import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
 
export default function EditToken() {
  const history = useNavigate();
  const { id } = useParams();
const [saveToken, setSaveToken] = useState({token: '', balance: ''});

useEffect (() => {
  const savedData = localStorage.getItem('saveTokens') || '[]';
  const tokens = JSON.parse(savedData);
  // console.log(tokens);
  const currToken = tokens.find(token => token.id === id);

  if(currToken) {
    setSaveToken(); 
  }
}, [id]);

const handleChange = ({ target }) => {
  const { name, value } = target;
  setSaveToken(prevState => ({
    ...prevState,
    [name]: value,
  }))    
};

const handleSaveTokens = () => {
  const savedData = localStorage.getItem('saveTokens' || '[]');
  const tokens = JSON.parse(savedData);
  console.log(tokens);
  // const updateTkns = tokens.map((token) => {
    // if(token.id === id ) {
      // return saveToken;
    // }
    // return updateTkns;
  // })

    localStorage.setItem('saveTokens', JSON.stringify(updateTkns))
};


  const backClick = () => {
    history('/')
  };

  const buttonRemove = ()  => {
  const removeToken = localStorage.getItem('saveTokens') || '[]';
  const tokens = JSON.parse(removeToken);
  const updateTkns =  tokens.filter((token) => token.id !== id);
  console.log(updateTkns);
    localStorage.setItem('saveTokens', JSON.stringify(updateTkns))
    console.log(updateTkns);
  };



  return(
    <div>
      <Header />
    <button 
    onClick={backClick}
    >
    Back
    </button>
    <form>
      <label htmlFor="token">Token</label>
        <input 
        type="text" 
        id="token" 
        name="token"
        value={saveToken.token}
        onChange={handleChange}
        />
      <label htmlFor="balance">Balance</label>
        <input 
        type="number"
        id="balance" 
        name="balance"
        value={saveToken.balance}
        onChange={handleChange}
        />
        <button
        type='button'
        onClick={handleSaveTokens}
        >
        Save
        </button>
        <button 
        type='button'>
        Remove
        </button>
    </form>
    </div>
  );
};