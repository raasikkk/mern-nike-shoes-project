import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing/Landing.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
