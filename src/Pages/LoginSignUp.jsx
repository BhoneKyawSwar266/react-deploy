import React, { useState } from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {

  const [state , setstate] = useState("Login")
  const [formData , setformData] = useState({
    password: "",
    email: "",
    username : ""
  })

  const chageHandler = (e) => {
    setformData({...formData , [e.target.name] : e.target.value })
  }

  const login = async() => {
    console.log("Login" , formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method : "POST",
      headers : {
        Accept : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(formData),
    })
    .then((res)=> res.json())
    .then((data)=> responseData = data)
    if(responseData.success){
      localStorage.setItem("auth-token" , responseData.token ) 
      window.location.replace("/")
    }else{
      alert(responseData.errors)
    }
  }


  const signup = async() => {
    console.log("sing up" , formData)
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method : "POST",
      headers : {
        Accept : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(formData),
    })
    .then((res)=> res.json())
    .then((data)=> responseData = data)
    if(responseData.success){
      localStorage.setItem("auth-token" , responseData.token ) 
      window.location.replace("/")
    }else{
      alert(responseData.errors)
    }

      
  }

  return (
    <div className='loginsingup'>
      <div className='loginsingup-container'>
        <h1>{state}</h1>
        <div className="loginsinup-fields">
          {state === "Sing Up" ?
          <input type="text" placeholder='Your Name' name='username' value={formData.username} onChange={chageHandler}/>: <></> }
          <input type="email" placeholder='Email Address' name='email' value={formData.email} onChange={chageHandler}/>
          <input type="password" placeholder='Password'  name='password' value={formData.password} onChange={chageHandler}/>
        </div>
        <button onClick={()=> {state ==="Login" ? login() : signup()} }> Continue</button>
        {state === "Sing Up" ?
         <p className='loginsignup-login'>Already have an account? <span onClick={()=> {setstate("Login")}}>Login here</span></p>
        :<p className='loginsignup-login'>Create an account? <span onClick={()=> {setstate("Sing Up")}}>Click here</span></p>}
     
        
        <div className='loginsignup-agree'>
          <input type="checkbox" name="" id=""/>
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
