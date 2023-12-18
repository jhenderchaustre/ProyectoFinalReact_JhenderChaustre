import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
 const App = () => {
  return (
  <div style={{width: '100vw', height: '100vh'}}>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos a Rhino Store®"/>
  </div>
  )
}
export default App; 