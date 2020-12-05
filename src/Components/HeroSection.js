import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../colors";


const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]             //here we are fetching the 0 element from the default value of ThemeContext
    const currentTheme = AppTheme[theme]                  //here we are getting the css property of the value which is inside theme from the colors file

    return(
        <div
            style={{
                padding:"1rem",
                backgroundColor:`${currentTheme.backgroundColor}`,    //here we are fetching the backgroundColor property from the colors file of the currentTheme
                color:`${currentTheme.textColor}`,
                textAlign:"center",
            }}
        >
            <h1>Context API theme Toggler</h1>
            <p>This is a nice paragraph</p>
            <button style={{
                backgroundColor:"#26ae60",
                padding:"10px 150px",
                fontSize:"20px",
                color:"#FFF",
                border:`${currentTheme.border}`
            }}> Click Me</button>
        </div>
    )
};


export default HeroSection;