import React from 'react'
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <div>
      
     <main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Portfolio<span>Elements</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
        <li className="breadcrumb-item"><Link to="elements-list.html">Elements</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <h2 className="title text-center mb-2">Grid 3 Columns</h2>{/* End .title text-center mb-2 */}
      <nav className="portfolio-nav">
        <ul className="nav-filter portfolio-filter justify-content-center">
          <li className="active"><Link to="#" data-filter="*">All</Link></li>
          <li><Link to="#" data-filter=".women">Women</Link></li>
          <li><Link to="#" data-filter=".men">Men</Link></li>
          <li><Link to="#" data-filter=".accessories">Accessories</Link></li>
        </ul>
      </nav>{/* End .portfolio-nav */}
      <div className="portfolio-container" data-layout="fitRows">
        <div className="portfolio-item accessories women col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/item-1.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/item-2.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}      
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item women accessories col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/item-3.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}      
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/item-4.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men women col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/item-5.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men accessories col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/item-6.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}      
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
      </div>{/* End .portfolio-container */}
      <hr className="mb-4" />
      <h2 className="title text-center mb-2">Grid 4 Columns</h2>{/* End .title text-center mb-2 */}
      <nav className="portfolio-nav">
        <ul className="nav-filter portfolio-filter justify-content-center">
          <li className="active"><Link to="#" data-filter="*">All</Link></li>
          <li><Link to="#" data-filter=".women">Women</Link></li>
          <li><Link to="#" data-filter=".men">Men</Link></li>
          <li><Link to="#" data-filter=".accessories">Accessories</Link></li>
        </ul>
      </nav>{/* End .portfolio-nav */}
      <div className="portfolio-container" data-layout="fitRows" id="portfolio-2">
        <div className="portfolio-item accessories women col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/4cols/item-1.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/4cols/item-2.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/4cols/item-3.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/4cols/item-4.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men women col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/4cols/item-5.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/4cols/item-6.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/4cols/item-7.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/4cols/item-8.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
      </div>{/* End .portfolio-container */}
      <hr className="mb-4" />
      <h2 className="title text-center mb-2">Masonry 3 Columns</h2>{/* End .title text-center mb-2 */}
      <nav className="portfolio-nav">
        <ul className="nav-filter portfolio-filter justify-content-center">
          <li className="active"><Link to="#" data-filter="*">All</Link></li>
          <li><Link to="#" data-filter=".women">Women</Link></li>
          <li><Link to="#" data-filter=".men">Men</Link></li>
          <li><Link to="#" data-filter=".accessories">Accessories</Link></li>
        </ul>
      </nav>{/* End .portfolio-nav */}
      <div className="portfolio-container">
        <div className="portfolio-item accessories women col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-3cols/item-1.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-3cols/item-2.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item women accessories col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-3cols/item-3.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-3cols/item-4.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men women col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-3cols/item-5.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men accessories col-sm-6 col-lg-4">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-3cols/item-6.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
      </div>{/* End .portfolio-container */}
      <hr className="mb-4" />
      <h2 className="title text-center mb-2">Masonry 4 Columns</h2>{/* End .title text-center mb-2 */}
      <nav className="portfolio-nav">
        <ul className="nav-filter portfolio-filter justify-content-center">
          <li className="active"><Link to="#" data-filter="*">All</Link></li>
          <li><Link to="#" data-filter=".women">Women</Link></li>
          <li><Link to="#" data-filter=".men">Men</Link></li>
          <li><Link to="#" data-filter=".accessories">Accessories</Link></li>
        </ul>
      </nav>{/* End .portfolio-nav */}
      <div className="portfolio-container">
        <div className="portfolio-item accessories women col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-4cols/item-1.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-4cols/item-2.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-4cols/item-3.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-4cols/item-4.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men women col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-4cols/item-5.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-4cols/item-6.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-4cols/item-7.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio portfolio-overlay">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/masonry-4cols/item-8.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content portfolio-content-center">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio portfolio-overlay */}
        </div>{/* End .portfolio-item */}
      </div>{/* End .portfolio-container */}
      <hr className="mb-4" />
    </div>{/* End .container */}
    <div className="container-fluid">
      <h2 className="title text-center mb-2">Fullwidth with Text <span className="title-separator">(No space)</span></h2>{/* End .title text-center mb-2 */}
      <nav className="portfolio-nav">
        <ul className="nav-filter portfolio-filter justify-content-center">
          <li className="active"><Link to="#" data-filter="*">All</Link></li>
          <li><Link to="#" data-filter=".women">Women</Link></li>
          <li><Link to="#" data-filter=".men">Men</Link></li>
          <li><Link to="#" data-filter=".accessories">Accessories</Link></li>
        </ul>
      </nav>{/* End .portfolio-nav */}
      <div className="portfolio-container portfolio-nogap" data-layout="fitRows">
        <div className="portfolio-item accessories women col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/fullwidth/item-1.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item accessories col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/fullwidth/item-2.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Nunc dignissim risus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/fullwidth/item-3.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Cras ornare tristique</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/fullwidth/item-4.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vivamus vestibulum ntulla</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Men</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men women col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/fullwidth/item-5.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vestibulum auctor dapibus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/fullwidth/item-6.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Nunc dignissim risus</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/fullwidth/item-7.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Cras ornare tristique</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Women</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio */}
        </div>{/* End .portfolio-item */}
        <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
          <div className="portfolio">
            <figure className="portfolio-media">
              <Link to="#">
                <img src="assets/images/portfolio/fullwidth/item-8.jpg" alt="item" />
              </Link>
            </figure>
            <div className="portfolio-content">
              <h3 className="portfolio-title"><Link to="#">Vivamus vestibulum ntulla</Link></h3>{/* End .portfolio-title */}
              <div className="portfolio-tags">
                <Link to="#">Accessories</Link>
              </div>{/* End .portfolio-tags */}
            </div>{/* End .portfolio-content */}
          </div>{/* End .portfolio */}
        </div>{/* End .portfolio-item */}
      </div>{/* End .portfolio-container */}
    </div>{/* End .container-fluid */}
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
</main>{/* End .main */}


    </div>
  )
}

export default Portfolio
