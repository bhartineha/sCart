import React from 'react';
import logo from '../../images/logo.png';

const Header = (props) => {
    return (
        <div className="row">
            <div className="col-md-1" >
                <img src={logo} width="80" height="50" alt="logo" />
            </div>
            <div className="col-md-9 input-group input-group-lg">
                <input type="text" className="form-control input-lg" onChange= {props.handleChange} name="searchProduct" placeholder="Search Products"/>
                <button className="btn btn-primary" onClick={props.onClick}>Search</button>
            </div>
            <div className="col-md-2">
                <div>
                    <span className="fa fa-user"> Welcome {props.userObj.username}!</span>
                </div>
                <div>
                    {props.itemCount > 1 ? <span> {props.itemCount} items</span> : <span> {props.itemCount} item</span>}
                </div>
            </div>
        </div>
    )
}

export default Header;