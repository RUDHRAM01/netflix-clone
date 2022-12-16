import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './frontend/Home';
import SignIn from './frontend/SignIn';
import SignUp from './frontend/SignUp';
import Copyright from './image/copyright.gif'
export default function App() {
  const [copyr, setCopyR] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCopyR(false);
    },4000)
  })
  return (
    <>
      {copyr ? (
        <div className='copyright'>
           <img src={Copyright} alt="rudhram" />
       </div>
      ): (
        <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/SignUp' component={SignUp}/>
      </div>  
      )}
    </>
  );
}