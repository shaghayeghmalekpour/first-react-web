import React from 'react'
import Cart from './components/Cart'
import Products from './components/Products'

function App() {
  return (
<div className="row">
<header className="header col-12">React Shopping Cart</header>
<Products />
<Cart  />

<footer className="footer col-12">All right is reserved</footer>
      </div>
  );
}

export default App;
