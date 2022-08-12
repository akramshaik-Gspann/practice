import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import ProductPage from "../ProductInformation/productPage";
import women from "../../assets/images/lady_.jpg";
import BreadCrumb from '../BreadCrumb/breadCrumb';
import '../../assets/scss/productList.css';
import { FiSliders } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import Filter from '../Filter/Filter';

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="productCatalog">
      <div className="productCatalog-mobile">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__image">
              <img src={women} alt="women" />
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__title">
              <h3>All Product's</h3>
            </div>
          </div>
        </div>

        <section className="productfilter">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <Filter />
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 ">
              <ProductPage />
            </div>
          </div>
        </section>
      </div>


      <div className="productCatalog-desktop">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--4">
            <div className="productCatalog__title">
              <h3>All Product's</h3>
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--default--8">
            <div className="productCatalog__image">
              <img src={women} alt="women" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="breadcrumbslist">
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                <BreadCrumb />
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                <div className="product-filter">
                  <button><FiSliders />Filter Results</button><button><RiArrowUpDownLine /> Sort Products</button>
                </div>
                <div className="breadcrumbslist__filter">
                  <p>{products.length} Results</p>
                  <div className="sortByLatest">
                    <select>
                      <option>Sort by Price</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="productfilter">
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                <Filter />
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 ">
                <ProductPage />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
