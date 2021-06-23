import React from 'react'
import '../components/Header.css';
import { Woodenroomarray } from './Woodenroomarray';



export default function Woodenroom() {



  return (
    <div className="imgglry">
      
        {Woodenroomarray.map((img)=>{
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
