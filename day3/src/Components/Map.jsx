import React from 'react'

function Map() {
    const numbers= [10,20,30,40,50];
  return (
    <div>
      <h1>Using map function</h1>
      {numbers.map((n,i)=>(
        <p key ={i}>Numbe: {n}</p>
      ))}
    </div>
  )
}

export default Map
