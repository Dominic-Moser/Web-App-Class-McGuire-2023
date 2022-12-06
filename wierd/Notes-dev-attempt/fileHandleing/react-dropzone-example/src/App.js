
import { upload } from '@testing-library/user-event/dist/upload';

import firebase from 'firebase/compat/app'; 

import { getFirestore } from "firebase/firestore";

import { collection, addDoc } from "firebase/firestore"; 

import { getStorage, ref, uploadBytes } from "firebase/storage";

import React, {useCallback} from 'react'

import {useDropzone} from 'react-dropzone'

const config = {
  apiKey: "AIzaSyCTvhk-67qT9bg9C1inKh699ZeNWPysMuc",
  authDomain: "chat-app-11da6.firebaseapp.com",
  projectId: "chat-app-11da6",
  storageBucket: "chat-app-11da6.appspot.com",
  messagingSenderId: "34676840095",
  appId: "1:34676840095:web:090024862788f7eedaf4aa",
  measurementId: "G-NYSVK95V73"
}

const app = firebase.initializeApp(config);


const db = getFirestore(app);


const storage = getStorage();


function App() {

    let fileButton = document.getElementById("fileButton");
  if(fileButton)
  {
      fileButton.addEventListener('change', function(e) {

      let file = e.target.files[0];

      var storageRef = ref(storage, 'images/' + file.name);

      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
    });
  }
  

  return(
    <>

    <input type='file' value={upload} id="fileButton" multiple="true" />
    <button onClick={uploadData}>
      TEst
    </button>
    </>
  );
}
export default App;


async function uploadData()
{
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


