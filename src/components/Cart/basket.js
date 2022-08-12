import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../assets/scss/cart.scss';
import paypal from '../../assets/images/PP_BTN.png';
import trash from '../../assets/images/trash.png';
import edit from '../../assets/images/edit.png';
import heart from '../../assets/images/heart.png';
import Accordions from '../Accordion/accordion';

export default function Basket(props) {

  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const [qty, setQty] = useState(1);

  function onChange(e) {
    const v = e.target.value;
    if (v <= 0) setQty(0);
    else if (v >= 6) setQty(6);
    else setQty(v);
  }

  return (
    <section className="cart">
      <div className='container'>
        <h1>Your Shopping Bag</h1>
        <div className="cart__content">
          {cartItems.length === 0 && <div>Cart is empty</div>}
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              {cartItems.map((item) => (

                <div className='cart__productlayout'>
                  <div class="aem-Grid aem-Grid--12" key={item.id}>
                    <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--2">
                      <div className="cart__image">
                        <img src={item.image} />
                      </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--4">
                      <div className='cart__desktop'>
                        <span className='cart__details'>
                          <h5>{item.title}</h5>
                          <p>Size: Medium</p>
                          <p>Color: Storm</p>
                          <p>Price: ${item.price}</p>
                        </span>
                      </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--3">
                      <div className='cart__desktop'>

                        <div key={item.id} className='cart__btn'>
                          <div className="input-group w-auto align-items-center">
                            <input
                              type="button"
                              value="-"
                              className="button-minus border rounded-circle"
                              data-field="quantity"
                              onClick={() => onRemove(item)}
                            />&nbsp;&nbsp;
                            <h6 className="quant">{item.qty}</h6>&nbsp;&nbsp;

                            <input
                              type="button"
                              value="+"
                              className="button-plus border rounded-circle"
                              data-field="quantity"
                              onClick={() => onAdd(item)}
                            />
                          </div>
                        </div>


                      </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--3">
                      <div className='cart__desktop'>
                        <ul>
                          <li><Link to='#'><img src={edit} /> Edit</Link></li>
                          <li><Link to='#' onClick={() => onRemove(item)}><img src={trash} /> Remove</Link></li>
                          <li><Link to='#'><img src={heart} /> Save for later</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--phone--9">
                      <div className='cart__mobile'>
                        <h5>{item.title}</h5>
                        <p>Size: Medium</p>
                        <p>Color: Storm</p>
                        <p>Price: ${item.price}</p>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 increasebutton">
                          <div className="input-group w-auto align-items-center">
                            <input
                              type="button"
                              value="-"
                              className="button-minus border rounded-circle"
                              data-field="quantity"
                              onClick={() => onRemove(item)}
                            />&nbsp;&nbsp;
                            <h6 className="quant">{item.qty}</h6>&nbsp;&nbsp;
                            <input
                              type="button"
                              value="+"
                              className="button-plus border rounded-circle"
                              data-field="quantity"
                              onClick={() => onAdd(item)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--phone--1">
                      <div className='cart__mobile'>
                        <div className="dropdown">
                          <button className="dropbtn"></button>
                          <div className="dropdown-content">
                            <Link to='#'><img src={edit} /> Edit</Link>
                            <Link to='#' onClick={() => onRemove(item)}><img src={trash} /> Remove</Link>
                            <Link to='#'><img src={heart} /> Save for later</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Accordions />
            </div>

            < div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12" >
              <div className='cart__right'>
                <h4>Pricing Summary</h4>
                {cartItems.length !== 0 && (
                  <>
                    <div className="cart__right-subtotal">
                      <p>Price</p>
                      <p>${itemsPrice.toFixed(2)}</p>
                    </div>
                    <div className="cart__right-coupon">
                      <p>Coupon</p>
                      <p>-$0</p>
                    </div>
                    <div className="cart__right-giftcard">
                      <p>Giftcard</p>
                      <p>-$0</p>
                    </div>
                    <div className="cart__right-tax">
                      <p>Estimated tax</p>
                      <p>${taxPrice.toFixed(2)}</p>
                    </div>
                    <div className="cart__right-ship">
                      <p>Estimated shipping</p>
                      <p>${shippingPrice.toFixed(2)}</p>
                    </div>
                    <div className="cart__right-total">
                      <p><b>Estimated Total</b></p>
                      <p><b>${totalPrice.toFixed(2)}</b></p>
                    </div>
                    <NavLink to="/shippingInformation">
                      <button className=" checkbtn">
                        <i className="fa fa-lock"></i>
                        Checkout
                      </button>
                    </NavLink>
                    <Link to='#'><img src={paypal} alt="paypal" /></Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
