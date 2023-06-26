import React, { useState } from 'react';

import './App';
import './style.css';

import Foto from './components/foto/foto';
import Button from './components/button/button';
import Sobre from './components/button/sobre/sobre';
import Projetos from './components/button/projetos/projetos';
import Contato from './components/button/contato/contato';


function Home() {
  const [displayText, setDisplayText] = useState('');
  const [showText, setShowText] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);
  const [buttonName, setButtonName] = useState('');


  const handlePhotoClick = () => {
    setShowPhoto(true);
    setShowText(false);
  };

  const handleButtonClick = (buttonName) => {
    setButtonName(buttonName);

    if (buttonName === 'Sobre') {
        
      setDisplayText(
        <Sobre/>
      );

      setShowText(true);
    } else if (buttonName === 'Projetos') {
      setDisplayText(
        <Projetos/>
      );
      setShowText(true);
    } else if (buttonName === 'Contato') {
      setDisplayText(
        <Contato/>
      );
      setShowText(true);
    } else {
      setDisplayText('');
      setShowText(false);
    }
    setAnimationKey(animationKey + 1);
  };

  return (
    <div>
      <header></header>
      <div className={`foto-container ${showPhoto ? 'move' : ''}`} onClick={handlePhotoClick}>
        <Foto />
        {!showPhoto && 
          <p className="click-text">Pressione a foto para começar</p>
        }
      </div>
        {showPhoto && (
          <div>
            <div className={`button-container ${showText ? 'show' : 'fade'}`}>
              <Button>
                <button className={buttonName === 'Sobre' ? 'button button-selected' : 'button'} onClick={() => handleButtonClick('Sobre')}>Sobre</button>
                <button className={buttonName === 'Projetos' ? 'button button-selected' : 'button'} onClick={() => handleButtonClick('Projetos')}>Projetos</button>
                <button className={buttonName === 'Contato' ? 'button button-selected' : 'button'} onClick={() => handleButtonClick('Contato')}>Contato</button>
              </Button>
            </div>
            <div key={animationKey} className={`displayText ${showText ? 'show' : 'hide'}`}>{showText && displayText}</div>
          </div>
        )};
    <footer> © 2023 - Filipe Soares</footer>
    </div>


  );
};

export default Home;
