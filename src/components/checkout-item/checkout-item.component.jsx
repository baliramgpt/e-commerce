import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, removeProductFromCart } = useContext(CartContext)
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
        <div className="arrow" onClick={()=>removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className="remove-button" onClick={() => removeProductFromCart(cartItem)}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem