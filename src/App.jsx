import './App.css'
import { CartProvider } from './context/CartContext'
import Navbar from './compnents/layout/Navbar'
import Home from './pages/Home'
import AllProdcuts from './pages/AllProdcuts'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import { WishlistProvider } from './context/WishlistContext'


function App() {
  return (
    <div className='h-[1000vh]'>
      <CartProvider>
        <WishlistProvider>
            <Navbar />
          <main className='body-main'>
            <Home />
            <Cart />
            <Wishlist />
            <AllProdcuts />
          </main>
        </WishlistProvider>
      </CartProvider>
    </div>
  )
}

export default App