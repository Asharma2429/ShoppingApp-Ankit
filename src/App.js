import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { CartProvider } from 'react-use-cart';
import { Cart } from './Components/Cart';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>

<CartProvider>
<BrowserRouter>
{/* <Link to="/"></Link> */}
<Link to="/"></Link>
<Routes>
  {/* <Route extact path='/' element={<Login/>}/> */}
  <Route extact path='/' element={<Home/>}/>
  <Route extact path='/cart' element={<Cart/>}/>
</Routes>
</BrowserRouter>
</CartProvider>


</>
  );
}

export default App;
