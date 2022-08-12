import React from 'react'
import '../../assets/scss/hamburger.scss';
import { NavLink } from "react-router-dom";
import { FiShoppingBag } from 'react-icons/fi';
import venia from '../../assets/images/venia.png';

function Hamburger(props) {
  return (
    <div className='hamburgerPhone'>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div className="hamberger__logo" >
            <NavLink className="" to="/"><img src={venia} /></NavLink>
          </div>
          <div className="header__icons">
            <ul>
              <NavLink to="/cart" className="">
                <FiShoppingBag />{' '}
                {props.countCartItems ? (
                  <button className="cartCount1">{props.countCartItems}</button>
                ) : (
                  ''
                )}
              </NavLink>{' '}
            </ul>
          </div>
          <div class="menu-items">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/women">Women</NavLink></li>
            <li><NavLink to="/men" >Men</NavLink></li>
            <li><NavLink to="/smartGear" >Smart Gear</NavLink></li>
            <li><NavLink to="/accessories" >Accessories</NavLink></li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger