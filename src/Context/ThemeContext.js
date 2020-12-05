import {createContext} from "react";            //directly importing context

const ThemeContext = createContext(["light", () => {}]); //here we had set the default value for the ThemeContext as light



export default ThemeContext;