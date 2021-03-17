import React, { useContext, useState } from 'react';
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
import { handleGoogleSignIn, initializeLoginFrameWork,handleSignOut } from '../../LoginManager/LoginManager';



function Login() {
  
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(false)
  const [user,setUser] = useState({
    // isSignedIn: false,
    Name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    newUser: false
  })
 initializeLoginFrameWork()
 const [logInUser, setLogInUser] = useContext(UserContext)
 

const handleChange = (event) => {
  let isFieldValid = true;
  if(event.target.name === 'email') {
    isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
  }
  if(event.target.name === 'password') {
    const isPasswordValid = event.target.value.length > 6;
    const hasPasswordContain = /\d{1}/.test(event.target.value)
    isFieldValid = isPasswordValid && hasPasswordContain;
  }
  if(isFieldValid){
    const newUser = {...user}
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
  }
} 
const handleSubmit= (e) => {
  if(newUser && user.email && user.password){
    // console.log(user.email, user.password);
    
  }
  if(!newUser && user.email && user.password){
 
  }
  e.preventDefault();
} 
const googleSignIn = () => {
  handleGoogleSignIn()
  .then(res => {
    setUser(res)
    setLogInUser(res)
    history.replace(from);
    })
} 
const signOut = () => {
  handleSignOut()
  .then(res => {
    setUser(res);
    setLogInUser(res);
  })

}
  return (
    <div style={{textAlign: 'center'}}>
     {  
        user.isSignedIn ? <button onClick = {signOut}>Sign Out</button>
        : <button onClick = {googleSignIn}>Sign In</button>        
     }
      {
        user.isSignedIn && 
        <div>
          <p>Welcome {user.Name}</p>
          <img src={user.photo} alt=''/>
        </div>
      }
      <h1>Our Own Authentication</h1>
      <input type="checkbox" onChange={()=>setNewUser(!newUser) } name="newUser" id=""/>
      <label htmlFor="newUser">SignIn for new user</label>
     <form onSubmit={handleSubmit}>
      {newUser && <input onBlur={handleChange} name="Name" placeholder="Enter Your Name" required type="text"/>}
      <br/>
      <input name='email' onBlur={handleChange} type='email' placeholder='Enter Your Email' required></input>
      <br/>
      <input name='password' onBlur={handleChange} type='password' placeholder="Enter Your password" required></input>
      <br/>
      <button type='submit'>Submit</button>
    </form>
    <p>Name: {user.Name}</p>
    <p>Email: {user.email}</p>
    <p>Password: {user.password}</p>
    <p style={{color: 'red'}}>{user.error}</p>
    {user.success && <p style={{color: 'green'}}>User {newUser?'created':'Logged In'} successfully</p>}
    </div>
  );
}

export default Login;
