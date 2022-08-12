import React from 'react'
import '../../assets/scss/home.css';
import male from "../../assets/images/Male.png";
import male1 from "../../assets/images/Men_Hero.png";
import HomePage from "../../assets/images/Mens.png";
import Slider from "../../components/Home/slider";
import { NavLink } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";

function Home() {
    return (
        <>
            {/* Desktop Landing Page Start Here*/}
            <div className='landingPage_Desktop'>
                <Slider />
                <div className='hero_landing'>
                    <div className='container'>
                        <div className='text---one'>
                            <div class="aem-Grid aem-Grid--12  ">
                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn.aem-GridColumn--tablet--2">
                                    <div className='card--one'>
                                        <img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" />
                                        <div className="shop_Products">
                                            <NavLink to="/women">
                                                <h5>Shop Women</h5>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn.aem-GridColumn--tablet--2">

                                    <div className='card--one'>
                                        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
                                        <div className="shop_Products">
                                            <NavLink to="/men" >
                                                <h5>Shop Men</h5>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn.aem-GridColumn--tablet--2">
                                    <div className='card--one'>
                                        <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" />
                                        <div className="shop_Products">
                                            <NavLink to="/jewellery">
                                                <h5>Jewellery</h5>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn.aem-GridColumn--tablet--2">
                                    <div className='card--one'>
                                        <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" />
                                        <div className="shop_Products">
                                            <NavLink to="/electronics" >
                                                <h5>Electronics</h5>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homeDiv1'>
                    <div className='container'>
                        <div class="aem-Grid aem-Grid--12">
                            <div class="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
                                <div className="hero__title">
                                    <h1>Take off in the new <br />Signature Legging</h1>
                                    <h3>Lorem Ipsum Dolor Tempor</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                                    <input type="button" class="btn-one" value="SHOP COLLECTION " />
                                    <input type="button" class="btn-two" value="SHOP NOW " />
                                </div>
                            </div>
                            <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                                <div className="hero__image">
                                    <img src={male} alt="male" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homeDiv'>
                    <div className="container">
                        <div class="aem-Grid aem-Grid--12">
                            <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                <div class="card-img">
                                    <img src={male1} />
                                </div>
                            </div>
                            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <div class="two-card">
                                    <div className='landingHero'>
                                        <h5 class="three-card">Conquer your<br /> next adventure</h5>
                                        <p className='card-ab'>Lorem Ipsum Dolor Tempor</p>
                                        <input type="button" class="btn-four" value="SHOP DEVICES" />
                                    </div>
                                    <div className='location'>
                                        < FiMapPin />
                                        <div className='horizontalLine'>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Desktop Landing Ends Here */}
            {/* Mobile Landing Page Start */}
            <div className='landingPage_Mobile'>
                {/* <Slider /> */}
                <div class="aem-Grid aem-Grid--12">
                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className='landing_Image'>
                            <img src={HomePage} />
                        </div>
                    </div>
                </div>
                <div class="aem-Grid aem-Grid--12">
                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className='landing_information'>
                            <h1 className='signature_collection'>Shop the new Signature Collection</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <NavLink to="/products">
                                <button className='landing_button'>SHOP NOW</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='hero_landing'>
                    <div className='container'>
                        <div className=''>
                            <div class="aem-Grid aem-Grid--12  ">
                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                    <div className='card--one'>
                                        <img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" />
                                        <div className="shop_Products">
                                            <NavLink to="/women">
                                                <h5>Shop Women</h5>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">

                                    <div className='card--one'>
                                        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
                                        <div className="shop_Products">
                                            <NavLink to="/men" >
                                                <h5>Shop Men</h5>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                    <div className='card--one'>
                                        <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" />
                                        <div className="shop_Products">
                                            <NavLink to="/electronics">
                                                <h5>Jewellery</h5>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                    <div className='card--one'>
                                        <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" />
                                        <div className="shop_Products">
                                            <NavLink to="/jewellery" >
                                                <h5>Electronics</h5>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homeDiv1'>
                    <div className=''>
                        <div class="aem-Grid aem-Grid--12">
                            <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                                <div className="male_mobile">
                                    <img src={male} alt="male" />
                                </div>
                            </div>
                            <div class="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
                                <div className="male_mobileInfo">
                                    <h1>Take off in the new Signature Legging</h1>
                                    <h3>Lorem Ipsum Dolor Tempor</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                                    <div>
                                        <input type="button" class="btn-two" value="SHOP NOW " />
                                    </div>
                                    <div className='home_buttons'>
                                        <input type="button" class="btn-one" value="SHOP COLLECTION " />
                                    </div>
                                    <div className='lines'>
                                        <hr />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homeDiv'>
                    <div className="">
                        <div class="aem-Grid aem-Grid--12">
                            <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                <div class="home_image2">
                                    <img src={male1} />
                                </div>
                            </div>
                            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <div className='one-card'>
                                    <div class="two-card">
                                        <div className='landingHero'>
                                            <h5 class="three-card">Conquer your<br /> next adventure</h5>
                                            <p className='card-ab'>Lorem Ipsum Dolor Tempor</p>
                                            <input type="button" class="btn-four" value="SHOP DEVICES" />
                                        </div>
                                        <div className='location'>
                                            < FiMapPin />
                                            <div className='horizontalLine'>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Landing Page End */}
        </>


    )
}

export default Home
