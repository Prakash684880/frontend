import React, { useState, useEffect } from 'react';
import darkmode from "../../assets/darkmode.png";
import lightmode from "../../assets/lightmode.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <div className='relative'>
        <img
          src={darkmode}
          alt="darkmode pic"
          onClick={changeTheme}
          className={`w-12 absolute right-0 z-10 cursor-pointer 
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300 
        ${
          theme !== "dark" ? "opacity-0" : "opacity-100"
        }
        `}
        />
        <img
          src={lightmode}
          onClick={changeTheme}
          alt="lightmode pic"
          className='w-12 right-0 z-10 
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
        transition-all duration-300'
        />
      </div>
    </>
  );
}

export default DarkMode;
