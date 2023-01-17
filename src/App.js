import { useState } from 'react';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const color = "black";

const buttonStyles = css`
  background-color: #e1ccbf;
  margin-top: 20px;
  margin-left: 8em;
  padding: 10px;
  border-color: #e1ccbf;
  &:hover { color: white}
  color: ${color};
  border-radius: 1.3em;
  font-size: 2rem
`;

const h1Styles = css`
  background-color: #e1ccbf;
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px;
  width: 20em;
  border-color: #e1ccbf;
  &:hover { color: white}
  color: ${color};
  border-radius: 1.3em;
  font-size: 2rem
  
`;



export default function ExampleState() {
  // 1. Declare a state variable called "hexcolor", with
  // a default value
  const [hexcolor, generateHexColor] = useState("background color hex code");
  const randomHex = Math.floor(Math.random()*16777215).toString(16);
  
const divStyles = css`
background-color: ${"#" + randomHex};
color: black;
width: 25em;
height: 10em;
text-align: center;
justify-content: center;
border-radius: 1.3em;
margin-left: 20px; 
font-size: 1.5rem;
border: solid #e1ccbf;
`;

  return (
    <>
      <h1 css = {h1Styles}>Color Generator</h1> {/* Headline: Color Generator */}


      {/* 2. Use the state variable */}
      <div
      css = {divStyles}
      > 
        Generated Color: {hexcolor}
        </div>
      <br></br>
      <button
      css = {buttonStyles}
        onClick={() =>
          // 3. Set the state variable to a new value
          generateHexColor("#" + randomHex)
        }
      >
        Generate
      </button>
   
    </>
  );
}