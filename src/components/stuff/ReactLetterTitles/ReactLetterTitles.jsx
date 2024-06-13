/*

React Letter Tiles
We provided a small React application with some starter code. 
Your goal is to modify the application so that it displays 
a title for every letter in the alphabet in uppercase format. 
Then if a tile is clicked, that letter is appended to the 
current string that exists in the element with ID outputString.

If at any point there are 3 consecutive letters that are the same, 
replace them with an underscore. 
For example, if A, B, C, F, F, F, G is clicked in that order, 
the string that appears in outputString would be ABC_G. 
If 6 of the same letter appears after, for example, 
clicking A six times followed by a B, 
then outputString would be __B.

You are free to add classes and styles, but make sure you 
leave the component ID's and clases provided as they are. 
Submit your code once it is complete and our system will 
validate your output.

*/


import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px'
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
}

function Tile({ letter, handleClick }) {
  return (
    <button style={style.letter} onClick={() => handleClick(letter)}>
      {letter}
    </button>
  );
}

function Application() {
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    let newOutputString = outputString + letter;

    // Check for consecutive letters and replace them with underscore
    if (newOutputString.length >= 3) {
      const lastThreeLetters = newOutputString.slice(-3);
      if (lastThreeLetters === letter.repeat(3)) {
        newOutputString = newOutputString.slice(0, -3) + '_';
      }
    }

    setOutputString(newOutputString);
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
        {alphabet.split('').map((letter, index) => (
          <Tile key={index} letter={letter} handleClick={handleClick} />
        ))}
      </aside>
      <div id="outputString">{outputString}</div>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);
