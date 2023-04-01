import "./navbar.css"

import banner from '../imagens/banner.png'

export function Navbar(){
  return(
    <>
    <img src={banner} alt="Banner do react" />
    <header className="cabecalho">
      <a href="https://daniel-silva-dev.github.io/MeuPortifolio/">Portifolio</a>
      <p>React JS</p>
   </header>
    </>
  );
};