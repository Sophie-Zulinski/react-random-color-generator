import { useState } from 'react';

export default function ExampleState() {
  // 1. Declare a state variable called "count", with
  // a default value
  const [hexcolor, generateHexColor] = useState("#fffff");
  const randomHex = "#" + Math.floor(Math.random()*16777215).toString(16);
  
  return (
    <>
      <h1>Color Generator</h1>
      {/* 2. Use the state variable */}
      <div style={{backgroundColor: hexcolor}}>
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