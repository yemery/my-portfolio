import { LuMenu, LuSunDim, LuMoon } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import { navbarItems } from "../../assets/data/sitedata";
import useDarkMode from "../../hooks/useDarkMode";
import useToggleMenu from "../../hooks/useToggleMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useToggleMenu(false);
  const [isDark, toggleTheme] = useDarkMode();

  return (
    <div className="z-10 w-full fixed right-0 ">
      <div className="h-[80px] flex justify-between items-center bg-white dark:bg-surface-100    text-base md:text-lg lg:text-xl xl:text-2xl  max-w-[1480px]  m-auto px-6">
        <div className="logo text-black dark:text-white text-3xl  font-bold ">
          <NavLink to="/">Burzum</NavLink>
        </div>
        <div className="md:block hidden">
          <ul className="flex  items-center justify-center gap-7   text-base">
           <NavLinks toggleMenu={toggleMenu}/>
          </ul>
        </div>
        <div className="buttons flex gap-x-3 ">
          <button className="" onClick={toggleTheme}>
            {" "}
            {isDark ? <LuSunDim size={20} /> : <LuMoon size={20} />}
          </button>
          <button className="block md:hidden" onClick={toggleMenu}>
            {" "}
            {isMenuOpen ? <MdOutlineClose size={20} /> : <LuMenu size={20} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full  bg-white dark:bg-surface-100	block md:hidden">
          <ul className="flex flex-col gap-y-6 items-center justify-center text-center w-full h-full  text-base">
          <NavLinks toggleMenu={toggleMenu}/>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
