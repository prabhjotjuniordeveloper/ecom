import React from 'react'
import { Link } from "react-router-dom";
const ElementsProducts = () => {
  return (
    <div>
      

     <main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Products<span>Elements</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
        <li className="breadcrumb-item"><Link to="elements-list.html">Elements</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Products</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <h2 className="title text-center mb-3">3 Columns Large</h2>{/* End .title */}
      <div className="row">
        <div className="col-6 col-md-4 col-lg-4">
          <div className="product text-center">
            <figure className="product-media">
              <span className="product-label label-sale">30% off</span>
              <Link to="product.html">
                <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                <Link to="#" className="btn-product btn-compare" title="Compare"><span>compare</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">Women</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="product.html">Aliquam tincidunt mauris</Link></h3>{/* End .product-title */}
              <div className="product-price">
                <span className="new-price">$50.00</span>
                <span className="old-price">$84.00</span>
              </div>{/* End .product-price */}
              <div className="product-size">
                <Link to="#" className="disabled" title="Small">S</Link>
                <Link to="#" title="Medium">M</Link>
                <Link to="#" className="active" title="Large">L</Link>
                <Link to="#" title="Extra Large">XL</Link>
              </div>{/* End .product-size */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 4 Reviews )</span>
              </div>{/* End .rating-container */}
              <div className="product-nav product-nav-thumbs">
                <Link to="#" className="active">
                  <img src="assets/images/products/elements/product-1-thumb.jpg" alt="product desc" />
                </Link>
                <Link to="#">
                  <img src="assets/images/products/elements/product-1-2-thumb.jpg" alt="product desc" />
                </Link>
                <Link to="#">
                  <img src="assets/images/products/elements/product-1-3-thumb.jpg" alt="product desc" />
                </Link>
              </div>{/* End .product-nav */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-4 */}
        <div className="col-6 col-md-4 col-lg-4">
          <div className="product text-center">
            <figure className="product-media">
              <Link to="product.html">
                <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                <Link to="#" className="btn-product btn-compare" title="Compare"><span>compare</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">Men</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="product.html">Vestibulum auctor</Link></h3>{/* End .product-title */}
              <div className="product-price">
                $120.00
              </div>{/* End .product-price */}
              <div className="product-size">
                <Link to="#" className="disabled" title="Small">S</Link>
                <Link to="#" title="Medium">M</Link>
                <Link to="#" className="disabled" title="Large">L</Link>
                <Link to="#" title="Extra Large">XL</Link>
              </div>{/* End .product-size */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 4 Reviews )</span>
              </div>{/* End .rating-container */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-4 */}
        <div className="col-6 col-md-4 product-1 col-lg-4">
          <div className="product text-center">
            <figure className="product-media">
              <span className="product-label label-out">Out of Stock</span>
              <Link to="product.html">
                <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                <Link to="#" className="btn-product btn-compare" title="Compare"><span>compare</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">Accessories</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="product.html">Nunc dignissim risus</Link></h3>{/* End .product-title */}
              <div className="product-price">
                <span className="out-price">$32.00</span>
              </div>{/* End .product-price */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 11 Reviews )</span>
              </div>{/* End .rating-container */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-4 */}
      </div>{/* End .row */}
      <hr className="mt-1 mb-5" />
      <h2 className="title text-center mb-3">4 Columns Carousel</h2>{/* End .title */}
      <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                      &quot;nav&quot;: false, 
                      &quot;dots&quot;: false,
                      &quot;margin&quot;: 20,
                      &quot;loop&quot;: false,
                      &quot;responsive&quot;: {
                          &quot;0&quot;: {
                              &quot;items&quot;:2
                          },
                          &quot;480&quot;: {
                              &quot;items&quot;:2
                          },
                          &quot;992&quot;: {
                              &quot;items&quot;:3
                          },
                          &quot;1200&quot;: {
                              &quot;items&quot;:4
                          }
                      }
                  }">
        <div className="product">
          <figure className="product-media">
            <span className="product-label label-sale">30% off</span>
            <Link to="product.html">
              <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action action-icon-top">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
              <Link to="#" className="btn-product btn-compare" title="Compare"><span>compare</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body product-action-inner">
            <Link to="#" className="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></Link>
            <div className="product-cat">
              <Link to="#">Women</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Aliquam tincidunt mauris</Link></h3>{/* End .product-title */}
            <div className="product-price">
              <span className="new-price">$50.00</span>
              <span className="old-price">$84.00</span>
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings ratings-primary">
                <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 4 Reviews )</span>
            </div>{/* End .rating-container */}
            <div className="product-nav product-nav-dots">
              <Link to="#" className="active" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></Link>
              <Link to="#" style={{background: '#7fc5ed'}}><span className="sr-only">Color name</span></Link>
              <Link to="#" style={{background: '#e8c97a'}}><span className="sr-only">Color name</span></Link>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product">
          <figure className="product-media">
            <Link to="product.html">
              <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action action-icon-top">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
              <Link to="#" className="btn-product btn-compare" title="Compare"><span>compare</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body product-action-inner">
            <Link to="#" className="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></Link>
            <div className="product-cat">
              <Link to="#">Men</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Vestibulum auctor</Link></h3>{/* End .product-title */}
            <div className="product-price">
              $120.00
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings ratings-primary">
                <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 4 Reviews )</span>
            </div>{/* End .rating-container */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product">
          <figure className="product-media">
            <span className="product-label label-new">New</span>
            <Link to="product.html">
              <img src="assets/images/products/elements/product-3.jpg" alt="Product image" className="product-image" />
              <img src="assets/images/products/elements/product-3-2.jpg" alt="Product image" className="product-image-hover" />
            </Link>
            <div className="product-action action-icon-top">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
              <Link to="#" className="btn-product btn-compare" title="Compare"><span>compare</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body product-action-inner">
            <Link to="#" className="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></Link>
            <div className="product-cat">
              <Link to="#">Women</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Nunc dignissim risus</Link></h3>{/* End .product-title */}
            <div className="product-price">
              $50.00
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val ratings-primary" style={{width: '0%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 0 Reviews )</span>
            </div>{/* End .rating-container */}
            <div className="product-nav product-nav-dots">
              <Link to="#" className="active" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></Link>
              <Link to="#" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></Link>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product">
          <figure className="product-media">
            <span className="product-label label-out">Out Of Stock</span>
            <Link to="product.html">
              <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action action-icon-top">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
              <Link to="#" className="btn-product btn-compare" title="Compare"><span>compare</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body product-action-inner">
            <Link to="#" className="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></Link>
            <div className="product-cat">
              <Link to="#">Accessories</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Cras ornare tristique</Link></h3>{/* End .product-title */}
            <div className="product-price">
              <span className="out-price">$32.00</span>
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings ratings-primary">
                <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 11 Reviews )</span>
            </div>{/* End .rating-container */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
      </div>{/* End .owl-carousel */}
      <hr className="mt-3 mb-5" />
      <h2 className="title text-center mb-3">4 Columns Carousel 2</h2>{/* End .title */}
      <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                      &quot;nav&quot;: false, 
                      &quot;dots&quot;: false,
                      &quot;margin&quot;: 20,
                      &quot;loop&quot;: false,
                      &quot;responsive&quot;: {
                          &quot;0&quot;: {
                              &quot;items&quot;:2
                          },
                          &quot;480&quot;: {
                              &quot;items&quot;:2
                          },
                          &quot;992&quot;: {
                              &quot;items&quot;:3
                          },
                          &quot;1200&quot;: {
                              &quot;items&quot;:4
                          }
                      }
                  }">
        <div className="product product-2">
          <figure className="product-media">
            <span className="product-label label-circle label-sale">Sale</span>
            <Link to="product.html">
              <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-countdown" data-until="2019, 11, 2" />{/* End .product-countdown */}
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
            </div>{/* End .product-action */}
            <div className="product-action product-action-dark">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <Link to="#">Women</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Aliquam tincidunt mauris</Link></h3>{/* End .product-title */}
            <div className="product-price">
              <span className="new-price">$50.00</span>
              <span className="old-price">$84.00</span>
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 4 Reviews )</span>
            </div>{/* End .rating-container */}
            <div className="product-nav product-nav-thumbs">
              <Link to="#" className="active">
                <img src="assets/images/products/elements/product-thumb-1.jpg" alt="product desc" />
              </Link>
              <Link to="#">
                <img src="assets/images/products/elements/product-thumb-2.jpg" alt="product desc" />
              </Link>
              <Link to="#">
                <img src="assets/images/products/elements/product-thumb-3.jpg" alt="product desc" />
              </Link>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-2">
          <figure className="product-media">
            <Link to="product.html">
              <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
            </div>{/* End .product-action */}
            <div className="product-action product-action-dark">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <Link to="#">Men</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Vestibulum auctor</Link></h3>{/* End .product-title */}
            <div className="product-price">
              $120.00
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 4 Reviews )</span>
            </div>{/* End .rating-container */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-2">
          <figure className="product-media">
            <span className="product-label label-circle label-new">New</span>
            <Link to="product.html">
              <img src="assets/images/products/elements/product-3.jpg" alt="Product image" className="product-image" />
              <img src="assets/images/products/elements/product-3-2.jpg" alt="Product image" className="product-image-hover" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
            </div>{/* End .product-action */}
            <div className="product-action product-action-dark">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <Link to="#">Women</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Nunc dignissim risus</Link></h3>{/* End .product-title */}
            <div className="product-price">
              $50.00
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{width: '0%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 0 Reviews )</span>
            </div>{/* End .rating-container */}
            <div className="product-nav product-nav-thumbs">
              <Link to="#" className="active">
                <img src="assets/images/products/elements/product-thumb-4.jpg" alt="product desc" />
              </Link>
              <Link to="#">
                <img src="assets/images/products/elements/product-thumb-5.jpg" alt="product desc" />
              </Link>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-2">
          <figure className="product-media">
            <Link to="product.html">
              <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
            </div>{/* End .product-action */}
            <div className="product-action product-action-dark">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <Link to="#">Accessories</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Cras ornare tristique</Link></h3>{/* End .product-title */}
            <div className="product-price">
              <span className="out-price">$32.00</span>
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 11 Reviews )</span>
            </div>{/* End .rating-container */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
      </div>{/* End .owl-carousel */}
      <hr className="mt-3 mb-5" />
      <h2 className="title text-center mb-3">4 Columns Simple</h2>{/* End .title */}
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-3">
            <figure className="product-media">
              <span className="product-label">Sale</span>
              <Link to="product.html">
                <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                <Link to="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
              </div>{/* End .product-action-vertical */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              </div>{/* End .product-action */}
              <div className="product-cat">
                <Link to="#">Women</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="product.html">Aliquam tincidunt mauris</Link></h3>{/* End .product-title */}
              <div className="product-price">
                <span className="new-price">$50.00</span>
                <span className="old-price">$84.00</span>
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
            <div className="product-footer">
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 4 Reviews )</span>
              </div>{/* End .rating-container */}
              <div className="product-nav product-nav-thumbs">
                <Link to="#" className="active">
                  <img src="assets/images/products/elements/product-thumb-1.jpg" alt="product desc" />
                </Link>
                <Link to="#">
                  <img src="assets/images/products/elements/product-thumb-2.jpg" alt="product desc" />
                </Link>
                <Link to="#">
                  <img src="assets/images/products/elements/product-thumb-3.jpg" alt="product desc" />
                </Link>
              </div>{/* End .product-nav */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-3">
            <figure className="product-media">
              <Link to="product.html">
                <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                <Link to="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              </div>{/* End .product-action */}
              <div className="product-cat">
                <Link to="#">Men</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="product.html">Vestibulum auctor</Link></h3>{/* End .product-title */}
              <div className="product-price">
                $120.00
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
            <div className="product-footer">
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 4 Reviews )</span>
              </div>{/* End .rating-container */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-3">
            <figure className="product-media">
              <span className="product-label">New</span>
              <Link to="product.html">
                <img src="assets/images/products/elements/product-3.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/products/elements/product-3-2.jpg" alt="Product image" className="product-image-hover" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                <Link to="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              </div>{/* End .product-action */}
              <div className="product-cat">
                <Link to="#">Women</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="product.html">Nunc dignissim risus</Link></h3>{/* End .product-title */}
              <div className="product-price">
                $50.00
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
            <div className="product-footer">
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '0%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 0 Reviews )</span>
              </div>{/* End .rating-container */}
              <div className="product-nav product-nav-thumbs">
                <Link to="#" className="active">
                  <img src="assets/images/products/elements/product-thumb-4.jpg" alt="product desc" />
                </Link>
                <Link to="#">
                  <img src="assets/images/products/elements/product-thumb-5.jpg" alt="product desc" />
                </Link>
              </div>{/* End .product-nav */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-3">
            <figure className="product-media">
              <Link to="product.html">
                <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                <Link to="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              </div>{/* End .product-action */}
              <div className="product-cat">
                <Link to="#">Accessories</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="product.html">Cras ornare tristique</Link></h3>{/* End .product-title */}
              <div className="product-price">
                <span className="out-price">$32.00</span>
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
            <div className="product-footer">
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 11 Reviews )</span>
              </div>{/* End .rating-container */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
      </div>{/* End .row */}
      <hr className="mt-2 mb-5" />
      <h2 className="title text-center mb-3">5 Columns Simple</h2>{/* End .title */}
      <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow product-4-carousel" data-toggle="owl" data-owl-options="{
                      &quot;nav&quot;: false, 
                      &quot;dots&quot;: false,
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
                              &quot;items&quot;:5
                          }
                      }
                  }">
        <div className="product product-4 text-center">
          <figure className="product-media">
            <span className="product-label label-circle label-top">Top</span>
            <Link to="product.html">
              <img src="assets/images/products/elements/5cols/product-1.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
            </div>{/* End .product-action */}
            <div className="product-action">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <h3 className="product-title"><Link to="product.html">Aliquam tincidunt</Link></h3>{/* End .product-title */}
            <div className="product-price">
              $299.00
            </div>{/* End .product-price */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-4 text-center product-disabled">
          <figure className="product-media">
            <Link to="product.html">
              <img src="assets/images/products/elements/5cols/product-2.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
            </div>{/* End .product-action */}
            <div className="product-action">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <h3 className="product-title"><Link to="product.html">Vestibulum auctor</Link></h3>{/* End .product-title */}
            <div className="product-price">
              <span className="out-price">$32.00</span>
            </div>{/* End .product-price */}
            <div className="product-label-text">Out Of Stock</div>{/* End .product-label-text */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-4 text-center">
          <figure className="product-media">
            <span className="product-label label-circle label-sale">Sale</span>
            <Link to="product.html">
              <img src="assets/images/products/elements/5cols/product-3.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-countdown-container">
              <span className="product-contdown-title">offer ends in:</span>
              <div className="product-countdown countdown-compact" data-until="2019, 10, 5" data-compact="true" />{/* End .product-countdown */}
            </div>{/* End .product-countdown-container */}
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
            </div>{/* End .product-action */}
            <div className="product-action">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <h3 className="product-title"><Link to="product.html">Nunc dignissim risus</Link></h3>{/* End .product-title */}
            <div className="product-price">
              <span className="new-price">$50.00</span>
              <span className="old-price">$84.00</span>
            </div>{/* End .product-price */}
            <div className="product-nav product-nav-dots">
              <Link to="#" className="active" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></Link>
              <Link to="#" style={{background: '#7fc5ed'}}><span className="sr-only">Color name</span></Link>
              <Link to="#" style={{background: '#e8c97a'}}><span className="sr-only">Color name</span></Link>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-4 text-center">
          <figure className="product-media">
            <Link to="product.html">
              <img src="assets/images/products/elements/5cols/product-4.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
            </div>{/* End .product-action */}
            <div className="product-action">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <h3 className="product-title"><Link to="product.html">Cras ornare tristique</Link></h3>{/* End .product-title */}
            <div className="product-price">
              $120.00
            </div>{/* End .product-price */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-4 text-center">
          <figure className="product-media">
            <span className="product-label label-circle label-new">New</span>
            <Link to="product.html">
              <img src="assets/images/products/elements/5cols/product-5.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
            </div>{/* End .product-action */}
            <div className="product-action">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <h3 className="product-title"><Link to="product.html">Vivamus vestibulum</Link></h3>{/* End .product-title */}
            <div className="product-price">
              $110.00
            </div>{/* End .product-price */}
            <div className="product-nav product-nav-dots">
              <Link to="#" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></Link>
              <Link to="#" className="active" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></Link>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
          <div className="product-footer">
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{width: '20%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 0 Reviews )</span>
            </div>{/* End .rating-container */}
          </div>{/* End .product-footer */}
        </div>{/* End .product */}
      </div>{/* End owl-carousel */}
      <hr className="mt-0 mb-5" />
    </div>{/* End .container */}
    <div className="container-fluid">
      <h2 className="title text-center mb-3">Fullwidth</h2>{/* End .title */}
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
          <div className="product product-5 text-center">
            <figure className="product-media">
              <span className="product-label label-top">Top</span>
              <Link to="product.html">
                <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-countdown countdown-primary" data-until="2019, 10, 8" />{/* End .product-countdown */}
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                <Link to="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><Link to="product.html">Brown cable knit cardigan</Link></h3>{/* End .product-title */}
              <div className="product-price">
                <span className="new-price">$50.00</span>
                <span className="old-price">$84.00</span>
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-md-4 col-lg-3 col-xl-2 */}
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
          <div className="product product-5 text-center">
            <figure className="product-media">
              <Link to="product.html">
                <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                <Link to="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><Link to="product.html">Hooded parka jacket</Link></h3>{/* End .product-title */}
              <div className="product-price">
                $120.00
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
            <div className="product-footer">
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 0 Reviews )</span>
              </div>{/* End .rating-container */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-md-4 col-lg-3 col-xl-2 */}
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
          <div className="product product-5 text-center">
            <figure className="product-media">
              <span className="product-label label-sale">Sale</span>
              <Link to="product.html">
                <img src="assets/images/products/elements/product-3.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                <Link to="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><Link to="product.html">Grey cable knit longline maxi  cardigan</Link></h3>{/* End .product-title */}
              <div className="product-price">
                $110.00
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
            <div className="product-footer">
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 2 Reviews )</span>
              </div>{/* End .rating-container */}
              <div className="product-nav product-nav-dots">
                <Link to="#" className="active" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></Link>
                <Link to="#" style={{background: '#7fc5ed'}}><span className="sr-only">Color name</span></Link>
                <Link to="#" style={{background: '#e8c97a'}}><span className="sr-only">Color name</span></Link>
              </div>{/* End .product-nav */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-md-4 col-lg-3 col-xl-2 */}
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
          <div className="product product-5 product-disabled text-center">
            <figure className="product-media">
              <span className="product-label label-out">Out Of Stock</span>
              <Link to="product.html">
                <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                <Link to="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><Link to="product.html">Orange snake print scarf</Link></h3>{/* End .product-title */}
              <div className="product-price">
                <div className="out-price">$120.00</div>{/* End .out-price */}
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-md-4 col-lg-3 col-xl-2 */}
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
          <div className="product product-5 text-center">
            <figure className="product-media">
              <span className="product-label label-new">New</span>
              <Link to="product.html">
                <img src="assets/images/products/elements/product-5.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                <Link to="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><Link to="product.html">Beige knitted elastic runner shoes</Link></h3>{/* End .product-title */}
              <div className="product-price">
                $84.00
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
            <div className="product-footer">
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '20%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 0 Reviews )</span>
              </div>{/* End .rating-container */}
              <div className="product-nav product-nav-dots">
                <Link to="#" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></Link>
                <Link to="#" className="active" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></Link>
              </div>{/* End .product-nav */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-md-4 col-lg-3 col-xl-2 */}
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
          <div className="product product-5 text-center">
            <figure className="product-media">
              <Link to="product.html">
                <img src="assets/images/products/elements/product-6.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                <Link to="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><Link to="product.html">Grey check skinny suit jacket</Link></h3>{/* End .product-title */}
              <div className="product-price">
                $180.00
              </div>{/* End .product-price */}
            </div>{/* End .product-body */}
            <div className="product-footer">
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 2 Reviews )</span>
              </div>{/* End .rating-container */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-md-4 col-lg-3 col-xl-2 */}
      </div>{/* End .row */}
    </div>{/* End .container-fluid */}
    <div className="container">
      <hr className="mt-2 mb-5" />
      <h2 className="title text-center mb-3">4 Columns Without Space</h2>{/* End .title */}
      <div className="row no-gutters">
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-6">
            <figure className="product-media">
              <span className="product-label">Sale</span>
              <Link to="product.html">
                <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">Women</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="product.html">Aliquam tincidunt mauris</Link></h3>{/* End .product-title */}
              <div className="product-price">
                <span className="new-price">$50.00</span>
                <span className="old-price">$84.00</span>
              </div>{/* End .product-price */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 4 Reviews )</span>
              </div>{/* End .rating-container */}
              <div className="product-nav product-nav-dots">
                <Link to="#" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></Link>
                <Link to="#" className="active" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></Link>
              </div>{/* End .product-nav */}
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
              </div>{/* End .product-action */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-6">
            <figure className="product-media">
              <Link to="product.html">
                <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">Men</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="product.html">Vestibulum auctor</Link></h3>{/* End .product-title */}
              <div className="product-price">
                $120.00
              </div>{/* End .product-price */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 4 Reviews )</span>
              </div>{/* End .rating-container */}
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
              </div>{/* End .product-action */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-6">
            <figure className="product-media">
              <span className="product-label">New</span>
              <Link to="product.html">
                <img src="assets/images/products/elements/product-3.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/products/elements/product-3-2.jpg" alt="Product image" className="product-image-hover" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">Women</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="product.html">Nunc dignissim risus</Link></h3>{/* End .product-title */}
              <div className="product-price">
                $50.00
              </div>{/* End .product-price */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '0%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 0 Reviews )</span>
              </div>{/* End .rating-container */}
              <div className="product-nav product-nav-dots">
                <Link to="#" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></Link>
                <Link to="#" className="active" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></Link>
              </div>{/* End .product-nav */}
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
              </div>{/* End .product-action */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-6">
            <figure className="product-media">
              <span className="product-label">Out Of Stock</span>
              <Link to="product.html">
                <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
              </Link>
              <div className="product-action-vertical">
                <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to="#">Accessories</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to="product.html">Cras ornare tristique</Link></h3>{/* End .product-title */}
              <div className="product-price">
                <span className="out-price">$32.00</span>
              </div>{/* End .product-price */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 11 Reviews )</span>
              </div>{/* End .rating-container */}
              <div className="product-action">
                <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
              </div>{/* End .product-action */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
      </div>{/* End .row */}
    </div>{/* End .container */}
  </div>{/* End .page-content */}
  {/* Elements list */}
  <div className="container mb-5">
    <div className="row elements">
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-accordions.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>accordions</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-banners.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>banners</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-blog-posts.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>blog posts</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-buttons.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>buttons</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-cta.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>call to action</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-icon-boxes.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>icon boxes</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-portfolio.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>portfolio</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-product-category.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>product catigories</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-products.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>products</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-tabs.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>tabs</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-testimonials.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>testimonials</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-titles.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>titles</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-typography.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>typography</p>
          </div>
        </Link>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <Link to="elements-video-banners.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>video</p>
          </div>
        </Link>
      </div>
    </div>
  </div>{/* End Elements list */}
</main>{/* End .main -
*/}
->


    </div>
  )
}

export default ElementsProducts
