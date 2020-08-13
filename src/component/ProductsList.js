import React from 'react';
import '../style.css';

const ProductsList = (props) => {
    return (
        <div className="col-9">
            <div className="row">
                {props.products.map((product, index) => {
                    return (
                        <div key={index} className="col-4 productClass">
                            <div>
                                <img src={product.image} width='100%' height='150' alt={product.image} />
                            </div>
                            <div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <span> <b>Product: </b> {product.title}</span>
                                    </div>
                                    <div className='col-6'>
                                        <span> <b>Color: </b> {product.colour.title}</span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <span> <b>Brand: </b> {product.brand}</span>
                                    </div>

                                </div>

                                <div className='row'>
                                    <div className='col-6'>
                                        <span> <b>Price: </b> {product.price.final_price}$</span>
                                    </div>
                                    <div className='col-6'>
                                        <div className="btn btn-primary" onClick={props.onClick}>Add</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ProductsList;