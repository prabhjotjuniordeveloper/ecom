import React from 'react'
import { Link } from "react-router-dom";
const AccordionsElements = () => {
  return (
    <div>
    <main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Accordions<span>Elements</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
        <li className="breadcrumb-item"><Link to="elements-list.html">Elements</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Accordions</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <h2 className="title mb-3">Simple Accordions</h2>{/* End .title */}
      <div className="row">
        <div className="col-md-6">
          <div className="accordion" id="accordion-1">
            <div className="card">
              <div className="card-header" id="heading-1">
                <h2 className="card-title">
                  <Link role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                    Cras ornare tristique elit.
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse-1" className="collapse show" aria-labelledby="heading-1" data-parent="#accordion-1">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card">
              <div className="card-header" id="heading-2">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                    Vivamus vestibulum ntulla
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse-2" className="collapse" aria-labelledby="heading-2" data-parent="#accordion-1">
                <div className="card-body">
                  Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card">
              <div className="card-header" id="heading-3">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                    Praesent placerat risus
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse-3" className="collapse" aria-labelledby="heading-3" data-parent="#accordion-1">
                <div className="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
          </div>{/* End .accordion */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <div className="accordion accordion-plus" id="accordion-2">
            <div className="card">
              <div className="card-header" id="heading2-1">
                <h2 className="card-title">
                  <Link role="button" data-toggle="collapse" href="#collapse2-1" aria-expanded="true" aria-controls="collapse2-1">
                    Cras ornare tristique elit.
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse2-1" className="collapse show" aria-labelledby="heading2-1" data-parent="#accordion-2">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card">
              <div className="card-header" id="heading2-2">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse2-2" aria-expanded="false" aria-controls="collapse2-2">
                    Vivamus vestibulum ntulla
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse2-2" className="collapse" aria-labelledby="heading2-2" data-parent="#accordion-2">
                <div className="card-body">
                  Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card">
              <div className="card-header" id="heading2-3">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse2-3" aria-expanded="false" aria-controls="collapse2-3">
                    Praesent placerat risus
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse2-3" className="collapse" aria-labelledby="heading2-3" data-parent="#accordion-2">
                <div className="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
          </div>{/* End .accordion */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
      <hr className="mb-4" />
      <h2 className="title mb-3">Accordion with Icons</h2>{/* End .title */}
      <div className="row">
        <div className="col-md-6">
          <div className="accordion accordion-icon" id="accordion-3">
            <div className="card">
              <div className="card-header" id="heading3-1">
                <h2 className="card-title">
                  <Link role="button" data-toggle="collapse" href="#collapse3-1" aria-expanded="true" aria-controls="collapse3-1">
                    <i className="icon-star-o" />Cras ornare tristique elit.
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse3-1" className="collapse show" aria-labelledby="heading3-1" data-parent="#accordion-3">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card">
              <div className="card-header" id="heading3-2">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse3-2" aria-expanded="false" aria-controls="collapse3-2">
                    <i className="icon-info-circle" />Vivamus vestibulum ntulla
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse3-2" className="collapse" aria-labelledby="heading3-2" data-parent="#accordion-3">
                <div className="card-body">
                  Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card">
              <div className="card-header" id="heading3-3">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse3-3" aria-expanded="false" aria-controls="collapse3-3">
                    <i className="icon-heart-o" />Praesent placerat risus
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse3-3" className="collapse" aria-labelledby="heading3-3" data-parent="#accordion-3">
                <div className="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
          </div>{/* End .accordion */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <div className="accordion accordion-icon" id="accordion-4">
            <div className="card card-box bg-light">
              <div className="card-header" id="heading4-1">
                <h2 className="card-title">
                  <Link role="button" data-toggle="collapse" href="#collapse4-1" aria-expanded="true" aria-controls="collapse4-1">
                    <i className="icon-star-o" />Cras ornare tristique elit.
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse4-1" className="collapse show" aria-labelledby="heading4-1" data-parent="#accordion-4">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card card-box bg-light">
              <div className="card-header" id="heading4-2">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse4-2" aria-expanded="false" aria-controls="collapse4-2">
                    <i className="icon-info-circle" />Vivamus vestibulum ntulla
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse4-2" className="collapse" aria-labelledby="heading4-2" data-parent="#accordion-4">
                <div className="card-body">
                  Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card card-box bg-light">
              <div className="card-header" id="heading4-3">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse4-3" aria-expanded="false" aria-controls="collapse4-3">
                    <i className="icon-heart-o" />Praesent placerat risus
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse4-3" className="collapse" aria-labelledby="heading4-3" data-parent="#accordion-4">
                <div className="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
          </div>{/* End .accordion */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
      <hr className="mb-4" />
      <h2 className="title mb-3">Accordions on Background</h2>{/* End .title */}
      <div className="row">
        <div className="col-md-6">
          <div className="accordion accordion-rounded" id="accordion-5">
            <div className="card card-box card-sm bg-light">
              <div className="card-header" id="heading5-1">
                <h2 className="card-title">
                  <Link role="button" data-toggle="collapse" href="#collapse5-1" aria-expanded="true" aria-controls="collapse5-1">
                    Cras ornare tristique elit.
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse5-1" className="collapse show" aria-labelledby="heading5-1" data-parent="#accordion-5">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card card-box card-sm bg-light">
              <div className="card-header" id="heading5-2">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse5-2" aria-expanded="false" aria-controls="collapse5-2">
                    Vivamus vestibulum ntulla
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse5-2" className="collapse" aria-labelledby="heading5-2" data-parent="#accordion-5">
                <div className="card-body">
                  Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card card-box card-sm bg-light">
              <div className="card-header" id="heading5-3">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse5-3" aria-expanded="false" aria-controls="collapse5-3">
                    Praesent placerat risus
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse5-3" className="collapse" aria-labelledby="heading5-3" data-parent="#accordion-5">
                <div className="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
          </div>{/* End .accordion */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <div className="accordion accordion-rounded accordion-plus" id="accordion-6">
            <div className="card card-box card-sm bg-white">
              <div className="card-header" id="heading6-1">
                <h2 className="card-title">
                  <Link role="button" data-toggle="collapse" href="#collapse6-1" aria-expanded="true" aria-controls="collapse6-1">
                    Cras ornare tristique elit.
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse6-1" className="collapse show" aria-labelledby="heading6-1" data-parent="#accordion-6">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card card-box card-sm bg-white">
              <div className="card-header" id="heading6-2">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse6-2" aria-expanded="false" aria-controls="collapse6-2">
                    Vivamus vestibulum ntulla
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse6-2" className="collapse" aria-labelledby="heading6-2" data-parent="#accordion-6">
                <div className="card-body">
                  Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
            <div className="card card-box card-sm bg-white">
              <div className="card-header" id="heading6-3">
                <h2 className="card-title">
                  <Link className="collapsed" role="button" data-toggle="collapse" href="#collapse6-3" aria-expanded="false" aria-controls="collapse6-3">
                    Praesent placerat risus
                  </Link>
                </h2>
              </div>{/* End .card-header */}
              <div id="collapse6-3" className="collapse" aria-labelledby="heading6-3" data-parent="#accordion-6">
                <div className="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </div>{/* End .card-body */}
              </div>{/* End .collapse */}
            </div>{/* End .card */}
          </div>{/* End .accordion */}
        </div>{/* End .col-md-6 */}
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

export default AccordionsElements
