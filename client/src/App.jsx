import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/carts/:userId" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
