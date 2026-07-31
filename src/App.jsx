import './App.css'
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router"
=======
import { BrowserRouter, Routes, Route } from "react-router-dom"
>>>>>>> 189396ada4c873217cc52936b7e313618505636c
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import Navbar from './components/layout/Navbar'
import Layout from './components/layout/Layout'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Home from './pages/Home'
import AllProdcuts from './pages/AllProdcuts'


function App() {
  return (
    <div className='h-[1000vh]'>
      <CartProvider>
        <WishlistProvider>

          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>

                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />

<<<<<<< HEAD
                {/* <Route path="/about" element={<><PagesLayout title='About Us' /> <PageAbout /></>} /> */}

              </Route>
=======
              </Route>
              {/* <Route element={<Layout />}>
                <Route path="/about" element={<><PagesLayout title='About Us' /> <PageAbout /></>} />
              </Route> */}

>>>>>>> 189396ada4c873217cc52936b7e313618505636c
            </Routes>
          </BrowserRouter>

        </WishlistProvider>
      </CartProvider>
    </div>
  )
}

export default App