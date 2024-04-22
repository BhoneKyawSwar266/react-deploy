import React from 'react';
import { Link } from 'react-router-dom';
import "../Footer/Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instragram_icon from "../Assets/instagram_icon.png";
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import tiktok from '../Assets/tiktok.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt="" />
        <p>Millionaire</p>
      </div>


      <div className="footer-social-icons">
        <div className="footer-icons-container">
        <img src={tiktok} alt="" />
        </div>
        <div className="footer-icons-container">
            <FacebookIcon/>
        </div>
        <div className="footer-icons-container">
            <Link to='/about'  onClick={scrollToTop}> <InfoIcon/> </Link>  
        </div>
        <div className="footer-icons-container">
            <Link to='/location'  onClick={scrollToTop}> <LocationOnIcon/> </Link>  
        </div>
      </div>
      <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2024 - All Right Reversed</p>
      </div>
    </div>
  );
};

export default Footer;
