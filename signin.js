//import React, { useState, useEffect } from 'react';
//import db from './db';

function login() {
//  const [usernames, setUsernames] = useState([]);
//  const [usename, setUsername] = useState('');

//  useEffect(() => {
//    const unsubscribe = db
//      .collection('usernames')
//      .onSnapshot((snapshot) => onSnapShotFunction(snapshot, setUsernames));
//    return () => unsubscribe();
//  }, []);

//  function handleInputChange(event) {
//    setUsername(event.target.value);
//  }

//  function addUsernames() {
//    if (usernames) {
//      const data = { name: username, completed: false };
//      db.collection('Usernames').add(data);
//      setUsername('');
//    }
//  }

  return (
    <div id="user-login">
      <div class="container">
        <br /><br />
        <h1 class="center-align">HEART FAILURE SYSTEM</h1>
        <h2 class="center-align"><img src="logo_login.jpg" height="300" /></h2>
        <h3 class="text">User Login</h3>
      
        <form class = 'container'>
        <div class="box">
          <input class='textbox' type='text' v-model='username' placeholder='Username'></input>   
          <br /> 
          <input class='textbox' type='password' v-model='password' placeholder='Password'></input>
        </div>
        
        <div class="login">
          <button class="btn-submit" type="submit">Login</button>
        </div>
        </form>
      </div>
    </div>
  );  
}
    

  export default login;