import './App.css'
import { CartProvider } from './context/CartContext'
import Navbar from './compnents/layout/Navbar'
import Home from './pages/Home'
import AllProdcuts from './pages/AllProdcuts'
import Cart from './pages/Cart'


function App() {
  return (
    <div className='h-[1000vh]'>
      <CartProvider>
        <Navbar />
        <Home />
          <Cart/>
      
        <AllProdcuts />
      </CartProvider>
    </div>
  )
}

export default App