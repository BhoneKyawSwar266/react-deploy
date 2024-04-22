import React, { useContext, useRef, useState } from 'react';
import '../../Components/Navbar/Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import drop_down from '../Assets/db1.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotlaCartItem } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  const closeMenu = () => {
    menuRef.current.classList.remove('nav-menu-visible');
    // Reset the open class of the dropdown icon if needed
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Millionaire</p>
      </div>
      <img className='nav_dropdown' onClick={dropdownToggle} src={drop_down} alt="" />
      <ul className='nav-meun' ref={menuRef}>
        <li onClick={() => { setMenu("shop"); closeMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to="/"> Shop </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("accessories"); closeMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to='/accessories'> Accessories  </Link>
          {menu === "accessories" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("monitor"); closeMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to='/monitor'> Monitor </Link>
          {menu === "monitor" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("printer"); closeMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to={'/printer'}> printer </Link>
          {menu === "printer" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("laptop"); closeMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to={'/laptop'}> Laptop  </Link>
          {menu === "laptop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("about"); closeMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to={'/about'}> About  </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("location"); closeMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to={'/location'}> Location  </Link>
          {menu === "location" ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to={'/login'}><button>Login</button></Link>
        <Link to={'/cart'}><img src={cart_icon} alt="cart_icon" /></Link>
        <div className='nav-cart-count'>{getTotlaCartItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
