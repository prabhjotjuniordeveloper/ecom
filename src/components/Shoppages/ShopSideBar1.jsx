import React, { useState } from 'react';

const ShopSideBar1 = () => {
    const [openWidgets, setOpenWidgets] = useState({
        category: true,
        size: true,
        color: true,
        brand: true,
        price: true,
    });

    const toggleWidget = (widget) => {
        setOpenWidgets((prev) => ({
            ...prev,
            [widget]: !prev[widget],
        }));
    };
    return (
        <div>
            <main className="main">

                <div>
                    <div
                        className="page-header text-center"
                        style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
                    >
                        <div className="container">
                            <h1 className="page-title">
                                Boxed No Sidebar<span>Shop</span>
                            </h1>
                        </div>
                        {/* End .container */}
                    </div>
                    {/* End .page-header */}
                    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                                <li className="breadcrumb-item"><a href="#">No Sidebar</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Boxed</li>
                            </ol>
                        </div>
                        {/* End .container */}
                    </nav>

                    <div className="page-content">
                        <div className="container">

                            <div className="toolbox">
                                <div className="toolbox-left">
                                    <a href="#" className="sidebar-toggler">
                                        <i className="icon-bars"></i> Filters
                                    </a>
                                </div>
                                {/* End .toolbox-left */}

                                <div className="toolbox-center">
                                    <div className="toolbox-info">
                                        Showing <span>12 of 56</span> Products
                                    </div>
                                    {/* End .toolbox-info */}
                                </div>
                                {/* End .toolbox-center */}
                            </div>
                            <div className="products">

                                <div className="row">
                                    {/* Product 1 */}
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-1.jpg" alt="Product image" className="product-image" />
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                                                        <span>add to wishlist</span>
                                                    </a>
                                                </div>

                                                <div className="product-action action-icon-top">
                                                    <a href="#" className="btn-product btn-cart">
                                                        <span>add to cart</span>
                                                    </a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view">
                                                        <span>quick view</span>
                                                    </a>
                                                    <a href="#" className="btn-product btn-compare" title="Compare">
                                                        <span>compare</span>
                                                    </a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Women</a>
                                                </div>
                                                <h3 className="product-title">
                                                    <a href="product.html">Nunc dignissim risus</a>
                                                </h3>
                                                <div className="product-price">$50.00</div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '0%' }}></div>
                                                    </div>
                                                    <span className="ratings-text">( 0 Reviews )</span>
                                                </div>
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" style={{ background: '#cc9966' }}>
                                                        <span className="sr-only">Color name</span>
                                                    </a>
                                                    <a href="#" className="active" style={{ background: '#ebebeb' }}>
                                                        <span className="sr-only">Color name</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product 2 */}
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="product">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-2.jpg" alt="Product image" className="product-image" />
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                                                        <span>add to wishlist</span>
                                                    </a>
                                                </div>

                                                <div className="product-action action-icon-top">
                                                    <a href="#" className="btn-product btn-cart">
                                                        <span>add to cart</span>
                                                    </a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view">
                                                        <span>quick view</span>
                                                    </a>
                                                    <a href="#" className="btn-product btn-compare" title="Compare">
                                                        <span>compare</span>
                                                    </a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Accessories</a>
                                                </div>
                                                <h3 className="product-title">
                                                    <a href="product.html">Cras ornare tristique</a>
                                                </h3>
                                                <div className="product-price">$32.00</div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <span className="ratings-text">( 11 Reviews )</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product 3 */}
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">30% off</span>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-3.jpg" alt="Product image" className="product-image" />
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                                                        <span>add to wishlist</span>
                                                    </a>
                                                </div>

                                                <div className="product-action action-icon-top">
                                                    <a href="#" className="btn-product btn-cart">
                                                        <span>add to cart</span>
                                                    </a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view">
                                                        <span>quick view</span>
                                                    </a>
                                                    <a href="#" className="btn-product btn-compare" title="Compare">
                                                        <span>compare</span>
                                                    </a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Women</a>
                                                </div>
                                                <h3 className="product-title">
                                                    <a href="product.html">Aliquam tincidunt mauris</a>
                                                </h3>
                                                <div className="product-price">
                                                    <span className="new-price">$50.00</span>
                                                    <span className="old-price">$84.00</span>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '40%' }}></div>
                                                    </div>
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#cc9966' }}>
                                                        <span className="sr-only">Color name</span>
                                                    </a>
                                                    <a href="#" style={{ background: '#7fc5ed' }}>
                                                        <span className="sr-only">Color name</span>
                                                    </a>
                                                    <a href="#" style={{ background: '#e8c97a' }}>
                                                        <span className="sr-only">Color name</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product 4 */}
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="product">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-4.jpg" alt="Product image" className="product-image" />
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                                                        <span>add to wishlist</span>
                                                    </a>
                                                </div>

                                                <div className="product-action action-icon-top">
                                                    <a href="#" className="btn-product btn-cart">
                                                        <span>add to cart</span>
                                                    </a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view">
                                                        <span>quick view</span>
                                                    </a>
                                                    <a href="#" className="btn-product btn-compare" title="Compare">
                                                        <span>compare</span>
                                                    </a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Dresses</a>
                                                </div>
                                                <h3 className="product-title">
                                                    <a href="product.html">Brown paperbag waist pencil skirt</a>
                                                </h3>
                                                <div className="product-price">$60.00</div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '20%' }}></div>
                                                    </div>
                                                    <span className="ratings-text">( 2 Reviews )</span>
                                                </div>
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#cc9966' }}>
                                                        <span className="sr-only">Color name</span>
                                                    </a>
                                                    <a href="#" style={{ background: '#333333' }}>
                                                        <span className="sr-only">Color name</span>
                                                    </a>
                                                    <a href="#" style={{ background: '#7b5d36' }}>
                                                        <span className="sr-only">Color name</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product 5 */}
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="product">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-5.jpg" alt="Product image" className="product-image" />
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                                                        <span>add to wishlist</span>
                                                    </a>
                                                </div>

                                                <div className="product-action action-icon-top">
                                                    <a href="#" className="btn-product btn-cart">
                                                        <span>add to cart</span>
                                                    </a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view">
                                                        <span>quick view</span>
                                                    </a>
                                                    <a href="#" className="btn-product btn-compare" title="Compare">
                                                        <span>compare</span>
                                                    </a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Dresses</a>
                                                </div>
                                                <h3 className="product-title">
                                                    <a href="product.html">Dark yellow lace cut out swing dress</a>
                                                </h3>
                                                <div className="product-price">$84.00</div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '0%' }}></div>
                                                    </div>
                                                    <span className="ratings-text">( 0 Reviews )</span>
                                                </div>
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" style={{ background: '#ebebeb' }}>
                                                        <span className="sr-only">Color name</span>
                                                    </a>
                                                    <a href="#" className="active" style={{ background: '#eabc4e' }}>
                                                        <span className="sr-only">Color name</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product 6 */}
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-out">Out of stock</span>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-6.jpg" alt="Product image" className="product-image" />
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                                                        <span>add to wishlist</span>
                                                    </a>
                                                </div>

                                                <div className="product-action action-icon-top">
                                                    <a href="#" className="btn-product btn-cart">
                                                        <span>add to cart</span>
                                                    </a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view">
                                                        <span>quick view</span>
                                                    </a>
                                                    <a href="#" className="btn-product btn-compare" title="Compare">
                                                        <span>compare</span>
                                                    </a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Jackets</a>
                                                </div>
                                                <h3 className="product-title">
                                                    <a href="product.html">Khaki utility boiler jumpsuit</a>
                                                </h3>
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

                                    {/* Product 7 */}
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="product">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-7.jpg" alt="Product image" className="product-image" />
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                                                        <span>add to wishlist</span>
                                                    </a>
                                                </div>

                                                <div className="product-action action-icon-top">
                                                    <a href="#" className="btn-product btn-cart">
                                                        <span>add to cart</span>
                                                    </a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view">
                                                        <span>quick view</span>
                                                    </a>
                                                    <a href="#" className="btn-product btn-compare" title="Compare">
                                                        <span>compare</span>
                                                    </a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Shirts</a>
                                                </div>
                                                <h3 className="product-title">
                                                    <a href="product.html">Blue denim shirt</a>
                                                </h3>
                                                <div className="product-price">$45.00</div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '60%' }}></div>
                                                    </div>
                                                    <span className="ratings-text">( 3 Reviews )</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product 8 */}
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="product">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-8.jpg" alt="Product image" className="product-image" />
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                                                        <span>add to wishlist</span>
                                                    </a>
                                                </div>

                                                <div className="product-action action-icon-top">
                                                    <a href="#" className="btn-product btn-cart">
                                                        <span>add to cart</span>
                                                    </a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view">
                                                        <span>quick view</span>
                                                    </a>
                                                    <a href="#" className="btn-product btn-compare" title="Compare">
                                                        <span>compare</span>
                                                    </a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Shoes</a>
                                                </div>
                                                <h3 className="product-title">
                                                    <a href="product.html">Red high heels</a>
                                                </h3>
                                                <div className="product-price">$75.00</div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '50%' }}></div>
                                                    </div>
                                                    <span className="ratings-text">( 5 Reviews )</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3 mt-3">
                                        <div className="product">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-9.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>
                                                <div className="product-action action-icon-top">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                    <a href="#" className="btn-product btn-compare" title="Compare"><span>compare</span></a>
                                                </div>
                                            </figure>
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Bags</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Orange saddle lock front chain cross body bag</a></h3>
                                                <div className="product-price">$52.00</div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '60%' }}></div>
                                                    </div>
                                                    <span className="ratings-text">( 1 Reviews )</span>
                                                </div>
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#e07a3d' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#7b5d36' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#dac1a7' }}><span className="sr-only">Color name</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3 mt-3">
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-10.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>
                                                <div className="product-action action-icon-top">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                    <a href="#" className="btn-product btn-compare" title="Compare"><span>compare</span></a>
                                                </div>
                                            </figure>
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Jumpers</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Yellow button front tea top</a></h3>
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
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-14.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                </div>
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Dresses</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Brown zebra print dungaree dress</a></h3>
                                                <div className="product-price">$80.00</div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '0%' }}></div>
                                                    </div>
                                                    <span className="ratings-text">( 0 Reviews )</span>
                                                </div>
                                                <div className="product-nav product-nav-thumbs">
                                                    <a href="#" className="active">
                                                        <img src="assets/images/products/product-14-thumb.jpg" alt="product desc" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-14-2-thumb.jpg" alt="product desc" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-14-3-thumb.jpg" alt="product desc" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="product product-7 text-center">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-15.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                </div>
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Bags</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Beige ring handle circle cross body bag</a></h3>
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
                                </div>

                                <div className="sidebar-filter-overlay"></div>
                                <aside className="sidebar-shop sidebar-filter">
                                    <div className="sidebar-filter-wrapper">
                                        <div className="widget widget-clean">
                                            <label><i className="icon-close"></i>Filters</label>
                                            <a href="#" className="sidebar-filter-clear">Clean All</a>
                                        </div>

                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title">
                                                <a
                                                    data-toggle="collapse"
                                                    href="#widget-1"
                                                    role="button"
                                                    aria-expanded={openWidgets.category}
                                                    aria-controls="widget-1"
                                                    onClick={() => toggleWidget('category')}
                                                >
                                                    Category
                                                </a>
                                            </h3>

                                            <div className={`collapse ${openWidgets.category ? 'show' : ''}`} id="widget-1">
                                                <div className="widget-body">
                                                    <div className="filter-items filter-items-count">
                                                        {[
                                                            { id: 'cat-1', label: 'Dresses', count: 3 },
                                                            { id: 'cat-2', label: 'T-shirts', count: 0 },
                                                            { id: 'cat-3', label: 'Bags', count: 4 },
                                                            { id: 'cat-4', label: 'Jackets', count: 2 },
                                                            { id: 'cat-5', label: 'Shoes', count: 2 },
                                                            { id: 'cat-6', label: 'Jumpers', count: 1 },
                                                            { id: 'cat-7', label: 'Jeans', count: 1 },
                                                            { id: 'cat-8', label: 'Sportwear', count: 0 },
                                                        ].map((item) => (
                                                            <div className="filter-item" key={item.id}>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id={item.id} />
                                                                    <label className="custom-control-label" htmlFor={item.id}>{item.label}</label>
                                                                </div>
                                                                <span className="item-count">{item.count}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title">
                                                <a
                                                    data-toggle="collapse"
                                                    href="#widget-2"
                                                    role="button"
                                                    aria-expanded={openWidgets.size}
                                                    aria-controls="widget-2"
                                                    onClick={() => toggleWidget('size')}
                                                >
                                                    Size
                                                </a>
                                            </h3>

                                            <div className={`collapse ${openWidgets.size ? 'show' : ''}`} id="widget-2">
                                                <div className="widget-body">
                                                    <div className="filter-items">
                                                        {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                                                            <div className="filter-item" key={`size-${index}`}>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="custom-control-input"
                                                                        id={`size-${index + 1}`}
                                                                        defaultChecked={size === 'M' || size === 'L'}
                                                                    />
                                                                    <label className="custom-control-label" htmlFor={`size-${index + 1}`}>{size}</label>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title">
                                                <a
                                                    data-toggle="collapse"
                                                    href="#widget-3"
                                                    role="button"
                                                    aria-expanded={openWidgets.color}
                                                    aria-controls="widget-3"
                                                    onClick={() => toggleWidget('color')}
                                                >
                                                    Colour
                                                </a>
                                            </h3>

                                            <div className={`collapse ${openWidgets.color ? 'show' : ''}`} id="widget-3">
                                                <div className="widget-body">
                                                    <div className="filter-colors">
                                                        {[
                                                            '#b87145',
                                                            '#f0c04a',
                                                            '#333333',
                                                            '#cc3333',
                                                            '#3399cc',
                                                            '#669933',
                                                            '#f2719c',
                                                            '#ebebeb',
                                                        ].map((color, index) => (
                                                            <a href="#" key={index} style={{ background: color }}>
                                                                <span className="sr-only">Color Name</span>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title">
                                                <a
                                                    data-toggle="collapse"
                                                    href="#widget-4"
                                                    role="button"
                                                    aria-expanded={openWidgets.brand}
                                                    aria-controls="widget-4"
                                                    onClick={() => toggleWidget('brand')}
                                                >
                                                    Brand
                                                </a>
                                            </h3>

                                            <div className={`collapse ${openWidgets.brand ? 'show' : ''}`} id="widget-4">
                                                <div className="widget-body">
                                                    <div className="filter-items">
                                                        {[
                                                            'Next',
                                                            'River Island',
                                                            'Geox',
                                                            'New Balance',
                                                            'UGG',
                                                            'F&F',
                                                            'Nike',
                                                        ].map((brand, index) => (
                                                            <div className="filter-item" key={`brand-${index}`}>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id={`brand-${index + 1}`} />
                                                                    <label className="custom-control-label" htmlFor={`brand-${index + 1}`}>{brand}</label>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title">
                                                <a
                                                    data-toggle="collapse"
                                                    href="#widget-5"
                                                    role="button"
                                                    aria-expanded={openWidgets.price}
                                                    aria-controls="widget-5"
                                                    onClick={() => toggleWidget('price')}
                                                >
                                                    Price
                                                </a>
                                            </h3>

                                            <div className={`collapse ${openWidgets.price ? 'show' : ''}`} id="widget-5">
                                                <div className="widget-body">
                                                    <div className="filter-price">
                                                        <div className="filter-price-text">
                                                            Price Range: <span id="filter-price-range"></span>
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
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}

export default ShopSideBar1;
