import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectCartItems} from '../../store/cart/cart.selector';
import {addItemToCart,removeItemFromCart, removeProductFromCart} from '../../store/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems= useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    // <tr>
    //   <td><img src={imageUrl} alt={name} /></td>
    //   <td>{name}</td>
    //   <td>
    //   <span onClick={()=>removeItemFromCart(cartItem)}>Decrease</span> 
    //   {quantity} 
    //   <span onClick={()=>addItemToCart(cartItem)}>Increase</span> 
    //   </td>
    //   <td>{price}</td>
    //   <td>*</td>
    // </tr>
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={()=>dispatch(removeItemFromCart(cartItems,cartItem))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>dispatch(addItemToCart(cartItems,cartItem))}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className="remove-button" onClick={() => dispatch(removeProductFromCart(cartItems,cartItem))}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem