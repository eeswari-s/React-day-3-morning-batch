import React from 'react'

function Slice() {
    const items = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    const firstTwo = items.slice(0,2);
  return (
    <div>
      <h1>Slice()</h1>
      <p>Orginal: {items.join("-")}</p>
      <p>Sliced : {firstTwo.join("-")}</p>
    </div>
  )
}

export default Slice
