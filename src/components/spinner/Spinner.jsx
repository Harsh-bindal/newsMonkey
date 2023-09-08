import React from 'react'
import loading from "../../assets/loading.gif"

export default function Spinner() {
  return (
    <div className='text-center'>
        <img src={loading} alt={loading} />
    </div>
  )
}
