import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils.js";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";
import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selector.js";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/ОНЦЛОХ ЗАР">
        ОНЦЛОХ ЗАР
      </Link>
      БҮХ ЗАР
      <Link className="БҮХ ЗАР " to="/shop"></Link>
      АЖИЛЫН ЗАР
      <Link className="АЖИЛЫН ЗАР " to="/shop"></Link>
      БАЙР ТҮРЭЭС
      <Link className="БАЙР ТҮРЭЭС " to="/shop"></Link>
      БУСАД ЗАР
      <Link className="БУСАД ЗАР " to="/shop"></Link>
      ИНТЭРНЭТ ХУДАЛДАА
      <Link className="ИНТЭРНЭТ ХУДАЛДАА " to="/shop"></Link>
      <Link className="option" to="/contact-us">
        ХОЛБОО БАРИХ САНАЛ
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
    {/* <p className= king>&#169 2021</p> */}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
