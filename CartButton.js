import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../Store/Store';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const isClicked = useSelector((state) => state.cart.isClicked);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(cartActions.toggle()); // Dispatch an action to toggle the cart state
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
