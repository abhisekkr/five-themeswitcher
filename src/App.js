import React,{useState} from "react";     //here we are setting the default theme at the time of loading the application by useState

import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

const App = () => {
  const themeHook= useState("light")                  //light will be the default at time of loading application
  return(
    <ThemeContext.Provider value={themeHook}>
        <div>
          <Header />
          <HeroSection />
        </div>
    </ThemeContext.Provider>
  )
};


export default App;

//here the ThemeContext is the provider
//when we want to consume what provider is providing then we wrap it into the consumer