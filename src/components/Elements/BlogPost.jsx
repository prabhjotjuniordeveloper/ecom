import React from 'react'
import { Link } from "react-router-dom";
const BlogPost = () => {
  return (
    <div>
      
     <main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Blog Posts<span>Elements</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
        <li className="breadcrumb-item"><Link to="elements-list.html">Elements</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Blog Posts</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <h2 className="title text-center mb-2">Classic</h2>{/* End .title text-center */}
      <article className="entry entry-list">
        <div className="row align-items-center">
          <div className="col-md-4">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/listing/post-1.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
          </div>{/* End .col-md-4 */}
          <div className="col-md-8">
            <div className="entry-body">
              <div className="entry-meta">
                <span className="entry-author">
                  by <Link to="#">John Doe</Link>
                </span>
                <span className="meta-separator">|</span>
                <Link to="#">Nov 22, 2018</Link>
                <span className="meta-separator">|</span>
                <Link to="#">2 Comments</Link>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Cras ornare tristique elit.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <Link to="#">Lifestyle</Link>,
                <Link to="#">Shopping</Link>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas ... </p>
                <Link to="single.html" className="read-more">Continue Reading</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </div>{/* End .col-md-8 */}
        </div>{/* End .row */}
      </article>{/* End .entry */}
      <article className="entry entry-list">
        <div className="row align-items-center">
          <div className="col-md-4">
            <figure className="entry-media entry-video">
              <Link to="single.html">
                <img src="assets/images/blog/listing/post-2.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
          </div>{/* End .col-md-4 */}
          <div className="col-md-8">
            <div className="entry-body">
              <div className="entry-meta">
                <span className="entry-author">
                  by <Link to="#">John Doe</Link>
                </span>
                <span className="meta-separator">|</span>
                <Link to="#">Nov 20, 2018</Link>
                <span className="meta-separator">|</span>
                <Link to="#">3 Comments</Link>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Facilisis aliquam porttitor mauris sit  amet orci.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <Link to="#">Lifestyle</Link>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui ... </p>
                <Link to="single.html" className="read-more">Continue Reading</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </div>{/* End .col-md-8 */}
        </div>{/* End .row */}
      </article>{/* End .entry */}
      <hr className="mb-5" />
      <h2 className="title text-center mb-2">Grid 2 Columns</h2>{/* End .title text-center */}
      <div className="row max-col-2">
        <div className="col-md-6">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/post-1.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                by <Link to="#">John Doe</Link>, <Link to="#">Nov 22, 2018</Link>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Sed adipiscing ornare.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh ... </p>
                <Link to="single.html" className="read-more">Read More</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/post-2.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                by <Link to="#">John Doe</Link>, <Link to="#">Nov 22, 2018</Link>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Aliquam tincidunt mauris.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh ... </p>
                <Link to="single.html" className="read-more">Read More</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
      <hr className="mb-5" />
      <h2 className="title text-center mb-2">Grid 3 Columns</h2>{/* End .title text-center */}
      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/3cols/post-1.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <Link to="#">Nov 22, 2018</Link>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Sed adipiscing ornare.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nunc tortor eu nisi ...</p>
                <Link to="single.html" className="read-more">Read More</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-4 */}
        <div className="col-sm-6 col-md-4">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/3cols/post-2.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <Link to="#">Nov 22, 2018</Link>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Aliquam tincidunt mauris.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra ... </p>
                <Link to="single.html" className="read-more">Read More</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-4 */}
        <div className="col-sm-6 col-md-4">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/3cols/post-3.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <Link to="#">Nov 22, 2018</Link>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Nunc dignissim risus.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Sed pretium, ligula sollicitudin laoreet viverra tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis ... </p>
                <Link to="single.html" className="read-more">Read More</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-4 */}
      </div>{/* End .row */}
      <hr className="mb-5" />
      <h2 className="title text-center mb-2">Grid 4 Columns</h2>{/* End .title text-center */}
      <div className="row justify-content-center">
        <div className="col-sm-6 col-lg-3">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/4cols/post-1.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <Link to="#">Nov 22, 2018</Link>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Sed adipiscing ornare.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id ... </p>
                <Link to="single.html" className="read-more">Read More</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-lg-3 */}
        <div className="col-sm-6 col-lg-3">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/4cols/post-2.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <Link to="#">Nov 22, 2018</Link>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Aliquam tincidunt mauris.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc ...</p> 
                <Link to="single.html" className="read-more">Read More</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-lg-3 */}
        <div className="col-sm-6 col-lg-3">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/4cols/post-3.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <Link to="#">Nov 22, 2018</Link>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Nunc dignissim risus.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi ... </p>
                <Link to="single.html" className="read-more">Read More</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-lg-3 */}
        <div className="col-sm-6 col-lg-3">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/4cols/post-4.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <Link to="#">Nov 22, 2018</Link>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Quisque a lectus.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero ...</p> <Link to="single.html" className="read-more">Read More</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-lg-3 */}
      </div>{/* End .row */}
      <hr className="mb-5" />
      <h2 className="title text-center mb-2">Grid 3 Columns <span className="title-separator">/</span> Mask</h2>{/* End .title text-center */}
      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4">
          <article className="entry entry-mask">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/mask/grid/post-1.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <Link to="#">Nov 22, 2018</Link>
                <span className="meta-separator">|</span>
                <Link to="#">2 Comments</Link>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Cras ornare tristique elit.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <Link to="#">Lifestyle</Link>,
                <Link to="#">Shopping</Link>
              </div>{/* End .entry-cats */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-4 */}
        <div className="col-sm-6 col-md-4">
          <article className="entry entry-mask">
            <figure className="entry-media entry-video">
              <Link to="single.html">
                <img src="assets/images/blog/mask/grid/post-2.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <Link to="#">Nov 21, 2018</Link>
                <span className="meta-separator">|</span>
                <Link to="#">0 Comments</Link>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Vivamus vestibulum ntulla necante.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <Link to="#">Lifestyle</Link>
              </div>{/* End .entry-cats */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-4 */}
        <div className="col-sm-6 col-md-4">
          <article className="entry entry-mask">
            <figure className="entry-media entry-gallery">
              <Link to="single.html">
                <img src="assets/images/blog/mask/grid/post-3.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <Link to="#">Nov 18, 2018</Link>
                <span className="meta-separator">|</span>
                <Link to="#">3 Comments</Link>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Utaliquam sollicitudin leo.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <Link to="#">Fashion</Link>,
                <Link to="#">Lifestyle</Link>
              </div>{/* End .entry-cats */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-4 */}
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
</main>{/* End .main */}

    </div>
  )
}

export default BlogPost
