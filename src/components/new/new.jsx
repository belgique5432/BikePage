import React from 'react';
import vitpilen from '../../Images/vitpilen.png'; // Asegúrate de que esta ruta sea correcta
import './new.css';

function Publicity() {
  return (
    <div className="publicity-container">
      <div className="publicity-text">
        <h1>Go as Curiosity takes you</h1>
        <h2>The complete titanium exhaust system Du3cati Performance
        made by Akrapovic is the best result of a collaboration</h2>
        <h2>view details</h2>
      </div>
      <div className="publicity-image">
        <img src={vitpilen} alt="Vitpilen" />
      </div>
    </div>
  );
}

export default Publicity;
