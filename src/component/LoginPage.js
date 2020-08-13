import React, { useState } from 'react';
import { login } from '../api/allApi';
import '../style.css';

const LoginPage = (props) => {

    const [usrObj, setUsrObj] = useState({
        username: '',
        password: ''
    });

    const onChangeHandle = (event) => {
        event.preventDefault();
        const updateState = {...usrObj, [event.target.name] : event.target.value}
        setUsrObj(updateState);
    }

    const handleSunbmit = (event) => {
        event.preventDefault();
        if(usrObj.username) login(usrObj.username).then((user) => {
            if(user.length === 0)
                alert("Invalid User and Password")
            else if(user[0].password !== usrObj.password)
                alert("Invalid Password")
            else
                props.onLoginSuccess(user[0]);
        });
    }

    return (
        <div className="d-flex justify-content-center align-items-center container loginClass">
            <div className="row ">
                <form onSubmit={handleSunbmit}>
                    <div className="form-group">
                        <input type='textfield' placeholder="User Name" name='username' value={usrObj.username} onChange={onChangeHandle} />
                    </div>
                    <div className="form-group">
                        <input type='password' placeholder="Password" name='password' value={usrObj.password} onChange={onChangeHandle} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;