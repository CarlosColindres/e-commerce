import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { connect } from "react-redux";
import { auth } from "../firebase/firebase.utils";
import CartIcon from "../components/CartIcon";
import Cart from "../components/Cart";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/">
          CONTACT
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
      {hidden ? null : <Cart />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden,
  };
};

export default connect(mapStateToProps)(Header);
