import React,{useState} from 'react';
import { Link } from 'react-router-dom';


const Product = () => {
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
  
    const handleSizeChange = (e) => {
      setSelectedSize(e.target.value);
    };
  
    const handleQuantityChange = (e) => {
      setQuantity(e.target.value);
    };
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [zoomedImage, setZoomedImage] = useState('');
  
    const handleImageClick = (image) => {
      setZoomedImage(image);
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
      setZoomedImage('');
    };
    
    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container d-flex align-items-center">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link href="#">Products</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Default
                        </li>
                    </ol>

                    <nav className="product-pager ml-auto" aria-label="Product">
                        <Link className="product-pager-link product-pager-prev" href="#" aria-label="Previous" tabIndex="-1">
                            <i className="icon-angle-left"></i>
                            <span>Prev</span>
                        </Link>

                        <Link className="product-pager-link product-pager-next" href="#" aria-label="Next" tabIndex="-1">
                            <span>Next</span>
                            <i className="icon-angle-right"></i>
                        </Link>
                    </nav>
                </div>
            </nav>

            <div className="page-content">
                 <div className="container">
      
        <div className="product-details-top">
          <div className="row">
              

          <div className="col-md-6">
      <div className="product-gallery product-gallery-vertical">
        <div className="row">
          <figure className="product-main-image">
            <img
              id="product-zoom"
              src="assets/images/products/single/1.jpg"
              alt="product"
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1)'; // Zoom in on hover
                e.target.style.transition = 'transform 0.2s ease';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // Zoom out
              }}
              onClick={() => handleImageClick('assets/images/products/single/1-big.jpg')} // Popup for the main image
              style={{ cursor: 'pointer', width: '100%', height: 'auto' }} // Inline styles
            />
            <Link href="#" id="btn-product-gallery" className="btn-product-gallery">
              <i className="icon-arrows"></i>
            </Link>
          </figure>
          <div id="product-zoom-gallery" className="product-image-gallery">
            {['1', '2', '3', '4'].map((num, index) => (
              <Link
                key={index}
                className={`product-gallery-item ${index === 0 ? 'active' : ''}`}
                href="#"
                onClick={() => handleImageClick(`assets/images/products/single/${num}-big.jpg`)} // Popup for thumbnail images
              >
                <img
                  src={`assets/images/products/single/${num}-small.jpg`}
                  alt={`product ${num}`}
                  style={{ width: '100px', height: 'auto', cursor: 'pointer' }} // Inline styles for thumbnails
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closePopup}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%',
              overflow: 'hidden',
            }}
          >
            <img 
              src={zoomedImage} 
              alt="Zoomed product" 
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }} 
            />
            <button 
              className="close-popup"
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '30px',
                cursor: 'pointer',
              }}
            >
              &times; {/* Close button */}
            </button>
          </div>
        </div>
      )}
    </div>

            <div className="col-md-6">
              <div className="product-details">
                <h1 className="product-title">Dark yellow lace cut out swing dress</h1>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '80%' }}></div>
                  </div>
                  <Link className="ratings-text" href="#product-review-link" id="review-link">
                    (2 Reviews)
                  </Link>
                </div>
                <div className="product-price">$84.00</div>
                <div className="product-content">
                  <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
                    libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.
                  </p>
                </div>

                <div className="details-filter-row details-row-size">
                  <label>Color:</label>
                  <div className="product-nav product-nav-thumbs">
                    {['1', '2'].map((num, index) => (
                      <Link key={index} href={index === 0 ? '#' : ''} className={index === 0 ? 'active' : ''}>
                        <img src={`assets/images/products/single/${num}-thumb.jpg`} alt="product desc" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="details-filter-row details-row-size">
                  <label htmlFor="size">Size:</label>
                  <div className="select-custom">
                    <select name="size" id="size" className="form-control" value={selectedSize} onChange={handleSizeChange}>
                      <option value="" disabled>Select a size</option>
                      <option value="s">Small</option>
                      <option value="m">Medium</option>
                      <option value="l">Large</option>
                      <option value="xl">Extra Large</option>
                    </select>
                  </div>
                  <Link href="#" className="size-guide">
                    <i className="icon-th-list"></i> size guide
                  </Link>
                </div>

                <div className="details-filter-row details-row-size">
                  <label htmlFor="qty">Qty:</label>
                  <div className="product-details-quantity">
                    <input
                      type="number"
                      id="qty"
                      className="form-control"
                      value={quantity}
                      min="1"
                      max="10"
                      step="1"
                      onChange={handleQuantityChange}
                      required
                    />
                  </div>
                </div>

                <div className="product-details-action">
                  <Link href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </Link>
                  <div className="details-action-wrapper">
                    <Link href="#" className="btn-product btn-wishlist" title="Wishlist">
                      <span>Add to Wishlist</span>
                    </Link>
                    <Link href="#" className="btn-product btn-compare" title="Compare">
                      <span>Add to Compare</span>
                    </Link>
                  </div>
                </div>

                <div className="product-details-footer">
                  <div className="product-cat">
                    <span>Category:</span>
                    <Link href="#">Women</Link>,
                    <Link href="#">Dresses</Link>,
                    <Link href="#">Yellow</Link>
                  </div>
                  <div className="social-icons social-icons-sm">
                    <span className="social-label">Share:</span>
                    {['facebook-f', 'twitter', 'instagram', 'pinterest'].map((icon, index) => (
                      <Link key={index} href="#" className="social-icon" title={icon} target="_blank">
                        <i className={`icon-${icon}`}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-details-tab">
          <ul className="nav nav-pills justify-content-center" role="tablist">
            {['description', 'additional-info', 'shipping', 'reviews'].map((tab, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab)}
                  href="#"
                >
                  {tab === 'description' ? 'Description' : tab === 'additional-info' ? 'Additional information' : tab === 'shipping' ? 'Shipping & Returns' : 'Reviews (2)'}
                </Link>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="tab-pane fade show active" role="tabpanel">
                <div className="product-desc-content">
                  <h3>Product Information</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
                  <ul>
                    <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
                    <li>Vivamus finibus vel mauris ut vehicula.</li>
                    <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
                </div>
              </div>
            )}
            {activeTab === 'additional-info' && (
              <div className="tab-pane fade" role="tabpanel">
                <div className="product-desc-content">
                  <h3>Information</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                  <h3>Fabric & care</h3>
                  <ul>
                    <li>Faux suede fabric</li>
                    <li>Gold tone metal hoop handles.</li>
                    <li>RI branding</li>
                    <li>Snake print trim interior</li>
                    <li>Adjustable cross body strap</li>
                    <li>Height: 31cm/12 inches</li>
                    <li>Width: 38cm/15 inches</li>
                    <li>Depth: 13cm/5 inches</li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="tab-pane fade" role="tabpanel">
                <div className="product-desc-content">
                  <h3>Shipping & Returns</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="tab-pane fade" role="tabpanel">
                <div className="product-review">
                  <h3>Reviews (2)</h3>
                  <div className="review">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="review-author">
                          <img src="assets/images/avatars/avatar-1.jpg" alt="User" />
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="review-rating">
                          <span className="icon-star voted"></span>
                          <span className="icon-star voted"></span>
                          <span className="icon-star voted"></span>
                          <span className="icon-star voted"></span>
                          <span className="icon-star"></span>
                        </div>
                        <div className="review-content">
                          <p>Great quality, would recommend!</p>
                        </div>
                        <div className="review-info">
                          <span className="review-author">John Doe</span>
                          <span className="review-date">April 28, 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="review-author">
                          <img src="assets/images/avatars/avatar-2.jpg" alt="User" />
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="review-rating">
                          <span className="icon-star voted"></span>
                          <span className="icon-star voted"></span>
                          <span className="icon-star voted"></span>
                          <span className="icon-star voted"></span>
                          <span className="icon-star voted"></span>
                        </div>
                        <div className="review-content">
                          <p>Absolutely love it!</p>
                        </div>
                        <div className="review-info">
                          <span className="review-author">Jane Doe</span>
                          <span className="review-date">May 1, 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-form">
                    <h3>Leave a Review</h3>
                    <form>
                      <div className="form-group">
                        <label htmlFor="review">Your Review</label>
                        <textarea className="form-control" id="review" rows="5"></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="rating">Your Rating</label>
                        <select className="form-control" id="rating">
                          <option value="">Select a rating</option>
                          <option value="5">5 Stars</option>
                          <option value="4">4 Stars</option>
                          <option value="3">3 Stars</option>
                          <option value="2">2 Stars</option>
                          <option value="1">1 Star</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit Review</button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
            
                    <div>
            <h2 className="title text-center mb-4">You May Also Like</h2>
            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                data-owl-options='{
                    "nav": false, 
                    "dots": true,
                    "margin": 20,
                    "loop": false,
                    "responsive": {
                        "0": {
                            "items": 1
                        },
                        "480": {
                            "items": 2
                        },
                        "768": {
                            "items": 3
                        },
                        "992": {
                            "items": 4
                        },
                        "1200": {
                            "items": 4,
                            "nav": true,
                            "dots": false
                        }
                    }
                }'>
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <Link href="/Product">
                            <img src="assets/images/products/product-4.jpg" alt="Product image" className="product-image" />
                        </Link>
                        <div className="product-action-vertical">
                            <Link href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link href="/Cart" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>
                        <div className="product-action">
                            <Link href="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>
                    <div className="product-body">
                        <div className="product-cat">
                            <Link href="#">Women</Link>
                        </div>
                        <h3 className="product-title"><Link href="/Product">Brown paperbag waist <br />pencil skirt</Link></h3>
                        <div className="product-price">$60.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '20%' }}></div>
                            </div>
                            <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-thumbs">
                            <Link href="#" className="active">
                                <img src="assets/images/products/product-4-thumb.jpg" alt="product desc" />
                            </Link>
                            <Link href="#">
                                <img src="assets/images/products/product-4-2-thumb.jpg" alt="product desc" />
                            </Link>
                            <Link href="#">
                                <img src="assets/images/products/product-4-3-thumb.jpg" alt="product desc" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <span className="product-label label-out">Out of Stock</span>
                        <Link href="/Product">
                            <img src="assets/images/products/product-6.jpg" alt="Product image" className="product-image" />
                        </Link>
                        <div className="product-action-vertical">
                            <Link href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link href="/Cart" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>
                        <div className="product-action">
                            <Link href="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>
                    <div className="product-body">
                        <div className="product-cat">
                            <Link href="#">Jackets</Link>
                        </div>
                        <h3 className="product-title"><Link href="/Product">Khaki utility boiler jumpsuit</Link></h3>
                        <div className="product-price"><span className="out-price">$120.00</span></div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '80%' }}></div>
                            </div>
                            <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                    </div>
                </div>
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <Link href="/Product">
                            <img src="assets/images/products/product-11.jpg" alt="Product image" className="product-image" />
                        </Link>
                        <div className="product-action-vertical">
                            <Link href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link href="/Cart" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>
                        <div className="product-action">
                            <Link href="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>
                    <div className="product-body">
                        <div className="product-cat">
                            <Link href="#">Shoes</Link>
                        </div>
                        <h3 className="product-title"><Link href="/Product">Light brown studded Wide fit wedges</Link></h3>
                        <div className="product-price">$110.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '80%' }}></div>
                            </div>
                            <span className="ratings-text">( 1 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-thumbs">
                            <Link href="#" className="active">
                                <img src="assets/images/products/product-11-thumb.jpg" alt="product desc" />
                            </Link>
                            <Link href="#">
                                <img src="assets/images/products/product-11-2-thumb.jpg" alt="product desc" />
                            </Link>
                            <Link href="#">
                                <img src="assets/images/products/product-11-3-thumb.jpg" alt="product desc" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <Link href="/Product">
                            <img src="assets/images/products/product-10.jpg" alt="Product image" className="product-image" />
                        </Link>
                        <div className="product-action-vertical">
                            <Link href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link href="/Cart" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>
                        <div className="product-action">
                            <Link href="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>
                    <div className="product-body">
                        <div className="product-cat">
                            <Link href="#">Jumpers</Link>
                        </div>
                        <h3 className="product-title"><Link href="/Product">Yellow button front tea top</Link></h3>
                        <div className="product-price">$56.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '0%' }}></div>
                            </div>
                            <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                    </div>
                </div>
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <Link href="/Product">
                            <img src="assets/images/products/product-7.jpg" alt="Product image" className="product-image" />
                        </Link>
                        <div className="product-action-vertical">
                            <Link href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link href="/Cart" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>
                        <div className="product-action">
                            <Link href="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>
                    <div className="product-body">
                        <div className="product-cat">
                            <Link href="#">Accessories</Link>
                        </div>
                        <h3 className="product-title"><Link href="/Product">White gold plated princess <br />cut diamond ring</Link></h3>
                        <div className="product-price">$120.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '60%' }}></div>
                            </div>
                            <span className="ratings-text">( 3 Reviews )</span>
                        </div>
                    </div>
                </div>
            </div>
                   </div>
              </div>
              </div>

        </main>
    );
};

export default Product;
