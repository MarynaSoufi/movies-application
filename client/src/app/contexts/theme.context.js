import { createContext, useContext, } from 'react';
import useLocalStorage  from "../hooks/useLocalStorage.js";
import React from 'react'

const ThemeContext = createContext();
const useThemeContext = () => useContext(ThemeContext)
const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("theme", false);
  window.localStorage.setItem('theme', isDarkMode);
  const handleThemeChange = (mode) => {
  setIsDarkMode(mode);
};

 
  return (
    <ThemeContext.Provider value={{isDarkMode, handleThemeChange}}>
      {children}
    </ThemeContext.Provider>
    )
}
export  { ThemeContext,
  ThemeProvider, useThemeContext,}
