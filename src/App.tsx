import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Productpage from "./pages/product-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/women" replace />} />
        <Route path="/women" element={<Productpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
