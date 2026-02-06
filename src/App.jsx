import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
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
            path="/404"
            element={<NotFound />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
