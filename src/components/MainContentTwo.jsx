import React from 'react'

import "../styles/components/maincontenttwo.css";
import assai from '../assets/images/assai.png';
import carrefour from '../assets/images/carrefour.png';
import coop from '../assets/images/coop.png';
import hirota from '../assets/images/hirota.png';
import lopes from '../assets/images/lopes.png';
import paoDeAcucar from '../assets/images/pao-de-acucar.png';
import tenda from '../assets/images/tenda.png';
import logo from '../assets/images/logo.png';
import 'aos/dist/aos.css';

const MainContentTwo = () => {
  return (
  <div className="content">
    <img className="logo" src={logo} alt="logo"/>
    <h2 data-aos="zoom-in">All of our<br/>crew</h2>
    <div className="crew">
      <div data-aos="zoom-in" className="brands">
        <div>
          <img id="assai" src={assai} alt="assai" />
        </div>
      </div>
      <div  data-aos="zoom-in" className="brands">
        <div>
          <img src={carrefour} alt="carrefour" />
        </div>
      </div>
      <div data-aos="zoom-in" className="brands">
        <div>
          <img src={coop} alt="coop" />
        </div>
      </div>
      <div data-aos="zoom-in" className="brands">
        <div>
          <img src={hirota} alt="hirota" />
        </div>
      </div>
      <div data-aos="zoom-in" className="brands">
        <div>
          <img src={lopes} alt="lopes" />
        </div>
      </div>
      <div data-aos="zoom-in" className="brands">
        <div>
          <img src={paoDeAcucar} alt="paoDeAcucar" />
        </div>
      </div>
      <div data-aos="zoom-in" className="brands">
        <div>
          <img src={tenda} alt="tenda" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default MainContentTwo
