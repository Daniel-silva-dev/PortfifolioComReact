import './footer.css'

import { BsFillCalendar2WeekFill,BsFillPersonFill } from "react-icons/bs";

import { DiAtom } from "react-icons/di";

export function Footer(){
  return(
    <footer className="rodape">
      <p> <span><BsFillPersonFill /></span> Daniel silva</p>
      <p><span><BsFillCalendar2WeekFill /></span> 2023</p> <br />
      <p><span><DiAtom /></span> React JS/v18.0</p>

    </footer>
  )
}