import { useEffect, useState } from "react";
import { LuMenu, LuSunDim, LuMoon } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { navbarItems } from "../../assets/data/sitedata";
import useDarkMode from "../../hooks/useDarkMode";


// import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDark, toggleTheme] = useDarkMode();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("clicked");
  };
  return (
    <div className="z-10 w-full fixed right-0 " >
      <div className="h-[80px] flex justify-between items-center bg-white dark:bg-surface-100   dark:bg-surface-100 text-base md:text-lg lg:text-xl xl:text-2xl  max-w-[1480px]  m-auto px-6">
        <div className="logo text-black dark:text-white text-3xl  font-bold ">
          <NavLink to="/">Burzum</NavLink>
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
        <div className="w-full  bg-white dark:bg-surface-100	"  >
          <ul className="flex flex-col gap-y-6 items-center justify-center text-center w-full h-full  text-3xl">
            {navbarItems.map((item,index) => (
              <>
                <li>
                  <NavLink
                    to={item.to}
                    key={index}
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
