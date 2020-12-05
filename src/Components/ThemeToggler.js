import React,{useContext} from "react";                 //using the context here

import ThemeContext from "../Context/ThemeContext";


const ThemeToggler = () => {
    const [themeMode,setThemeMode] = useContext(ThemeContext)                   //here the default value is ThemeContext which is light

    return (                                                                //here we are checking variable ThemeMode and applying ternary operator accordingly
        <div onClick={()=>{
            setThemeMode(themeMode ==="light" ? "dark" : "light")                   //we want here the entire division to be clickable
        }}>
            
            <span>{themeMode === "light" ? "Turn off" : "Lights On"}</span>             

        </div>                                                                                  //here in span we havent provided any name , it should be provided
    )                                                                       //here the span title will be the actual value of the theme mode

};



export default ThemeToggler;

//props are used to transfer information from one component to other
//state is a single place where everything is stored so every update goes through state 
//useState is almost same as useContext , only thing is UseContext gives more flexibility and we donot have to drill down the consumer and provider