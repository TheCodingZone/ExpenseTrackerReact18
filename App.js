import React from 'react';
import { useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Cart from './components/Cart/Cart';

function App() {
  const isClicked = useSelector((state) => state.cart.isClicked);

  return (
    <Layout>
      {isClicked && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
