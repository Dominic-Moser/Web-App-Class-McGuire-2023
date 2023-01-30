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

  import "./App.css";

  import ImageGallery from './ImageGallery';

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

// function App() {
//   return( 
//   // <div id='mainContainer' className='mainContent'>
//   //   {/* <img src={'https://firebasestorage.googleapis.com/v0/b/chat-app-11da6.appspot.com/o/images%2Flgvu.jpg?alt=media&token=effd9a74-74a7-454d-9244-581f076ac098'} width="200px" id="test" class="testClass" /> */}
//   //   <div id='test'>
//   //     this is a test
//   //   </div>
//   // </div>
//   <>
//   <ListImageData />
//   </>
// );
// }



const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const imageUrls = await ListImageData();
      setImages(imageUrls);
    }
   fetchData();
  }, []);

  return( 
    <div class="flex-box bg-slate-500 w-10">
    <ImageGallery images={images} class="inline-block text-center" />
    </div>
  );
};

export default App;


async function ListImageData() {
  const imageUrls = [];
  const imageNames = [];
  const querySnapshot = await getDocs(collection(db, "users", userUID, "images"));;
  querySnapshot.forEach((doc) => {
    imageUrls.push(doc.data().image);
  });
  return imageUrls;
}

// let src = "undefined";
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





