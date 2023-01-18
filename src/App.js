/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const color = 'black';

const buttonStyles = css`
  background-color: #c9f0ff;
  padding: 10px;
  border-color: #e1ccbf;
  &:hover {
    color: white;
  }
  color: ${color};
  border-radius: 1.2rem;
  font-size: 1.5rem;
  padding: 10px;
  margin-top: 10px;
`;

const h1Styles = css`
  background-color: #4f9d69;
  padding: 10px;
  width: 15em;
  border-color: #e1ccbf;
  color: ${color};
  border-radius: 1.2rem;
  font-size: 2rem;
  text-align: center;
`;

const bodyStyles = css`
  background-color: #efeff0;
  padding: 5px;
  width: 20em;
  border-color: #e1ccbf;
  &:hover {
    color: white;
  }
  color: ${color};
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100vh;
  width: 100vw;
`;

export default function ExampleState() {
  // 1. Declare a state variable called "hexcolor", with
  // a default value

  const [hexcolor, setHexcolor] = useState('background color hex code');
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <body css={bodyStyles}>
      <h1 css={h1Styles}>Color Generator</h1> {/* Headline: Color Generator */}
      {/* 2. Use the state variable */}
      <div
        css
        style={{
          backgroundColor: hexcolor,
          width: '15em',
          height: '20rem',
          borderRadius: '5px',
          fontSize: '1.5rem',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        Generated Color: {hexcolor}
      </div>
      <button
        css={buttonStyles}
        onClick={() =>
          // 3. Set the state variable to a new value
          setHexcolor('#' + randomHex)
        }
      >
        Generate
      </button>
    </body>
  );
}
