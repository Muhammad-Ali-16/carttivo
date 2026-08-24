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
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
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
                    <PagesLayout title="Cart" />
                    <Cart />
                  </>
                }
              />
              <Route
                path="/wishlist"
                element={
                  <>
                    <PagesLayout title="Wishlist" />
                    <Wishlist />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <PagesLayout title="About Us" />
                    <About />
                  </>
                }
              />
              <Route
                path="/faq"
                element={
                  <>
                    <PagesLayout title="FAQ" />
                    <FAQ />
                  </>
                }
              />
               <Route
                path="/terms-conditions"
                element={
                  <>
                    <PagesLayout title="Terms & Conditions" />
                    <TermsConditions/>
                  </>
                }
              />


            </Route>
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
