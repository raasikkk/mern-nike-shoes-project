import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing/Landing";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
