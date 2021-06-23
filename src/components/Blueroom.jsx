import React from 'react'
import '../components/Header.css';
import { Blueroomarray } from './Blueroomarray';



export default function Blueroom() {



  return (
    <div className="imgglry">
      
        {Blueroomarray.map((img)=>{
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
