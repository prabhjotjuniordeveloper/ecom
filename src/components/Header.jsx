import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "../Api/axios/axios_config.js";
import blacklogo from "../images/blacklogo.png";
import { use } from "react";
import { allCart } from "../Api/product/getCart.jsx";
import { allWish } from "../Api/product/getWish.jsx";

const Header = ({ isLoggedIn }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axios.get("/companyLogo/getAllCompanyLogo");

        setLogo(response?.data.AllLogos[0]?.image);
        // console.log("API Response:", response.data);
        if (response.status === 200) {
        } else {
          console.error("Error Response:", response.data);
        }
      } catch (error) {
        console.error("Network Error:", error.response);
      }
    };

    fetchLogo();
  }, []);

  const [product, setproduct] = useState("");
  const [wish, setWish] = useState("");
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await allCart();
        const response2 = await allWish();
        if (response?.success === true) {
          setproduct(response.cart.products.length);
        }
        setWish(response2.wishlist?.products?.length ?? 0);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="page-wrapper">
      {/* header-start */}
      <header className="header">
        <div className="header-bottom sticky-header">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>

              <Link to="" className="logo">
                <img src={logo} alt="Probo Logo" width="100" height="20" />
              </Link>

              {/* <Link to="" className="logo">
                                <h4 className='d-flex justify-content-center algin-items-center m-0' style={{fontWeight: 'bold '}}>PROBO</h4>
                            </Link> */}
            </div>

            <div className="header-center" style={{ marginRight: "0rem" }}>
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  {/* Home Menu Item */}
                  <li
                    className="megamenu-container active"
                    style={{ position: "relative" }}
                  >
                    <Link to="/" className="">
                      Home
                    </Link>
                  </li>

                  {/* Shop Menu Item */}
                  <li
                    className="megamenu-container"
                    style={{ position: "relative" }}
                  >
                    <Link to="/ShopList" className="">
                      Shop
                    </Link>
                    {/* <div className="megamenu megamenu-md" 
                             style={{ display: 'none', position: 'absolute', top: '100%', left: '0', zIndex: 1000, background: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                             onMouseEnter={(e) => {
                                const dropdown = e.currentTarget;
                                dropdown.style.display = 'block';
                             }}
                             onMouseLeave={(e) => {
                                const dropdown = e.currentTarget;
                                dropdown.style.display = 'none';
                             }}>
                            <div className="row no-gutters">
                                <div className="col-md-8">
                                    <div className="menu-col">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="menu-title">Shop with sidebar</div>
                                                <ul>
                                                    <li><Link to="/ShopList">Shop List</Link></li>
                                                    <li><Link to="/ShopGrid2">Shop Grid 2 Columns</Link></li>
                                                    <li><Link to="/Shop">Shop Grid 3 Columns</Link></li>
                                                    <li><Link to="/ShopGrid4">Shop Grid 4 Columns</Link></li>
                                                    <li><Link to="/category-market"><span>Shop Market<span className="tip tip-new">New</span></span></Link></li>
                                                </ul>
                                                <div className="menu-title">Shop no sidebar</div>
                                                <ul>
                                                    <li><Link to="/ShopSideBar1"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></Link></li>
                                                    <li><Link to="/ShopSideBar2">Shop Fullwidth No Sidebar</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="menu-title">Product Category</div>
                                                <ul>
                                                    <li><Link to="/product-category-boxed">Product Category Boxed</Link></li>
                                                    <li><Link to="/product-category-fullwidth"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></Link></li>
                                                </ul>
                                                <div className="menu-title">Shop Pages</div>
                                                <ul>
                                                    <li><Link to="/Cart">Cart</Link></li>
                                                    <li><Link to="/Checkout">Checkout</Link></li>
                                                    <li><Link to="/Wishlist">Wishlist</Link></li>
                                                    <li><Link to="/Account">My Account</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="banner banner-overlay">
                                        <Link to="/category">
                                            <img src="assets/images/menu/banner-1.jpg" alt="Banner" />
                                            <div className="banner-content banner-content-top">
                                                <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>
                                            </div>
                                        </Link>

                                        
                                    </div>
                                </div>
                            </div>
                        </div> */}
                  </li>

                  {/* <li className="megamenu-container" style={{ position: 'relative' }}>
                        <Link to="/products" className="sf-with-ul">Product</Link>
                        <div className="megamenu megamenu-sm" 
                             style={{ display: 'none', position: 'absolute', top: '100%', left: '0', zIndex: 1000 }}
                             onMouseEnter={(e) => {
                                const dropdown = e.currentTarget;
                                dropdown.style.display = 'block';
                             }}
                             onMouseLeave={(e) => {
                                const dropdown = e.currentTarget;
                                dropdown.style.display = 'none';
                             }}>
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div className="menu-col">
                                        <div className="menu-title">Product Details</div>
                                        <ul>
                                            <li><Link to="/products">Default</Link></li>
                                            <li><Link to="/ProductCenterd">Centered</Link></li>
                                            <li><Link to="/ProductExtend"><span>Extended Info<span className="tip tip-new">New</span></span></Link></li>
                                            <li><Link to="/ProductGalley">Gallery</Link></li>
                                            <li><Link to="/ProductSticky">Sticky Info</Link></li>
                                            <li><Link to="/ProductSidebar">Boxed With Sidebar</Link></li>
                                            <li><Link to="/ProductFW">Full Width</Link></li>
                                            <li><Link to="/ProductMasonry">Masonry Sticky Info</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="banner banner-overlay">
                                        <Link to="/category">
                                            <img src="assets/images/menu/banner-2.jpg" alt="Banner" />
                                            <div className="banner-content banner-content-bottom">
                                                <div className="banner-title text-white">New Trends<br /><span><strong>spring 2019</strong></span></div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> */}

                  {/* Blog Menu Item */}
                  <li
                    className="megamenu-container"
                    style={{ position: "relative" }}
                  >
                    <Link to="/BlogMASK" className="">
                      Blog
                    </Link>
                  </li>

                  <li
                    className="megamenu-container"
                    style={{ position: "relative" }}
                  >
                    <li
                      className="megamenu-container"
                      style={{ position: "relative" }}
                    >
                      {isLoggedIn ? (
                        <Link to="/dashboard" className="">
                          Dashboard
                        </Link>
                      ) : (
                        <Link to="/login" className="">
                          LOGIN
                        </Link>
                      )}
                    </li>

                    {/* <Link to="/elements" className="sf-with-ul">Elements</Link> */}

                    {/* <ul>
                            <li><Link to="/ElementsProducts">Products</Link></li>
                            <li><Link to="/Typography">Typography</Link></li>
                            <li><Link to="/Tiles">Titles</Link></li>
                            <li><Link to="/Banner">Banners</Link></li>
                            <li><Link to="/ProductCategory">ProductCategory</Link></li>
                            <li><Link to="/VideoBanner">VideoBanners</Link></li>
                            <li><Link to="/ButtonsElemens">Buttons</Link></li>
                            <li><Link to="/AccordionsElements">Accordions</Link></li>
                            <li><Link to="/ElementsTabs">Tabs</Link></li>
                            <li><Link to="/Testimonials">Testimonials</Link></li>
                            <li><Link to="/BlogPost">BlogPost</Link></li>
                            <li><Link to="/Portfolio">Portfolio</Link></li>
                            <li><Link to="/Cta">CalltoAction</Link></li>
                            <li><Link to="/IconBoxes">IconBoxes</Link></li>

                        </ul> */}
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right">
              {/* Header Search */}
              <div className="header-search">
                <a
                  href="#"
                  className="search-toggle"
                  role="button"
                  aria-label="Toggle Search"
                >
                  <i className="icon-search"></i>
                </a>
                <form action="#" method="get">
                  <div className="header-search-wrapper">
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search in..."
                      required
                    />
                  </div>
                </form>
              </div>
              {/* End .header-search */}

              {isLoggedIn && (
                <>
                  <a
                    href="/Wishlist#/Wishlist"
                    className="wishlist-link"
                    aria-label="Wishlist"
                  >
                    <i className="icon-heart-o"></i>
                    <span className="wishlist-count">{wish}</span>
                  </a>

                  <div className="dropdown cart-dropdown">
                    <a
                      href="/shopping-cart#/shopping-cart"
                      className="dropdown-toggle"
                    >
                      <i className="icon-shopping-cart"></i>
                      <span className="cart-count">{product}</span>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* header-container  */}
    </div>
  );
};

export default Header;
