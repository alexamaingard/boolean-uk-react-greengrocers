import '../styles/store.css'

import React, { useState } from "react";

import Cart from './Cart'
import Footer from './Footer'

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



const Store = () => {
    const [storeItems, setStoreItems] = useState(initialStoreItems)
    const [cartItems, setCartItems] = useState([])

    const addToCart = (storeItem) => {
        let alreadyInCart = false;
        const updatedCartItems = cartItems.map(cartItem => {
          if (storeItem.id === cartItem.item.id) {
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
    

    return (
        <>
            <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
            {storeItems.map(storeItem =>
                <li>
                <div className="store--item-icon">
                    <img src={`./assets/icons/${storeItem.id}.svg`} alt={storeItem.name}/>
                </div>
                <button id={storeItem.name} onClick={() => addToCart(storeItem)}>Add to cart</button>
                </li>
                )}
            </ul>
        </header>
        <Cart addToCart={addToCart} cartItems={cartItems}/>
        <Footer /> 
      </>
    )
}

export default Store