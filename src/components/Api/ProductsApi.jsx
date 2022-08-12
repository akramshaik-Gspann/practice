import store from "../../redux/store";
import { getProducts } from "../../redux/actions/productsActions";
export const getProductData = async () => {
    await fetch('https://fakestoreapi.com/products').then(function (res) {
        return res.json();
    }).then(function (json) {
        store.dispatch(getProducts(json));
    });
};