import React, {Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage';
import UserLoginPage from '../src/pages/UserLoginPage';
import CartPage from '../src/pages/CartPage';
import ContactPage from '../src/pages/ContactPage';
import FavouritePage from '../src/pages/FavouritePage';
import ProductDetailsPage from '../src/pages/ProductDetailsPage';
import PrivacyPage from '../src/pages/PrivacyPage';
import PurchasePage from '../src/pages/PurchasePage';
import RefundPage from '../src/pages/RefundPage';
import AboutPage from '../src/pages/AboutPage';

function App() {

  return (
    <Router>
        <Fragment>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={UserLoginPage} />
            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/purchase" component={PurchasePage} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route exact path="/refund" component={RefundPage} />
            <Route exact path="/about" component={AboutPage} />  

            <Route exact path="/productdetails" component={ProductDetailsPage} />

            <Route exact path="/favourite" component={FavouritePage} />
            <Route exact path="/cart" component={CartPage} />
        </Switch>
         </Fragment>
    </Router>
  );
}

export default App;
