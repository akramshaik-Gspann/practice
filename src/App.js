import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setCartData } from './redux/actions/productsActions'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";
import ProductDetails from "../src/components/Product/productDetail";
import Header from '../src/components/Header/header';
import Footer from "./components/Footer/footer";
import Basket from "./components/Cart/basket";
import Home from "./components/Home/home";
import LoginApp from "./components/SignIn/LoginApp"
import ProductList from "./components/Products/products";
import WomenProductList from "./components/Products/womenslist";
import MenProductList from "./components/Products/menProductsList";
import SmartGearProductList from "./components/Products/smartGearProductList";
import AccessoriesProductList from "./components/Products/accessoriesProductList";
import RegisterForm from "./components/Register/register";
import Hamburger from "./components/Header/hamburger";
import CheckOutForm from "./components/CheckOut/checkOutForm";
import ShippingInformation from "./components/CheckOut/shippingInformation";
import ShippingMethod from "./components/CheckOut/shippingMethod";
import PaymentInformation from "./components/CheckOut/paymentInformation";
import PlaceOrder from "./components/CheckOut/placeOrder";
import OrderSuccessfull from "./components/CheckOut/orderSuccessfull";
import Filter from "./components/Filter/Filter";
import { Breadcrumbs } from "@material-ui/core";

function App() {

  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const onAdd = (product) => {
    dispatch(setCartData(product));
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Router>
        {/* <Header countCartItems= {cartItems.map((item) => (item.qty ))} /> */}
        <Header countCartItems={cartItems.length} />
        <Hamburger countCartItems={cartItems.length} />
        <Breadcrumbs  cartItems={cartItems}/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<LoginApp />} />
          <Route exact path="/registerForm" element={<RegisterForm />} />
          <Route exact path='/filter' element={<Filter />} />
          <Route exact path='/women' element={<WomenProductList  cartItems={cartItems}/>} />
          <Route exact path='/men' element={<MenProductList />} />
          <Route exact path='/jewellery' element={<SmartGearProductList />} />
          <Route exact path='/electronics' element={<AccessoriesProductList />} />
          <Route exact path='/products' element={<ProductList  cartItems={cartItems} />} />

          <Route exact path='/checkoutForm' element={<CheckOutForm cartItems={cartItems} />} />
          <Route exact path='/shippingInformation' element={<ShippingInformation cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route exact path='/shippingMethod' element={<ShippingMethod cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route exact path='/paymentInformation' element={<PaymentInformation cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route exact path='/placeOrder' element={<PlaceOrder cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route exact path='/orderSuccessfull' element={<OrderSuccessfull cartItems={cartItems} />} />

          <Route exact path='/product/:productId' element={<ProductDetails onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
          <Route exact path='/cart' element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route>404 Not Found!</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
