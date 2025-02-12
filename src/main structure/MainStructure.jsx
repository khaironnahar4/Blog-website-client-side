import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function MainStructure() {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? storedTheme : "dark" 
  const [theme, setTheme] = useState(initialTheme);
  

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!("theme" in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }, [])

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
      
    }else{
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <div className="relative dark:bg-gray-800 dark:text-white">
      {/* navbar */}
      <Navbar theme={theme} setTheme={setTheme}></Navbar>

      {/* outlet */}
      <div className="max-w-7xl mx-auto p-4 sm:mt-[86px] mt-12">
        <Outlet></Outlet>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default MainStructure;
