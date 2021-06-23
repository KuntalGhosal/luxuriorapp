import React from 'react'
import "../components/Header.css"
import {Likeoldroomarray} from "../components/Likeoldroomarray"

function Likeoldroom() {
  return (
    <div className="imgglry">
        {Likeoldroomarray.map(function(img){
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

export default Likeoldroom
