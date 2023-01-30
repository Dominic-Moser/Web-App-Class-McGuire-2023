import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthState, useSignInWithGoogle, useSignInWithGithub, SignOutHook, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import googleFav from './Images/brand-google.svg'
import gitHubFav from './Images/brand-github.svg'
import metaFav from './Images/brand-meta.svg'
import appleFav from './Images/brand-apple.svg'
import userCircle from './Images/user-circle.svg'
import arrowRight from './Images/arrow-right.svg'

import { useRef, useState } from 'react';
import firebase from 'firebase/compat/app'; 
     import 'firebase/compat/firestore';
     import 'firebase/compat/auth';


let userName = "thisisnotsupposedtobehere";
let password = "thisisnotsupposedtobehere";
let repeatPassword = "thisisnotsupposedtobehere";
let name = "thisisnotsupposedtobehere";
let email = "thisisnotsupposedtobehere";


function SignInGoogle() 
{
  const useSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider);
  }
  return (
    <>
    <img src={googleFav} id="googleTablar" onClick={useSignInWithGoogle} />
    </>
  )
}

function SignInGitHub()
{
  const useSignInWithGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <>
    <img src={gitHubFav} id="githubTablar" onClick={useSignInWithGithub} />
    </>
  )
}
function SignUpGeneric()
{
  const signup = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      console.log("Sucsess");
    })
    .catch(error => console.log(error))
  }
    return (
      <>
        <div id="create">
        <img src={arrowRight} id="arrowRight" onClick={signup} />
        </div>
      </>
    )
  
}
function newPasswordChecker()
{
  var emailInput = document.getElementById("placeHolderUserName");
  var password1 = document.getElementById("placeHolderPassword");
  var password2 = document.getElementById("placeHolderPasswordRepeat");
  var passCheck = document.getElementById("matchFalse");
  var val1 = password1.value;
  var val2 = password2.value;

   if(val1 === val2 && val1 != "")
   {
    passCheck.style.display = "none";
    SignUpGeneric();
   }
   else
   {
      password1.value = "";
      password2.value = "";
      passCheck.style.display = "block";
   }
}






const firebaseConfig = {
  apiKey: "AIzaSyCTvhk-67qT9bg9C1inKh699ZeNWPysMuc",
  authDomain: "chat-app-11da6.firebaseapp.com",
  projectId: "chat-app-11da6",
  storageBucket: "chat-app-11da6.appspot.com",
  messagingSenderId: "34676840095",
  appId: "1:34676840095:web:090024862788f7eedaf4aa",
  measurementId: "G-NYSVK95V73"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();


const firestore = firebase.firestore();




function CreateAccountPage()
{
  const handleChangePassword = event => {
    password = document.getElementById('placeHolderPassword').value;
    console.log('your password name value is:', password);

  };

  const handleChangeName = event => {
    email = document.getElementById('placeHolderUserName').value;
    console.log('your email value is:', email);
  };
  const handleChangeUserName = event => {
    userName = document.getElementById('placeHolderUserName').value;
    console.log('user name value is:', userName);
  };


  return(
      <>
      <title>Login Card</title>
      <div className="login-card">
        <div id="loginHeader"></div>
        <div id="profilePic">
          <img src={userCircle} id="userPic" />
        </div>
        <div id="createAccount">
          Create Account
        </div>
        <div id="userNameInput">
          Email
          <br />
          <input 
          type="text" 
          placeholder="E-Mail" 
          id="placeHolderUserName"
          onChange={handleChangeName} />
        </div>
        <div id="passwordInputs">
          Password
          <input
            onChange={handleChangePassword}
            className="passwordBox"
            type="text"
            placeholder="Password"
            id="placeHolderPassword"

          />
          <input
            className="passwordBox"
            type="text"
            placeholder="Repeat Password"
            id="placeHolderPasswordRepeat"
          />
        </div> 
        <div id = "option">
            OR...
        </div>
          <div id="loginalternatives">
            <SignInGoogle />
            <SignInGitHub />
          </div>
          <SignUpGeneric />   

        <div id="matchFalse">
          Sorry, Your Passwords Did Not Match - Please Try Again
        </div>

      </div>
    </>
  )
}

export default CreateAccountPage;