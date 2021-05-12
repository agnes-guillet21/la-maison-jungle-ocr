import logo from '../logo.svg';
import '../App.css';
import Banner from './banner.js';
import Cart from'./Cart';
import ShoppingList from './ShoppingList.js';
import Footer from './Footer'
import '../styles/Layout.css'
import { useState } from 'react';


function App() {
  const [cart, updateCart] = useState([])
  // initialisation du state avc un tableau vide
  //    remonter cart ds App.js
  return (
    <div>
        <Banner>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>La maison jungle</h1>
        </Banner>
        <div className='lmj-layout-inner'>
            <Cart cart={cart} updateCart={updateCart} />
            <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
        <Footer />
    </div>
)
}

export default App