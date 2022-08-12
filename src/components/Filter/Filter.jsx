import React from 'react'
import '../../assets/scss/Filter.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Filter() {
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;

    const filterHandler = (checked, path) => {
        if (checked) {
            return navigate(path)
        }
        return null;
    }
    return (
        <div className='filterone'>
            <div className='filter'>
                <h6>Filters</h6>
            </div>
            <hr />
            <div className='attribute'>
                <h6>Categories</h6>
                <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/women")} checked={pathname == "/women"} id="option" name="option" value="option" />&nbsp;Women</label>
                <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/men")} checked={pathname == "/men"} id="option" name="option" value="option" />&nbsp;Men</label>
                <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/jewellery")} checked={pathname == "/jewellery"} id="option" name="option" value="option" />&nbsp;Jewelery</label>
                <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/electronics")} checked={pathname == "/electronics"} id="option" name="option" value="option" />&nbsp;Electronics</label>
                <hr />
            </div>
        </div>



    )
}
export default Filter