//import logo from './logo.svg';
// import './App.css';
import Login from './pages/login';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Register from './pages/register';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProductList from './pages/product-list';
import ProductDetail from './pages/product-detail';
import AddressPage from './pages/address-page';
import Cart from './pages/cart';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={ <Home/>}/>
        <Route path='/login' element ={ <Login/>}/>
        <Route path='/register' element ={ <Register/>}/>
        <Route path = '/products' element ={<ProductList/>}/>
        <Route path='/products/:productName/:productId' element={<ProductDetail/>}/> 
        <Route path ='/checkout' element = {<AddressPage/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
      </Routes>
     
       

    </div>
  );
}

export default App;
