import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import NewPRoduct, { NewProducts } from "./components/NewProducts";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import { UpdateProduct } from "./components/UpdateProduct";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/create' element={<NewProducts/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
