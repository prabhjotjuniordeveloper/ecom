import React from 'react'

const ButtonsElemens = () => {
  return (
    <div>
      
    <main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Buttons<span>Elements</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="elements-list.html">Elements</a></li>
        <li className="breadcrumb-item active" aria-current="page">Buttons</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <h2 className="title">Default Style</h2>{/* End .title */}
      <div className="row">
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-primary btn-rounded">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-primary">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-primary btn-round">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
      </div>{/* End .row */}
      <hr className="mt-3 mb-4" />
      <h2 className="title">Border Style</h2>{/* End .title */}
      <div className="row">
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-outline-primary btn-rounded">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-outline-primary">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-outline-primary btn-round">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-outline-dark btn-rounded">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-outline-dark">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-outline-dark btn-round">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
      </div>{/* End .row */}
      <hr className="mt-3 mb-4" />
      <h2 className="title">Button With Icon Style</h2>{/* End .title */}
      <div className="row">
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-primary btn-rounded"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-primary"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-primary btn-round"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-primary btn-rounded"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-primary"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-primary btn-round"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
      </div>{/* End .row */}
      <hr className="mt-3 mb-4" />
      <h2 className="title">Border Style With Icons</h2>{/* End .title */}
      <div className="row">
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-outline-primary btn-rounded"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-outline-primary"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-outline-primary btn-round"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-outline-primary btn-rounded"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-outline-primary"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-outline-primary btn-round"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
      </div>{/* End .row */}
      <div className="row">
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-outline-dark btn-rounded"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-outline-dark"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-outline-dark btn-round"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-outline-dark btn-rounded"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-outline-dark"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-outline-dark btn-round"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
      </div>{/* End .row */}
      <hr className="mt-3 mb-4" />
      <h2 className="title">Buttons With Shadow Style</h2>{/* End .title */}
      <div className="row">
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-primary btn-rounded btn-shadow">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-primary btn-shadow">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-primary btn-round btn-shadow">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
      </div>{/* End .row */}
      <div className="row">
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-primary btn-rounded btn-shadow"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-primary btn-shadow"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-primary btn-round btn-shadow"><span>Button text</span><i className="icon-long-arrow-right" /></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-primary btn-rounded btn-shadow"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-primary btn-shadow"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-primary btn-round btn-shadow"><i className="icon-long-arrow-right" /><span>Button text</span></a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
      </div>{/* End .row */}
      <hr className="mt-3 mb-4" />
      <h2 className="title">Simple Button Styles</h2>{/* End .title */}
      <div className="row">
        <div className="col-12">
          <a href="#" className="btn btn-link">Button Text</a>
          <a href="#" className="btn btn-link"><span>Button Text</span><i className="icon-long-arrow-right" /></a>
          <a href="#" className="btn btn-link"><i className="icon-long-arrow-right" /><span>Button Text</span></a>
          <a href="#" className="btn btn-link btn-link-dark">Button Text</a>
          <a href="#" className="btn btn-link btn-link-dark"><span>Button Text</span><i className="icon-long-arrow-right" /></a>
          <a href="#" className="btn btn-link btn-link-dark"><i className="icon-long-arrow-right" /><span>Button Text</span></a>
        </div>{/* End .col-12 */}
      </div>{/* End .row */}
      <hr className="mt-3 mb-1" />
    </div>{/* End .container */}
  </div>{/* End .page-content */}
  <div className="container">
    <h2 className="title mb-3">Button on Backgrounds</h2>{/* End .title */}
  </div>{/* End .container */}
  <div className="bg-image bg-overlay pt-5 pb-6 mb-5" style={{backgroundImage: 'url(assets/images/backgrounds/bg-1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-primary btn-rounded">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-primary">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-primary btn-round">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
      </div>{/* End .row */}
      <div className="mb-2" />{/* End .mb-2 */}
      <div className="row">
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-outline-primary btn-rounded">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-outline-primary">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-outline-primary btn-round">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Rounded Corners Style</span>
            <a href="#" className="btn btn-outline-dark btn-rounded">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Square Style</span>
            <a href="#" className="btn btn-outline-dark">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
        <div className="col-6 col-lg-4 col-xl-2">
          <div className="btn-wrap">
            <span>Round Style</span>
            <a href="#" className="btn btn-outline-dark btn-round">Button text</a>
          </div>{/* End .btn-wrap */}
        </div>{/* End .col-md-4 col-lg-2 */}
      </div>{/* End .row */}
      <div className="mb-2" />{/* End .mb-2 */}
      <div className="row">
        <div className="col-12">
          <a href="#" className="btn btn-link">Button Text</a>
          <a href="#" className="btn btn-link"><span>Button Text</span><i className="icon-long-arrow-right" /></a>
          <a href="#" className="btn btn-link"><i className="icon-long-arrow-right" /><span>Button Text</span></a>
          <a href="#" className="btn btn-link btn-link-dark">Button Text</a>
          <a href="#" className="btn btn-link btn-link-dark"><span>Button Text</span><i className="icon-long-arrow-right" /></a>
          <a href="#" className="btn btn-link btn-link-dark"><i className="icon-long-arrow-right" /><span>Button Text</span></a>
        </div>{/* End .col-12 */}
      </div>{/* End .row */}
    </div>{/* End .container */}
  </div>{/* End .bg-image bg-overlay */}
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
</main>{/* End .main */}


    </div>
  )
}

export default ButtonsElemens
