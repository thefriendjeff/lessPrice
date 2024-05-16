import React, { useEffect } from 'react'

import "../styles/components/maincontent.css";
import avatarImg from '../assets/images/avatar.png';
import AOS from 'aos';
import 'aos/dist/aos.css'

const MainContent = () => {
  useEffect(()=> {
    AOS.init();
  }, []);

  return (
    <div className="main">
      <section className="one">
        <h2 data-aos="zoom-out">The wiser way<br/>to spend<br/>your money.</h2>
        <p data-aos="zoom-in">Create your own supermarket insert and be notified<br/> when the prices <strong>drop down</strong></p>
        <div className="reasons">
         <ul>
          <li data-aos="zoom-in">
            <h3>Insert List</h3>
            Creat a list with the items which can't miss into your Little cart
          </li>
          <li data-aos="zoom-in">
            <h3>Gold Tips</h3>
            Learn how to save money at the time to make the month purchase
          </li>
          <li data-aos="zoom-in">
            <h3>Comfort</h3>
            Receice your items at home through Delivery Apps
          </li>
          <li data-aos="zoom-in">
            <h3>Discounts</h3>
            As more as you use more discounts you receive
          </li>
         </ul>
        </div>
      </section>
      <section className="two">
        <div className="advantages">
            <div>
              <img data-aos="fade-up" data-aos-duration="1000" src={avatarImg} alt="Avatar" />
            </div>
            <div>
              <h2 data-aos="zoom-out">Don't waste the timing, Puchase the deal of the day online</h2>
            </div>
        </div>
      </section>
    </div>
  )
}

export default MainContent
