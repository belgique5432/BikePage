import React from 'react';
import './allBrands.css'; // Asegúrate de que el nombre del archivo es correcto y está en la misma carpeta
import aprilia from '../../Images/aprilia.jpg'
import honda from '../../Images/honda.jpg'
import ducati from '../../Images/ducati.jpg'
import harley from '../../Images/harley.jpg'
import hero from '../../Images/hero.jpg'
import kawasaki from '../../Images/kawasaki.jpg'
import royal from '../../Images/royal.jpg'
import suzuki from '../../Images/suzuki.jpg'
import triumph from '../../Images/triumph.jpg'
import tvs from '../../Images/tvs.jpg'
import vespa from '../../Images/vespa.png'
import yamaha from '../../Images/yamaha.jpg'

function Brands() {
  return (
    <div className="container">
      <h3 className="title">ALL BRANDS</h3>
      <h1 className="heading">Popular Brands</h1>
      <div className='brands'>
        <div className='brand-item'>
          <img src={aprilia} alt="Marca 1" />
          <a href="#">aprilia</a>
        </div>
        <div className='brand-item'>
          <img src={honda} alt="Marca 1" />
          <a href="#">honda </a>
        </div>
        <div className='brand-item'>
          <img src={ducati} alt="Marca 1" />
          <a href="#">ducati </a>
        </div>
        <div className='brand-item'>
          <img src={harley} alt="Marca 1" />
          <a href="#">harley </a>
        </div>
        <div className='brand-item'>
          <img src={hero} alt="Marca 1" />
          <a href="#">hero </a>
        </div>
        <div className='brand-item'>
          <img src={kawasaki} alt="Marca 1" />
          <a href="#">kawasaki </a>
        </div>
        <div className='brand-item'>
          <img src={royal} alt="Marca 1" />
          <a href="#">royal </a>
        </div>
        <div className='brand-item'>
          <img src={suzuki} alt="Marca 1" />
          <a href="#">suzuki </a>
        </div>
        <div className='brand-item'>
          <img src={triumph} alt="Marca 1" />
          <a href="#">triumph </a>
        </div>
        <div className='brand-item'>
          <img src={tvs} alt="Marca 1" />
          <a href="#">tvs </a>
        </div>
        <div className='brand-item'>
          <img src={vespa} alt="Marca 1" />
          <a href="#">vespa </a>
        </div>
        <div className='brand-item'>
          <img src={yamaha} alt="Marca 1" />
          <a href="#">yamaha </a>
        </div>


        {/* Repite los elementos 'brand-item' para otras marcas */}
      </div>
    </div>
  );
}

export default Brands;
