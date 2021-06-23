import React from 'react'
import "../components/Header.css"
import {Officearray} from '../components/Officearray'

function Office() {
  return (
    <div className="imgglry">
        {Officearray.map(function(img){
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

export default Office
