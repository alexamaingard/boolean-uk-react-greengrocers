import '../styles/store.css'

import React, { useState } from "react";

import Cart from './Cart'
import Footer from './Footer'

const initialStoreItems = [
  { 
    "id": "001-beetroot",
    "name": "beetroot",
    "price": 0.35,
    "type": "veg"
  },
  {
  "id": "002-carrot",
  "name": "carrot",
  "price": 0.25,
  "type": "veg"
  },
  {
  "id": "003-apple",
  "name": "apple",
  "price": 0.30,
  "type": "fruit"
  },
  {
  "id": "004-apricot",
  "name": "apricot",
  "price": 0.40,
  "type": "fruit"
  },
  {
  "id": "005-avocado",
  "name": "avocado",
  "price": 0.55,
  "type": "fruit"
  },
  {
  "id": "006-bananas",
  "name": "bananas",
  "price": 0.75,
  "type": "fruit"
  },
  {
  "id": "007-bell-pepper",
  "name": "bell pepper",
  "price": 0.50,
  "type": "veg"
  },
  {
  "id": "008-berry",
  "name": "berry",
  "price": 0.40,
  "type": "fruit"
  },
  {
  "id": "009-blueberry",
  "name": "blueberry",
  "price": 0.65,
  "type": "fruit"
  },
  {
  "id": "010-eggplant",
  "name": "eggplant",
  "price": 0.30,
  "type": "veg"
  }
]

const Store = () => {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  const addToCart = storeItem => {
    let alreadyInCart = false;
    const updatedCartItems = cartItems.map(cartItem => {
      if (storeItem.id === cartItem.item.id || (storeItem.item && storeItem.item.id === cartItem.item.id)) {
        const cartItemToUpdate = {
          ...cartItem,
          quantity: cartItem.quantity + 1
        };
        alreadyInCart = true;
        return cartItemToUpdate;
      } 
      else {
        return cartItem;
      }
    });
    if (!alreadyInCart) {
      const newCartItem = {
        item: storeItem,
        quantity: 1
      };
      setCartItems([...cartItems, newCartItem]); 
    } 
    else {
      setCartItems(updatedCartItems); 
    }
  }
  
  const removeFromCart = storeItem => {
    const updatedCartItems = cartItems.map(cartItem => {
      if(storeItem.item.id === cartItem.item.id){
        if(cartItem.quantity > 1){
          const cartItemToUpdate = {
            ...cartItem,
            quantity: cartItem.quantity - 1
          };
          return cartItemToUpdate;
        }
        else {
          return null;
        }
      }
      else {
        return cartItem;
      }
    });
    const remainingCartItems = updatedCartItems.filter(cartItem => cartItem);
    setCartItems(remainingCartItems);
  }

  const handleChangeTypeFilter = (event) => {
    const storeItemsCopy = [...initialStoreItems];
    const filter = event.target.value;
    if(filter !== "default"){
      const filteredStoreItems = storeItemsCopy.filter(storeItem => storeItem.type === filter);
      setStoreItems(filteredStoreItems);
    }
    else {
      setStoreItems(storeItemsCopy);
    }
  }

  const handleChangeSortFilter = (event) => {
    const filter = event.target.value;
    const storeItemsCopy = [...initialStoreItems];
    if(filter === "alf"){
      const sortedStore = storeItemsCopy.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      setStoreItems(sortedStore);
    }
    else if(filter === "price"){
      const sortedStore = storeItemsCopy.sort((a, b) => {
        return a.price - b.price;
      });
      console.log(sortedStore);
      setStoreItems(sortedStore);
    }
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <div>
          <form onChange={handleChangeTypeFilter}>
            <select>
              <option value="default">Filter By</option>
              <option value="veg">Vegetables</option>
              <option value="fruit">Fruits</option>
            </select>
          </form>
          <br/>
          <form onChange={handleChangeSortFilter}>
            <select>
              <option value="default">Sort</option>
              <option value="alf">Alphabetically</option>
              <option value="price">Price</option>
            </select>
          </form>
        </div>
        <ul className="item-list store--item-list">
          {storeItems.map(storeItem =>
              <li>
                <details>
                  <summary>{storeItem.name}</summary>
                  <p>£ {storeItem.price}</p>
                </details>
              <div className="store--item-icon">
                  <img src={`./assets/icons/${storeItem.id}.svg`} alt={storeItem.name}/>
              </div>
              <button id={storeItem.name} onClick={() => addToCart(storeItem)}>Add to cart</button>
              </li>
              )}
        </ul>
      </header>
      <Cart 
        addToCart={addToCart} 
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <Footer /> 
    </>
  )
}

export default Store