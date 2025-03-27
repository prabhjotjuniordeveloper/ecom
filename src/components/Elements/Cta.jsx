import React from 'react'

const Cta = () => {
  return (
    <div>
      

   <div>
  <main className="main">
    <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
      <div className="container">
        <h1 className="page-title">Call to Action<span>Elements</span></h1>
      </div>{/* End .container */}
    </div>{/* End .page-header */}
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item"><a href="elements-list.html">Elements</a></li>
          <li className="breadcrumb-item active" aria-current="page">Call to Action</li>
        </ol>
      </div>{/* End .container */}
    </nav>{/* End .breadcrumb-nav */}
    <div className="page-content pb-0">
      <div className="container">
        <h2 className="title text-center mb-5">Newsletter Banner <span className="title-separator">/</span> With Background</h2>{/* End .title */}
        <div className="cta cta-horizontal cta-horizontal-box bg-image mb-5" style={{backgroundImage: 'url(assets/images/backgrounds/cta/bg-1.jpg)', backgroundPosition: 'center right'}}>
          <div className="row align-items-center">
            <div className="col-lg-4 col-xl-3 offset-xl-1">
              <h3 className="cta-title">Join Our Newsletter</h3>{/* End .cta-title */}
              <p className="cta-desc">Lorem ipsum dolor sit amet adipiscing.</p>{/* End .cta-desc */}
            </div>{/* End .col-xl-3 */}
            <div className="col-lg-8 col-xl-7">
              <form action="#">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                  <div className="input-group-append">
                    <button className="btn btn-primary btn-rounded" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right" /></button>
                  </div>{/* .End .input-group-append */}
                </div>{/* .End .input-group */}
              </form>
            </div>{/* End .col-xl-7 */}
          </div>{/* End .row */}
        </div>{/* End .cta */}
        <hr className="mb-5" />
        <h2 className="title text-center mb-5">Newsletter Banner <span className="title-separator">/</span> With Dark Background</h2>{/* End .title */}
      </div>{/* End .container */}
      <div className="cta bg-image bg-dark pt-6 pb-7 mb-5" style={{backgroundImage: 'url(assets/images/backgrounds/bg-1.jpg)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6">
              <div className="cta-heading text-center">
                <h3 className="cta-title text-white">Join Our Newsletter</h3>{/* End .cta-title */}
                <p className="cta-desc text-light">Lorem ipsum dolor sit amet adipiscing.</p>{/* End .cta-desc */}
              </div>{/* End .text-center */}
              <form action="#">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right" /></button>
                  </div>{/* .End .input-group-append */}
                </div>{/* .End .input-group */}
              </form>
            </div>{/* End .col-sm-10 col-md-8 col-lg-6 */}
          </div>{/* End .row */}
        </div>{/* End .container */}
      </div>{/* End .cta */}
      <hr className="mb-5" />
      <div className="container">
        <h2 className="title text-center mb-5">Newsletter Banner <span className="title-separator">/</span> Without Background</h2>{/* End .title */}
        <div className="cta cta-horizontal mb-3">
          <div className="row align-items-center">
            <div className="col-lg-4 col-xl-3 offset-xl-1">
              <h3 className="cta-title">Join Our Newsletter</h3>{/* End .cta-title */}
              <p className="cta-desc">Lorem ipsum dolor sit amet adipiscing.</p>{/* End .cta-desc */}
            </div>{/* End .col-xl-3 */}
            <div className="col-lg-8 col-xl-7">
              <form action="#">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                  <div className="input-group-append">
                    <button className="btn btn-primary btn-rounded" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right" /></button>
                  </div>{/* .End .input-group-append */}
                </div>{/* .End .input-group */}
              </form>
            </div>{/* End .col-xl-7 */}
          </div>{/* End .row */}
        </div>{/* End .cta */}
        <hr className="mb-5" />
        <h2 className="title text-center mb-5">Call to Action <span className="title-separator">/</span> Newsletter Banner <span className="title-separator">/</span> With Background</h2>{/* End .title */}
        <div className="cta cta-separator bg-image mb-5" style={{backgroundImage: 'url(assets/images/backgrounds/cta/bg-5.jpg)', backgroundPosition: 'center right'}}>
          <div className="row">
            <div className="col-lg-6">
              <div className="cta-wrapper cta-text text-center">
                <h3 className="cta-title">Morbi in sem quis dui placerat pellentesque felis.</h3>{/* End .cta-title */}
                <p className="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>{/* End .cta-desc */}
                <a href="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right" /></a>
              </div>{/* End .cta-wrapper */}
            </div>{/* End .col-lg-6 */}
            <div className="col-lg-6">
              <div className="cta-wrapper text-center">
                <h3 className="cta-title">Join Our Newsletter</h3>{/* End .cta-title */}
                <p className="cta-desc">Lorem ipsum dolor sit amet adipiscing.</p>{/* End .cta-desc */}
                <form action="#">
                  <input type="email" className="form-control form-control-rounded" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                  <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right" /></button>
                </form>
              </div>{/* End .cta-wrapper */}
            </div>{/* End .col-lg-6 */}
          </div>{/* End .row */}
        </div>{/* End .cta */}
        <hr className="mt-3 mb-5" />
        <h2 className="title text-center mb-5">Call to Action <span className="title-separator">/</span> Newsletter Banner <span className="title-separator">/</span> No Background</h2>{/* End .title */}
        <div className="cta cta-separator mb-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="cta-wrapper cta-text text-center">
                <h3 className="cta-title">Morbi in sem quis dui placerat pellentesque felis.</h3>{/* End .cta-title */}
                <p className="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>{/* End .cta-desc */}
                <a href="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right" /></a>
              </div>{/* End .cta-wrapper */}
            </div>{/* End .col-lg-6 */}
            <div className="col-lg-6">
              <div className="cta-wrapper text-center">
                <h3 className="cta-title">Join Our Newsletter</h3>{/* End .cta-title */}
                <p className="cta-desc">Lorem ipsum dolor sit amet adipiscing.</p>{/* End .cta-desc */}
                <form action="#">
                  <input type="email" className="form-control form-control-rounded" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                  <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right" /></button>
                </form>
              </div>{/* End .cta-wrapper */}
            </div>{/* End .col-lg-6 */}
          </div>{/* End .row */}
        </div>{/* End .cta */}
        <hr className="mt-3 mb-5" />
        <h2 className="title text-center mb-5">Call to Action <span className="title-separator">/</span> Newsletter Banner <span className="title-separator">/</span> With Background</h2>{/* End .title */}
        <div className="row">
          <div className="col-lg-6">
            <div className="cta bg-image mb-3" style={{backgroundImage: 'url(assets/images/backgrounds/cta/bg-3.jpg)', backgroundPosition: 'center right'}}>
              <div className="cta-wrapper cta-text text-center">
                <h3 className="cta-title">Morbi in sem quis dui placerat pellentesque felis.</h3>{/* End .cta-title */}
                <p className="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>{/* End .cta-desc */}
                <a href="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right" /></a>
              </div>{/* End .cta-wrapper */}
            </div>{/* End .cta */}
          </div>{/* End .col-lg-6 */}
          <div className="col-lg-6">
            <div className="cta bg-image mb-3" style={{backgroundImage: 'url(assets/images/backgrounds/cta/bg-4.jpg)', backgroundPosition: 'center right'}}>
              <div className="cta-wrapper text-center">
                <h3 className="cta-title">Join Our Newsletter</h3>{/* End .cta-title */}
                <p className="cta-desc">Lorem ipsum dolor sit amet adipiscing.</p>{/* End .cta-desc */}
                <form action="#">
                  <input type="email" className="form-control form-control-rounded" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                  <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right" /></button>
                </form>
              </div>{/* End .cta-wrapper */}
            </div>{/* End .cta */}
          </div>{/* End .col-lg-6 */}
        </div>{/* End .row */}
        <hr className="mt-3 mb-5" />
      </div>{/* End .container */}
      <div className="container">
        <h2 className="title text-center mb-5">Sale Banner  <span className="title-separator">/</span> With Background</h2>{/* End .title */}
        <div className="cta cta-border mb-5">
          <div className="row justify-content-center">
            <div className="col-md-11 col-xl-10">
              <div className="cta-content">
                <div className="cta-heading">
                  <h3 className="cta-title text-right">Vivamus vestibulum <br />ntulla nec ante</h3>{/* End .cta-title */}
                </div>{/* End .cta-heading */}
                <div className="cta-text">
                  <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                </div>{/* End .cta-text */}
                <a href="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right" /></a>
              </div>{/* End .cta-content */}
            </div>{/* End .col-xl-7 */}
          </div>{/* End .row */}
        </div>{/* End .cta */}
        <hr className="mb-5" />
        <h2 className="title text-center mb-5">Sale Banner <span className="title-separator">/</span> With Background</h2>{/* End .title */}
        <div className="cta bg-image pt-6 pb-7 mb-5" style={{backgroundImage: 'url(assets/images/backgrounds/cta/bg-2.jpg)', backgroundPosition: 'center right'}}>
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6">
              <div className="cta-text text-center">
                <h3 className="cta-title">Morbi in sem quis dui placerat felis.</h3>{/* End .cta-title */}
                <p className="cta-desc">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>{/* End .cta-desc */}
                <a href="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right" /></a>
              </div>{/* End .cta-text */}
            </div>{/* End .col-sm-10 col-md-8 col-lg-6 */}
          </div>{/* End .row */}
        </div>{/* End .cta */}
        <hr className="mb-5" />
        <h2 className="title text-center mb-5">Sale Banner  <span className="title-separator">/</span> With Dark Background</h2>{/* End .title */}
      </div>{/* End .container */}
      <div className="cta bg-image bg-dark pt-6 pb-7" style={{backgroundImage: 'url(assets/images/backgrounds/bg-1.jpg)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6">
              <div className="cta-text text-center">
                <h3 className="cta-title text-white">Morbi in sem quis dui placerat felis.</h3>{/* End .cta-title */}
                <p className="cta-desc text-light">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>{/* End .cta-desc */}
                <a href="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right" /></a>
              </div>{/* End .cta-text */}
            </div>{/* End .col-sm-10 col-md-8 col-lg-6 */}
          </div>{/* End .row */}
        </div>{/* End .container */}
      </div>{/* End .cta */}
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
  </main>&lt;
</div>



    </div>
  )
}

export default Cta
