import React, { useState, useEffect } from 'react';
import '../style.css';
import {getAllFilter} from '../api/allApi';
import CheckboxGroup from'react-checkbox-group';

const FilterComponent = props => {

    const [filters, setFilters] = useState([]);

    useEffect(()=>{
        getAllFilter().then((filters) => setFilters(filters));
        console.log(filters);
    },[filters])

    return (
        <div className="col-3">
            <div className="container-fluid filterClass">
                <span>Filter</span>
            </div>
            <div className='container-fluid filterDataClass'>
                <div className='row'>
                    <span>Brand:</span>
                </div>
                <div className='row'> 
                 <CheckboxGroup name="brand" >
                 {(Checkbox) => (
                     <>
                        {filters.length !== 0 && filters[0].type === "BRAND" ?
                            filters[0].values.map((brand) => {
                                return  <label><Checkbox  key = {brand.value}  className= "marginClass" value={brand.value} /> {brand.title} </label>
                            }) : ""
                        }
                    </>
                )}
                </CheckboxGroup>
                </div>
            </div>
            <div className='container-fluid filterDataClass'>
                <div className='row'>
                    <span>Colour:</span>
                </div>
                <div className='row'> 
                 <CheckboxGroup name="colour" >
                 {(Checkbox) => (
                     <>
                        {filters.length !== 0 && filters[1].type === "COLOUR" ?
                            filters[1].values.map((colour) => {
                                return  <label><Checkbox key = {colour.title} className= "marginClass" value={colour.color} /> {colour.title} </label>
                            }) : ""
                        }
                    </>
                )}
                </CheckboxGroup>
                </div>
            </div>
            <div className='container-fluid filterDataClass'>
                <div className='row'>
                    <span>Price:</span>
                </div>
                <div className='row'>
                    <label>Min: </label>
                    <select className= "marginClass"> 
                        {filters.length !== 0 && filters[2].type === "PRICE" ?
                            filters[2].values.map((price) => {
                                return <option key = {price.key} value={price.key}>{price.displayValue}</option>
                            }) : ""}
                    </select>
                    <label>Max: </label>
                    <select className= "marginClass"> 
                        {filters.length !== 0 && filters[2].type === "PRICE" ?
                            filters[2].values.map((price) => {
                                return <option key = {price.key} value={price.key}>{price.displayValue}</option>
                            }) : ""}
                    </select>
                </div>
            </div>
            <div className='container-fluid filterDataClass'>
                <div className='row'>
                    <span>Discount:</span>
                </div>
                <div className='row'>
                    <label>Min: </label>
                    <select className= "marginClass"> 
                        {filters.length !== 0 && filters[2].type === "PRICE" ?
                            filters[2].values.map((price) => {
                                return <option key = {price.key} value={price.key}>{price.displayValue}</option>
                            }) : ""}
                    </select>
                    <label>Max: </label>
                    <select className= "marginClass"> 
                        {filters.length !== 0 && filters[2].type === "PRICE" ?
                            filters[2].values.map((price) => {
                                return <option key = {price.key}  value={price.key}>{price.displayValue}</option>
                            }) : ""}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterComponent;