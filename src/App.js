import Header from "./components/Header";
import FirstOffer from "./components/FirstOffer";
import Location from "./components/Location";
import Services from "./components/Services";
import Call from "./components/Call";

import React from "react";

function App() {
  const [devWidth, setDevWidth] = React.useState(0)
  
  React.useEffect(()=>{
    setDevWidth(window.screen.width)
  },[])

  window.onresize = () => {
    setDevWidth(window.screen.width)
  };

  function getVision (){
    if (devWidth <= 768) {
      return "tablet"
    }
    else {
      return "PC"
    }
  }
  
  return (
    <>
    <Header 
    vision={getVision()}
    />
    <FirstOffer
    vision={getVision()}
    />
    <Location />
    <Services 
    devWidth={devWidth}
    vision={getVision()}
    />
    <Call/>
    </>
  );
}

export default App;
