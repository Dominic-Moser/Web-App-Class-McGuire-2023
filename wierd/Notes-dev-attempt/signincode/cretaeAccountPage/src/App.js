import React from 'react';
import './App.css';

import { useRef, useState } from 'react';
import firebase from 'firebase/compat/app'; 
     import 'firebase/compat/firestore';
     import 'firebase/compat/auth';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthState, useSignInWithGoogle, useSignInWithGithub, SignOutHook, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import googleFav from './Images/brand-google.svg'
import gitHubFav from './Images/brand-github.svg'
import metaFav from './Images/brand-meta.svg'
import appleFav from './Images/brand-apple.svg'
import userCircle from './Images/user-circle.svg'
import SignInPage from './SignInPage.js'

let userName = "thisisnotsupposedtobehere";
let password = "thisisnotsupposedtobehere";
let repeatPassword = "thisisnotsupposedtobehere";
let name = "thisisnotsupposedtobehere";
let email = "thisisnotsupposedtobehere";

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

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>

      </header>
      <section>
        {/*if 'user' is true go to chatroom else show the SignIn options the null just makes it so that two chtrooms are not displayes.*/}
        {user ? <ChatRoom /> : <SignInPage />}
        
      </section>
    </div>
  );
}

//function declaers another pointer function (the = () => ) that is linked to a button...
//that onclick triggers said function.
//the function itself requests a new authorization from firebase, using google as a medium.
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
    SignUpGeneric();
   }
   else
   {
      password1.value = "";
      password2.value = "";
      passCheck.style.display = "block";
   }
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
        <div id="create" onClick={newPasswordChecker}>
          Continue
        </div>
      </>
    )
  
}

function ChatRoom()
{
  return(
    <>
      <p1>You are sig1111111111111111ned in!</p1>

      <SignOut />
    </>
  );
}

function SignOut()
{
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}


export default App;