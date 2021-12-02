import './styles/cart.css'

// Hardcode of an item
const CartItem = () => {
    return (
        <li>
            <img
                class="cart--item-icon"
                src="assets/icons/001-beetroot.svg"
                alt="beetroot"
            />
            <p>beetroot</p>
            <button class="quantity-btn remove-btn center">-</button>
            <span class="quantity-text center">1</span>
            <button class="quantity-btn add-btn center">+</button>
        </li>
    )
}

const Cart = () => {
    return (
        <main id="cart">
        <h2>Your Cart</h2>
        <div class="cart--item-list-container">
          <ul class="item-list cart--item-list">
            {}
            <CartItem />
          </ul>
        </div>
        <div class="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span class="total-number">£0.00</span>
          </div>
        </div>
      </main>
    )
}

export default Cart