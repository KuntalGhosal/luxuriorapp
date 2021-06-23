import React from 'react'
import "../components/Header.css"
import {Hotelandcafearray} from "../components/Hotelsandcafearray"

function Hotelandcafe() {
  return (
    <div className="imgglry">
        {Hotelandcafearray.map(function(img){
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

export default Hotelandcafe
