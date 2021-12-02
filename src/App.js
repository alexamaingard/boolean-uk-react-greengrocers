import './styles/reset.css'
import './styles/index.css'
import React, { useState } from "react";

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

const initialStoreItems = [
  {
    "id": "001-beetroot",
    "name": "beetroot",
    "price": 0.35
  },
  {
    "id": "002-carrot",
    "name": "carrot",
    "price": 0.35
  },
  {
    "id": "003-apple",
    "name": "apple",
    "price": 0.35
  },
  {
    "id": "004-apricot",
    "name": "apricot",
    "price": 0.35
  },
  {
    "id": "005-avocado",
    "name": "avocado",
    "price": 0.35
  },
  {
    "id": "006-bananas",
    "name": "bananas",
    "price": 0.35
  },
  {
    "id": "007-bell-pepper",
    "name": "bell pepper",
    "price": 0.35
  },
  {
    "id": "008-berry",
    "name": "berry",
    "price": 0.35
  },
  {
    "id": "009-blueberry",
    "name": "blueberry",
    "price": 0.35
  },
  {
    "id": "010-eggplant",
    "name": "eggplant",
    "price": 0.35
  }
]

export default function App() {
  const [groceries, setGroceries] = useState(initialStoreItems)

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul class="item-list store--item-list">
          {groceries.map(grocery =>
            <li>
              <div className="store--item-icon">
                 <img src={`./assets/icons/${grocery.id}.svg`} alt={grocery.name}/>
              </div>
              <button onClick={() => addItem()}>Add to cart</button>
            </li>
            )}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div class="cart--item-list-container">
          <ul class="item-list cart--item-list">
            {/* Wrtite some code here... */}
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
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
