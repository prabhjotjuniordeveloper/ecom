import React from 'react'

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
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="elements-list.html">Elements</a></li>
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
              <a href="product.html">
                <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                <a href="#" className="btn-product btn-compare" title="Compare"><span>compare</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Women</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="product.html">Aliquam tincidunt mauris</a></h3>{/* End .product-title */}
              <div className="product-price">
                <span className="new-price">$50.00</span>
                <span className="old-price">$84.00</span>
              </div>{/* End .product-price */}
              <div className="product-size">
                <a href="#" className="disabled" title="Small">S</a>
                <a href="#" title="Medium">M</a>
                <a href="#" className="active" title="Large">L</a>
                <a href="#" title="Extra Large">XL</a>
              </div>{/* End .product-size */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <span className="ratings-text">( 4 Reviews )</span>
              </div>{/* End .rating-container */}
              <div className="product-nav product-nav-thumbs">
                <a href="#" className="active">
                  <img src="assets/images/products/elements/product-1-thumb.jpg" alt="product desc" />
                </a>
                <a href="#">
                  <img src="assets/images/products/elements/product-1-2-thumb.jpg" alt="product desc" />
                </a>
                <a href="#">
                  <img src="assets/images/products/elements/product-1-3-thumb.jpg" alt="product desc" />
                </a>
              </div>{/* End .product-nav */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-4 */}
        <div className="col-6 col-md-4 col-lg-4">
          <div className="product text-center">
            <figure className="product-media">
              <a href="product.html">
                <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                <a href="#" className="btn-product btn-compare" title="Compare"><span>compare</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Men</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="product.html">Vestibulum auctor</a></h3>{/* End .product-title */}
              <div className="product-price">
                $120.00
              </div>{/* End .product-price */}
              <div className="product-size">
                <a href="#" className="disabled" title="Small">S</a>
                <a href="#" title="Medium">M</a>
                <a href="#" className="disabled" title="Large">L</a>
                <a href="#" title="Extra Large">XL</a>
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
              <a href="product.html">
                <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                <a href="#" className="btn-product btn-compare" title="Compare"><span>compare</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Accessories</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="product.html">Nunc dignissim risus</a></h3>{/* End .product-title */}
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
            <a href="product.html">
              <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action action-icon-top">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
              <a href="#" className="btn-product btn-compare" title="Compare"><span>compare</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body product-action-inner">
            <a href="#" className="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
            <div className="product-cat">
              <a href="#">Women</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Aliquam tincidunt mauris</a></h3>{/* End .product-title */}
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
              <a href="#" className="active" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></a>
              <a href="#" style={{background: '#7fc5ed'}}><span className="sr-only">Color name</span></a>
              <a href="#" style={{background: '#e8c97a'}}><span className="sr-only">Color name</span></a>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product">
          <figure className="product-media">
            <a href="product.html">
              <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action action-icon-top">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
              <a href="#" className="btn-product btn-compare" title="Compare"><span>compare</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body product-action-inner">
            <a href="#" className="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
            <div className="product-cat">
              <a href="#">Men</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Vestibulum auctor</a></h3>{/* End .product-title */}
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
            <a href="product.html">
              <img src="assets/images/products/elements/product-3.jpg" alt="Product image" className="product-image" />
              <img src="assets/images/products/elements/product-3-2.jpg" alt="Product image" className="product-image-hover" />
            </a>
            <div className="product-action action-icon-top">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
              <a href="#" className="btn-product btn-compare" title="Compare"><span>compare</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body product-action-inner">
            <a href="#" className="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
            <div className="product-cat">
              <a href="#">Women</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Nunc dignissim risus</a></h3>{/* End .product-title */}
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
              <a href="#" className="active" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></a>
              <a href="#" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></a>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product">
          <figure className="product-media">
            <span className="product-label label-out">Out Of Stock</span>
            <a href="product.html">
              <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action action-icon-top">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
              <a href="#" className="btn-product btn-compare" title="Compare"><span>compare</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body product-action-inner">
            <a href="#" className="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
            <div className="product-cat">
              <a href="#">Accessories</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Cras ornare tristique</a></h3>{/* End .product-title */}
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
            <a href="product.html">
              <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-countdown" data-until="2019, 11, 2" />{/* End .product-countdown */}
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
            </div>{/* End .product-action */}
            <div className="product-action product-action-dark">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <a href="#">Women</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Aliquam tincidunt mauris</a></h3>{/* End .product-title */}
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
              <a href="#" className="active">
                <img src="assets/images/products/elements/product-thumb-1.jpg" alt="product desc" />
              </a>
              <a href="#">
                <img src="assets/images/products/elements/product-thumb-2.jpg" alt="product desc" />
              </a>
              <a href="#">
                <img src="assets/images/products/elements/product-thumb-3.jpg" alt="product desc" />
              </a>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-2">
          <figure className="product-media">
            <a href="product.html">
              <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
            </div>{/* End .product-action */}
            <div className="product-action product-action-dark">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <a href="#">Men</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Vestibulum auctor</a></h3>{/* End .product-title */}
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
            <a href="product.html">
              <img src="assets/images/products/elements/product-3.jpg" alt="Product image" className="product-image" />
              <img src="assets/images/products/elements/product-3-2.jpg" alt="Product image" className="product-image-hover" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
            </div>{/* End .product-action */}
            <div className="product-action product-action-dark">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <a href="#">Women</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Nunc dignissim risus</a></h3>{/* End .product-title */}
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
              <a href="#" className="active">
                <img src="assets/images/products/elements/product-thumb-4.jpg" alt="product desc" />
              </a>
              <a href="#">
                <img src="assets/images/products/elements/product-thumb-5.jpg" alt="product desc" />
              </a>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-2">
          <figure className="product-media">
            <a href="product.html">
              <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
            </div>{/* End .product-action */}
            <div className="product-action product-action-dark">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <a href="#">Accessories</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Cras ornare tristique</a></h3>{/* End .product-title */}
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
              <a href="product.html">
                <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                <a href="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
              </div>{/* End .product-action-vertical */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
              <div className="product-cat">
                <a href="#">Women</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="product.html">Aliquam tincidunt mauris</a></h3>{/* End .product-title */}
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
                <a href="#" className="active">
                  <img src="assets/images/products/elements/product-thumb-1.jpg" alt="product desc" />
                </a>
                <a href="#">
                  <img src="assets/images/products/elements/product-thumb-2.jpg" alt="product desc" />
                </a>
                <a href="#">
                  <img src="assets/images/products/elements/product-thumb-3.jpg" alt="product desc" />
                </a>
              </div>{/* End .product-nav */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-3">
            <figure className="product-media">
              <a href="product.html">
                <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                <a href="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
              <div className="product-cat">
                <a href="#">Men</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="product.html">Vestibulum auctor</a></h3>{/* End .product-title */}
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
              <a href="product.html">
                <img src="assets/images/products/elements/product-3.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/products/elements/product-3-2.jpg" alt="Product image" className="product-image-hover" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                <a href="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
              <div className="product-cat">
                <a href="#">Women</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="product.html">Nunc dignissim risus</a></h3>{/* End .product-title */}
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
                <a href="#" className="active">
                  <img src="assets/images/products/elements/product-thumb-4.jpg" alt="product desc" />
                </a>
                <a href="#">
                  <img src="assets/images/products/elements/product-thumb-5.jpg" alt="product desc" />
                </a>
              </div>{/* End .product-nav */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-3">
            <figure className="product-media">
              <a href="product.html">
                <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                <a href="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
              <div className="product-cat">
                <a href="#">Accessories</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="product.html">Cras ornare tristique</a></h3>{/* End .product-title */}
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
            <a href="product.html">
              <img src="assets/images/products/elements/5cols/product-1.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
            </div>{/* End .product-action */}
            <div className="product-action">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <h3 className="product-title"><a href="product.html">Aliquam tincidunt</a></h3>{/* End .product-title */}
            <div className="product-price">
              $299.00
            </div>{/* End .product-price */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-4 text-center product-disabled">
          <figure className="product-media">
            <a href="product.html">
              <img src="assets/images/products/elements/5cols/product-2.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
            </div>{/* End .product-action */}
            <div className="product-action">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <h3 className="product-title"><a href="product.html">Vestibulum auctor</a></h3>{/* End .product-title */}
            <div className="product-price">
              <span className="out-price">$32.00</span>
            </div>{/* End .product-price */}
            <div className="product-label-text">Out Of Stock</div>{/* End .product-label-text */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-4 text-center">
          <figure className="product-media">
            <span className="product-label label-circle label-sale">Sale</span>
            <a href="product.html">
              <img src="assets/images/products/elements/5cols/product-3.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-countdown-container">
              <span className="product-contdown-title">offer ends in:</span>
              <div className="product-countdown countdown-compact" data-until="2019, 10, 5" data-compact="true" />{/* End .product-countdown */}
            </div>{/* End .product-countdown-container */}
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
            </div>{/* End .product-action */}
            <div className="product-action">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <h3 className="product-title"><a href="product.html">Nunc dignissim risus</a></h3>{/* End .product-title */}
            <div className="product-price">
              <span className="new-price">$50.00</span>
              <span className="old-price">$84.00</span>
            </div>{/* End .product-price */}
            <div className="product-nav product-nav-dots">
              <a href="#" className="active" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></a>
              <a href="#" style={{background: '#7fc5ed'}}><span className="sr-only">Color name</span></a>
              <a href="#" style={{background: '#e8c97a'}}><span className="sr-only">Color name</span></a>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-4 text-center">
          <figure className="product-media">
            <a href="product.html">
              <img src="assets/images/products/elements/5cols/product-4.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
            </div>{/* End .product-action */}
            <div className="product-action">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <h3 className="product-title"><a href="product.html">Cras ornare tristique</a></h3>{/* End .product-title */}
            <div className="product-price">
              $120.00
            </div>{/* End .product-price */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-4 text-center">
          <figure className="product-media">
            <span className="product-label label-circle label-new">New</span>
            <a href="product.html">
              <img src="assets/images/products/elements/5cols/product-5.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
            </div>{/* End .product-action */}
            <div className="product-action">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <h3 className="product-title"><a href="product.html">Vivamus vestibulum</a></h3>{/* End .product-title */}
            <div className="product-price">
              $110.00
            </div>{/* End .product-price */}
            <div className="product-nav product-nav-dots">
              <a href="#" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></a>
              <a href="#" className="active" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></a>
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
              <a href="product.html">
                <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-countdown countdown-primary" data-until="2019, 10, 8" />{/* End .product-countdown */}
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                <a href="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><a href="product.html">Brown cable knit cardigan</a></h3>{/* End .product-title */}
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
              <a href="product.html">
                <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                <a href="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><a href="product.html">Hooded parka jacket</a></h3>{/* End .product-title */}
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
              <a href="product.html">
                <img src="assets/images/products/elements/product-3.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                <a href="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><a href="product.html">Grey cable knit longline maxi  cardigan</a></h3>{/* End .product-title */}
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
                <a href="#" className="active" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></a>
                <a href="#" style={{background: '#7fc5ed'}}><span className="sr-only">Color name</span></a>
                <a href="#" style={{background: '#e8c97a'}}><span className="sr-only">Color name</span></a>
              </div>{/* End .product-nav */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-md-4 col-lg-3 col-xl-2 */}
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
          <div className="product product-5 product-disabled text-center">
            <figure className="product-media">
              <span className="product-label label-out">Out Of Stock</span>
              <a href="product.html">
                <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                <a href="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><a href="product.html">Orange snake print scarf</a></h3>{/* End .product-title */}
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
              <a href="product.html">
                <img src="assets/images/products/elements/product-5.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                <a href="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><a href="product.html">Beige knitted elastic runner shoes</a></h3>{/* End .product-title */}
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
                <a href="#" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></a>
                <a href="#" className="active" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></a>
              </div>{/* End .product-nav */}
            </div>{/* End .product-footer */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-md-4 col-lg-3 col-xl-2 */}
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
          <div className="product product-5 text-center">
            <figure className="product-media">
              <a href="product.html">
                <img src="assets/images/products/elements/product-6.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                <a href="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
              </div>{/* End .product-action-vertical */}
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <h3 className="product-title"><a href="product.html">Grey check skinny suit jacket</a></h3>{/* End .product-title */}
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
              <a href="product.html">
                <img src="assets/images/products/elements/product-1.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Women</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="product.html">Aliquam tincidunt mauris</a></h3>{/* End .product-title */}
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
                <a href="#" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></a>
                <a href="#" className="active" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></a>
              </div>{/* End .product-nav */}
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
              </div>{/* End .product-action */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-6">
            <figure className="product-media">
              <a href="product.html">
                <img src="assets/images/products/elements/product-2.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Men</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="product.html">Vestibulum auctor</a></h3>{/* End .product-title */}
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
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
              </div>{/* End .product-action */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-6">
            <figure className="product-media">
              <span className="product-label">New</span>
              <a href="product.html">
                <img src="assets/images/products/elements/product-3.jpg" alt="Product image" className="product-image" />
                <img src="assets/images/products/elements/product-3-2.jpg" alt="Product image" className="product-image-hover" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Women</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="product.html">Nunc dignissim risus</a></h3>{/* End .product-title */}
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
                <a href="#" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></a>
                <a href="#" className="active" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></a>
              </div>{/* End .product-nav */}
              <div className="product-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
              </div>{/* End .product-action */}
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-6 col-md-4 col-lg-3">
          <div className="product product-6">
            <figure className="product-media">
              <span className="product-label">Out Of Stock</span>
              <a href="product.html">
                <img src="assets/images/products/elements/product-4.jpg" alt="Product image" className="product-image" />
              </a>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <a href="#">Accessories</a>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><a href="product.html">Cras ornare tristique</a></h3>{/* End .product-title */}
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
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
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
        <a href="elements-accordions.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>accordions</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-banners.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>banners</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-blog-posts.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>blog posts</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-buttons.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>buttons</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-cta.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>call to action</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-icon-boxes.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>icon boxes</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-portfolio.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>portfolio</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-product-category.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>product catigories</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-products.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>products</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-tabs.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>tabs</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-testimonials.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>testimonials</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-titles.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>titles</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-typography.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>typography</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-video-banners.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>video</p>
          </div>
        </a>
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
