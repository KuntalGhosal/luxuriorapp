import React from 'react'
import '../components/Header.css';
import { Kitchen } from './Kitchen';



export default function Designerkitchen() {



  return (
    <div className="imgglry">
      
        {Kitchen.map((img)=>{
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
