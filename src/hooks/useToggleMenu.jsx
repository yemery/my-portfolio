import React from 'react'

const useToggleMenu = (isOpened) => {
    conts [isMenuOpen, setMenuOpen] = useState(isOpened);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        console.log("clicked");
      };
  return [isMenuOpen, toggleMenu]
}

export default useToggleMenu