/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  let array= [1, 2, 3, 4]

  return (
    <div className="App">
     <Navbar gato={array}  perro="perritos"  ave="avecita"  venado="venadito"/>
     <ItemListContainer bienvenida="Holaaa! Bienvenida!"/>
    </div>

  );
}

export default App;
