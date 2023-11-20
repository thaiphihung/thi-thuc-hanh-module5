import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductList from "./pages/ProductList";
import ProductShow from "./pages/ProductShow";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import ProductDelete from "./pages/ProductDelete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductShow />} />
          <Route path="/products/create" element={<ProductAdd />} />
          <Route path="/products/:id/edit" element={<ProductEdit />} />
          <Route path="/products/:id/delete" element={<ProductDelete />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;