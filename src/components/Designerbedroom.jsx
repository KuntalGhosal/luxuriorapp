import React from 'react'
import '../components/Header.css';
import { Bedroom } from './Bedroom';



export default function Designerbedroom() {



  return (
    <div className="imgglry">
      
        {Bedroom.map((img)=>{
          return <img
          className="design-glry-img"
          src={img}
          // class="w-50 shadow-1-strong rounded mb-4"
          alt=""
        />
        })}
    </div>
  )
}
