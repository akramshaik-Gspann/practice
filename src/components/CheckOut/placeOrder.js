import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../assets/scss/placeOrder.css';
import Edit from '../../assets/images/Edit.svg';
import { useSelector } from 'react-redux';

function PlaceOrder(props) {
    const shippingAddress = useSelector((state) => state.orderDetails.shippingAddress);
    const shippingMethod = useSelector((state) => state.orderDetails.shippingMethod);
    const paymentInfo = useSelector((state) => state.orderDetails.paymentInfo);


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
        <div className='container'>
            <section className="placeOrderCart">
                <h1>Checkout</h1>
                <div class="aem-Grid aem-Grid--12">
                    <h4 className='placeOrderTitle'>Guest Checkout</h4>
                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <div className='cartA'>
                            <div class="aem-Grid aem-Grid--12 placeorder-method">
                                <div className='editOption'>
                                    <p>Shipping Information</p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <p className='shipping_details'>{shippingAddress.email} <br />{shippingAddress.phoneNumber}</p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <p className='shipping_details'>
                                        {shippingAddress.streetAddress}<br /> {shippingAddress.streetAddress1} <br />{shippingAddress.city} {shippingAddress.state} {shippingAddress.zipcode}<br /> {shippingAddress.country}
                                    </p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <div className='editIcon2'>
                                        <img src={Edit} /><span>Edit</span>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div class="aem-Grid aem-Grid--12 placeorder-method">
                                <div className='editOption'>
                                    <p>Shipping Method</p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                    <p className='shipping_details'>
                                        {shippingMethod}
                                    </p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <div className='editIcon2'>
                                        <img src={Edit} /><span>Edit</span>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="aem-Grid aem-Grid--12 placeorder-method">
                                <div className='editOption'>
                                    <p>Payment Information</p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                    <p className='shipping_details'>
                                        {paymentInfo.paymentMethod}<br />
                                        Visa ending in {paymentInfo.cardNumber?.substring(paymentInfo.cardNumber?.length - 4)}<br />
                                    </p>
                                </div>

                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <div className='editIcon3'>
                                        <img src={Edit} /><span>Edit</span>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div class="aem-Grid aem-Grid--12">
                                <div className='shipping_info_radio'>
                                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                        <div class="aem-Grid aem-Grid--12 placeorder-method">
                                            <div className='editOption'>
                                                <h5>{cartItems.length} items in your order</h5>
                                            </div>
                                            {cartItems.length === 0 ? <h2 className='emptybasket'>Basket is empty <i className='tear-icon fas fa-sad-tear'></i></h2> :
                                                <>{cartItems?.map((item) => (
                                                    <>
                                                        <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                            <div className='items-inorder'>
                                                                <img src={item.image} />
                                                                <div>
                                                                    <h6>{item.title}</h6>
                                                                    <p>Size: Medium</p>
                                                                    <p>Color: Storm</p>
                                                                    <p>Quantity: {item.qty}</p>
                                                                    <p>Price: ${item.price}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12"></div>
                                                    </>
                                                ))}</>
                                            }
                                        </div>
                                    </div>
                                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    </div>
                                </div>
                            </div>

                            <div className='payment__method'>
                                <div className='placeOrder_btn'>
                                    <Link to="/orderSuccessfull">
                                        <button type="button" class="btn-shipping-method">
                                            PLACE ORDER
                                        </button></Link>
                                </div>
                            </div>
                            <div className='terms'>
                                <p className='terms_condition'>By clicking confirm order you agree to our <Link to='/' ><span className='condition'>Terms and Conditions</span></Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div class="aem-Grid aem-Grid--12 aem-GridColumn--phone--12 button-btnone">
                            <p className='pricingSummary'>Pricing Summary</p>
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PlaceOrder