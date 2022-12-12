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

  import error from "./images/404.png"

// this is simple referance for which user the program is refering to
let userUID = "userUID1";



const config = {
  apiKey: "AIzaSyCTvhk-67qT9bg9C1inKh699ZeNWPysMuc",
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
    <>
      <input id='grade' type='text' placeholder='What Grade Are You In?'></input> <br />
      <input id="school" type='text' placeholder='What School Do You Attend?'></input><br />
      <input id='class' type='text' placeholder='Which Classes Are You Looking To Study For?'></input>
      <button onClick={CreateNewUserTempelate}>
        Click Me To Create A New Template
      </button>
      <button onClick={ListImageData}>
        Click Me To Acsess the data from a user
      </button>
      <button onClick={reWriteUserDataUsingInputs}>
        reWrite the user's data
      </button>

      <input type="text" id="tag" name="tag" placeholder="ADDTag"></input>

      <button onClick={addSomeTags}>
        Add Some Tags To An Image
      </button>
      <button onClick={addImageRef}>
        Add A New Image Referance Point
      </button>
      <button onClick={DisplayImageData}>Display Some Images</button>
    </>

  );
}
export default App;


async function CreateNewUserTempelate()
{

    //set user data within the specific doc
      await setDoc(doc(db, "users", userUID), {
        email: "null",
        UID: "null",
        age: 'null',
        globalTag: "null",
        grade: "null",
        school: "null"
      });
        // adds an image reference = set the sample test to the location of the image through the firebase storage
        addImageRef();

}

async function addImageRef()
{
  try {
    const docRef = await addDoc(collection(db, "users/" + userUID + "/images"), {
      image: "Image ref link here",
      name: "My Note",
      tag1: "null",
      tag2: "null",
      tag3: "null",
      tag4: "null",
      tag5: "null",
      
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

async function DisplayImageData()
{
  const querySnapshot = await getDocs(collection(db, "users", userUID, "images"));
  querySnapshot.forEach((doc) => {
    return(
      console.log("test")
    );
  });
}

// async function PosentiallyActuallyDisplayTheImage(link)
// {
//   console.log("you got to this point", link);
//   document.getElementById("anImage").src = link;
// }


async function ListImageData()
{
  const querySnapshot = await getDocs(collection(db, "users", userUID, "images"));
  querySnapshot.forEach((doc) => {
    console.log( doc.id, " => ", doc.data().image)
  });
}

async function reWriteUserDataUsingInputs()
{

  let classInput = document.getElementById("class").value;
  let schoolInput = document.getElementById("school").value;
  let gradeInput = document.getElementById("grade").value;

      await setDoc(doc(db, "users", userUID), {
        email: "test@gmail.com",
        UID: "User UID Here ",
        age: 'age here ',
        class: classInput,
        school: schoolInput,
        grade: gradeInput,
        globalTags: classInput + " " + schoolInput + " " + gradeInput +  " "
      });
}
async function addSomeTags()
{
  let tagInput = document.getElementById("tag").value;
  if(tagInput != null)
  {
    addTag(tagInput);
  }
   async function addTag(tag){
    await updateDoc(doc(db, "users", userUID, 'images', 'vTP2J3kUgk76yMPkyxnY'), {
      tag: tagInput
    });
    console.log("tag", tagInput, "added");
  }    
}


// async function 

//1. fetch firebase UID from email

// I will neglect to do this becuase I would need to copy over the account sign in code which is unnessecary
// for the scope of this project. below is linked a doc for fetching user data from sirebase
// Link: https://firebase.google.com/docs/auth/web/manage-users

//2. ask for grade, school, class ✅

//3. put data in proper space✅

//4. pull images from user's profile

