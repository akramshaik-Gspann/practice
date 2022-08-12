import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../../assets/scss/orderSuccessfull.css';
import Instagram from '../../assets/images/instagram.svg';
import Facebook from '../../assets/images/facebook.svg';
import Twitter from '../../assets/images/twitter.svg';

function OrderSuccessfull(props) {
    const shippingAddress = useSelector((state) => state.orderDetails.shippingAddress);
    const shippingMethod = useSelector((state) => state.orderDetails.shippingMethod);

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
            <section className="checkOutCart">
                <h1>Order Successful!</h1>
                <h4 className='orderNumberTitle'>Order Number #1700834</h4>
                <div class="aem-Grid aem-Grid--12">
                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <div className='cartA'>
                            <div class="aem-Grid aem-Grid--12 order-method">

                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <div className='order_details'>
                                        <h3>Shipping Information </h3>
                                        <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                            <p className='shipping_details'>{shippingAddress.email} <br />{shippingAddress.phoneNumber}</p>
                                        </div>
                                        <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                            <p className='shipping_details'>
                                                {shippingAddress.streetAddress}<br /> {shippingAddress.streetAddress1} <br />{shippingAddress.city} {shippingAddress.state} {shippingAddress.zipcode}<br /> {shippingAddress.country}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <div className='order_details'>
                                        <h3>Shipping Method</h3>

                                        <p className='shipping_details'>
                                            {shippingMethod}
                                        </p>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <div className='order_details'>
                                        <h3>Payment Information</h3>
                                        <p className='shipping_details'>
                                            Credit Card<br />
                                            Visa ending in 4567<br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="aem-Grid aem-Grid--12 aem-GridColumn--phone--12">
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
                                        </>
                                    ))}</>

                                }
                            </div>
                            <div className='terms_order'>
                                <p className='terms_condition'>
                                    You will also receive an email with the details and we will let you know when your order has shipped.
                                </p>
                                <p className='order_condition'>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div class="orderSuccessfull-rightColumn">
                            <div class="orderSuccessfull-right">
                                <p className='order__Summary'>Give us a follow<br /> to SAVE 20%<br />on your next order.</p>
                                <div className='order__socialicons'>
                                    <img src={Instagram} alt="instagram" />
                                    <img src={Facebook} alt="facebook" />
                                    <img src={Twitter} alt="twitter" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OrderSuccessfull