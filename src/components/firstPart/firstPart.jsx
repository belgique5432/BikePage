import React from 'react';
import cbr from '../../Images/cbr.jpg'; // Asegúrate de que esta ruta sea correcta
import './bike.css';

function Presentation() {
  return (
    <div className="container">
      <img src={cbr} alt="honda-cbr" className="responsive-image" />
      <div className="text-overlay">
        <h1 className="fade-in">CBR</h1>
        <h2 className="fade-in delay-1">THE RACING HORSE BACK</h2>
        <h3 className="fade-in delay-2">Ultimate Horse On Attack</h3>
        <h2 className="fade-in delay-3">Honda CBR</h2>
      </div>
    </div>
  );
}

export default Presentation;
