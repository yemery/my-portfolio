import { useEffect, useState } from "react";
import { LuMenu, LuSunDim, LuMoon } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { navbarItems } from "../assets/data/sitedata";
// import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDark, setDarkMode] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
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
  }, [isDark])
  return (
    <div className="navbar relative h-[80px] z-10">
      <div className="flex justify-between items-center py-5 text-base md:text-lg lg:text-xl xl:text-2xl">
        <div className="logo text-black text-3xl  font-bold ">
          <Link to="/">Burzum</Link>
        </div>
 
        <div className="buttons flex gap-x-3 ">
        <button className="" onClick={toggleTheme}>
            {" "}
            {isDark ? <LuSunDim size={20} /> : <LuMoon size={20} />}
          </button>
          <button className="" onClick={toggleMenu}>
            {" "}
            {isMenuOpen ? <MdOutlineClose size={20} /> : <LuMenu size={20} />}
          </button>
        

        
         
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 w-full bg-white " style={{ height: 'calc(100vh - 76px)'}}>
          <ul className="flex flex-col gap-y-6 items-center justify-center text-center  h-full w-full text-3xl">
            {navbarItems.map((item) => (
              <>
                <li>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => {
                      return isActive && "font-semibold";
                    }}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
