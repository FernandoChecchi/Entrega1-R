import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div>
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={<ItemListContainer mensaje="Bienvenido a VinoShop - Tu tienda de vinos online" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer mensaje="Catálogo de Vinos" />}
            />
            <Route
              path="/item/:itemId"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
            <Route
              path="/404"
              element={<NotFound />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
