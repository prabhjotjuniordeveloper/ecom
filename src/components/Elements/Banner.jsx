import React from 'react'
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>


<main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Banners<span>Elements</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
        <li className="breadcrumb-item"><Link to="elements-list.html">Elements</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Banners</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <h2 className="title text-center mb-3">2 Columns</h2>{/* End .title mb-2 */}
      <div className="row">
        <div className="col-md-6">
          <div className="banner">
            <Link to="#">
              <img src="assets/images/banners/banner-1.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title">Praesent elementum <br />hendrerit tortor.</h3>{/* End .banner-title */}
              <Link to="#" className="banner-link">Click here</Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <div className="banner">
            <Link to="#">
              <img src="assets/images/banners/banner-2.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title">Donec consectetuer <br />ligula vulputate.</h3>{/* End .banner-title */}
              <Link to="#" className="banner-link">Click here</Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
      <hr className="mb-4" />
      <h2 className="title text-center mb-3">3 Columns</h2>{/* End .title mb-2 */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="banner">
            <Link to="#">
              <img src="assets/images/banners/3cols/banner-1.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title">Praesent elementum <br />hendrerit tortor.</h3>{/* End .banner-title */}
              <Link to="#" className="banner-link">Click here</Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6 col-lg-4">
          <div className="banner">
            <Link to="#">
              <img src="assets/images/banners/3cols/banner-2.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title">Donec consectetuer <br />ligula vulputate.</h3>{/* End .banner-title */}
              <Link to="#" className="banner-link">Click here</Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6 col-lg-4">
          <div className="banner">
            <Link to="#">
              <img src="assets/images/banners/3cols/banner-3.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title text-white">Phasellus ultrices <br />nulla quisnibh.</h3>{/* End .banner-title */}
              <Link to="#" className="banner-link">Click here</Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
      <hr className="mb-4" />
    </div>{/* End .container */}
    <div className="container-fluid">
      <h2 className="title text-center mb-3">3 Columns Fullwidth</h2>{/* End .title mb-2 */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="banner">
            <Link to="#">
              <img src="assets/images/banners/3cols/banner-4.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title">Praesent elementum <br />hendrerit tortor.</h3>{/* End .banner-title */}
              <Link to="#" className="banner-link">Click here</Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6 col-lg-4">
          <div className="banner">
            <Link to="#">
              <img src="assets/images/banners/3cols/banner-5.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title">Donec consectetuer <br />ligula vulputate.</h3>{/* End .banner-title */}
              <Link to="#" className="banner-link">Click here</Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6 col-lg-4">
          <div className="banner">
            <Link to="#">
              <img src="assets/images/banners/3cols/banner-6.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title text-white">Phasellus ultrices <br />nulla quisnibh.</h3>{/* End .banner-title */}
              <Link to="#" className="banner-link">Click here</Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
    </div>{/* End .container-fluid */}
    <div className="container">
      <hr className="mb-4" />
      <h2 className="title text-center mb-3">Large Banner</h2>{/* End .title mb-2 */}
      <div className="row">
        <div className="col-12">
          <div className="banner banner-big">
            <Link to="#">
              <img src="assets/images/banners/banner-fullwidth.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle text-primary">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title text-white">Morbi interdum <br />mollis sapien.</h3>{/* End .banner-title */}
              <p className="d-none d-lg-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, posuere a, pede.</p> 
              <Link to="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right" /></Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-12 */}
      </div>{/* End .row */}
      <hr className="mb-4" />
      <h2 className="title text-center mb-3">Grid (3 Banners)</h2>{/* End .title mb-2 */}
      <div className="row ">
        <div className="col-lg-8">
          <div className="banner banner-big">
            <Link to="#">
              <img src="assets/images/banners/grid/3cols/banner-1.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title">Morbi in sem <br />placerat.</h3>{/* End .banner-title */}
              <Link to="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right" /></Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-lg-8 */}
        <div className="col-lg-4">
          <div className="row">
            <div className="col-sm-6 col-lg-12">
              <div className="banner">
                <Link to="#">
                  <img src="assets/images/banners/grid/3cols/banner-2.jpg" alt="Banner" />
                </Link>
                <div className="banner-content">
                  <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
                  <h3 className="banner-title text-white">Donec consectetuer <br />ligula vulputate.</h3>{/* End .banner-title */}
                  <Link to="#" className="banner-link">Click here</Link>
                </div>{/* End .banner-content */}
              </div>{/* End .banner */}
            </div>{/* End .col-sm-6 col-lg-12 */}
            <div className="col-sm-6 col-lg-12">
              <div className="banner">
                <Link to="#">
                  <img src="assets/images/banners/grid/3cols/banner-3.jpg" alt="Banner" />
                </Link>
                <div className="banner-content">
                  <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
                  <h3 className="banner-title">Phasellus <br />ultrices nulla.</h3>{/* End .banner-title */}
                  <Link to="#" className="banner-link">Click here</Link>
                </div>{/* End .banner-content */}
              </div>{/* End .banner */}
            </div>{/* End .col-sm-6 col-lg-12 */}
          </div>{/* End .row */}
        </div>{/* End .col-lg-4 */}
      </div>{/* End .row */}
      <hr className="mb-4" />
      <h2 className="title text-center mb-3">Grid (4 Banners)</h2>{/* End .title mb-2 */}
      <div className="row justify-content-center">
        <div className="col-sm-6 col-lg-4">
          <div className="banner">
            <Link to="#">
              <img src="assets/images/banners/grid/4cols/banner-1.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title">Phasellus <br />ultrices nulla.</h3>{/* End .banner-title */}
              <Link to="#" className="banner-link">Click here</Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-lg-4 */}
        <div className="col-sm-6 col-lg-4 order-lg-last">
          <div className="banner">
            <Link to="#">
              <img src="assets/images/banners/grid/4cols/banner-4.jpg" alt="Banner" />
            </Link>
            <div className="banner-content">
              <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
              <h3 className="banner-title text-white">Donec consectetuer <br />ligula vulputate.</h3>{/* End .banner-title */}
              <Link to="#" className="banner-link">Click here</Link>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-lg-4 */}
        <div className="col-lg-4">
          <div className="row">
            <div className="col-sm-6 col-lg-12">
              <div className="banner">
                <Link to="#">
                  <img src="assets/images/banners/grid/4cols/banner-2.jpg" alt="Banner" />
                </Link>
                <div className="banner-content">
                  <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
                  <h3 className="banner-title">Phasellus <br />ultrices nulla.</h3>{/* End .banner-title */}
                  <Link to="#" className="banner-link">Click here</Link>
                </div>{/* End .banner-content */}
              </div>{/* End .banner */}
            </div>{/* End .col-sm-6 col-lg-12 */}
            <div className="col-sm-6 col-lg-12">
              <div className="banner">
                <Link to="#">
                  <img src="assets/images/banners/grid/4cols/banner-3.jpg" alt="Banner" />
                </Link>
                <div className="banner-content">
                  <h4 className="banner-subtitle">Quisque a lectus</h4>{/* End .banner-subtitle */}
                  <h3 className="banner-title text-white">Donec consectetuer <br />ligula vulputate.</h3>{/* End .banner-title */}
                  <Link to="#" className="banner-link">Click here</Link>
                </div>{/* End .banner-content */}
              </div>{/* End .banner */}
            </div>{/* End .col-sm-6 col-lg-12 */}
          </div>{/* End .row */}
        </div>{/* End .col-lg-4 */}
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
</main>

      
    </div>
  )
}

export default Banner
