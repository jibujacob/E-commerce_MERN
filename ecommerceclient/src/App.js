import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import { useSelector } from "react-redux";
import {ScrollToTop} from "./util/scrollToTop";

function App() {
  const user = useSelector(state=>state.user.currentUser.username);
  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route path="/login" >
            {user ? <Redirect to="/"/>:<Login/>}
          </Route>
          <Route path="/register" >
            {user ? <Redirect to="/"/>:<Register/>}
          </Route>
          <Route path="/cart" >
            {user ? <Cart/>:<Login/>}
          </Route>
          <Route path="/products/:category" >
            <ProductList/>
          </Route>
          <Route path="/product/:id" >
            <Product/>
          </Route>
          <Route path="/success" >
            <Success/>
          </Route>
          <Route path="/cancel" >
            <Cancel/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
