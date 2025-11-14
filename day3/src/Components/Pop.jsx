import React, { useState } from 'react'

function Pop() {
    const [nums,setNums]=useState([10,20,30,40,50]);

    const removeLast = ()=>{
        const newArr=[...nums];
        newArr.pop();
        setNums(newArr);
    }
  return (
    <div>
      <h1>pop()</h1>
        <p>{nums.join(",")}</p>
        <button onClick={removeLast}>Remove Last</button>
    </div>
  )
}

export default Pop
