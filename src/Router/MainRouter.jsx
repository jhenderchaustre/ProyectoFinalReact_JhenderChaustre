import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Category from "../Pages/Category"
import ItemDetailContainer from "../Pages/ItemDetailContainer"
import NavBar from "../components/NavBar/NavBar";
import CreateProduct from "../Pages/CreateProduct";

const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/create-product" element={<CreateProduct />}/>
        </Routes>
    </BrowserRouter>
  )
}
export default MainRouter
