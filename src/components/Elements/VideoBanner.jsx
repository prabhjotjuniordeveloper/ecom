import React from 'react'
import { Link } from "react-router-dom";
const VideoBanner = () => {
  return (
    <div>

<main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Video Banners<span>Elements</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
        <li className="breadcrumb-item"><Link to="elements-list.html">Elements</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Video Banners</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <h2 className="title mb-3 text-center">Fullwidth Banner</h2>{/* End .text-center */}
    </div>{/* End .container */}
    <div className="video-banner video-banner-bg bg-image text-center" style={{backgroundImage: 'url(assets/images/video/bg-1.jpg)'}}>
      <div className="container">
        <h3 className="video-banner-title h1 text-white"><span>New Video</span><strong>Womens New Arrivals</strong></h3>{/* End .video-banner-title */}
        <Link to="https://www.youtube.com/watch?v=vBPgmASQ1A0" className="btn-video btn-iframe"><i className="icon-play" /></Link>
      </div>{/* End .container */}
    </div>{/* End .video-banner bg-image */}
    <div className="container">
      <hr className="mt-5 mb-4" />
      <h2 className="title mb-3 text-center">Video Banner with Description</h2>{/* End .text-center */}
    </div>{/* End .container */}
    <div className="video-banner video-banner-poster text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h3 className="video-banner-title h3"><span className="text-primary">New Video</span>Womens New Arrivals</h3>{/* End .video-banner-title */}
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper ...</p>
          </div>{/* End .col-md-6 */}
          <div className="col-md-6">
            <div className="video-poster">
              <img src="assets/images/video/poster-1.jpg" alt="poster" />
              <div className="video-poster-content">
                <Link to="https://www.youtube.com/watch?v=vBPgmASQ1A0" className="btn-video btn-iframe"><i className="icon-play" /></Link>
              </div>{/* End .video-poster-content */}	
            </div>{/* End .video-poster */}
          </div>{/* End .col-md-6 */}
        </div>{/* End .row */}
      </div>{/* End .container */}
    </div>{/* End .video-banner */}
    <div className="container">
      <hr className="mt-5 mb-4" />
      <h2 className="title mb-3 text-center">Video Banner with Background</h2>{/* End .text-center */}
    </div>{/* End .container */}
    <div className="video-banner bg-image text-center pt-8 pb-8" style={{backgroundImage: 'url(assets/images/video/bg-2.jpg)'}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <div className="video-poster">
              <img src="assets/images/video/poster-2.jpg" alt="poster" />
              <div className="video-poster-content">
                <h3 className="h4 video-poster-title text-white">Womens New Arrivals</h3>{/* End .video-poster-title */}
                <Link to="https://www.youtube.com/watch?v=vBPgmASQ1A0" className="btn-video btn-iframe"><i className="icon-play" /></Link>
              </div>{/* End .video-poster-content */}	
            </div>{/* End .video-poster */}
          </div>{/* End .col-sm-10 offset-sm-1 col-md-10 offset-md-2 */}
        </div>{/* End .row */}
      </div>{/* End .container */}
    </div>{/* End .video-banner bg-image */}
    <div className="container">
      <hr className="mt-5 mb-4" />
      <h2 className="title mb-3 text-center">Deal Video Banner</h2>{/* End .text-center */}
    </div>{/* End .container */}
    <div className="video-banner bg-light pt-5 pb-5">
      <div className="container align-items-center">
        <div className="video-banner-box bg-white">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="video-box-content">
                <h3 className="video-banner-title h1"><span className="text-primary">New Video</span><strong>Deal Banner</strong></h3>{/* End .video-banner-title */}
                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                <Link to="#" className="btn btn-outline-primary"><span>Click Here</span><i className="icon-long-arrow-right" /></Link>
              </div>{/* End .video-box-content */}
            </div>{/* End .col-md-6 */}
            <div className="col-md-6">
              <div className="video-poster">
                <img src="assets/images/video/poster-3.jpg" alt="poster" />
                <div className="video-poster-content">
                  <Link to="https://www.youtube.com/watch?v=vBPgmASQ1A0" className="btn-video btn-iframe"><i className="icon-play" /></Link>
                </div>{/* End .video-poster-content */}	
              </div>{/* End .video-poster */}
            </div>{/* End .col-md-6 */}
          </div>{/* End .row */}
        </div>{/* End .video-banner-box */}
      </div>{/* End .container */}
    </div>{/* End .video-banner bg-image */}
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

export default VideoBanner
