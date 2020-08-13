import React from 'react';
import '../../style.css';

const Footer = (props) => {
    return (
        <div className="row borderClass">
            <div className="col-md-11 textCenter" >
                <span> @abc.com </span>
            </div>
            <div className="col-md-1" >
                <span style={{textAlign: 'center'}}>  sCart </span>
            </div>
        </div>
    )
}

export default Footer;