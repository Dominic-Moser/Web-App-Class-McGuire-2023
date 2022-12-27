import React from 'react';
import { initializeApp } from "firebase/app";
import { 
  getDocs, 
  getFirestore, 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  setDoc,
  getDoc3

  } from "firebase/firestore";

  import { useEffect, useState } from 'react';


  import error from "./images/404.png"

// this is simple referance for which user the program is refering to
let userUID = "userUID1";

const config = {
  apiKey: "AIzaSyCTvnpm hk-67qT9bg9C1inKh699ZeNWPysMuc",
  authDomain: "chat-app-11da6.firebaseapp.com",
  projectId: "chat-app-11da6",
  storageBucket: "chat-app-11da6.appspot.com",
  messagingSenderId: "34676840095",
  appId: "1:34676840095:web:090024862788f7eedaf4aa",
  measurementId: "G-NYSVK95V73"
}

const app = initializeApp(config);

const db = getFirestore(app);

function App() {
  return( 
  
    <div id='mainContainer' className='mainContent'>
      <img src='https://firebasestorage.googleapis.com/v0/b/chat-app-11da6.appspot.com/o/images%2Flgvu.jpg?alt=media&token=effd9a74-74a7-454d-9244-581f076ac098' id="test" class="testClass" />
    </div>
  
);
}

export default App;

let src = "undefined";
// async function ListImageData()
// {
//   const querySnapshot = await getDocs(collection(db, "users", userUID, "images"));
//   querySnapshot.forEach((doc) => {
//     console.log( doc.id, doc.data().name, " => ", doc.data().image)
//     if(doc.data().name === "target image")
//     {
//       console.log("you got here", doc.data().name);
//       src = doc.data().image;  
//       return(
//         <>
//           <img src={src} />
//         </>
//       );
//     }
//   });
// }





