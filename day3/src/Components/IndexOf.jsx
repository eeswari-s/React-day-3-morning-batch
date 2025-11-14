import React, { useState } from 'react'

function IndexOf() {
    const [names] = useState(['Alice', 'Bob', 'Charlie', 'David', 'Eve']);
    const indexOfCharlie = names.indexOf('Charlie');
  return (
    <div>
        <h1>IndexOf()</h1>
        <p>Names: {names.join(",")}</p>
        <p>Index of 'Charlie': {indexOfCharlie}</p>

      
    </div>
  )
}

export default IndexOf
