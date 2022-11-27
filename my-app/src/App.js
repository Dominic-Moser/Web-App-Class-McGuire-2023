import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [style, setStyle] = useState("cont");
  


  const changeStyle = () => {
    console.log("you just clicked");

    if(style === "cont")
    {
      setStyle("cont2");
    }
    else if (style === "cont2")
    {
      setStyle("cont");
    }
  };
  return (
    <html>
      <div id = "backGround">
        <div id = "top">
          <div className={style} onClick={changeStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="46" height="46" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg> 
          </div>
        </div>
      </div>
    </html>
  );
};
export default App;