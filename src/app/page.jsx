"use client";

import { useState } from 'react';
import useTypewriter from './components/typewriter';

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
        nextText: 1 // Or any other appropriate nextText value
      }
    ]
  }
];

export default function Home() {
  const [currentTextNodeId, setCurrentTextNodeId] = useState(1);
  const [state, setState] = useState({});
  const [key, setKey] = useState(0); // Key to force re-render

  const currentTextNode = textNodes.find(node => node.id === currentTextNodeId);
  const displayedText = useTypewriter(currentTextNode.text, 50);

  const showOption = (option) => {
    return true; 
  };

  const selectOption = (option) => {
    const nextState = { ...state, ...option.setState };
    setState(nextState);
    setCurrentTextNodeId(option.nextText);
    setKey(prevKey => prevKey + 1); 
  };

  return (
    <main key={key}>
      <div className="container">
        <div id="text">{displayedText}</div>
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
