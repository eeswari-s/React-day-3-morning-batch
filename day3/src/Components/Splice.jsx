import React from 'react'

function Splice() {
    const [fruits, setFruits] = React.useState(['apple', 'banana', 'cherry', 'date', 'elderberry']);


    const removeItem = ()=>{
        const newArr = [...fruits];
        newArr.splice(2,1);
        setFruits(newArr);
    }
  return (
    <div>
      <h1>Splice()</h1>
        <p>Fruits: {fruits.join(",")}</p>
        <button onClick={removeItem}>Remove Item</button>
    </div>
  )
}

export default Splice
