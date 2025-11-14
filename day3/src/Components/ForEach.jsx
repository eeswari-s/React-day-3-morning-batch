import React from 'react'

function ForEach() {
    const nums = [10,20,30,40,50];
    
    let text="";
    nums.forEach(n=>{
        text += n + "|";
    });
  return (
    <div>
        <h1>Using ForEach</h1>
        <p>{text}</p>
      
    </div>
  )
}

export default ForEach
