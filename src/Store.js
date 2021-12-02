import './styles/store.css'

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
        <Cart />
        <Footer /> 
      </>
    )
}

export default Store