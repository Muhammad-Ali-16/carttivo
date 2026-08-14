import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Navbar from "./components/layout/Navbar";
import Layout from "./components/layout/Layout";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import AllProdcuts from "./pages/AllProdcuts";
import PagesLayout from "./components/layout/PagesLayout";

function App() {
  return (
    <div className="h-[1000vh]">
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route
                  path="/cart"
                  element={
                    <>
                      <PagesLayout title="Cart"/>
                      <Cart />
                    </>
                  }
                />
                <Route path="/wishlist" element={  <>
                      <PagesLayout title="Wishlist"/>
                      <Wishlist />
                    </>} />

              </Route>
            </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </div>
  );
}

export default App;
