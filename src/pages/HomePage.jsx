import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from '../Api/axios/axios_config.js';
import { addToWishlist } from '../Api/product/addWish.jsx';
import $ from "jquery";
import { getAllProducts } from '../Api/product/allProduct.jsx';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image1 from "../images/img-1.png"


const HomePage = ({ isLoggedIn }) => {
  const showToast = (type, message) => {
    toast[type](message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};

  useEffect(() => {
    if (!sessionStorage.getItem("homePageReloaded")) {
      sessionStorage.setItem("homePageReloaded", "true");
      window.location.reload();
    }
  }, []);

  const navigate = useNavigate();

  const generateSlug = (name, id) => {
    if (!name) {
        return `unknown-${id}`;
    }
    return `${name.toLowerCase().replace(/\s+/g, "-")}-${id}`;
};

const [selectedTab, setSelectedTab] = useState("");
const [selectedCategories, setSelectedCategories] = useState([]);

const handleTabClick = (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  const tabValue = event.target.textContent.trim().toLowerCase().replace(/\s+/g, ""); // Remove spaces

  if (tabValue === "all") {
    // Reset both states when "All" is selected
    setSelectedTab("");
    setSelectedCategories([]);
  } else if (tabValue === "men" || tabValue === "women") {
    // Set only selectedTab
    setSelectedTab(tabValue);
    setSelectedCategories([]); // Ensure selectedCategories remains unchanged
  } else if (tabValue === "shoes&boots") {
    // Set only selectedCategories
    setSelectedCategories([tabValue]);
    setSelectedTab(""); // Ensure selectedTab remains unchanged
  }
};

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts(
        "",
        selectedCategories,
        "",
        "",
        "",
        "",
        selectedTab
      );
  
      if (data) {
        setProducts(data.products);
      }
    };
  
    fetchProducts();
  }, [selectedTab]);

  const [heroSection, setHeroSection] = useState("");
  const [saleSection, setSaleSection] = useState([]);
  const [arrival, setArrival] = useState([]);
  const [league, setLeague] = useState("");
  const [brands, setBrands] = useState([]);
  const [saleProducts, setOnSaleProducts] = useState({ onSaleSection: [] });
  const [topProducts, setTopProducts] = useState({ topRatedSection: [] });
  const [featureProducts, setFeatureProducts] = useState({ featuredSection: [] });


useEffect(() => {
  const fetchHomeSection = async () => {
      try {
          const response = await axios.get(
              "/homePage/heroSection/getAllHeroSectionImages"
          );
          const response2 = await axios.get(
              "/homePage/brandSection/getAllBrandSection"
          );
          const response3 = await axios.get(
              "/homePage/saleSection/getAllSaleSection"
          );
          const response4 = await axios.get(
              "/homePage/newLeagueSection/getAllNewLeagueSectionImages"
          );
          const response5 = await axios.get(
              "/homePage/newArrivalSection/getAllNewArrivalSection"
          );
          setHeroSection(response?.data)
          setBrands(response2.data)
          setSaleSection(response3?.data.All_sale_section)
          setLeague(response4.data.All_NewLeague_Sections)
          setArrival(response5.data.All_NewArrival_section)

        
      } catch (error) {
          console.error("Network Error:", error.response ? error.response : error.message);
      }
  };
  fetchHomeSection();
}, []);

// console.log("brands-",arrival[0]?.image1.path)

useEffect(() => {
  const fetchOnSale = async () => {
      try {
          const response = await axios.get(
              "/homePage/onSaleSection/getOnSaleSection"
          );
          const response2  = await axios.get(
              "/homePage/topRatedSection/getTopRatedSection"
          );
          const response3  = await axios.get(
              "/homePage/featuredSection/getAllFeaturedProducts"
          );
          setOnSaleProducts(response.data)
          setTopProducts(response2.data)
          setFeatureProducts(response3.data)
        
      } catch (error) {
          console.error("Network Error:", error.response);
      }
  };
  fetchOnSale();
}, []);


useEffect(() => {
  if (saleProducts?.onSaleSection?.length > 0) {
    setTimeout(() => {
      $(".owl-carousel").trigger("refresh.owl.carousel");
    }, 500); // Small delay to ensure products are added before refresh
  }
}, [saleProducts]);

  const handleAddToWish = async (id) => {
    if (!isLoggedIn) {
      showToast("error", "Please log in to proceed further.");
      navigate("/login");
      return;
    }

    try {
      const response = await addToWishlist(id);

      if (response.Message === "Wish list has been updated") {
        console.log(response);
        // setIsAddedToWish(true);
      }
    } catch (error) {
      console.error("Failed to add product to wishlist:", error);
    }
  };

  return (
    <div>
  
    <main className="main">
    <div class="intro-slider-container">
                <div class="intro-slider owl-carousel owl-theme owl-nav-inside owl-light mb-0" data-toggle="owl" data-owl-options='{
                        "dots": true,
                        "nav": false, 
                        "responsive": {
                            "1200": {
                                "nav": true,
                                "dots": false
                            }
                        }
                    }'>
                    <div class="intro-slide"  style={{ backgroundImage: 'url(assets/images/demos/demo-8/slider/slide-1.jpg)' }}>
                        <div class="container intro-content text-left">
                            <h3 class="intro-subtitle">Limited time only *</h3>
                            <h1 class="intro-title">Summer<br/><strong>sale</strong></h1>
                            <h3 class="intro-subtitle">Up to 50% off</h3>

                            <Link to="/shoplist" class="btn">
                                <span>SHOP NOW</span>
                                <i class="icon-long-arrow-right"></i>
                            </Link>
                        </div>
                        {/* <img class="position-right" src="assets/images/demos/demo-8/slider/img-1.png"/> */}
                        {/* <img class="position-right" src={heroSection.All_Hero_Sections[0]?.image} style={{width:'768px' , height:'1103px'}}/> */}
                        {heroSection.All_Hero_Sections && heroSection.All_Hero_Sections[0] && heroSection.All_Hero_Sections[0].image && (
  <img
    className="position-right"
    src={heroSection?.All_Hero_Sections[0]?.image || image1 }
    style={{ width: '768px', height: '1103px' }}
    alt="Hero Section 1"
  />
)} 
                    </div>
                    <div class="intro-slide" style={{backgroundImage: "url(assets/images/demos/demo-8/slider/slide-2.jpg);"}}>
                        <div class="container intro-content text-right">
                            <h3 class="intro-subtitle">PREMIUM QUALITY</h3>
                            <h1 class="intro-title">coats <span class="highlight">&</span><br/>jackets</h1>

                            <Link to="/shoplist" class="btn">
                                <span>SHOP NOW</span>
                                <i class="icon-long-arrow-right"></i>
                            </Link>
                        </div>
                        {/* <img class="position-left" src="assets/images/demos/demo-8/slider/img-2.png"/> */}
                        {heroSection.All_Hero_Sections && heroSection.All_Hero_Sections[1] && heroSection.All_Hero_Sections[1].image && (
  <img
    className="position-left"
    src={heroSection.All_Hero_Sections[1].image}
    style={{ width: '819px', height: '2122px' }}
    alt="Hero Section 2"
  />
)}
                    </div>
                </div>

                <span class="slider-loader"></span>
            </div>
  <div className="pt-2 pb-2">
    <div className="container brands">
      <div className="banner-group">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="banner banner-overlay">
              <Link to="/shoplist">
                <img src={saleSection[0]?.image1.path || "assets/images/demos/demo-8/banners/banner-1.jpg"} alt="Banner" />
              </Link>
              <div className="banner-content">
                <h4 className="banner-subtitle"><Link >Final reduction</Link></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><Link to="/shoplist"><strong>Sandals &amp; <br />Flip Flops</strong> <br />up to 60% off</Link></h3>{/* End .banner-title */}
                <Link to="/shoplist" className="btn btn-outline-white banner-link">Shop Now <i className="icon-long-arrow-right" /></Link>
              </div>{/* End .banner-content */}
            </div>{/* End .banner */}
          </div>{/* End .col-lg-4 */}
          <div className="col-sm-6 col-lg-4">
            <div className="banner banner-overlay">
              <Link to="/shoplist">
                <img src={saleSection[0]?.image2.path ||"assets/images/demos/demo-8/banners/banner-2.jpg"} alt="Banner" />
              </Link>
              <div className="banner-content">
                <h4 className="banner-subtitle"><Link to="/shoplist">Limited time only.</Link></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><Link to="/shoplist"><strong>Trainers &amp; <br />Sportwear</strong> <br />40 -70% off</Link></h3>{/* End .banner-title */}
                <Link to="/shoplist" className="btn btn-outline-white banner-link">Shop Now <i className="icon-long-arrow-right" /></Link>
              </div>{/* End .banner-content */}
            </div>{/* End .banner */}
          </div>{/* End .col-lg-4 */}
          <div className="col-sm-6 col-lg-4 d-none d-lg-block">
            <div className="banner banner-overlay">
              <Link to="/shoplist">
                <img src={saleSection[0]?.image3.path||"assets/images/demos/demo-8/banners/banner-3.jpg"}  alt="Banner" />
              </Link>
              <div className="banner-content">
                <h4 className="banner-subtitle"><Link to="/shoplist">This week we love...</Link></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><Link to="/shoplist"><strong>Women's <br />Accessories </strong> <br />from ₹699</Link></h3>{/* End .banner-title */}
                <Link to="/shoplist" className="btn btn-outline-white banner-link">Shop Now <i className="icon-long-arrow-right" /></Link>
              </div>{/* End .banner-content */}
            </div>{/* End .banner */}
          </div>{/* End .col-lg-4 */}
        </div>{/* End .row */}
      </div>{/* End .banner-group */}
      <div style={{gap:"80px"}} className="owl-carousel mt-3 mb-3 owl-simple d-flex  justify-content-center align-items-center" data-toggle="owl" data-owl-options="{
                      &quot;nav&quot;: false, 
                      &quot;dots&quot;: false,
                      &quot;margin&quot;: 30,
                      &quot;loop&quot;: false,
                      &quot;responsive&quot;: {
                          &quot;0&quot;: {
                              &quot;items&quot;:2
                          },
                          &quot;420&quot;: {
                              &quot;items&quot;:3
                          },
                          &quot;600&quot;: {
                              &quot;items&quot;:4
                          },
                          &quot;900&quot;: {
                              &quot;items&quot;:5
                          },
                          &quot;1024&quot;: {
                              &quot;items&quot;:6
                          }
                      }
                  }">
                    {brands?.All_Brands_section?.map((brand) => (
    <Link to="#" className="brand me-3" key={brand.id}>
        <img src={`${brand.image}`} alt={brand.name || "Brand"} className='me-6' />
    </Link>
))}
        {/* <Link to="#" className="brand">
          <img src="assets/images/brands/1.png" alt="Brand Name" />
        </Link>
        <Link to="#" className="brand">
          <img src="assets/images/brands/2.png" alt="Brand Name" />
        </Link>
        <Link to="#" className="brand">
          <img src="assets/images/brands/3.png" alt="Brand Name" />
        </Link>
        <Link to="#" className="brand">
          <img src="assets/images/brands/4.png" alt="Brand Name" />
        </Link>
        <Link to="#" className="brand">
          <img src="assets/images/brands/5.png" alt="Brand Name" />
        </Link>
        <Link to="#" className="brand">
          <img src="assets/images/brands/6.png" alt="Brand Name" />
        </Link>
        <Link to="#" className="brand">
          <img src="assets/images/brands/7.png" alt="Brand Name" />
        </Link> */}
      </div>{/* End .owl-carousel */}
    </div>{/* End .container */}
  </div>{/* End .bg-lighter */}
  <div className="mb-3" />
  <div className="container">
    <ul className="nav nav-pills nav-big nav-border-anim justify-content-center mb-2 mb-md-3" role="tablist">
      <li className="nav-item">
        <a className="nav-link active" id="products-featured-link" data-toggle="tab" href="#products-featured-tab" role="tab" aria-controls="products-featured-tab" aria-selected="true">Featured</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="products-sale-link" data-toggle="tab" href="#products-sale-tab" role="tab" aria-controls="products-sale-tab" aria-selected="false">On Sale</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="products-top-link" data-toggle="tab" href="#products-top-tab" role="tab" aria-controls="products-top-tab" aria-selected="false">Top Rated</a>
      </li>
    </ul>

    <div className="tab-content tab-content-carousel">

    <div className="tab-pane p-0 fade show active" id="products-featured-tab" role="tabpanel" aria-labelledby="products-featured-link">
    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                          &quot;nav&quot;: false, 
                          &quot;dots&quot;: true,
                          &quot;margin&quot;: 20,
                          &quot;loop&quot;: false,
                          &quot;responsive&quot;: {
                              &quot;0&quot;: {
                                  &quot;items&quot;:2
                              },
                              &quot;480&quot;: {
                                  &quot;items&quot;:2
                              },
                              &quot;768&quot;: {
                                  &quot;items&quot;:3
                              },
                              &quot;992&quot;: {
                                  &quot;items&quot;:4
                              },
                              &quot;1200&quot;: {
                                  &quot;items&quot;:4,
                                  &quot;nav&quot;: true,
                                  &quot;dots&quot;: false
                              }
                          }
                      }">
                        
          <div className="product product-2">
            <figure className="product-media">
              <Link to={`/ProductCenterd/${generateSlug(featureProducts?.featuredSection[0]?.productName, featureProducts?.featuredSection[0]?._id)}`}>
                <img src={featureProducts?.featuredSection[0]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
                <img src={featureProducts?.featuredSection[0]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>

              <div className="product-action-vertical" onClick={()=>handleAddToWish(featureProducts?.featuredSection[0]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(featureProducts?.featuredSection[0]?.productName, featureProducts?.featuredSection[0]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>

            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link>{featureProducts?.featuredSection[0]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link>{featureProducts?.featuredSection[0]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{featureProducts?.featuredSection[0]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
          
          <div className="product product-2">
            <figure className="product-media">
            <Link to={`/ProductCenterd/${generateSlug(featureProducts?.featuredSection[1]?.productName, featureProducts?.featuredSection[1]?._id)}`}>
            <img src={featureProducts?.featuredSection[1]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
              <img src={featureProducts?.featuredSection[1]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>
              <div className="product-action-vertical" onClick={()=>handleAddToWish(featureProducts?.featuredSection[1]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(featureProducts?.featuredSection[1]?.productName, featureProducts?.featuredSection[1]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">{featureProducts?.featuredSection[1]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link>{featureProducts?.featuredSection[1]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{featureProducts?.featuredSection[1]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}

          <div className="product product-2">
            <figure className="product-media">
              <span className="product-label label-sale">sale</span>
              <Link to={`/ProductCenterd/${generateSlug(featureProducts?.featuredSection[2]?.productName, featureProducts?.featuredSection[2]?._id)}`}>
              <img src={featureProducts?.featuredSection[2]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
              <img src={featureProducts?.featuredSection[2]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>
              <div className="product-action-vertical" onClick={()=>handleAddToWish(featureProducts?.featuredSection[2]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(featureProducts?.featuredSection[2]?.productName, featureProducts?.featuredSection[2]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">{featureProducts?.featuredSection[2]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link>{featureProducts?.featuredSection[2]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{featureProducts?.featuredSection[2]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}

          <div className="product product-2">
            <figure className="product-media">
            <Link to={`/ProductCenterd/${generateSlug(featureProducts?.featuredSection[3]?.productName, featureProducts?.featuredSection[3]?._id)}`}>
            <img src={featureProducts?.featuredSection[3]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
              <img src={featureProducts?.featuredSection[3]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>
              <div className="product-action-vertical" onClick={()=>handleAddToWish(featureProducts?.featuredSection[3]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(featureProducts?.featuredSection[3]?.productName, featureProducts?.featuredSection[3]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">{featureProducts?.featuredSection[3]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link>{featureProducts?.featuredSection[3]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{featureProducts?.featuredSection[3]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}

        </div>{/* End .owl-carousel */}
      </div>{/* .End .tab-pane */}

      <div className="tab-pane p-0 fade" id="products-sale-tab" role="tabpanel" aria-labelledby="products-sale-link">
        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                          &quot;nav&quot;: false, 
                          &quot;dots&quot;: true,
                          &quot;margin&quot;: 20,
                          &quot;loop&quot;: false,
                          &quot;responsive&quot;: {
                              &quot;0&quot;: {
                                  &quot;items&quot;:2
                              },
                              &quot;480&quot;: {
                                  &quot;items&quot;:2
                              },
                              &quot;768&quot;: {
                                  &quot;items&quot;:3
                              },
                              &quot;992&quot;: {
                                  &quot;items&quot;:4
                              },
                              &quot;1200&quot;: {
                                  &quot;items&quot;:4,
                                  &quot;nav&quot;: true,
                                  &quot;dots&quot;: false
                              }
                          }
                      }">
                        
          <div className="product product-2">
            <figure className="product-media">
              <Link to={`/ProductCenterd/${generateSlug(saleProducts?.onSaleSection[0]?.productName, saleProducts?.onSaleSection[0]?._id)}`}>
                <img src={saleProducts?.onSaleSection[0]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
                <img src={saleProducts?.onSaleSection[0]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>

              <div className="product-action-vertical" onClick={()=>handleAddToWish(saleProducts?.onSaleSection[0]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}

              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(saleProducts?.onSaleSection[0]?.productName, saleProducts?.onSaleSection[0]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>

            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link>{saleProducts?.onSaleSection[0]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="/ProductExtend">{saleProducts?.onSaleSection[0]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{saleProducts?.onSaleSection[0]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
          
          <div className="product product-2">
            <figure className="product-media">
            <Link to={`/ProductCenterd/${generateSlug(saleProducts?.onSaleSection[1]?.productName, saleProducts?.onSaleSection[1]?._id)}`}>
            <img src={saleProducts?.onSaleSection[1]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
              <img src={saleProducts?.onSaleSection[1]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>
              <div className="product-action-vertical" onClick={()=>handleAddToWish(saleProducts?.onSaleSection[1]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(saleProducts?.onSaleSection[1]?.productName, saleProducts?.onSaleSection[1]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">{saleProducts?.onSaleSection[1]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="/ProductExtend">{saleProducts?.onSaleSection[1]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{saleProducts?.onSaleSection[1]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}

          <div className="product product-2">
            <figure className="product-media">
              <span className="product-label label-sale">sale</span>
              <Link to={`/ProductCenterd/${generateSlug(saleProducts?.onSaleSection[2]?.productName, saleProducts?.onSaleSection[2]?._id)}`}>
              <img src={saleProducts?.onSaleSection[2]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
              <img src={saleProducts?.onSaleSection[2]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>
              <div className="product-action-vertical" onClick={()=>handleAddToWish(saleProducts?.onSaleSection[2]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(saleProducts?.onSaleSection[2]?.productName, saleProducts?.onSaleSection[2]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">{saleProducts?.onSaleSection[2]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="/ProductExtend">{saleProducts?.onSaleSection[2]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{saleProducts?.onSaleSection[1]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}

          <div className="product product-2">
            <figure className="product-media">
            <Link to={`/ProductCenterd/${generateSlug(saleProducts?.onSaleSection[3]?.productName, saleProducts?.onSaleSection[3]?._id)}`}>
            <img src={saleProducts?.onSaleSection[3]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
              <img src={saleProducts?.onSaleSection[3]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>
              <div className="product-action-vertical" onClick={()=>handleAddToWish(saleProducts?.onSaleSection[3]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(saleProducts?.onSaleSection[3]?.productName, saleProducts?.onSaleSection[3]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">{saleProducts?.onSaleSection[3]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="/ProductExtend">{saleProducts?.onSaleSection[1]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{saleProducts?.onSaleSection[3]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}

        </div>{/* End .owl-carousel */}
      </div>{/* .End .tab-pane */}

      <div className="tab-pane p-0 fade" id="products-top-tab" role="tabpanel" aria-labelledby="products-top-link">
    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                          &quot;nav&quot;: false, 
                          &quot;dots&quot;: true,
                          &quot;margin&quot;: 20,
                          &quot;loop&quot;: false,
                          &quot;responsive&quot;: {
                              &quot;0&quot;: {
                                  &quot;items&quot;:2
                              },
                              &quot;480&quot;: {
                                  &quot;items&quot;:2
                              },
                              &quot;768&quot;: {
                                  &quot;items&quot;:3
                              },
                              &quot;992&quot;: {
                                  &quot;items&quot;:4
                              },
                              &quot;1200&quot;: {
                                  &quot;items&quot;:4,
                                  &quot;nav&quot;: true,
                                  &quot;dots&quot;: false
                              }
                          }
                      }">
                        
          <div className="product product-2">
            <figure className="product-media">
              <Link to={`/ProductCenterd/${generateSlug(topProducts?.topRatedSection[0]?.productName, topProducts?.topRatedSection[0]?._id)}`}>
                <img src={topProducts?.topRatedSection[0]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
                <img src={topProducts?.topRatedSection[0]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>

              <div className="product-action-vertical" onClick={()=>handleAddToWish(topProducts?.topRatedSection[0]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(topProducts?.topRatedSection[0]?.productName, topProducts?.topRatedSection[0]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>

            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link>{topProducts?.topRatedSection[0]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="/ProductExtend">{topProducts?.topRatedSection[0]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{topProducts?.topRatedSection[0]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
          
          <div className="product product-2">
            <figure className="product-media">
            <Link to={`/ProductCenterd/${generateSlug(topProducts?.topRatedSection[1]?.productName, topProducts?.topRatedSection[1]?._id)}`}>
            <img src={topProducts?.topRatedSection[1]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
              <img src={topProducts?.topRatedSection[1]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>
              <div className="product-action-vertical" onClick={()=>handleAddToWish(topProducts?.topRatedSection[1]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(topProducts?.topRatedSection[1]?.productName, topProducts?.topRatedSection[1]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">{topProducts?.topRatedSection[1]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="/ProductExtend">{topProducts?.topRatedSection[1]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{topProducts?.topRatedSection[1]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}

          <div className="product product-2">
            <figure className="product-media">
              <span className="product-label label-sale">sale</span>
              <Link to={`/ProductCenterd/${generateSlug(topProducts?.topRatedSection[2]?.productName, topProducts?.topRatedSection[2]?._id)}`}>
              <img src={topProducts?.topRatedSection[2]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
              <img src={topProducts?.topRatedSection[2]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>
              <div className="product-action-vertical" onClick={()=>handleAddToWish(topProducts?.topRatedSection[2]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(topProducts?.topRatedSection[2]?.productName, topProducts?.topRatedSection[2]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">{topProducts?.topRatedSection[2]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="/ProductExtend">{topProducts?.topRatedSection[2]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{topProducts?.topRatedSection[1]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}

          <div className="product product-2">
            <figure className="product-media">
            <Link to={`/ProductCenterd/${generateSlug(topProducts?.topRatedSection[3]?.productName, topProducts?.topRatedSection[3]?._id)}`}>
            <img src={topProducts?.topRatedSection[3]?.mainImage ||"assets/images/demos/demo-8/products/product-1-1.jpg"} alt="Product image" className="product-image" />
              <img src={topProducts?.topRatedSection[3]?.mainImage ||"assets/images/demos/demo-8/products/product-1-2.jpg"} alt="Product image" className="product-image-hover" />
              </Link>
              <div className="product-action-vertical" onClick={()=>handleAddToWish(topProducts?.topRatedSection[3]?._id)}>
                <Link className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(topProducts?.topRatedSection[3]?.productName, topProducts?.topRatedSection[3]?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">{topProducts?.topRatedSection[3]?.productCategory}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="/ProductExtend">{topProducts?.topRatedSection[1]?.productName}</Link></h3>{/* End .product-title */}
              <div className="product-price">
              ₹{topProducts?.topRatedSection[3]?.price}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}

        </div>{/* End .owl-carousel */}
      </div>{/* .End .tab-pane */}
      
    </div>{/* End .tab-content */}
  </div>

  <div className="mb-3 mb-xl-2" />
  <div className="trending">
    <Link to="#">
      <img src={league[0]?.image} alt="Banner" style={{width:'100%' , height:'454.58px'}} />
    </Link>
    <div className="banner banner-big d-md-block">
      <div className="banner-content text-center">
        <h4 className="banner-subtitle text-white">Trending</h4>{/* End .banner-subtitle */}
        <h3 className="banner-title text-white">New League</h3>{/* End .banner-title */}
        <p className="d-none d-lg-block text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />Donec odio. Quisque volutpat mattis eros. </p> 
        <Link to="//shoplist" className="btn btn-primary-white"><span>Shop Now</span><i className="icon-long-arrow-right" /></Link>
      </div>{/* End .banner-content */}
    </div>{/* End .banner */} 
  </div>

<div className="container new-arrivals">
  <div className="row">
    <div className="col-md-6">
      <div className="banner banner-overlay">
        <Link to="/ShopList" state={{ gender: "Women" }}>
          <img src={arrival[0]?.image1.path || "assets/images/demos/demo-8/banners/banner-5.jpg"} alt="Banner" />
        </Link>
        <div className="banner-content">
          <h4 className="banner-subtitle d-none d-lg-block"><Link to="/ShopList" state={{ gender: "Women" }}>New Arrivals</Link></h4>
          <h3 className="banner-title"><Link to="/ShopList" state={{ gender: "Women" }}>Women’s</Link></h3>
          <Link to="/ShopList" state={{ gender: "Women" }} className="btn btn-outline-white banner-link">
            Shop Now <i className="icon-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="banner banner-overlay">
        <Link to="/ShopList" state={{ gender: "Men" }}>
        <img src={arrival[0]?.image2.path || "assets/images/demos/demo-8/banners/banner-6.jpg"} alt="Banner" />
        </Link>
        <div className="banner-content">
          <h4 className="banner-subtitle d-none d-lg-block"><Link to="/ShopList" state={{ gender: "Men" }}>New Arrivals</Link></h4>
          <h3 className="banner-title"><Link to="/ShopList" state={{ gender: "Men" }}>Men’s</Link></h3>
          <Link to="/ShopList" state={{ gender: "Men" }} className="btn btn-outline-white banner-link">
            Shop Now <i className="icon-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>


  <div className="mb-5" />{/* End .mb-5 */}
  <div className="container recent-arrivals">
    <div className="heading heading-flex align-items-center mb-3">
      <h2 className="title title-lg">Recent Arrivals</h2>{/* End .title */}
      <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
        <li className="nav-item">
          <Link
            className={`nav-link ${selectedTab === "all" ? "active" : ""}`}
            to="#"
            onClick={handleTabClick}
          >
            All
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${selectedTab === "women" ? "active" : ""}`}
            to="#"
            onClick={handleTabClick}
          >
            Women
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${selectedTab === "men" ? "active" : ""}`}
            to="#"
            onClick={handleTabClick}
          >
            Men
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${selectedTab === "shoes & boots" ? "active" : ""}`}
            to="#"
            onClick={handleTabClick}
          >
            Shoes &amp; Boots
          </Link>
        </li>
      </ul>
    </div>{/* End .heading */}
    
    <div className="tab-content">
      <div className="tab-pane p-0 fade show active" id="recent-all-tab" role="tabpanel" aria-labelledby="recent-all-link">
        <div className="products">
          <div className="row justify-content-center">

          {products?.slice(0,8).map(product => (
        <div className="col-6 col-md-4 col-lg-3" key={product._id}>
          <div className="product product-2 text-center">
            <figure className="product-media">
              {product.onSale && <span className="product-label label-sale">Sale</span>}
              <Link to={`/ProductCenterd/${generateSlug(product?.productName, product?._id)}`}>

                <img src={product.mainImage} alt={product.productName} className="product-image" />
                {product.subImages.length > 0 && (
                  <img src={product.subImages[0]} alt="Product preview" className="product-image-hover" />
                )}
              </Link>
              <div className="product-action-vertical" onClick={()=>handleAddToWish(product?._id)}>
                <Link to="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable">
                  <span>add to wishlist</span>
                </Link>
              </div>
              <div className="product-action ">
                <Link to={`/ProductCenterd/${generateSlug(product?.productName, product?._id)}`} className="btn-product btn-cart"><span>Buy Now</span></Link>
              </div>
            </figure>
            <div className="product-body">
              <div className="product-cat">
                <Link to={`/category/${product.productCategory}`}>{product.productCategory}</Link>
              </div>
              <h3 className="product-title">
              <Link to={`/ProductCenterd/${generateSlug(product?.productName, product?._id)}`}>{product.productName}</Link>
              </h3>
              <div className="product-price">
                <span className="new-price">Now ₹{product.price}</span>
                <span className="old-price">Was ₹{product.mrp}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

          </div>{/* End .row */}
        </div>{/* End .products */}
      </div>{/* .End .tab-pane */}
      

      <div className="more-container text-center mt-3 mb-3">
      <Link
  to={{
    pathname: "/shoplist",
  }}
  state={{ selectedTab }}
  className="btn btn-outline-dark-3 btn-more"
>
  <span>View More</span>
  <i className="icon-long-arrow-right" />
</Link>
</div>{/* End .more-container */}
    </div>{/* End .container */}

    <div className="mb-7" />{/* End .mb-5 */}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6">
          <div className="icon-box icon-box-card text-center">
            <span className="icon-box-icon">
              <i className="icon-rocket" />
            </span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">Payment &amp; Delivery</h3>{/* End .icon-box-title */}
              <p>Free shipping for orders over $50</p>
            </div>{/* End .icon-box-content */}
          </div>{/* End .icon-box */}
        </div>{/* End .col-lg-4 col-sm-6 */}
        <div className="col-lg-4 col-sm-6">
          <div className="icon-box icon-box-card text-center">
            <span className="icon-box-icon">
              <i className="icon-rotate-left" />
            </span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">Return &amp; Refund</h3>{/* End .icon-box-title */}
              <p>Free 100% money back guarantee</p>
            </div>{/* End .icon-box-content */}
          </div>{/* End .icon-box */}
        </div>{/* End .col-lg-4 col-sm-6 */}
        <div className="col-lg-4 col-sm-6">
          <div className="icon-box icon-box-card text-center">
            <span className="icon-box-icon">
              <i className="icon-life-ring" />
            </span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">Quality Support</h3>{/* End .icon-box-title */}
              <p>Alway online feedback 24/7</p>
            </div>{/* End .icon-box-content */}
          </div>{/* End .icon-box */}
        </div>{/* End .col-lg-4 col-sm-6 */}
      </div>{/* End .row */}
    </div>{/* End .container */}
    <div className="container instagram">
      <div className="heading text-center">
        <h2 className="title title-lg">Follow Us On Instagram</h2>{/* End .title */}
        <p className="title-desc">Wanna share your style with us?</p>{/* End .title-desc */}
      </div>{/* End .heading */}
    </div>{/* End .container */}
    <div className="owl-carousel owl-simple" data-toggle="owl" data-owl-options="{
              &quot;nav&quot;: false, 
              &quot;dots&quot;: false,
              &quot;items&quot;: 6,
              &quot;margin&quot;: 0,
              &quot;loop&quot;: false,
              &quot;responsive&quot;: {
                  &quot;0&quot;: {
                      &quot;items&quot;:1
                  },
                  &quot;360&quot;: {
                      &quot;items&quot;:2
                  },
                  &quot;600&quot;: {
                      &quot;items&quot;:3
                  },
                  &quot;992&quot;: {
                      &quot;items&quot;:4
                  },
                  &quot;1200&quot;: {
                      &quot;items&quot;:5
                  },
                  &quot;1500&quot;: {
                      &quot;items&quot;:6
                  }
              }
          }">
      <div className="instagram-feed">
        <img src="assets/images/demos/demo-8/instagram/1.jpg" alt="img" />
        <div className="instagram-feed-content">
          <Link to="#"><i className="icon-heart-o" />466</Link>
          <Link to="#"><i className="icon-comments" />65</Link>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
      <div className="instagram-feed">
        <img src="assets/images/demos/demo-8/instagram/2.jpg" alt="img" />
        <div className="instagram-feed-content">
          <Link to="#"><i className="icon-heart-o" />39</Link>
          <Link to="#"><i className="icon-comments" />78</Link>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
      <div className="instagram-feed">
        <img src="assets/images/demos/demo-8/instagram/3.jpg" alt="img" />
        <div className="instagram-feed-content">
          <Link to="#"><i className="icon-heart-o" />691</Link>
          <Link to="#"><i className="icon-comments" />87</Link>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
      <div className="instagram-feed">
        <img src="assets/images/demos/demo-8/instagram/4.jpg" alt="img" />
        <div className="instagram-feed-content">
          <Link to="#"><i className="icon-heart-o" />508</Link>
          <Link to="#"><i className="icon-comments" />124</Link>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
      <div className="instagram-feed">
        <img src="assets/images/demos/demo-8/instagram/5.jpg" alt="img" />
        <div className="instagram-feed-content">
          <Link to="#"><i className="icon-heart-o" />433</Link>
          <Link to="#"><i className="icon-comments" />27</Link>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
      <div className="instagram-feed">
        <img src="assets/images/demos/demo-8/instagram/6.jpg" alt="img" />
        <div className="instagram-feed-content">
          <Link to="#"><i className="icon-heart-o" />122</Link>
          <Link to="#"><i className="icon-comments" />55</Link>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
    </div>{/* End .owl-carousel */}
  </div></main>
    </div>
  )
}

export default HomePage
