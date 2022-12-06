import React from "react";
import { UserAuth } from "./context/AuthContext";


const App = () => {

  const {googleSignIn} = UserAuth();

  const handleGoogleSignIn = async () => 
  {
    try
    {
      await googleSignIn();
    }
    catch(error)
    {
      console.log(error);
    }
  }

  return (
<>
  <link rel="stylesheet" href="uiProject.css" />
  <link rel="stylesheet" href="reset.css" />
  <title>Login Card</title>
  <div className="login-card">
    <div id="loginHeader"></div>
    <div id="profilePic">
    <img id="userPic" src={require("./images/user-circle.svg").default }/>

    </div>
    <div id="userNameInput">
      UserName/Email
      <br />
      <input type="text" placeholder="UserName" id="placeHolderUserName" />
    </div>
    <div id="passwordInputs">
      Password
      <input
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
    <div id="create" onClick={handleGoogleSignIn}>
      Continue
    </div>
    <div className="loginalternatives">
      <img src={require("./images/brand-google.svg").default }/>
      <img src={require("./images/brand-github.svg").default }/>
      <img src={require("./images/brand-meta.svg").default }/>
      <img src={require("./images/brand-apple.svg").default }/>

</div>
    <div id="matchFalse">
      Sorry, Your Passwords Did Not Match, Please Try Again
    </div>
  </div>
</>
  );
};

export default App;



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


    }
   else
   {
      password1.value = "";
      password2.value = "";
      passCheck.style.display = "block";
   }
}




