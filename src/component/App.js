import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import LoginPage from './LoginPage';

const App = () => {

  const [usrObj, setUsrObj] = useState({
    isLoggedIn: false,
    userObj: {}
  });

  const onLoginSuccess = (usObj) => {
    const updatestate = {...usrObj, isLoggedIn: true, userObj : usObj }
    setUsrObj(updatestate);
  }

  return(
      <Switch>
          <Route path="/" exact component={ usrObj.isLoggedIn ? () => <ProductsPage userObj = {usrObj.userObj} /> : () => <LoginPage onLoginSuccess = {onLoginSuccess}/>} />
      </Switch>
  )
}

export default App;