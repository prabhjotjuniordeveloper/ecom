// App.js
import React, { useContext, useState,useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingCart from './pages/ShoppingCart';
import MobileMenu from './components/MobileMenu';
import Shop from './components/Shop';
import Checkout from './pages/Checkout';
import Login from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

import ElementsPage from './pages/Elements';
import Blog from './pages/Blog';
import Product from './pages/Products';
import ContactPage from './moleculePages/Contact';
import Faq from './moleculePages/Faq';
import About from './pages/About';
import Error404 from './pages/Error';
import ShopList from './components/Shoppages/ShopList';
import ComingSoon from './pages/ComingSoon';
import ShopGrid2 from './components/Shoppages/ShopGrid2';
import ShopGrid4 from './components/Shoppages/ShopGrid4';
import ShopSideBar1 from './components/Shoppages/ShopSideBar1';
import ShopSideBar2 from './components/Shoppages/ShopSideBar2';
import Account from './components/Shoppages/Accunt';
import Wishlist from './components/Shoppages/Wishlist';
import BlogPage from './Blogpages/Classic';
import Listing from './Blogpages/Listing';
import BlogGrid2 from './Blogpages/BlogGrid2';
import BlogGrid3 from './Blogpages/BlogGrid3';
import BlogGrid from './Blogpages/BlogGrid';
import BlogGrid4 from './Blogpages/BlogGrid4';

import BlogMask from './Blogpages/BlogMask';
import BlogMaskManory from './Blogpages/BlogMaskManory';
import FullWidth from './components/SinglePost/FullWidth';
import NoWidth from './components/SinglePost/NoWidth';
import Typography from './components/Elements/Typography';
import Banner from './components/Elements/Banner';
import ProductCategory from './components/Elements/ProductCategory';
import Tiles from './components/Elements/Tiles';
import AccordionsElements from './components/Elements/AccordionsElements';
import Cta from './components/Elements/Cta';
import IconBoxes from './components/Elements/Icon-Boxes';
import BlogPost from './components/Elements/BlogPost';
import Testimonials from './components/Elements/Testimonials';
import Portfolio from './components/Elements/Portfolio';
import ElementsProducts from './components/Elements/ElementsProducts';
import ElementsTabs from './components/Elements/ElementsTabs';
import VideoBanner from './components/Elements/VideoBanner';
import ButtonsElemens from './components/Elements/ButtonsElemens';
import ProductCenterd from './components/productpages/ProductCenterd';
import ProductGalley from './components/productpages/ProductGalley';
import ProductExtend from './components/productpages/ProductExtend';
import ProductFW from './components/productpages/ProductFW';
import ProductMasonry from './components/productpages/ProductMasonry';
import ProductSidebar from './components/productpages/ProductSidebar';
import ProductSticky from './components/productpages/ProductSticky';
import HomePage from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';
import { authService } from './Api/service/authService';
import { useLocation } from "react-router-dom";
import Address from './components/newAdd';
import UpdateAddress from './components/updateAdd';
import Terms from './pages/terms';
import Privacy from './pages/privacy';


function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      sessionStorage.removeItem("homePageReloaded");
    }
  }, [location.pathname]);

  const [selectedOption, setSelectedOption] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(authService.isAuthenticated());
  return (
  <AuthProvider value={{ isLoggedIn, setIsLoggedIn }}>

      <Header isLoggedIn={isLoggedIn} setSelectedOption={setSelectedOption}/>
      <Routes>
        


        {/* <Routes> */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/account" element={isLoggedIn ? <Account /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn}/>} />
        <Route path="/About" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/newAdd" element={<Address isLoggedIn={isLoggedIn} />} />
        <Route path="/updateAdd" element={<UpdateAddress isLoggedIn={isLoggedIn} />} />
        <Route path="/FullWidth" element={<FullWidth />} />
        {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}

        <Route path="/NoWidth" element={<NoWidth />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/Tiles" element={<Tiles />} />
        <Route path="/AccordionsElements" element={<AccordionsElements />} />
        <Route path="/IconBoxes" element={<IconBoxes />} />
        <Route path="/Cta" element={<Cta />} />
        <Route path="/BlogPost" element={<BlogPost />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/ButtonsElemens" element={<ButtonsElemens />} />
        <Route path="/VideoBanner" element={<VideoBanner />} />
        <Route path="/ElementsProducts" element={<ElementsProducts />} />
        <Route path="/ElementsTabs" element={<ElementsTabs />} />
        <Route path="/ProductCenterd/:slug" element={<ProductCenterd isLoggedIn={isLoggedIn} />} />
        <Route path="/ProductExtend/:id" element={<ProductExtend />} />
        <Route path="/ProductFW" element={<ProductFW />} />
        <Route path="/ProductMasonry" element={<ProductMasonry />} />
        <Route path="/ProductSidebar" element={<ProductSidebar />} />
        <Route path="/ProductSticky" element={<ProductSticky />} />
        <Route path="/ProductGalley" element={<ProductGalley />} />
        <Route path="/BlogGrid2" element={<BlogGrid2 />} />
        <Route path="/BlogGrid3" element={<BlogGrid3 />} />
        <Route path="/BlogGrid4" element={<BlogGrid4 />} />
        <Route path="/Typography" element={<Typography />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/Error" element={<Error404 />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/Cart" element={<ShoppingCart />} />

        <Route path="/ShopList" element={<ShopList isLoggedIn={isLoggedIn} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>} />
        <Route path="/ShopGrid2" element={<ShopGrid2 />} />
        <Route path="/ShopGrid2" element={<ShopGrid2 />} />
        <Route path="/BlogGrid" element={<BlogGrid />} />
        <Route path="/ProductCategory" element={<ProductCategory />} />

        <Route path="/BlogMask" element={<BlogMask />} />
        <Route path="/BlogMaskManory" element={<BlogMaskManory />} />

        <Route path="/ShopGrid4" element={<ShopGrid4 />} />
        <Route path="/ShopSideBar1" element={<ShopSideBar1 />} />
        <Route path="/ShopSideBar2" element={<ShopSideBar2 />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Products" element={<Product />} />

        <Route path="/Faq" element={<Faq />} />

        <Route path="/Contact" element={<ContactPage />} />


        <Route path="/Blog" element={<Blog />} />

        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Elements" element={<ElementsPage />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
      </Routes>
      <Footer isLoggedIn={isLoggedIn}/>
      <MobileMenu />

  </AuthProvider>

  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
