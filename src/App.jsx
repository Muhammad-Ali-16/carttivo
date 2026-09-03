import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { ProductsProvider } from "./context/ProductsContext";
import { BlogProvider } from "./context/BlogContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import ScrollToTop from "./utils/ScrollToTop"
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
import BlogDetails from "./pages/BlogDetails";
import { CategoryFilterProvider } from "./context/CategoryFilterContext";
import ShopByCategoryRoute from "./utils/ShopByCategoryRoute";

function App() {

  return (
    <ProductsProvider>
      <CategoryFilterProvider>
        <BlogProvider>
          <CartProvider>
            <WishlistProvider>
              <BrowserRouter>
                <ScrollToTop />
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
                    <Route
                      path="/blog/:link"
                      element={
                        <>
                          <PagesLayout title="Blog Details" />
                          <BlogDetails />
                        </>
                      }
                    />
                    <Route
                      path="/shop-by-category/:category"
                      element={
                        <>
                       <ShopByCategoryRoute/>
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
        </BlogProvider>
      </CategoryFilterProvider>
    </ProductsProvider>
  );
}

export default App;
