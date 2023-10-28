import { useState } from 'react';
import './App.css';


  

const MakeUp = () => {


const [index , setIndex] = useState(1)

const [mode , setMode] = useState(false)

const handleClick = (id) => {
  setIndex(id)
} 

  return (
  <div>create</div>
  );
}


export default MakeUp;

const data = [
  {name:"Face Primer", id:1 , text:" 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo."},
  {name:"Foundation", id:2 , text:" 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo."},
  {name:"BB Cream", id:3 , text:"3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo."},
  {name:"Concealer", id:4 , text:"4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo."},
  {name:"Blush", id:5 , text:" 5 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo."},
]