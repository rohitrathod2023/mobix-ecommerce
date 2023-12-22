//import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Register from './pages/register';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={ <Home/>}/>
        <Route path='/login' element ={ <Login/>}/>
        <Route path='/register' element ={ <Register/>}/>
      </Routes>
     
       

    </div>
  );
}

export default App;
