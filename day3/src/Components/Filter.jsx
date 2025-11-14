import React from 'react'

function Filter() {
    const [nums]=useState([10,15,20,25,30,35,40,45,50]);
    const above20=nums.filter(n => n>20);
  return (
    <div>
      <h1>Filter</h1>
      <p>orginal: {nums.json(",")}</p>
      <p>Numbers above 20 : {above20.json(",")}</p>
    </div>
  )
}

export default Filter
