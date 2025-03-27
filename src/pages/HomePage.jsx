import React, { useState, useEffect } from 'react'
// import Product from '../components/Product'
import axios from '../Api/axios/axios_config.js';

const HomePage = () => {

  const [heroSection, setHeroSection] = useState("");
  const [brands, setBrands] = useState([]);
  
  useEffect(() => {
    const fetchHeroSection = async () => {
        try {
            const response = await axios.get(
                "/companyLogo/getAllCompanyLogo"
            );

            console.log("API Hero Response:", response.data);
// setHeroSection(response.data.AllLogos[0].image);

        } catch (error) {
            console.error("Network Error:", error.response);
        }
    };
    // fetch brand section
    const fetchBrandsSection = async () => {
      try {
          const response = await axios.get(
              "https://e-comm-app-fo7i.onrender.com/homePage/brandSection/getBrandSection/67a4a088fcd416d35ffc3ee9"
          );

          if (response.status === 200) {
              // console.log("API Brands Response:", response.data);
              setBrands(response.data.Brands_section.image);
          } else {
              console.error("Error Response:", response.data);
          }
      } catch (error) {
          console.error("Network Error:", error.response);
      }
  };

  fetchBrandsSection();
    fetchHeroSection();
}, []);

// console.log(brands);
  return (
    <div>
  
    <main className="main">
  <div className="intro-slider-container">
    <div className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light mb-0" data-toggle="owl" data-owl-options="{
                  &quot;dots&quot;: true,
                  &quot;nav&quot;: false, 
                  &quot;responsive&quot;: {
                      &quot;1200&quot;: {
                          &quot;nav&quot;: true,
                          &quot;dots&quot;: false
                      }
                  }
              }">
      <div className="intro-slide" style={{backgroundImage: 'url(assets/images/demos/demo-8/slider/slide-1.jpg)'}}>
        <div className="container intro-content text-left">
          <h3 className="intro-subtitle">Limited time only *</h3>{/* End .h3 intro-subtitle */}
          <h1 className="intro-title">Summer<br /><strong>sale</strong></h1>{/* End .intro-title */}
          <h3 className="intro-subtitle">Up to 50% off</h3>{/* End .h3 intro-subtitle */}
          <a href="/Shop" className="btn">
            <span>SHOP NOW</span>
            <i className="icon-long-arrow-right" />
          </a>
        </div>{/* End .intro-content */}
        <img className="position-right" src={heroSection} />
      </div>{/* End .intro-slide */}
      <div className="intro-slide" style={{backgroundImage: `url(${heroSection})`}}>
        <div className="container intro-content text-right">
          <h3 className="intro-subtitle">PREMIUM QUALITY</h3>{/* End .h3 intro-subtitle */}
          <h1 className="intro-title">coats <span className="highlight">&amp;</span><br />jackets</h1>{/* End .intro-title */}
          <a href="/Category" className="btn">
            <span>SHOP NOW</span>
            <i className="icon-long-arrow-right" />
          </a>
        </div>{/* End .intro-content */}
        <img className="position-left" src="assets/images/demos/demo-8/slider/img-2.png" />
      </div>{/* End .intro-slide */}
    </div>{/* End .intro-slider owl-carousel owl-simple */}
    {/* <span className="slider-loader" /> */}
    {/* End .slider-loader */}
  </div>{/* End .intro-slider-container */}
  <div className="pt-2 pb-2">
    <div className="container brands">
      <div className="banner-group">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="banner banner-overlay">
              <a href="#">
                <img src="assets/images/demos/demo-8/banners/banner-1.jpg" alt="Banner" />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle"><a href="#">Final reduction</a></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><a href="#"><strong>San0dals &amp; <br />Flip Flops</strong> <br />up to 60% off</a></h3>{/* End .banner-title */}
                <a href="#" className="btn btn-outline-white banner-link">Shop Now <i className="icon-long-arrow-right" /></a>
              </div>{/* End .banner-content */}
            </div>{/* End .banner */}
          </div>{/* End .col-lg-4 */}
          <div className="col-sm-6 col-lg-4">
            <div className="banner banner-overlay">
              <a href="#">
                <img src="assets/images/demos/demo-8/banners/banner-2.jpg" alt="Banner" />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle"><a href="#">Limited time only.</a></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><a href="#"><strong>Trainers &amp; <br />Sportwear</strong> <br />40 -70% off</a></h3>{/* End .banner-title */}
                <a href="#" className="btn btn-outline-white banner-link">Shop Now <i className="icon-long-arrow-right" /></a>
              </div>{/* End .banner-content */}
            </div>{/* End .banner */}
          </div>{/* End .col-lg-4 */}
          <div className="col-sm-6 col-lg-4 d-none d-lg-block">
            <div className="banner banner-overlay">
              <a href="#">
                <img src="assets/images/demos/demo-8/banners/banner-3.jpg" alt="Banner" />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle"><a href="#">This week we love...</a></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><a href="#"><strong>Women's <br />Accessories </strong> <br />from $6.99</a></h3>{/* End .banner-title */}
                <a href="#" className="btn btn-outline-white banner-link">Shop Now <i className="icon-long-arrow-right" /></a>
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
                    {brands.map((brand) => (
    <a href="#" className="brand me-3" key={brand.id}>
        <img src={`https://e-comm-app-fo7i.onrender.com/${brand.path}`} alt={brand.name || "Brand"} className='me-6' />
    </a>
))}
        {/* <a href="#" className="brand">
          <img src="assets/images/brands/1.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/2.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/3.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/4.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/5.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/6.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/7.png" alt="Brand Name" />
        </a> */}
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
              <a href="/ProductExtend">
                <img src="assets/images/demos/demo-8/products/product-1-1.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/demos/demo-8/products/product-1-2.jpg" alt="Product image" className="product-image-hover" />
              </a>
              <div className="product-action-vertical">
                <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Clothing</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="/ProductExtend">Denim jacket</a></h3>{/* End .product-title */}
              <div className="product-price">
                $19.99
              </div>{/* End .product-price */}
              <div className="product-nav product-nav-thumbs">
                <a href="#" className="active">
                  <img src="assets/images/demos/demo-8/products/product-1-thumb.jpg" alt="product desc" />
                </a>
                <a href="#">
                  <img src="assets/images/demos/demo-8/products/product-1-2-thumb.jpg" alt="product desc" />
                </a>
                <a href="#">
                  <img src="assets/images/demos/demo-8/products/product-1-3-thumb.jpg" alt="product desc" />
                </a>
              </div>
            </div>{/* End .product-body */}
          </div>{/* End .product */}
          <div className="product product-2">
            <figure className="product-media">
              <a href="/ProductExtend">
                <img src="assets/images/demos/demo-8/products/product-2-1.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/demos/demo-8/products/product-2-2.jpg" alt="Product image" className="product-image-hover" />
              </a>
              <div className="product-action-vertical">
                <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Shoes</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="/ProductExtend">Sandals</a></h3>{/* End .product-title */}
              <div className="product-price">
                $24.99
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
          <div className="product product-2">
            <figure className="product-media">
              <span className="product-label label-sale">sale</span>
              <a href="/ProductExtend">
                <img src="assets/images/demos/demo-8/products/product-3-1.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/demos/demo-8/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
              </a>
              <div className="product-action-vertical">
                <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Clothing</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="/ProductExtend">Printed sweatshirt</a></h3>{/* End .product-title */}
              <div className="product-price">
                <span className="new-price">Now $7.99</span>
                <span className="old-price">Was $12.99</span>
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
          <div className="product product-2">
            <figure className="product-media">
              <a href="/ProductExtend">
                <img src="assets/images/demos/demo-8/products/product-4-1.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/demos/demo-8/products/product-4-2.jpg" alt="Product image" className="product-image-hover" />
              </a>
              <div className="product-action-vertical">
                <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Clothing</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="/ProductExtend">Linen-blend paper bag trousers</a></h3>{/* End .product-title */}
              <div className="product-price">
                $17.99
              </div>{/* End .product-price */}
              <div className="product-nav product-nav-thumbs">
                <a href="#" className="active">
                  <img src="assets/images/demos/demo-8/products/product-4-thumb.jpg" alt="product desc" />
                </a>
                <a href="#">
                  <img src="assets/images/demos/demo-8/products/product-4-2-thumb.jpg" alt="product desc" />
                </a>
              </div>
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
                                  &quot;items&quot;:1
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
              <a href="/ProductExtend">
                <img src="assets/images/demos/demo-8/products/product-2-1.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/demos/demo-8/products/product-2-2.jpg" alt="Product image" className="product-image-hover" />
              </a>
              <div className="product-action-vertical">
                <a href="/Wishlist#" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Shoes</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="/ProductExtend">Sandals</a></h3>{/* End .product-title */}
              <div className="product-price">
                $24.99
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
          <div className="product product-2">
            <figure className="product-media">
              <span className="product-label label-sale">sale</span>
              <a href="/ProductExtend">
                <img src="assets/images/demos/demo-8/products/product-3-1.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/demos/demo-8/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
              </a>
              <div className="product-action-vertical">
                <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Clothing</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="/ProductExtend">Printed sweatshirt</a></h3>{/* End .product-title */}
              <div className="product-price">
                <span className="new-price">Now $7.99</span>
                <span className="old-price">Was $12.99</span>
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
                                  &quot;items&quot;:1
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
              <a href="/ProductExtend">
                <img src="assets/images/demos/demo-8/products/product-2-1.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/demos/demo-8/products/product-2-2.jpg" alt="Product image" className="product-image-hover" />
              </a>
              <div className="product-action-vertical">
                <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Shoes</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="/ProductExtend">Sandals</a></h3>{/* End .product-title */}
              <div className="product-price">
                $24.99
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
          <div className="product product-2">
            <figure className="product-media">
              <span className="product-label label-sale">sale</span>
              <a href="/ProductExtend">
                <img src="assets/images/demos/demo-8/products/product-3-1.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/demos/demo-8/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
              </a>
              <div className="product-action-vertical">
                <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Clothing</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="/ProductExtend">Printed sweatshirt</a></h3>{/* End .product-title */}
              <div className="product-price">
                <span className="new-price">Now $7.99</span>
                <span className="old-price">Was $12.99</span>
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
          <div className="product product-2">
            <figure className="product-media">
              <a href="/ProductExtend">
                <img src="assets/images/demos/demo-8/products/product-4-1.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/demos/demo-8/products/product-4-2.jpg" alt="Product image" className="product-image-hover" />
              </a>
              <div className="product-action-vertical">
                <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
              <div className="product-action ">
                <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Clothing</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="/ProductExtend">Linen-blend paper bag trousers</a></h3>{/* End .product-title */}
              <div className="product-price">
                $17.99
              </div>{/* End .product-price */}
              <div className="product-nav product-nav-thumbs">
                <a href="#" className="active">
                  <img src="assets/images/demos/demo-8/products/product-4-thumb.jpg" alt="product desc" />
                </a>
                <a href="#">
                  <img src="assets/images/demos/demo-8/products/product-4-2-thumb.jpg" alt="product desc" />
                </a>
              </div>
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .owl-carousel */}
      </div>{/* .End .tab-pane */}
    </div>{/* End .tab-content */}
  </div>
  <div className="mb-3 mb-xl-2" />
  <div className="trending">
    <a href="#">
      <img src="assets/images/demos/demo-8/banners/banner-4.jpg" alt="Banner" />
    </a>
    <div className="banner banner-big d-md-block">
      <div className="banner-content text-center">
        <h4 className="banner-subtitle text-white">Trending</h4>{/* End .banner-subtitle */}
        <h3 className="banner-title text-white">New League</h3>{/* End .banner-title */}
        <p className="d-none d-lg-block text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />Donec odio. Quisque volutpat mattis eros. </p> 
        <a href="/Category" className="btn btn-primary-white"><span>Shop Now</span><i className="icon-long-arrow-right" /></a>
      </div>{/* End .banner-content */}
    </div>{/* End .banner */}
  </div>
  <div className="container new-arrivals">
    <div className="row">
      <div className="col-md-6">
        <div className="banner banner-overlay">
          <a href="#">
            <img src="assets/images/demos/demo-8/banners/banner-5.jpg" alt="Banner" />
          </a>
          <div className="banner-content">
            <h4 className="banner-subtitle d-none d-lg-block"><a href="#">New Arrivals</a></h4>{/* End .banner-subtitle */}
            <h3 className="banner-title"><a href="#">Women’s</a></h3>{/* End .banner-title */}
            <a href="#" className="btn btn-outline-white banner-link">Shop Now <i className="icon-long-arrow-right" /></a>
          </div>{/* End .banner-content */}
        </div>{/* End .banner */}
      </div>{/* End .col-md-6 */}
      <div className="col-md-6">
        <div className="banner banner-overlay">
          <a href="">
            <img src="assets/images/demos/demo-8/banners/banner-6.jpg" alt="Banner" />
          </a>
          <div className="banner-content">
            <h4 className="banner-subtitle d-none d-lg-block"><a href="#">New Arrivals</a></h4>{/* End .banner-subtitle */}
            <h3 className="banner-title "><a href="#">Men’s</a></h3>{/* End .banner-title */}
            <a href="/ShopList" className="btn btn-outline-white banner-link">Shop Now <i className="icon-long-arrow-right" /></a>
          </div>{/* End .banner-content */}
        </div>{/* End .banner */}
      </div>{/* End .col-md-6 */}
    </div>{/* End .row */}
  </div>{/* End .container */}
  <div className="mb-5" />{/* End .mb-5 */}
  <div className="container recent-arrivals">
    <div className="heading heading-flex align-items-center mb-3">
      <h2 className="title title-lg">Recent Arrivals</h2>{/* End .title */}
      <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="recent-all-link" data-toggle="tab" href="#recent-all-tab" role="tab" aria-controls="recent-all-tab" aria-selected="true">All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="recent-women-link" data-toggle="tab" href="#recent-women-tab" role="tab" aria-controls="recent-women-tab" aria-selected="false">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="recent-men-link" data-toggle="tab" href="#recent-men-tab" role="tab" aria-controls="recent-men-tab" aria-selected="false">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="recent-shoes-link" data-toggle="tab" href="#recent-shoes-tab" role="tab" aria-controls="recent-shoes-tab" aria-selected="false">Shoes &amp; Boots</a>
        </li>
      </ul>
    </div>{/* End .heading */}
    <div className="tab-content">
      <div className="tab-pane p-0 fade show active" id="recent-all-tab" role="tabpanel" aria-labelledby="recent-all-link">
        <div className="products">
          <div className="row justify-content-center">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <span className="product-label label-sale">Sale</span>
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-5-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-5-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/Cart">Clothing</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">Tie-detail top</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">Now $3.99</span>
                    <span className="old-price">Was $6.99</span>
                  </div>{/* End .product-price */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-6-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-6-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/Cart">Shoes</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">Sandals</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $12.99
                  </div>{/* End .product-price */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-7-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-7-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/Cart">Bags</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">Small bucket bag</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $14.99
                  </div>{/* End .product-price */}
                  <div className="product-nav product-nav-thumbs">
                    <a href="/ProductFW" className="active">
                      <img src="assets/images/demos/demo-8/products/product-7-thumb.jpg" alt="product desc" />
                    </a>
                    <a href="/ProductFW">
                      <img src="assets/images/demos/demo-8/products/product-7-2-thumb.jpg" alt="product desc" />
                    </a>
                  </div>{/* End .product-nav */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-8-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-8-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/Cart">Clothing</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">Denim jacket</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $34.99
                  </div>{/* End .product-price */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-9-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-9-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/Cart">Clothing</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">BShort wrap dress</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $17.99
                  </div>{/* End .product-price */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-10-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-10-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/Cart">Clothing</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">Biker jacket</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $34.99
                  </div>{/* End .product-price */}
                  <div className="product-nav product-nav-thumbs">
                    <a href="/ProductFW" className="active">
                      <img src="assets/images/demos/demo-8/products/product-10-thumb.jpg" alt="product desc" />
                    </a>
                    <a href="/ProductFW">
                      <img src="assets/images/demos/demo-8/products/product-10-2-thumb.jpg" alt="product desc" />
                    </a>
                  </div>{/* End .product-nav */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-11-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-11-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/Cart">Shoes</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">Loafers</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $9.99
                  </div>{/* End .product-price */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <span className="product-label label-sale">sale</span>
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-12-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-12-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/ShopList">Clothing</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">Super Skinny High Jeggings</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">Now $12.99</span>
                    <span className="old-price">Was $17.99</span>
                  </div>{/* End .product-price */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
          </div>{/* End .row */}
        </div>{/* End .products */}
      </div>{/* .End .tab-pane */}
      <div className="tab-pane p-0 fade" id="recent-women-tab" role="tabpanel" aria-labelledby="recent-women-link">
        <div className="products">
          <div className="row justify-content-center">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <span className="product-label label-sale">Sale</span>
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-5-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-5-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/ShopList">Clothing</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">Tie-detail top</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">Now $3.99</span>
                    <span className="old-price">Was $6.99</span>
                  </div>{/* End .product-price */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-6-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-6-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/ShopList">Shoes</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">Sandals</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $12.99
                  </div>{/* End .product-price */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
          </div>{/* End .row */}
        </div>{/* End .products */}
      </div>{/* .End .tab-pane */}
      <div className="tab-pane p-0 fade" id="recent-men-tab" role="tabpanel" aria-labelledby="recent-men-link">
        <div className="products">
          <div className="row justify-content-center">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-11-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-11-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/ShopList#">Shoes</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">Loafers</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $9.99
                  </div>{/* End .product-price */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2 text-center">
                <figure className="product-media">
                  <span className="product-label label-sale">sale</span>
                  <a href="/ProductExtend">
                    <img src="assets/images/demos/demo-8/products/product-12-1.jpg" alt="Product image" className="product-image" />
                    <img src="assets/images/demos/demo-8/products/product-12-2.jpg" alt="Product image" className="product-image-hover" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/ShopList">Clothing</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="/ProductExtend">Super Skinny High Jeggings</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">Now $12.99</span>
                    <span className="old-price">Was $17.99</span>
                  </div>{/* End .product-price */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .row */}
          </div>{/* End .products */}
        </div>{/* .End .tab-pane */}
        <div className="tab-pane p-0 fade" id="recent-shoes-tab" role="tabpanel" aria-labelledby="recent-shoes-link">
          <div className="products">
            <div className="row justify-content-center">
              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-2 text-center">
                  <figure className="product-media">
                    <a href="/ProductExtend">
                      <img src="assets/images/demos/demo-8/products/product-7-1.jpg" alt="Product image" className="product-image" />
                      <img src="assets/images/demos/demo-8/products/product-7-2.jpg" alt="Product image" className="product-image-hover" />
                    </a>
                    <div className="product-action-vertical">
                      <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    </div>{/* End .product-action-vertical */}
                    <div className="product-action">
                      <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </figure>{/* End .product-media */}
                  <div className="product-body">
                    <div className="product-cat">
                      <a href="/ShopList">Bags</a>
                    </div>{/* End .product-cat */}
                    <h3 className="product-title"><a href="/ProductExtend">Small bucket bag</a></h3>{/* End .product-title */}
                    <div className="product-price">
                      $14.99
                    </div>{/* End .product-price */}
                    <div className="product-nav product-nav-thumbs">
                      <a href="/ShopList" className="active">
                        <img src="assets/images/demos/demo-8/products/product-7-thumb.jpg" alt="product desc" />
                      </a>
                      <a href="/ShopList">
                        <img src="assets/images/demos/demo-8/products/product-7-2-thumb.jpg" alt="product desc" />
                      </a>
                    </div>{/* End .product-nav */}
                  </div>{/* End .product-body */}
                </div>{/* End .product */}
              </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-2 text-center">
                  <figure className="product-media">
                    <a href="/ProductExtend">
                      <img src="assets/images/demos/demo-8/products/product-8-1.jpg" alt="Product image" className="product-image" />
                      <img src="assets/images/demos/demo-8/products/product-8-2.jpg" alt="Product image" className="product-image-hover" />
                    </a>
                    <div className="product-action-vertical">
                      <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    </div>{/* End .product-action-vertical */}
                    <div className="product-action">
                      <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </figure>{/* End .product-media */}
                  <div className="product-body">
                    <div className="product-cat">
                      <a href="/ShopList">Clothing</a>
                    </div>{/* End .product-cat */}
                    <h3 className="product-title"><a href="/ProductExtend">Denim jacket</a></h3>{/* End .product-title */}
                    <div className="product-price">
                      $34.99
                    </div>{/* End .product-price */}
                  </div>{/* End .product-body */}
                </div>{/* End .product */}
              </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-2 text-center">
                  <figure className="product-media">
                    <a href="/ProductExtend">
                      <img src="assets/images/demos/demo-8/products/product-9-1.jpg" alt="Product image" className="product-image" />
                      <img src="assets/images/demos/demo-8/products/product-9-2.jpg" alt="Product image" className="product-image-hover" />
                    </a>
                    <div className="product-action-vertical">
                      <a href="/Wishlist" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    </div>{/* End .product-action-vertical */}
                    <div className="product-action">
                      <a href="/Cart" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </figure>{/* End .product-media */}
                  <div className="product-body">
                    <div className="product-cat">
                      <a href="/ShopList">Clothing</a>
                    </div>{/* End .product-cat */}
                    <h3 className="product-title"><a href="/ProductExtend">BShort wrap dress</a></h3>{/* End .product-title */}
                    <div className="product-price">
                      $17.99
                    </div>{/* End .product-price */}
                  </div>{/* End .product-body */}
                </div>{/* End .product */}
              </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
            </div>{/* End .row */}
          </div>{/* End .products */}
        </div>{/* .End .tab-pane */}
      </div>{/* End .tab-content */}
      <div className="more-container text-center mt-3 mb-3">
        <a href="/Category" className="btn btn-outline-dark-3 btn-more"><span>View More</span><i className="icon-long-arrow-right" /></a>
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
          <a href="#"><i className="icon-heart-o" />466</a>
          <a href="#"><i className="icon-comments" />65</a>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
      <div className="instagram-feed">
        <img src="assets/images/demos/demo-8/instagram/2.jpg" alt="img" />
        <div className="instagram-feed-content">
          <a href="#"><i className="icon-heart-o" />39</a>
          <a href="#"><i className="icon-comments" />78</a>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
      <div className="instagram-feed">
        <img src="assets/images/demos/demo-8/instagram/3.jpg" alt="img" />
        <div className="instagram-feed-content">
          <a href="#"><i className="icon-heart-o" />691</a>
          <a href="#"><i className="icon-comments" />87</a>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
      <div className="instagram-feed">
        <img src="assets/images/demos/demo-8/instagram/4.jpg" alt="img" />
        <div className="instagram-feed-content">
          <a href="#"><i className="icon-heart-o" />508</a>
          <a href="#"><i className="icon-comments" />124</a>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
      <div className="instagram-feed">
        <img src="assets/images/demos/demo-8/instagram/5.jpg" alt="img" />
        <div className="instagram-feed-content">
          <a href="#"><i className="icon-heart-o" />433</a>
          <a href="#"><i className="icon-comments" />27</a>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
      <div className="instagram-feed">
        <img src="assets/images/demos/demo-8/instagram/6.jpg" alt="img" />
        <div className="instagram-feed-content">
          <a href="#"><i className="icon-heart-o" />122</a>
          <a href="#"><i className="icon-comments" />55</a>
        </div>{/* End .instagram-feed-content */}
      </div>{/* End .instagram-feed */}
    </div>{/* End .owl-carousel */}
  </div></main>
    </div>
  )
}

export default HomePage
