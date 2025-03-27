import React from 'react'

const ProductCategory = () => {
  return (
    <div>
      
    <main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Product Category<span>Elements</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="elements-list.html">Elements</a></li>
        <li className="breadcrumb-item active" aria-current="page">Banners</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <h2 className="title text-center mb-3">2 Columns</h2>{/* End .title mb-2 */}
      <div className="row">
        <div className="col-md-6">
          <div className="banner banner-cat">
            <a href="#">
              <img src="assets/images/category/banner-1.jpg" alt="Banner" />
            </a>
            <div className="banner-content">
              <h3 className="banner-title">Women</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">18 Products</h4>{/* End .banner-subtitle */}
              <a href="#" className="banner-link">Shop Now</a>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <div className="banner banner-cat">
            <a href="#">
              <img src="assets/images/category/banner-2.jpg" alt="Banner" />
            </a>
            <div className="banner-content">
              <h3 className="banner-title">Men</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">12 Products</h4>{/* End .banner-subtitle */}
              <a href="#" className="banner-link">Shop Now</a>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
      <hr className="mb-4" />
      <h2 className="title text-center mb-3">3 Columns Badge Style</h2>{/* End .title mb-2 */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="banner banner-cat">
            <a href="#">
              <img src="assets/images/category/3cols/banner-1.jpg" alt="Banner" />
            </a>
            <div className="banner-content banner-content-overlay text-center">
              <h3 className="banner-title">Women</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">18 Products</h4>{/* End .banner-subtitle */}
              <a href="#" className="banner-link">Shop Now</a>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6 col-lg-4">
          <div className="banner banner-cat">
            <a href="#">
              <img src="assets/images/category/3cols/banner-2.jpg" alt="Banner" />
            </a>
            <div className="banner-content banner-content-overlay text-center">
              <h3 className="banner-title">Men</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">12 Products</h4>{/* End .banner-subtitle */}
              <a href="#" className="banner-link">Shop Now</a>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6 col-lg-4">
          <div className="banner banner-cat">
            <a href="#">
              <img src="assets/images/category/3cols/banner-3.jpg" alt="Banner" />
            </a>
            <div className="banner-content banner-content-overlay text-center">
              <h3 className="banner-title">Accessories</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">8 Products</h4>{/* End .banner-subtitle */}
              <a href="#" className="banner-link">Shop Now</a>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
      <hr className="mb-4" />
      <h2 className="title text-center mb-3">4 Columns Carousel</h2>{/* End .title mb-2 */}
      <div className="owl-carousel owl-simple" data-toggle="owl" data-owl-options="{
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
        <div className="banner banner-cat">
          <a href="#">
            <img src="assets/images/category/4cols/banner-1.jpg" alt="Banner" />
          </a>
          <div className="banner-content banner-content-static text-center">
            <h3 className="banner-title">Women</h3>{/* End .banner-title */}
            <h4 className="banner-subtitle">18 Products</h4>{/* End .banner-subtitle */}
            <a href="#" className="banner-link">Shop Now</a>
          </div>{/* End .banner-content */}
        </div>{/* End .banner */}
        <div className="banner banner-cat">
          <a href="#">
            <img src="assets/images/category/4cols/banner-2.jpg" alt="Banner" />
          </a>
          <div className="banner-content banner-content-static text-center">
            <h3 className="banner-title">Men</h3>{/* End .banner-title */}
            <h4 className="banner-subtitle">12 Products</h4>{/* End .banner-subtitle */}
            <a href="#" className="banner-link">Shop Now</a>
          </div>{/* End .banner-content */}
        </div>{/* End .banner */}
        <div className="banner banner-cat">
          <a href="#">
            <img src="assets/images/category/4cols/banner-3.jpg" alt="Banner" />
          </a>
          <div className="banner-content banner-content-static text-center">
            <h3 className="banner-title">Shoes &amp; Boots</h3>{/* End .banner-title */}
            <h4 className="banner-subtitle">15 Products</h4>{/* End .banner-subtitle */}
            <a href="#" className="banner-link">Shop Now</a>
          </div>{/* End .banner-content */}
        </div>{/* End .banner */}
        <div className="banner banner-cat">
          <a href="#">
            <img src="assets/images/category/4cols/banner-4.jpg" alt="Banner" />
          </a>
          <div className="banner-content banner-content-static text-center">
            <h3 className="banner-title">Accessories</h3>{/* End .banner-title */}
            <h4 className="banner-subtitle">8 Products</h4>{/* End .banner-subtitle */}
            <a href="#" className="banner-link">Shop Now</a>
          </div>{/* End .banner-content */}
        </div>{/* End .banner */}
        <div className="banner banner-cat">
          <a href="#">
            <img src="assets/images/category/4cols/banner-1.jpg" alt="Banner" />
          </a>
          <div className="banner-content banner-content-static text-center">
            <h3 className="banner-title">Women</h3>{/* End .banner-title */}
            <h4 className="banner-subtitle">18 Products</h4>{/* End .banner-subtitle */}
            <a href="#" className="banner-link">Shop Now</a>
          </div>{/* End .banner-content */}
        </div>{/* End .banner */}
      </div>{/* End .banners-carousel owl-carousel owl-simple */}
      <hr className="mb-4" />
    </div>{/* End .container */}
    <div className="container-fluid">
      <h2 className="title text-center mb-3">3 Columns Fullwidth</h2>{/* End .title mb-2 */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="banner banner-cat">
            <a href="#">
              <img src="assets/images/category/fullwidth/banner-1.jpg" alt="Banner" />
            </a>
            <div className="banner-content">
              <h3 className="banner-title">Women</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">18 Products</h4>{/* End .banner-subtitle */}
              <a href="#" className="banner-link">Shop Now</a>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6 col-lg-4">
          <div className="banner banner-cat">
            <a href="#">
              <img src="assets/images/category/fullwidth/banner-2.jpg" alt="Banner" />
            </a>
            <div className="banner-content">
              <h3 className="banner-title">Men</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">12 Products</h4>{/* End .banner-subtitle */}
              <a href="#" className="banner-link">Shop Now</a>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6 col-lg-4">
          <div className="banner banner-cat">
            <a href="#">
              <img src="assets/images/category/fullwidth/banner-3.jpg" alt="Banner" />
            </a>
            <div className="banner-content">
              <h3 className="banner-title">Accessories</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">12 Products</h4>{/* End .banner-subtitle */}
              <a href="#" className="banner-link">Shop Now</a>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
    </div>{/* End .container-fluid */}
    <div className="container">
      <hr className="mb-4" />
      <h2 className="title text-center mb-3">Masonry</h2>{/* End .title mb-2 */}
      <div className="row justify-content-center">
        <div className="col-sm-6 col-lg-3">
          <div className="banner banner-cat banner-link-anim">
            <a href="#">
              <img src="assets/images/category/grid/banner-1.jpg" alt="Banner" />
            </a>
            <div className="banner-content banner-content-bottom">
              <h3 className="banner-title">Accessories</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">8 Products</h4>{/* End .banner-subtitle */}
              <a href="#" className="banner-link">Shop Now</a>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-sm-6 col-lg-3 order-lg-last">
          <div className="banner banner-cat banner-link-anim">
            <a href="#">
              <img src="assets/images/category/grid/banner-4.jpg" alt="Banner" />
            </a>
            <div className="banner-content banner-content-top">
              <h3 className="banner-title">Shoes &amp; Boots</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">15 Products</h4>{/* End .banner-subtitle */}
              <a href="#" className="banner-link">Shop Now</a>
            </div>{/* End .banner-content */}
          </div>{/* End .banner */}
        </div>{/* End .col-sm-6 */}
        <div className="col-lg-6">
          <div className="row">
            <div className="col-sm-6 col-lg-12">
              <div className="banner banner-cat banner-link-anim">
                <a href="#">
                  <img src="assets/images/category/grid/banner-2.jpg" alt="Banner" />
                </a>
                <div className="banner-content">
                  <h3 className="banner-title">Women</h3>{/* End .banner-title */}
                  <h4 className="banner-subtitle">18 Products</h4>{/* End .banner-subtitle */}
                  <a href="#" className="banner-link">Shop Now</a>
                </div>{/* End .banner-content */}
              </div>{/* End .banner */}
            </div>{/* End .col-sm-6 col-lg-12 */}
            <div className="col-sm-6 col-lg-12">
              <div className="banner banner-cat banner-link-anim">
                <a href="#">
                  <img src="assets/images/category/grid/banner-3.jpg" alt="Banner" />
                </a>
                <div className="banner-content">
                  <h3 className="banner-title">Men</h3>{/* End .banner-title */}
                  <h4 className="banner-subtitle">12 Products</h4>{/* End .banner-subtitle */}
                  <a href="#" className="banner-link">Shop Now</a>
                </div>{/* End .banner-content */}
              </div>{/* End .banner */}
            </div>{/* End .col-sm-6 col-lg-12 */}
          </div>{/* End .row */}
        </div>{/* End .col-lg-6 */}
      </div>{/* End .row */}
      <hr className="mb-4" />
      <h2 className="title text-center mb-3">Grid Badge Style</h2>{/* End .title mb-2 */}
      <div className="row ">
        <div className="col-md-6">
          <div className="banner banner-cat banner-badge">
            <a href="#">
              <img src="assets/images/category/grid2/banner-1.jpg" alt="Banner" />
            </a>
            <a className="banner-link" href="#">
              <h3 className="banner-title">Accessories</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">8 Products</h4>{/* End .banner-subtitle */}
              <span className="banner-link-text">Shop Now</span>
            </a>{/* End .banner-link */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <div className="banner banner-cat banner-badge">
            <a href="#">
              <img src="assets/images/category/grid2/banner-2.jpg" alt="Banner" />
            </a>
            <a className="banner-link" href="#">
              <h3 className="banner-title">Women</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">15 Products</h4>{/* End .banner-subtitle */}
              <span className="banner-link-text">Shop Now</span>
            </a>{/* End .banner-link */}
          </div>{/* End .banner */}
          <div className="banner banner-cat banner-badge">
            <a href="#">
              <img src="assets/images/category/grid2/banner-3.jpg" alt="Banner" />
            </a>
            <a className="banner-link" href="#">
              <h3 className="banner-title">Men</h3>{/* End .banner-title */}
              <h4 className="banner-subtitle">12 Products</h4>{/* End .banner-subtitle */}
              <span className="banner-link-text">Shop Now</span>
            </a>{/* End .banner-link */}
          </div>{/* End .banner */}
        </div>{/* End .col-md-6 */}
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
</main>{/*
*/}

    </div>
  )
}

export default ProductCategory
