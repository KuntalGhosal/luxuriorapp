import React from 'react'
import "../components/Header.css"
import {Libraryarray} from "../components/Libraryarray"

function Library() {
  return (
    <div className="imgglry">
        {Libraryarray.map(function(img){
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

export default Library
