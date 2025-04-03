import React, { useState } from 'react';
import { Link } from "react-router-dom";
const ShopGrid4= () => {
        const [sortBy, setSortBy] = useState('popularity');
        const [layout, setLayout] = useState('2cols');
      
        const handleSortChange = (event) => {
          setSortBy(event.target.value);
        };
      
        const handleLayoutChange = (layoutType) => {
          setLayout(layoutType);
        };
      
    
  return (
    <div>
      <main className="main">

        <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
          <div className="container">
            <h1 className="page-title"><span>Shop</span></h1>
          </div>
        </div>

        <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
              <li className="breadcrumb-item"><Link to="#">Shop</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Grid 3 Columns</li>
            </ol>
          </div>
        </nav>

        <div className="page-content">
          <div className="container">
            <div className="row">

            <div className="col-lg-9">

    
        <div className="toolbox">
            <div className="toolbox-left">
                <div className="toolbox-info">
                    Showing <span>9 of 56</span> Products
                </div>{/* End .toolbox-info */}
            </div>{/* End .toolbox-left */}

            <div className="toolbox-right">
                <div className="toolbox-sort">
                    <label htmlFor="sortby">Sort by:</label>
                    <div className="select-custom">
                        <select name="sortby" id="sortby" className="form-control" defaultValue="popularity">
                            <option value="popularity">Most Popular</option>
                            <option value="rating">Most Rated</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                </div>{/* End .toolbox-sort */}
                <div className="toolbox-layout">
          <Link to="/ShopList" className="btn-layout">
            <svg width="16" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="10" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="10" height="4" />
            </svg>
          </Link>

          <Link to="/ShopGrid2" className="btn-layout">
            <svg width="10" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
            </svg>
          </Link>

          <Link to="/Shop" className="btn-layout">
            <svg width="16" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="12" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
              <rect x="12" y="6" width="4" height="4" />
            </svg>
          </Link>

          <Link to="/ShopGrid4" className="btn-layout active">
            <svg width="22" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="12" y="0" width="4" height="4" />
              <rect x="18" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
              <rect x="12" y="6" width="4" height="4" />
              <rect x="18" y="6" width="4" height="4" />
            </svg>
          </Link>
        </div>
            </div>{/* End .toolbox-right */}
        </div>


        <div class="products mb-3">
     <div class="row justify-content-center">


     <div className="row">
            {/* Product 1 */}
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-4.jpg" alt="Product image" className="product-image" />
                        </Link>
                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>
                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>
                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Women</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Brown paperbag waist pencil skirt</Link></h3>
                        <div className="product-price">
                            $60.00
                        </div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '20%' }}></div>
                            </div>
                            <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-thumbs">
                            <Link to="#" className="active">
                                <img src="assets/images/products/product-4-thumb.jpg" alt="product desc" />
                            </Link>
                            <Link to="#">
                                <img src="assets/images/products/product-4-2-thumb.jpg" alt="product desc" />
                            </Link>
                            <Link to="#">
                                <img src="assets/images/products/product-4-3-thumb.jpg" alt="product desc" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 2 */}
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-5.jpg" alt="Product image" className="product-image" />
                        </Link>
                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>
                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>
                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Dresses</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Dark yellow lace cut out swing dress</Link></h3>
                        <div className="product-price">
                            $84.00
                        </div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '0%' }}></div>
                            </div>
                            <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-thumbs">
                            <Link to="#" className="active">
                                <img src="assets/images/products/product-5-thumb.jpg" alt="product desc" />
                            </Link>
                            <Link to="#">
                                <img src="assets/images/products/product-5-2-thumb.jpg" alt="product desc" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 3 */}
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <span className="product-label label-out">Out of Stock</span>
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-6.jpg" alt="Product image" className="product-image" />
                        </Link>
                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>
                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>
                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Jackets</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Khaki utility boiler jumpsuit</Link></h3>
                        <div className="product-price">
                            <span className="out-price">$120.00</span>
                        </div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '80%' }}></div>
                            </div>
                            <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-7.jpg" alt="Product image" className="product-image" />
                        </Link>

                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>

                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Jeans</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Blue utility pinafore denim dress</Link></h3>
                        <div className="product-price">$76.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '20%' }}></div>
                            </div>
                            <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-8.jpg" alt="Product image" className="product-image" />
                        </Link>

                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>

                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Shoes</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Beige knitted elastic runner shoes</Link></h3>
                        <div className="product-price">$84.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '0%' }}></div>
                            </div>
                            <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-9.jpg" alt="Product image" className="product-image" />
                        </Link>

                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>

                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Bags</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Orange saddle lock front chain cross body bag</Link></h3>
                        <div className="product-price">$84.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '60%' }}></div>
                            </div>
                            <span className="ratings-text">( 1 Reviews )</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-11.jpg" alt="Product image" className="product-image" />
                        </Link>

                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>

                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Shoes</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Light brown studded Wide fit wedges</Link></h3>
                        <div className="product-price">$110.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '80%' }}></div>
                            </div>
                            <span className="ratings-text">( 1 Reviews )</span>
                        </div>
                    </div>
                </div>
            </div>
     
        <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-10.jpg" alt="Product image" className="product-image" />
                        </Link>

                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>

                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Jumpers</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Yellow button front tea top</Link></h3>
                        <div className="product-price">$56.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '0%' }}></div>
                            </div>
                            <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-12.jpg" alt="Product image" className="product-image" />
                        </Link>

                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>

                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Bags</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Black soft RI weekend travel bag</Link></h3>
                        <div className="product-price">$68.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '0%' }}></div>
                            </div>
                            <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-13.jpg" alt="Product image" className="product-image" />
                        </Link>

                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>

                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Bags</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Beige metal hoop tote bag</Link></h3>
                        <div className="product-price">$76.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '40%' }}></div>
                            </div>
                            <span className="ratings-text">( 1 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-thumbs">
                            <Link to="#" className="active">
                                <img src="assets/images/products/product-13-thumb.jpg" alt="product desc" />
                            </Link>
                            <Link to="#">
                                <img src="assets/images/products/product-13-2-thumb.jpg" alt="product desc" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>




            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-14.jpg" alt="Product image" className="product-image" />
                        </Link>

                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>

                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Dresses</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Brown zebra print dungaree dress</Link></h3>
                        <div className="product-price">$80.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '0%' }}></div>
                            </div>
                            <span className="ratings-text">( 0 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-thumbs">
                            <Link to="#" className="active">
                                <img src="assets/images/products/product-14-thumb.jpg" alt="product desc" />
                            </Link>
                            <Link to="#">
                                <img src="assets/images/products/product-14-2-thumb.jpg" alt="product desc" />
                            </Link>
                            <Link to="#">
                                <img src="assets/images/products/product-14-3-thumb.jpg" alt="product desc" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <Link to="/ProductExtend">
                            <img src="assets/images/products/product-15.jpg" alt="Product image" className="product-image" />
                        </Link>

                        <div className="product-action-vertical">
                            <Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                            <Link to="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></Link>
                            <Link to="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></Link>
                        </div>

                        <div className="product-action">
                            <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            <Link to="#">Bags</Link>
                        </div>
                        <h3 className="product-title"><Link to="/ProductExtend">Beige ring handle circle cross body bag</Link></h3>
                        <div className="product-price">$56.00</div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: '0%' }}></div>
                            </div>
                            <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                    </div>
                </div>
            </div>     </div>
            </div>
            </div>
    
    
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <Link className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex="-1" aria-disabled="true">
                        <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span> Prev
                    </Link>
                </li>
                <li className="page-item active" aria-current="page">
                    <Link className="page-link" href="#">1</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link" href="#">2</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link" href="#">3</Link>
                </li>
                <li className="page-item-total">of 6</li>
                <li className="page-item">
                    <Link className="page-link page-link-next" href="#" aria-label="Next">
                        Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                    </Link>
                </li>
            </ul>
        </nav>

             </div>


              <aside className="col-lg-3 order-lg-first">
                    <div className="sidebar sidebar-shop">
                      <div className="widget widget-clean">
                        <label>Filters:</label>
                        <Link to="#" className="sidebar-filter-clear">Clean All</Link>
                      </div>

                    </div>

                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <Link data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                          Category
                        </Link>
                      </h3>

                      <div className="collapse show" id="widget-1">
                        <div className="widget-body">
                          <div className="filter-items filter-items-count">
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-1" />
                                <label className="custom-control-label" for="cat-1">Dresses</label>
                              </div>
                              <span className="item-count">3</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-2" />
                                <label className="custom-control-label" for="cat-2">T-shirts</label>
                              </div>
                              <span className="item-count">0</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-3" />
                                <label className="custom-control-label" for="cat-3">Bags</label>
                              </div>
                              <span className="item-count">4</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-4" />
                                <label className="custom-control-label" for="cat-4">Jackets</label>
                              </div>
                              <span className="item-count">2</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-5" />
                                <label className="custom-control-label" for="cat-5">Shoes</label>
                              </div>
                              <span className="item-count">2</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-6" />
                                <label className="custom-control-label" for="cat-6">Jumpers</label>
                              </div>
                              <span className="item-count">1</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-7" />
                                <label className="custom-control-label" for="cat-7">Jeans</label>
                              </div>
                              <span className="item-count">1</span>
                            </div>
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-8" />
                                <label className="custom-control-label" for="cat-8">Sportwear</label>
                              </div>
                              <span className="item-count">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <Link data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
                          Size
                        </Link>
                      </h3>
                      <div className="collapse show" id="widget-2">
                        <div className="widget-body">
                          <div className="filter-items">
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="size-1" />
                                <label className="custom-control-label" htmlFor="size-1">XS</label>
                              </div>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="size-2" />
                                <label className="custom-control-label" htmlFor="size-2">S</label>
                              </div>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" checked id="size-3" />
                                <label className="custom-control-label" htmlFor="size-3">M</label>
                              </div>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" checked id="size-4" />
                                <label className="custom-control-label" htmlFor="size-4">L</label>
                              </div>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="size-5" />
                                <label className="custom-control-label" htmlFor="size-5">XL</label>
                              </div>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="size-6" />
                                <label className="custom-control-label" htmlFor="size-6">XXL</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <Link data-toggle="collapse" href="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
                            Colour
                          </Link>
                        </h3>

                        <div className="collapse show" id="widget-3">
                          <div className="widget-body">
                            <div className="filter-colors">
                              <Link to="#" style={{ background: '#b87145' }}><span className="sr-only">Color Name</span></Link>
                              <Link to="#" style={{ background: '#f0c04a' }}><span className="sr-only">Color Name</span></Link>
                              <Link to="#" style={{ background: '#333333' }}><span className="sr-only">Color Name</span></Link>
                              <Link to="#" className="selected" style={{ background: '#cc3333' }}><span className="sr-only">Color Name</span></Link>
                              <Link to="#" style={{ background: '#3399cc' }}><span className="sr-only">Color Name</span></Link>
                              <Link to="#" style={{ background: '#669933' }}><span className="sr-only">Color Name</span></Link>
                              <Link to="#" style={{ background: '#f2719c' }}><span className="sr-only">Color Name</span></Link>
                              <Link to="#" style={{ background: '#ebebeb' }}><span className="sr-only">Color Name</span></Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <Link data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                            Brand
                          </Link>
                        </h3>

                        <div className="collapse show" id="widget-4">
                          <div className="widget-body">
                            <div className="filter-items">
                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-1" />
                                  <label className="custom-control-label" htmlFor="brand-1">Next</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-2" />
                                  <label className="custom-control-label" htmlFor="brand-2">River Island</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-3" />
                                  <label className="custom-control-label" htmlFor="brand-3">Geox</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-4" />
                                  <label className="custom-control-label" htmlFor="brand-4">New Balance</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-5" />
                                  <label className="custom-control-label" htmlFor="brand-5">UGG</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-6" />
                                  <label className="custom-control-label" htmlFor="brand-6">F&F</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-7" />
                                  <label className="custom-control-label" htmlFor="brand-7">Nike</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <Link data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                            Price
                          </Link>
                        </h3>

                        <div className="collapse show" id="widget-5">
                          <div className="widget-body">
                            <div className="filter-price">
                              <div className="filter-price-text">
                                Price Range:
                                <span id="filter-price-range"></span>
                              </div>

                              <div id="price-slider"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
            </div>
          </div>

        </div>

      </main>

    </div>
  );}

export default ShopGrid4;
