import React from 'react'

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
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="elements-list.html">Elements</a></li>
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
              <a href="single.html">
                <img src="assets/images/blog/listing/post-1.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
          </div>{/* End .col-md-4 */}
          <div className="col-md-8">
            <div className="entry-body">
              <div className="entry-meta">
                <span className="entry-author">
                  by <a href="#">John Doe</a>
                </span>
                <span className="meta-separator">|</span>
                <a href="#">Nov 22, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">2 Comments</a>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Cras ornare tristique elit.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Lifestyle</a>,
                <a href="#">Shopping</a>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas ... </p>
                <a href="single.html" className="read-more">Continue Reading</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </div>{/* End .col-md-8 */}
        </div>{/* End .row */}
      </article>{/* End .entry */}
      <article className="entry entry-list">
        <div className="row align-items-center">
          <div className="col-md-4">
            <figure className="entry-media entry-video">
              <a href="single.html">
                <img src="assets/images/blog/listing/post-2.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
          </div>{/* End .col-md-4 */}
          <div className="col-md-8">
            <div className="entry-body">
              <div className="entry-meta">
                <span className="entry-author">
                  by <a href="#">John Doe</a>
                </span>
                <span className="meta-separator">|</span>
                <a href="#">Nov 20, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">3 Comments</a>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Facilisis aliquam porttitor mauris sit  amet orci.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Lifestyle</a>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui ... </p>
                <a href="single.html" className="read-more">Continue Reading</a>
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
              <a href="single.html">
                <img src="assets/images/blog/post-1.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                by <a href="#">John Doe</a>, <a href="#">Nov 22, 2018</a>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Sed adipiscing ornare.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh ... </p>
                <a href="single.html" className="read-more">Read More</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <a href="single.html">
                <img src="assets/images/blog/post-2.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                by <a href="#">John Doe</a>, <a href="#">Nov 22, 2018</a>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Aliquam tincidunt mauris.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh ... </p>
                <a href="single.html" className="read-more">Read More</a>
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
              <a href="single.html">
                <img src="assets/images/blog/3cols/post-1.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <a href="#">Nov 22, 2018</a>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Sed adipiscing ornare.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nunc tortor eu nisi ...</p>
                <a href="single.html" className="read-more">Read More</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-4 */}
        <div className="col-sm-6 col-md-4">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <a href="single.html">
                <img src="assets/images/blog/3cols/post-2.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <a href="#">Nov 22, 2018</a>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Aliquam tincidunt mauris.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra ... </p>
                <a href="single.html" className="read-more">Read More</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-4 */}
        <div className="col-sm-6 col-md-4">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <a href="single.html">
                <img src="assets/images/blog/3cols/post-3.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <a href="#">Nov 22, 2018</a>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Nunc dignissim risus.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Sed pretium, ligula sollicitudin laoreet viverra tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis ... </p>
                <a href="single.html" className="read-more">Read More</a>
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
              <a href="single.html">
                <img src="assets/images/blog/4cols/post-1.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <a href="#">Nov 22, 2018</a>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Sed adipiscing ornare.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id ... </p>
                <a href="single.html" className="read-more">Read More</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-lg-3 */}
        <div className="col-sm-6 col-lg-3">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <a href="single.html">
                <img src="assets/images/blog/4cols/post-2.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <a href="#">Nov 22, 2018</a>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Aliquam tincidunt mauris.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc ...</p> 
                <a href="single.html" className="read-more">Read More</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-lg-3 */}
        <div className="col-sm-6 col-lg-3">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <a href="single.html">
                <img src="assets/images/blog/4cols/post-3.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <a href="#">Nov 22, 2018</a>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Nunc dignissim risus.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi ... </p>
                <a href="single.html" className="read-more">Read More</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-lg-3 */}
        <div className="col-sm-6 col-lg-3">
          <article className="entry entry-grid">
            <figure className="entry-media">
              <a href="single.html">
                <img src="assets/images/blog/4cols/post-4.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body text-center">
              <div className="entry-meta">
                <a href="#">Nov 22, 2018</a>, 0 Comments
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Quisque a lectus.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-content">
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero ...</p> <a href="single.html" className="read-more">Read More</a>
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
              <a href="single.html">
                <img src="assets/images/blog/mask/grid/post-1.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 22, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">2 Comments</a>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Cras ornare tristique elit.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Lifestyle</a>,
                <a href="#">Shopping</a>
              </div>{/* End .entry-cats */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-4 */}
        <div className="col-sm-6 col-md-4">
          <article className="entry entry-mask">
            <figure className="entry-media entry-video">
              <a href="single.html">
                <img src="assets/images/blog/mask/grid/post-2.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 21, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">0 Comments</a>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Vivamus vestibulum ntulla necante.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Lifestyle</a>
              </div>{/* End .entry-cats */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .col-md-4 */}
        <div className="col-sm-6 col-md-4">
          <article className="entry entry-mask">
            <figure className="entry-media entry-gallery">
              <a href="single.html">
                <img src="assets/images/blog/mask/grid/post-3.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 18, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">3 Comments</a>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Utaliquam sollicitudin leo.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Fashion</a>,
                <a href="#">Lifestyle</a>
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

export default BlogPost
