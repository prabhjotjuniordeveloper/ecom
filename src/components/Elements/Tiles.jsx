import React from 'react'
import { Link } from "react-router-dom";
const Tiles = () => {
  return (
    <div>
      
   <main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Titles<span>Elements</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
        <li className="breadcrumb-item"><Link to="elements-list.html">Elements</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Titles</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <h2 className="title">Simple title</h2>{/* End .title */}
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
      <hr className="mt-4 mb-4" />
      <div className="heading">
        <h2 className="title">Simple title <span className="title-separator">/</span> Subtitle</h2>{/* End .title */}
        <p className="title-desc">Donec consectetuer ligula vulputate sem tristique cursus. </p>{/* End .title-desc */}
      </div>{/* End .heading */}
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
      <hr className="mt-4 mb-4" />
      <div className="heading heading-flex">
        <div className="heading-left">
          <h2 className="title">Simple title <span className="title-separator">/</span> Product Filter</h2>{/* End .title */}
        </div>{/* End .heading-left */}
        <div className="heading-right">
          <ul className="nav nav-pills justify-content-center" role="tablist">
            <li className="nav-item">
              <Link className="nav-link active" href="#" data-toggle="tab" role="tab" aria-selected="true">All Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" data-toggle="tab" role="tab" aria-selected="false">Women</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" data-toggle="tab" role="tab" aria-selected="false">Men</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" data-toggle="tab" role="tab" aria-selected="false">Accessories</Link>
            </li>
          </ul>
        </div>{/* End .heading-right */}
      </div>{/* End .heading */}
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
      <hr className="mt-4 mb-4" />
      <div className="heading heading-flex align-items-start">
        <div className="heading-left">
          <h2 className="title">Simple title <span className="title-separator">/</span> Subtitle <span className="title-separator">/</span> Product Filter</h2>{/* End .title */}
          <p className="title-desc">Donec consectetuer ligula vulputate sem tristique cursus. </p>{/* End .title-desc */}
        </div>{/* End .heading-left */}
        <div className="heading-right">
          <ul className="nav nav-pills justify-content-center" role="tablist">
            <li className="nav-item">
              <Link className="nav-link active" href="#" data-toggle="tab" role="tab" aria-selected="true">All Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" data-toggle="tab" role="tab" aria-selected="false">Women</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" data-toggle="tab" role="tab" aria-selected="false">Men</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" data-toggle="tab" role="tab" aria-selected="false">Accessories</Link>
            </li>
          </ul>
        </div>{/* End .heading-right */}
      </div>{/* End .heading */}
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
      <hr className="mt-4 mb-4" />
      <div className="heading heading-flex">
        <div className="heading-left">
          <h2 className="title">Simple title <span className="title-separator">/</span> Link</h2>{/* End .title */}
        </div>{/* End .heading-left */}
        <div className="heading-right">
          <Link to="#" className="title-link">Click here to view <i className="icon-long-arrow-right" /></Link>
        </div>{/* End .heading-right */}
      </div>{/* End .heading */}
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
      <hr className="mt-4 mb-4" />
      <div className="heading heading-flex">
        <div className="heading-left">
          <h2 className="title">Simple title <span className="title-separator">/</span> Substitle <span className="title-separator">/</span> Link</h2>{/* End .title */}
          <p className="title-desc">Donec consectetuer ligula vulputate sem tristique cursus. </p>{/* End .title-desc */}
        </div>{/* End .heading-left */}
        <div className="heading-right">
          <Link to="#" className="title-link link-underline">Click here to view <i className="icon-long-arrow-right" /></Link>
        </div>{/* End .heading-right */}
      </div>{/* End .heading */}
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
      <hr className="mt-4 mb-4" />
      <div className="text-center">
        <h2 className="title">Centered title</h2>{/* End .title */}
        <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
      </div>{/* End .text-center */}
      <hr className="mt-4 mb-4" />
      <div className="heading heading-center">
        <div className="heading-left">
          <h2 className="title">Centered title <span className="title-separator">/</span> Product Filter</h2>{/* End .title */}
        </div>{/* End .heading-left */}
        <div className="heading-right">
          <ul className="nav nav-pills justify-content-center" role="tablist">
            <li className="nav-item">
              <Link className="nav-link active" href="#" data-toggle="tab" role="tab" aria-selected="true">All Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" data-toggle="tab" role="tab" aria-selected="false">Women</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" data-toggle="tab" role="tab" aria-selected="false">Men</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" data-toggle="tab" role="tab" aria-selected="false">Accessories</Link>
            </li>
          </ul>
        </div>{/* End .heading-right */}
      </div>{/* End .heading */}
      <p className="text-center">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
      <hr className="mt-4 mb-4" />
      <h2 className="title-sm">Small Title</h2>{/* End .title */}
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
      <hr className="mt-4 mb-4" />
      <div className="heading">
        <p className="title-desc mb-1">Quisque a lectus.</p>{/* End .title-desc */}
        <h2 className="title-sm">Small title <span className="title-separator">/</span> Subtitle</h2>{/* End .title */}
      </div>{/* End .heading */}
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
      <hr className="mt-4 mb-4" />
      <div className="text-center">
        <h2 className="title-sm">Centered Small Title</h2>{/* End .title */}
        <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
      </div>{/* End .text-center */}
      <hr className="mt-4 mb-4" />
      <div className="heading text-center">
        <p className="title-desc mb-1">Quisque a lectus.</p>{/* End .title-desc */}
        <h2 className="title-sm">Centered Small title <span className="title-separator">/</span> Subtitle</h2>{/* End .title */}
      </div>{/* End .heading */}
      <p className="text-center">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
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

export default Tiles
