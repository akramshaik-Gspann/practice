import React, { useState } from 'react'
import '../../assets/scss/shippingInformation.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setShippingAddress } from '../../redux/actions/orderDetailsActions';


function ShippingInformation(props) {

  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const [qty, setQty] = useState(1);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setShippingAddress(data));
    navigate('/shippingMethod');
  };

  return (
    <div className='container'>
      <section className="shipMethodCart">
        <h1>Checkout</h1>
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="aem-Grid aem-Grid--12 ">
                <h4 className='guestOut'>Guest Checkout</h4>
                <p className="contact">
                  Contact information
                </p>
                <p className='details'>
                  We’ll use these details to keep you informed on your delivery.
                </p>
                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                  <div className="form-group">
                    <label className='emailLabel' for="exampleFormControlInput1">Email</label>
                    <input
                      type="text" placeholder="abc@xyz.com"
                      className={`form-control ${errors.email && "invalid"}`}
                      {...register("email", {
                        required: "Please enter the email address",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid Email address",
                        }
                      })}
                      onKeyUp={() => {
                        trigger("email");
                      }}
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email.message}</small>
                    )}
                  </div>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                  <div className="form-group">
                    <label for="Phone Number1">Phone Number</label>
                    <input
                      type="text"
                      className={`form-control ${errors.phoneNumber && "invalid"}`}
                      {...register("phoneNumber", {
                        required: "Please enter the phone number"
                      })}
                      onKeyUp={() => {
                        trigger("phoneNumber");
                      }}
                    />
                    {errors.phoneNumber && (
                      <small className="text-danger">{errors.phoneNumber.message}</small>
                    )}
                  </div>
                </div>
              </div>
              <div class="aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                  <p className='shippingInfo'>1. Shipping Information</p>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Country</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name && "invalid"}`}
                      {...register("country", { required: "Please fill the country field" })}
                      onKeyUp={() => {
                        trigger("country");
                      }}
                    />
                    {errors.country && (
                      <small className="text-danger">{errors.country.message}</small>
                    )}
                  </div>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                </div>
              </div>
              <div class="aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                  <div className="form-group">
                    <label for="exampleFormControlInput1">First Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.lname && "invalid"}`}
                      {...register("fname", {
                        required: "Please enter the first name."
                      })}
                      onKeyUp={() => {
                        trigger("fname");
                      }}
                    />
                    {errors.fname && (
                      <small className="text-danger">{errors.fname.message}</small>
                    )}
                  </div>
                </div>

                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Last Name</label>
                    {/* <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" /> */}

                    <input
                      type="text"
                      className={`form-control ${errors.lname && "invalid"}`}
                      {...register("lname", {
                        required: "PLease enter the last name."
                      })}
                      onKeyUp={() => {
                        trigger("lname");
                      }}
                    />
                    {errors.lname && (
                      <small className="text-danger">{errors.lname.message}</small>
                    )}
                  </div>
                </div>
              </div>
              <div class="aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Street Address</label>
                    <input
                      type="text"
                      className={`form-control ${errors.lname && "invalid"}`}
                      {...register("streetAddress", {
                        required: "There is an error that relates to this field"
                      })}
                      onKeyUp={() => {
                        trigger("streetAddress");
                      }}
                    />
                    {errors.streetAddress && (
                      <small className="text-danger">{errors.streetAddress.message}</small>
                    )}
                  </div>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Street Address 2</label>
                    {/* <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" /> */}
                    <input
                      type="text"
                      className={`form-control ${errors.streetAddress1 && "invalid"}`}
                      {...register("streetAddress1", {
                        required: "There is an error that relates to this field"
                      })}
                      onKeyUp={() => {
                        trigger("streetAddress1");
                      }}
                    />
                    {errors.streetAddress1 && (
                      <small className="text-danger">{errors.streetAddress1.message}</small>
                    )}
                  </div>
                </div>
              </div>
              <div class="aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                  <div className="form-group">
                    <label for="exampleFormControlInput1">City</label>
                    <input
                      type="text" placeholder="Altadena"
                      className={`form-control ${errors.city && "invalid"}`}
                      {...register("city", {
                        required: "There is an error that relates to this field"
                      })}
                      onKeyUp={() => {
                        trigger("city");
                      }}
                    />
                    {errors.city && (
                      <small className="text-danger">{errors.city.message}</small>
                    )}
                  </div>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                  <div className="form-group">
                    <label for="exampleFormControlInput1">State</label>
                    <input
                      type="text"
                      className={`form-control ${errors.state && "invalid"}`}
                      {...register("state", {
                        required: "please fill the state field"
                      })}
                      onKeyUp={() => {
                        trigger("state");
                      }}
                    />
                    {errors.state && (
                      <small className="text-danger">{errors.state.message}</small>
                    )}
                  </div>
                </div>

                <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12">
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Zip</label>
                    <input
                      type="text" placeholder="91001"
                      className={`form-control ${errors.zipcode && "invalid"}`}
                      {...register("zipcode", {
                        required: "please fill the code"
                      })}
                      onKeyUp={() => {
                        trigger("zipcode");
                      }}
                    />
                    {errors.zipcode && (
                      <small className="text-danger">{errors.zipcode.message}</small>
                    )}
                  </div>
                </div>

              </div>
              <br />
              {/* <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 ">
                <div className='continue_shipping'>
                  <button type="submit" class="btn-shipping">
                    CONTINUE TO SHIPPING METHOD
                  </button>
                </div>

                <div className='continue_shipping'>
                  <Link to="/shippingMethod" >
                    <button type="submit" class="btn-shipping">
                      CONTINUE TO SHIPPING METHOD
                    </button>
                  </Link>
                </div>
              </div>
            </div> */}




              <div class="aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 ">
                  {/* <div>
                    <button type="submit" class="btn-shipping">
                      CONTINUE TO SHIPPING METHOD
                    </button>
                  </div> */}

                  <div className='continue_shipping'>
                    {/* <Link to="/shippingMethod" > */}
                    <button type="submit" class="btn-shipping">
                      CONTINUE TO SHIPPING METHOD
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
              <hr />
              <p> 2. Shipping Method</p>
              <hr />
              <p> 3. Payment Information</p>
              <hr />
            </form>


            {/* <div className='checkout_Steps'>
            <hr />
            <h4> 2. Shipping Method </h4>
            {
              !isShipping ? <h4> 2. Shipping Method </h4> : <ShippingMethod isShippingDetails={isShipping} />
            }
            <hr />
            <h4>3. Payment Information</h4>
            <hr />
          </div> */}
          </div>



          <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div class="aem-Grid aem-Grid--12 button-btn">
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 text-left">
                <p className='expressCheckOut'>Sign in for Express <br />Checkout</p>
              </div>

              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 text__right">
                <Link to="/login"> <button type="button" className='btn-signin'>
                  SIGN IN</button></Link>

              </div>
            </div>
            <br />
            <br />
            <br />

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

export default ShippingInformation