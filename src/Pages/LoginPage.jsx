import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios  from 'axios';
export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

 

  function onEmailChange(emailInput) {
    setEmail(emailInput);

    if (emailInput === '' || emailInput === undefined) {
      setEmailError('Required');
      return false;
    } else if (
      !String(emailInput)
        .toLowerCase()
        .match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/g)
    ) {
      setEmailError('Must be a valid email');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  }

  function onPasswordChange(passwordInput) {
    setPassword(passwordInput);

    if (passwordInput === '' || password === undefined) {
      setPasswordError('Required');
      return false;
    } else if (passwordInput.length < 8) {
      setPasswordError('At least 8 characters');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  }

  const navigatge = useNavigate();
  function onSubmit() {
   
    if (onEmailChange(email) && onPasswordChange(password)) {
        
      axios({url:'https://60dff0ba6b689e001788c858.mockapi.io/token'
        ,method:'GET'
      }).then(response => {
            localStorage.setItem('token',response.data.token);
           
            localStorage.setItem('userId',response.data.userId);
            console.log(localStorage.getItem('userId'));
            axios.defaults.headers.common['Authorization'] = response.data.token;
            navigatge('/profile');
                    window.location.reload();
      },[])
        
    }
  }

  return (
    <div>
      <input
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <br />
      {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      <input
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        type="password"
        placeholder="Pasword"
      />
      {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      <br />
      <button className="btn btn-primary"onClick={onSubmit}>Submit</button>
    </div>
  );
}
