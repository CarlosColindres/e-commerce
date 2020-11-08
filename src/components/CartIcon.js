import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import {connect} from 'react-redux'
import {toggleCart} from '../store/actions/toggleCartAction'

const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCart())
  }
}

export default connect(null,mapDispatchToProps)(CartIcon);
