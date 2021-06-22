import React from 'react'
import '../components/Header.css';
import { Bathroom } from './Bathroom';



export default function Designerbathroom() {



  return (
    <div className="imgglry">
      
        {Bathroom.map((img)=>{
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
