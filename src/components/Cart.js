import "../styles/cart.css"

// Hardcode of an item
const CartItem = (props) => {
    return (
        <li>
            <img
                className="cart--item-icon"
                src={`./assets/icons/${props.cartItem.item.id}.svg`}
                alt={props.cartItem.name}
            />
            <p>{props.cartItem.item.name}</p>
            <button className="quantity-btn remove-btn center">-</button>
            <span className="quantity-text center">{props.cartItem.quantity}</span>
            <button className="quantity-btn add-btn center">+</button>
        </li>
    )
}

const Cart = (props) => {
  console.log(props.cartItems)
    return (
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {props.cartItems.map(cartItem =>
            <CartItem cartItem={cartItem}/>)}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
    )
}

export default Cart