import React from 'react';
import './foto.css';
import MinhaFoto from '../assets/001.jpg';

function Foto () {
    return (
        <div >
            <img className="foto" src={MinhaFoto} alt='minha foto'/>
        </div>
    )
}

export default Foto;