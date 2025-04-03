import React from 'react'
import { Link } from "react-router-dom";
const ProductGalley = () => {
  return (
    <div>

<main className="main">
  <div className="page-content">
    <div className="product-details-top">
      <div className="bg-light pb-5 mb-4">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container d-flex align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
              <li className="breadcrumb-item"><Link to="#">Products</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Gallery</li>
            </ol>
            <nav className="product-pager ml-auto" aria-label="Product">
              <Link className="product-pager-link product-pager-prev" href="#" aria-label="Previous" tabIndex={-1}>
                <i className="icon-angle-left" />
                <span>Prev</span>
              </Link>
              <Link className="product-pager-link product-pager-next" href="#" aria-label="Next" tabIndex={-1}>
                <span>Next</span>
                <i className="icon-angle-right" />
              </Link>
            </nav>{/* End .pager-nav */}
          </div>{/* End .container */}
        </nav>{/* End .breadcrumb-nav */}
        <div className="container">
          <div className="product-gallery-carousel owl-carousel owl-full owl-nav-dark">
            <figure className="product-gallery-image">
              <img src="assets/images/products/single/gallery/1.jpg" data-zoom-image="assets/images/products/single/gallery/1-big.jpg" alt="product image" />
            </figure>{/* End .product-gallery-image */}
            <figure className="product-gallery-image">
              <img src="assets/images/products/single/gallery/2.jpg" data-zoom-image="assets/images/products/single/gallery/2-big.jpg" alt="product image" />
            </figure>{/* End .product-gallery-image */}
            <figure className="product-gallery-image">
              <img src="assets/images/products/single/gallery/3.jpg" data-zoom-image="assets/images/products/single/gallery/3-big.jpg" alt="product image" />
            </figure>{/* End .product-gallery-image */}
            <figure className="product-gallery-image">
              <img src="assets/images/products/single/gallery/4.jpg" data-zoom-image="assets/images/products/single/gallery/4-big.jpg" alt="product image" />
            </figure>{/* End .product-gallery-image */}
          </div>{/* End .owl-carousel */}
        </div>{/* End .container */}
      </div>{/* End .bg-light pb-5 */}
      <div className="product-details product-details-centered product-details-separator">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="product-title">Beige V neck button cardigan</h1>{/* End .product-title */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                </div>{/* End .ratings */}
                <Link className="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</Link>
              </div>{/* End .rating-container */}
              <div className="product-price">
                $72.00
              </div>{/* End .product-price */}
              <div className="product-content">
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero.</p>
              </div>{/* End .product-content */}
              <div className="details-filter-row details-row-size">
                <label>Color:</label>
                <div className="product-nav product-nav-dots">
                  <Link to="#" className="active" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></Link>
                  <Link to="#" style={{background: '#7fc5ed'}}><span className="sr-only">Color name</span></Link>
                  <Link to="#" style={{background: '#e8c97a'}}><span className="sr-only">Color name</span></Link>
                </div>{/* End .product-nav */}
              </div>{/* End .details-filter-row */}
              <div className="details-filter-row details-row-size mb-md-1">
                <label>Size:</label>
                <div className="product-size">
                  <Link to="#" title="Small">S</Link>
                  <Link to="#" title="Medium" className="active">M</Link>
                  <Link to="#" title="Large" className="disabled">L</Link>
                  <Link to="#" title="Extra Large">XL</Link>
                </div>{/* End .product-size */}
                <Link to="#" className="size-guide"><i className="icon-th-list" />size guide</Link>
              </div>{/* End .details-filter-row */}
            </div>{/* End .col-md-6 */}
            <div className="col-md-6">
              <div className="product-details-action">
                <div className="details-action-col">
                  <div className="product-details-quantity">
                    <input type="number" id="qty" className="form-control" defaultValue={1} min={1} max={10} step={1} data-decimals={0} required />
                  </div>{/* End .product-details-quantity */}
                  <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                </div>{/* End .details-action-col */}
                <div className="details-action-wrapper">
                  <Link to="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></Link>
                  <Link to="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></Link>
                </div>{/* End .details-action-wrapper */}
              </div>{/* End .product-details-action */}
              <div className="product-details-footer details-footer-col">
                <div className="product-cat">
                  <span>Category:</span>
                  <Link to="#">Women</Link>,
                  <Link to="#">Dresses</Link>,
                  <Link to="#">Yellow</Link>
                </div>{/* End .product-cat */}
                <div className="social-icons social-icons-sm">
                  <span className="social-label">Share:</span>
                  <Link to="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f" /></Link>
                  <Link to="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter" /></Link>
                  <Link to="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram" /></Link>
                  <Link to="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest" /></Link>
                </div>
              </div>{/* End .product-details-footer */}
            </div>{/* End .col-md-6 */}
          </div>{/* End .row */}
        </div>{/* End .container */}
      </div>{/* End .product-details */}
    </div>{/* End .product-details-top */}
    <div className="container">
      <div className="product-details-tab">
        <ul className="nav nav-pills justify-content-center" role="tablist">
          <li className="nav-item">
            <Link className="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" id="product-info-link" data-toggle="tab" href="#product-info-tab" role="tab" aria-controls="product-info-tab" aria-selected="false">Additional information</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" id="product-shipping-link" data-toggle="tab" href="#product-shipping-tab" role="tab" aria-controls="product-shipping-tab" aria-selected="false">Shipping &amp; Returns</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews (2)</Link>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
            <div className="product-desc-content">
              <h3>Product Information</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
              <ul>
                <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                <li>Vivamus finibus vel mauris ut vehicula.</li>
                <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
            </div>{/* End .product-desc-content */}
          </div>{/* .End .tab-pane */}
          <div className="tab-pane fade" id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
            <div className="product-desc-content">
              <h3>Information</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>
              <h3>Fabric &amp; care</h3>
              <ul>
                <li>Faux suede fabric</li>
                <li>Gold tone metal hoop handles.</li>
                <li>RI branding</li>
                <li>Snake print trim interior </li>
                <li>Adjustable cross body strap</li>
                <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
              </ul>
              <h3>Size</h3>
              <p>one size</p>
            </div>{/* End .product-desc-content */}
          </div>{/* .End .tab-pane */}
          <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel" aria-labelledby="product-shipping-link">
            <div className="product-desc-content">
              <h3>Delivery &amp; returns</h3>
              <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <Link to="#">Delivery information</Link><br />
                We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <Link to="#">Returns information</Link></p>
            </div>{/* End .product-desc-content */}
          </div>{/* .End .tab-pane */}
          <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
            <div className="reviews">
              <h3>Reviews (2)</h3>
              <div className="review">
                <div className="row no-gutters">
                  <div className="col-auto">
                    <h4><Link to="#">Samanta J.</Link></h4>
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
                      <Link to="#"><i className="icon-thumbs-up" />Helpful (2)</Link>
                      <Link to="#"><i className="icon-thumbs-down" />Unhelpful (0)</Link>
                    </div>{/* End .review-action */}
                  </div>{/* End .col-auto */}
                </div>{/* End .row */}
              </div>{/* End .review */}
              <div className="review">
                <div className="row no-gutters">
                  <div className="col-auto">
                    <h4><Link to="#">John Doe</Link></h4>
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
                      <Link to="#"><i className="icon-thumbs-up" />Helpful (0)</Link>
                      <Link to="#"><i className="icon-thumbs-down" />Unhelpful (0)</Link>
                    </div>{/* End .review-action */}
                  </div>{/* End .col-auto */}
                </div>{/* End .row */}
              </div>{/* End .review */}
            </div>{/* End .reviews */}
          </div>{/* .End .tab-pane */}
        </div>{/* End .tab-content */}
      </div>{/* End .product-details-tab */}
    </div>{/* End .container */}
    <div className="container">
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
        <div className="product product-7 text-center">
          <figure className="product-media">
            <span className="product-label label-new">New</span>
            <Link to="product.html">
              <img src="assets/images/products/product-4.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
              <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
              <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
            </div>{/* End .product-action-vertical */}
            <div className="product-action">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <Link to="#">Women</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Brown paperbag waist <br />pencil skirt</Link></h3>{/* End .product-title */}
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
              <Link to="#" className="active" style={{background: '#cc9966'}}><span className="sr-only">Color name</span></Link>
              <Link to="#" style={{background: '#7fc5ed'}}><span className="sr-only">Color name</span></Link>
              <Link to="#" style={{background: '#e8c97a'}}><span className="sr-only">Color name</span></Link>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-7 text-center">
          <figure className="product-media">
            <span className="product-label label-out">Out of Stock</span>
            <Link to="product.html">
              <img src="assets/images/products/product-6.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
              <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
              <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
            </div>{/* End .product-action-vertical */}
            <div className="product-action">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <Link to="#">Jackets</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Khaki utility boiler jumpsuit</Link></h3>{/* End .product-title */}
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
        <div className="product product-7 text-center">
          <figure className="product-media">
            <span className="product-label label-top">Top</span>
            <Link to="product.html">
              <img src="assets/images/products/product-11.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
              <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
              <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
            </div>{/* End .product-action-vertical */}
            <div className="product-action">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <Link to="#">Shoes</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Light brown studded Wide fit wedges</Link></h3>{/* End .product-title */}
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
              <Link to="#" className="active" style={{background: '#8b513d'}}><span className="sr-only">Color name</span></Link>
              <Link to="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
              <Link to="#" style={{background: '#d2b99a'}}><span className="sr-only">Color name</span></Link>
            </div>{/* End .product-nav */}
          </div>{/* End .product-body */}
        </div>{/* End .product */}
        <div className="product product-7 text-center">
          <figure className="product-media">
            <Link to="product.html">
              <img src="assets/images/products/product-10.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
              <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
              <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
            </div>{/* End .product-action-vertical */}
            <div className="product-action">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <Link to="#">Jumpers</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Yellow button front tea top</Link></h3>{/* End .product-title */}
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
        <div className="product product-7 text-center">
          <figure className="product-media">
            <Link to="product.html">
              <img src="assets/images/products/product-7.jpg" alt="Product image" className="product-image" />
            </Link>
            <div className="product-action-vertical">
              <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
              <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
              <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
            </div>{/* End .product-action-vertical */}
            <div className="product-action">
              <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
            </div>{/* End .product-action */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <Link to="#">Jeans</Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><Link to="product.html">Blue utility pinafore denim dress</Link></h3>{/* End .product-title */}
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
      </div>{/* End .owl-carousel */}
    </div>{/* End .container */}
  </div>{/* End .page-content */}
</main>

      
    </div>
  )
}

export default ProductGalley
