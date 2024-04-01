import { NavLink } from "react-router-dom";
import { navbarItems } from "../../assets/data/sitedata";

const NavLinks = ({toggleMenu}) => {
  return (
    <>
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
            ))}</>
  )
}

export default NavLinks