import React from 'react'
import '../components/Header.css';
import { Whiteroomarray } from './Whiteroomarray';



export default function Whiteroom() {



  return (
    <div className="imgglry">
      
        {Whiteroomarray.map((img)=>{
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
