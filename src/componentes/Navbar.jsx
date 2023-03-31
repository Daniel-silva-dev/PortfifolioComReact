import "./navbar.css"
import { useEffect, useRef, useState } from "react"

import banner from '../imagens/banner.png'

export function Navbar(){
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  function handleScroll(){
    const { pageYOffset } = window;
    if(
      pageYOffset > lastScrollTop.current
    ){
      setIsNavbarVisible(false);
    }else if(
      pageYOffset < lastScrollTop.current
    ){
      setIsNavbarVisible(true);
    }
    lastScrollTop = pageYOffset;
  }
  useEffect(()=>{
    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return window.removeEventListener(
      "scroll", handleScroll)
  }, []);

  return(
    <>
    <img src={banner} alt="Banner do react" />
    <header className="cabecalho">
      <a href="#">Home</a>
      <p>React JS</p>
   </header>
   <p className="myName">Daniel Silva</p>
    </>
  );
};