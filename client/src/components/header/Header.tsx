import { useCallback, useEffect, useState } from "react";
import style from "./header.module.css"

import { IoHomeOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { TfiHummer } from "react-icons/tfi";
import { FaCode } from "react-icons/fa6";


const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOnClick = useCallback((sectionId: string)=>{
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [])



  return (
    <header className={`${style.header} ${isScrolled ? style.headerScrolled : ""}`}>
      {window.innerWidth > 778 ? (
      <nav className={style.navigation}>
        <ul className={style.navigation_list}>
          <li className={style.navigation_item} onClick={()=>handleOnClick("about")}>About</li>
          <li className={style.navigation_item} onClick={()=>handleOnClick("contacts")}>Contacts</li>
          <li className={style.navigation_item} onClick={()=>handleOnClick("exp")}>Experience</li>
          <li className={style.navigation_item} onClick={()=>handleOnClick("skill")}>Skills</li>
        </ul>
      </nav>

      ) : (
      
      <nav className={style.navigation}>
        <ul className={style.navigation_list}>
          <li className={style.navigation_item} onClick={()=>handleOnClick("about")}><IoHomeOutline size={30}/></li>
          <li className={style.navigation_item} onClick={()=>handleOnClick("contacts")}><IoShareSocialOutline size={30}/></li>
          <li className={style.navigation_item} onClick={()=>handleOnClick("exp")}><TfiHummer size={30}/></li>
          <li className={style.navigation_item} onClick={()=>handleOnClick("skill")}><FaCode size={30}/></li>
        </ul>
      </nav>
      )}

      


    </header>
  )
}

export default Header