import React from 'react'

function Reduce() {
    const prices = [100,200,300,400,500];

    const total = prices.reduce((sum , value)=> sum +value , 0)
  return (
    <div>
      <h1>Reduce()</h1>
      <p>prices: {prices.join(",")}</p>
        <p>Total Price: {total}</p>
    </div>
  )
}

export default Reduce


// Reduce.jsx:10 Uncaught TypeError: prices.json is not a function
//     at Reduce (Reduce.jsx:10:26)
// Reduce	@	Reduce.jsx:10
// <Reduce>		
// App	@	App.jsx:13
// <App>		
// (anonymous)	@	main.jsx:8
