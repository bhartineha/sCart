import React, {useState, useEffect} from 'react';
import Header from './common/Header';
import ProductsList from './ProductsList';
import {getAllProduct} from '../api/allApi';
import FilterComponent from './FilterComponent';
import Footer from './common/Footer';

const ProductsPage = (props) => {
    const [products, setProducts] = useState([]);

    const [searchValue, setSearchValue] = useState({
        inputVal: "",
        itemCount: 0
    });

    const handleChange = event => {
        const updatestate = {...searchValue};
        updatestate.inputVal =  event.target.value;
        setSearchValue(updatestate);
    }

    const [searchStr, setSearchStr] = useState({
        queryStr: ""
    });

    const handleAddItem = event => {
        const updatestate = {...searchValue};
        updatestate.itemCount = searchValue.itemCount + 1
        setSearchValue(updatestate);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setSearchStr({ queryStr: searchValue.inputVal })
    }

    useEffect(() => {
        searchStr.queryStr ? getAllProduct(searchStr.queryStr).then(products => setProducts(products)) : getAllProduct().then(products => setProducts(products));
    }, [searchStr])

    return (
        <div className="container-fluid">
            <Header userObj = {props.userObj} itemCount = {searchValue.itemCount} handleChange={handleChange} onClick={handleSubmit}/>
            <div className="row">
                <FilterComponent/>
                <ProductsList products={products} onClick = {handleAddItem} />
            </div>
            <Footer />
        </div>
    )
}

export default ProductsPage;