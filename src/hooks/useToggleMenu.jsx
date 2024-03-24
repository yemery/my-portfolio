import { useState } from "react";

const useToggleMenu = (isOpened) => {
    const [isMenuOpen, setMenuOpen] = useState(isOpened);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        console.log("clicked");
      };
  return [isMenuOpen, toggleMenu]
}

export default useToggleMenu