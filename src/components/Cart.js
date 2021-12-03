import "../styles/cart.css"

const CartItem = (props) => {
  return (
      <li>
          <img
              className="cart--item-icon"
              src={`./assets/icons/${props.cartItem.item.id}.svg`}
              alt={props.cartItem.name}
          />
          <p>{props.cartItem.item.name}</p>
          <button 
            className="quantity-btn remove-btn center"
            onClick={() => props.removeFromCart(props.cartItem)}  
          >-</button>
          <span className="quantity-text center">{props.cartItem.quantity}</span>
          <button 
            className="quantity-btn add-btn center"
            onClick={() => props.addToCart(props.cartItem)}
          >+</button>
      </li>
  )
}

const Cart = (props) => {
  const calculateTotal = () => {
    let total = 0;
    props.cartItems.map(cartItem => {
      total += cartItem.quantity * cartItem.item.price;
    });
    return total.toFixed(2);
  }

  let total = '£' + calculateTotal();

  return (
      <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {props.cartItems.map(cartItem =>
            <CartItem 
              cartItem={cartItem}
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
            />)
          }
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">{total}</span>
        </div>
      </div>
    </main>
  )
}

export default Cart