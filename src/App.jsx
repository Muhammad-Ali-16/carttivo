import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ProductsProvider } from "./context/ProductsContext";
import Layout from "./components/layout/Layout";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import PagesLayout from "./components/layout/PagesLayout";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <ProductsProvider>
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
                      <TermsConditions />
                    </>
                  }
                />
                <Route
                  path="/privacy-policy"
                  element={
                    <>
                      <PagesLayout title="Privacy Policy" />
                      <PrivacyPolicy />
                    </>
                  }
                />
                <Route
                  path="/blog"
                  element={
                    <>
                      <PagesLayout title="Journal Blog" />
                      <BlogPage />
                    </>
                  }
                />
                <Route
                  path="/all-products"
                  element={
                    <>
                      <PagesLayout title="All Products" />
                      <AllProducts />
                    </>
                  }
                />



              </Route>
              <Route
                path="/contact"
                element={
                  <Contact />
                }
              />
            </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
