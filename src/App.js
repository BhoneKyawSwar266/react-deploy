
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import accessories_banner from './Components/Assets/accessories.png'
import printer_banner from './Components/Assets/Printer_banner.png'
import laptop_banner from './Components/Assets/Laptops.png'
import monitor_banner from './Components/Assets/monitor.png'
import Cart from './Pages/Cart';
import About from './Pages/About';
import Loaction from './Pages/Loaction';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/accessories' element={<ShopCategory banner={accessories_banner} category="accessories"/>}></Route>
          <Route path='/monitor' element={<ShopCategory banner={monitor_banner}  category="monitor"/>}></Route>
          <Route path='/printer' element={<ShopCategory banner={printer_banner}  category="printer"/> }></Route>
          <Route path='/laptop' element={<ShopCategory banner={laptop_banner}  category="laptop"/> }></Route>
         
          <Route path='/product/*' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignUp/>}></Route>
          <Route path='/location' element={<Loaction/>}></Route>
          <Route path='/about' element={<About/> }></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
