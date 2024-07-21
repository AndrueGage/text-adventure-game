"use client";

import { useState } from 'react';

const textNodes = [
  {
    id: 1,
    text: 'You are a chicken. Chicken bawk bawk',
    options: [
      {
        text: 'Bawk',
        setState: { bawk: true },
        nextText: 2
      },
      {
        text: 'Peck',
        setState: { peck: true },
        nextText: 2
      },
      {
        text: 'Eat worm',
        nextText: 2
      },
      {
        text: 'Do nothing',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You are a chicken!!!!!!!!!!',
    options: [
      {
        text: 'Eat pizza',
        nextText: 1 
      }
    ]
  }
];

export default function Home() {
  const [currentTextNodeId, setCurrentTextNodeId] = useState(1);
  const [state, setState] = useState({});

  const currentTextNode = textNodes.find(node => node.id === currentTextNodeId);

  const showOption = (option) => {
    return true; // Implement your condition to show options
  };

  const selectOption = (option) => {
    const nextState = { ...state, ...option.setState };
    setState(nextState);
    setCurrentTextNodeId(option.nextText);
  };

  return (
    <main>
      <div className="container">
        <div id="text">{currentTextNode.text}</div>
        <div id="option-buttons" className="btn-grid">
          {currentTextNode.options.map((option, index) => {
            if (showOption(option)) {
              return (
                <button
                  key={index}
                  className="btn"
                  onClick={() => selectOption(option)}
                >
                  {option.text}
                </button>
              );
            }
            return null;
          })}
        </div>
      </div>
    </main>
  );
}