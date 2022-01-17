import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* <Home/> */}
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/>  */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          {/* <Route path="/pay" element={<Pay/>} />
          <Route path="/success" element={<Success/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
