import { useState } from 'react';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const color = 'green';

const buttonStyles = css`
  background-color: red;
  margin-top: 20px;
  padding: 10px;
  color: ${color};
`;



export default function ExampleState() {
  // 1. Declare a state variable called "hexcolor", with
  // a default value
  const [hexcolor, generateHexColor] = useState("background color hex code");
  const randomHex = "#" + Math.floor(Math.random()*16777215).toString(16);
  
  const divStyles = css`
background-color: ${randomHex};
color: black;
`;

  return (
    <>
      <h1>Color Generator</h1>
      {/* 2. Use the state variable */}
      <div
      css = {divStyles}
      > 
        Generated Color: {randomHex}
        </div>
      <br></br>
      <button
      css = {buttonStyles}
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