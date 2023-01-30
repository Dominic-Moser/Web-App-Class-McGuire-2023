import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTvhk-67qT9bg9C1inKh699ZeNWPysMuc",
  authDomain: "chat-app-11da6.firebaseapp.com",
  projectId: "chat-app-11da6",
  storageBucket: "chat-app-11da6.appspot.com",
  messagingSenderId: "34676840095",
  appId: "1:34676840095:web:29df0c7aae6e8b34daf4aa",
  measurementId: "G-TY1TKXTCSN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

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
      createUserWithEmailAndPassword(auth, emailInput, val1);
      alert("testSucsess");
   }
   else
   {
      password1.value = "";
      password2.value = "";
      passCheck.style.display = "block";
   }
}


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    alert("signed in");
    const user = userCredential.user;
    // ...
    alert("error");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
// document.getElementById("placeHolderPassword").addEventListener("keypress", function (e) {
//   if(e.key === "Enter")
//   {
//     focusToNext();
//   }
// });

