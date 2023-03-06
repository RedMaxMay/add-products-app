import { Route, Routes } from "react-router-dom";
import AboutPages from "../../pages/AboutPages/AboutPages";
import AddProductPage from "../../pages/AddProductPage/AddProductPage";
import BasketPage from "../../pages/BasketPage/BasketPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import TestPage from "../../pages/TestPage/TestPage";
import Nav from "../Nav/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<AddProductPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/about/:name" element={<AboutPages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/test/:id" element={<TestPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
