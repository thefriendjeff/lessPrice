import React from 'react'
import '../styles/components/footer.css';
import lessPrice from '../assets/images/less_price.png';
import 'aos/dist/aos.css'
import backgroundImage from '../assets/images/less_price.png';

const Footer = () => {
  return (
    <div className="footer" style={{ 
      backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="download">
          <button data-aos="zoom-in">Download the App</button>
        </div>
        <p>Copywrite @ 2024 Less Price. All rights reserved.</p>
    </div>
  )
}

export default Footer
