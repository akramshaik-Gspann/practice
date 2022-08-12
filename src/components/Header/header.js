import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import { FiShoppingBag } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import LoginApp from "../SignIn/LoginApp";
import '../../assets/scss/header.css';
import '../../assets/css/aem-grid.css';
import venia from '../../assets/images/venia.png';

const Header = (props) => {
  const [loading, setLoading] = useState(false);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={350} />
          <Skeleton height={350} />
        </div>
      </>
    );
  }
  const ShowProducts = () => {
    return (
      <header className="header">
        <div className="headerHamburger">
          <div class="aem-GridColumn--phone--12">
            <div className="container">
              <div className="header__content">
                <div className="header__logo" >
                  <NavLink className="" to="/"><img src={venia} /></NavLink>
                </div>
                <div className="header__categories">
                  <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/women">Women</NavLink></li>
                    <li><NavLink to="/men" >Men</NavLink></li>
                    <li><NavLink to="/electronics">Electronics</NavLink></li>
                    <li><NavLink to="/jewellery" >Jewellery</NavLink></li>
                  </ul>
                </div>
                <div className="header__icons">
                  <ul>
                    <li><NavLink to='#'><FiSearch /> Search</NavLink></li>
                    <li className="dropdown sign"><NavLink to='#' className='dropbtn'><FiUser /> Sign in</NavLink>
                      <div class="dropdown-content">
                        <div className="login">
                          <LoginApp />
                        </div>
                      </div>
                    </li>
                    <li className="cartCount">
                      <NavLink to="/cart" className="">
                        <FiShoppingBag />{' '}
                        {props.countCartItems ? (
                          <button className="cartCount1">{props.countCartItems}</button>
                        ) : (
                          ''
                        )}
                      </NavLink>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <div className="headerHamburger">
      <div className="">
        <div className="justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}

        </div>
      </div>
    </div>
  )
}
export default Header;
