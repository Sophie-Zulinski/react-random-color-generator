import { useState } from 'react';

export default function ExampleState() {
  // 1. Declare a state variable called "count", with
  // the default value 0
  const [hexcolor, generateHexColor] = useState("#fffff");
  const randomHex = "#" + Math.floor(Math.random()*167777215 +' ' ).toString(16)
  return (
    <>
      <h1>Color Generator</h1>
      {/* 2. Use the state variable */}
      <div>
        Generated Color: {hexcolor}
        </div>
      <br></br>
      <button
        onClick={() =>
          // 3. Set the state variable to a new value
          generateHexColor(randomHex)
        }
      >
        Generate
      </button>
   
    </>
  );
}