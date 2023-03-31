import './sidebar.css'

import { Content } from "../contents/Content"

export function Sidebar(){
  return(
    <div className="container">
    <Content title='Projeto teste' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aspernatur, nemo enim corporis dolores quam impedit fuga quaerat voluptates veniam quis veritatis reprehenderit consectetur ea quod qui harum voluptatum'/>

    <Content title='Projeto teste 2' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aspernatur, nemo enim corporis dolores quam impedit fuga quaerat voluptates veniam quis veritatis reprehenderit consectetur ea quod qui harum voluptatum'/>

    <Content title='Projeto teste 3' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aspernatur, nemo enim corporis dolores quam impedit fuga quaerat voluptates veniam quis veritatis reprehenderit consectetur ea quod qui harum voluptatum'/>

    <Content title='Projeto teste 4' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aspernatur, nemo enim corporis dolores quam impedit fuga quaerat voluptates veniam quis veritatis reprehenderit consectetur ea quod qui harum voluptatum'/>
    </div>
  )
}