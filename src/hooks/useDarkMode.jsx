import { useEffect, useState } from "react";

const UseDarkMode = () => {
const [isDark, setDarkMode] = useState(false);
const toggleTheme=()=>{

    setDarkMode(!isDark);
  }
 
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
      }

  }else{
    localStorage.setItem('theme', 'light');
    setDarkMode(!isDark);
  }
  },[isDark])
  return [isDark, toggleTheme]
}

export default UseDarkMode