import React from 'react';
import './App.css';


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>

      </header>
      <section>
        {/*if 'user' is true go to chatroom else show the SignIn options the null just makes it so that two chtrooms are not displayes.*/}
        {user ? <ChatRoom /> : <CreateAccountPage />}
        
      </section>
    </div>
  );
}

//function declaers another pointer function (the = () => ) that is linked to a button...
//that onclick triggers said function.
//the function itself requests a new authorization from firebase, using google as a medium.


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