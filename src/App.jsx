import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div>
      <NavBar />

      <ItemListContainer mensaje="Bienvenido a VinoShop - Tu tienda de vinos online" />
    </div>
  )
}

export default App
