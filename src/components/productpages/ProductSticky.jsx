import React from 'react'

const ProductSticky = () => {
  return (
    <div>
      
    <main className="main">
  <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
    <div className="container d-flex align-items-center">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Products</a></li>
        <li className="breadcrumb-item active" aria-current="page">Sticky Info</li>
      </ol>
      <nav className="product-pager ml-auto" aria-label="Product">
        <a className="product-pager-link product-pager-prev" href="#" aria-label="Previous" tabIndex={-1}>
          <i className="icon-angle-left" />
          <span>Prev</span>
        </a>
        <a className="product-pager-link product-pager-next" href="#" aria-label="Next" tabIndex={-1}>
          <span>Next</span>
          <i className="icon-angle-right" />
        </a>
      </nav>{/* End .pager-nav */}
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <div className="product-details-top">
        <div className="row">
          <div className="col-md-6">
            <div className="product-gallery product-gallery-separated">
              <span className="product-label label-sale">Sale</span>
              <figure className="product-separated-item">
                <img src="assets/images/products/single/sticky/1.jpg" data-zoom-image="assets/images/products/single/sticky/1-big.jpg" alt="product image" />
                <a href="#" id="btn-separated-gallery" className="btn-product-gallery">
                  <i className="icon-arrows" />
                </a>
              </figure>
              <figure className="product-separated-item">
                <img src="assets/images/products/single/sticky/2.jpg" data-zoom-image="assets/images/products/single/sticky/2-big.jpg" alt="product image" />
              </figure>
              <figure className="product-separated-item">
                <img src="assets/images/products/single/sticky/3.jpg" data-zoom-image="assets/images/products/single/sticky/3-big.jpg" alt="product image" />
              </figure>
              <figure className="product-separated-item">
                <img src="assets/images/products/single/sticky/4.jpg" data-zoom-image="assets/images/products/single/sticky/4-big.jpg" alt="product image" />
              </figure>
            </div>{/* End .product-gallery */}
          </div>{/* End .col-md-6 */}
          <div className="col-md-6">
            <div className="product-details sticky-content">
              <h1 className="product-title">Brown faux fur longline coat</h1>{/* End .product-title */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <a className="ratings-text" href="#product-accordion" id="review-link">( 2 Reviews )</a>
              </div>{/* End .rating-container */}
              <div className="product-price">
                <span className="new-price">$190.00</span>
                <span className="old-price">$310.00</span>
              </div>{/* End .product-price */}
              <div className="product-content">
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus. </p>
              </div>{/* End .product-content */}
              <div className="product-countdown" data-until="2019, 10, 29" />{/* End .product-countdown */}
              <div className="details-filter-row details-row-size">
                <label htmlFor="size">Size:</label>
                <div className="select-custom">
                  <select name="size" id="size" className="form-control">
                    <option value="#" selected="selected">Select a size</option>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">Extra Large</option>
                  </select>
                </div>{/* End .select-custom */}
                <a href="#" className="size-guide"><i className="icon-th-list" />size guide</a>
              </div>{/* End .details-filter-row */}
              <div className="details-filter-row details-row-size">
                <label htmlFor="qty">Qty:</label>
                <div className="product-details-quantity">
                  <input type="number" id="qty" className="form-control" defaultValue={1} min={1} max={10} step={1} data-decimals={0} required />
                </div>{/* End .product-details-quantity */}
              </div>{/* End .details-filter-row */}
              <div className="product-details-action">
                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                <div className="details-action-wrapper">
                  <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                  <a href="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a>
                </div>{/* End .details-action-wrapper */}
              </div>{/* End .product-details-action */}
              <div className="product-details-footer">
                <div className="product-cat">
                  <span>Category:</span>
                  <a href="#">Women</a>,
                  <a href="#">Dresses</a>,
                  <a href="#">Yellow</a>
                </div>{/* End .product-cat */}
                <div className="social-icons social-icons-sm">
                  <span className="social-label">Share:</span>
                  <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f" /></a>
                  <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter" /></a>
                  <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram" /></a>
                  <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest" /></a>
                </div>
              </div>{/* End .product-details-footer */}
              <div className="accordion accordion-plus product-details-accordion" id="product-accordion">
                <div className="card card-box card-sm">
                  <div className="card-header" id="product-desc-heading">
                    <h2 className="card-title">
                      <a className="collapsed" role="button" data-toggle="collapse" href="#product-accordion-desc" aria-expanded="false" aria-controls="product-accordion-desc">
                        Description
                      </a>
                    </h2>
                  </div>{/* End .card-header */}
                  <div id="product-accordion-desc" className="collapse" aria-labelledby="product-desc-heading" data-parent="#product-accordion">
                    <div className="card-body">
                      <div className="product-desc-content">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                        <ul>
                          <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                          <li>Vivamus finibus vel mauris ut vehicula.</li>
                          <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.</p>
                      </div>{/* End .product-desc-content */}
                    </div>{/* End .card-body */}
                  </div>{/* End .collapse */}
                </div>{/* End .card */}
                <div className="card card-box card-sm">
                  <div className="card-header" id="product-info-heading">
                    <h2 className="card-title">
                      <a role="button" data-toggle="collapse" href="#product-accordion-info" aria-expanded="true" aria-controls="product-accordion-info">
                        Additional Information
                      </a>
                    </h2>
                  </div>{/* End .card-header */}
                  <div id="product-accordion-info" className="collapse show" aria-labelledby="product-info-heading" data-parent="#product-accordion">
                    <div className="card-body">
                      <div className="product-desc-content">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>
                        <h3>Fabric &amp; care</h3>
                        <ul>
                          <li>100% Polyester</li>
                          <li>Do not iron</li>
                          <li>Do not wash</li>
                          <li>Do not bleach</li>
                          <li>Do not tumble dry</li>
                          <li>Professional dry clean only</li>
                        </ul>
                        <h3>Size</h3>
                        <p>S, M, L, XL</p>
                      </div>{/* End .product-desc-content */}
                    </div>{/* End .card-body */}
                  </div>{/* End .collapse */}
                </div>{/* End .card */}
                <div className="card card-box card-sm">
                  <div className="card-header" id="product-shipping-heading">
                    <h2 className="card-title">
                      <a className="collapsed" role="button" data-toggle="collapse" href="#product-accordion-shipping" aria-expanded="false" aria-controls="product-accordion-shipping">
                        Shipping &amp; Returns
                      </a>
                    </h2>
                  </div>{/* End .card-header */}
                  <div id="product-accordion-shipping" className="collapse" aria-labelledby="product-shipping-heading" data-parent="#product-accordion">
                    <div className="card-body">
                      <div className="product-desc-content">
                        <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br />
                          We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a></p>
                      </div>{/* End .product-desc-content */}
                    </div>{/* End .card-body */}
                  </div>{/* End .collapse */}
                </div>{/* End .card */}
                <div className="card card-box card-sm">
                  <div className="card-header" id="product-review-heading">
                    <h2 className="card-title">
                      <a className="collapsed" role="button" data-toggle="collapse" href="#product-accordion-review" aria-expanded="false" aria-controls="product-accordion-review">
                        Reviews (2)
                      </a>
                    </h2>
                  </div>{/* End .card-header */}
                  <div id="product-accordion-review" className="collapse" aria-labelledby="product-review-heading" data-parent="#product-accordion">
                    <div className="card-body">
                      <div className="reviews">
                        <div className="review">
                          <div className="row no-gutters">
                            <div className="col-auto">
                              <h4><a href="#">Samanta J.</a></h4>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                              </div>{/* End .rating-container */}
                              <span className="review-date">6 days ago</span>
                            </div>{/* End .col */}
                            <div className="col">
                              <h4>Good, perfect size</h4>
                              <div className="review-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                              </div>{/* End .review-content */}
                              <div className="review-action">
                                <a href="#"><i className="icon-thumbs-up" />Helpful (2)</a>
                                <a href="#"><i className="icon-thumbs-down" />Unhelpful (0)</a>
                              </div>{/* End .review-action */}
                            </div>{/* End .col-auto */}
                          </div>{/* End .row */}
                        </div>{/* End .review */}
                        <div className="review">
                          <div className="row no-gutters">
                            <div className="col-auto">
                              <h4><a href="#">John Doe</a></h4>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                              </div>{/* End .rating-container */}
                              <span className="review-date">5 days ago</span>
                            </div>{/* End .col */}
                            <div className="col">
                              <h4>Very good</h4>
                              <div className="review-content">
                                <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                              </div>{/* End .review-content */}
                              <div className="review-action">
                                <a href="#"><i className="icon-thumbs-up" />Helpful (0)</a>
                                <a href="#"><i className="icon-thumbs-down" />Unhelpful (0)</a>
                              </div>{/* End .review-action */}
                            </div>{/* End .col-auto */}
                          </div>{/* End .row */}
                        </div>{/* End .review */}
                      </div>{/* End .reviews */}
                    </div>{/* End .card-body */}
                  </div>{/* End .collapse */}
                </div>{/* End .card */}
              </div>{/* End .accordion */}
            </div>{/* End .product-details */}
          </div>{/* End .col-md-6 */}
        </div>{/* End .row */}
      </div>{/* End .product-details-top */}
      <hr className="mt-3 mb-5" />
      <h2 className="title text-center mb-4">You May Also Like</h2>{/* End .title text-center */}
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
        <div className="product product-7">
          <figure className="product-media">
            <span className="product-label label-new">New</span>
            <a href="product.html">
              <img src="assets/images/products/product-4.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
              <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
              <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
            </div>{/* End .product-action-vertical */}
            <div className="product-action">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <a href="#">Women</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Brown paperbag waist <br />pencil skirt</a></h3>{/* End .product-title */}
            <div className="product-price">
              $60.00
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{width: '20%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 2 Reviews )</span>
            </div>{/* End .rating-container */}
            <div className="product-nav product-nav-dots">
              <a href="#" className="active" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></a>
              <a href="#" style={{background: '#7fc5ed'}}><span className="sr-only">Color name</span></a>
              <a href="#" style={{background: '#e8c97a'}}><span className="sr-only">Color name</span></a>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-7">
          <figure className="product-media">
            <span className="product-label label-out">Out of Stock</span>
            <a href="product.html">
              <img src="assets/images/products/product-6.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
              <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
              <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
            </div>{/* End .product-action-vertical */}
            <div className="product-action">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <a href="#">Jackets</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Khaki utility boiler jumpsuit</a></h3>{/* End .product-title */}
            <div className="product-price">
              <span className="out-price">$120.00</span>
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 6 Reviews )</span>
            </div>{/* End .rating-container */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-7">
          <figure className="product-media">
            <span className="product-label label-top">Top</span>
            <a href="product.html">
              <img src="assets/images/products/product-11.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
              <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
              <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
            </div>{/* End .product-action-vertical */}
            <div className="product-action">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <a href="#">Shoes</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Light brown studded Wide fit wedges</a></h3>{/* End .product-title */}
            <div className="product-price">
              $110.00
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 1 Reviews )</span>
            </div>{/* End .rating-container */}
            <div className="product-nav product-nav-dots">
              <a href="#" className="active" style={{background: '#8b513d'}}><span className="sr-only">Color name</span></a>
              <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
              <a href="#" style={{background: '#d2b99a'}}><span className="sr-only">Color name</span></a>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-7">
          <figure className="product-media">
            <a href="product.html">
              <img src="assets/images/products/product-10.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
              <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
              <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
            </div>{/* End .product-action-vertical */}
            <div className="product-action">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <a href="#">Jumpers</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Yellow button front tea top</a></h3>{/* End .product-title */}
            <div className="product-price">
              $56.00
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{width: '0%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 0 Reviews )</span>
            </div>{/* End .rating-container */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-7">
          <figure className="product-media">
            <a href="product.html">
              <img src="assets/images/products/product-7.jpg" alt="Product image" className="product-image" />
            </a>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
              <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
              <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
            </div>{/* End .product-action-vertical */}
            <div className="product-action">
              <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <a href="#">Jeans</a>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">Blue utility pinafore denim dress</a></h3>{/* End .product-title */}
            <div className="product-price">
              $76.00
            </div>{/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{width: '20%'}} />{/* End .ratings-val */}
              </div>{/* End .ratings */}
              <span className="ratings-text">( 2 Reviews )</span>
            </div>{/* End .rating-container */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
      </div>{/* End .owl-carosel */}
    </div>{/* End .container */}
  </div>{/* End .page-content */}
</main>{/* End .main */}

    </div>
  )
}

export default ProductSticky
