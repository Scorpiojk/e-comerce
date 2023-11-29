import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Cart from './assets/pages/cart/Cart';
import Shop from './assets/pages/shop/Shop';

function App() {
  return (
    <div className='App'>
      
      <Router>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
