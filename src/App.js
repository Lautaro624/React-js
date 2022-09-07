
import './App.css';
import 'core-js/actual';
import Navbar from './componentes/Navbar';
import Itemlistcontainer from './componentes/Itemlistcontainer';


function App() {
  /*
  let imagen = "stacker-quintuple (1).png"
  let titulo ="Stacker Quíntuple"
  let descripcion ="5 carnes a la parri, salsa stacker, pan, queso cheddar, panceta. Solo para expertos"
  <div className="row">
        <div className ="col-md-2">
          <img src = {imagen} alt = {titulo} className = "image-fluid" />
        </div>
        <div className = "col-md-2">
          <h1> {titulo} </h1>
          <p> {descripcion}</p>
        </div>
      </div>
  */

  return (
  
    <div className="container">
    <Navbar />
    <Itemlistcontainer greeting="Bienvenidos!"  />
    

     
    </div>
  );
}

export default App;
