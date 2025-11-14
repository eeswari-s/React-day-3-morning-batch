import Reac, { useState } from 'react'

function Push() {
    const [nums ,setNums] = useState ([1,2,3]);

    const addNumber = () =>
    {
        setNums ( [...nums, nums.length + 1] );
    };
  return (
    <div>
      <h1>push()</h1>
      <p>{nums.join(",")}</p>
        <button onClick={addNumber}>Add Number</button>
    </div>
  )
}

export default Push
