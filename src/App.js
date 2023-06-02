import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductList from "./components/ProductList/ProductList";
import SearchList from "./components/SearchList/SearchList";
import Name from "./Temp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/product-category/:category' element={<ProductList />}/>
        <Route path='/product/:name' element={<ProductDetail />}/>
        <Route path='/search/:query' element={<SearchList />}/>
      </Routes>
    </Router>
  );
}

export default App;
