import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing/Landing.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Cart from "./pages/Cart/Cart.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
