import React from 'react'

const BlogGrid4 = () => {
  return (
    <div>
       <main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Blog Grid 4 Columns<span>Blog</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Blog</a></li>
        <li className="breadcrumb-item active" aria-current="page">Grid 4 Columns</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <nav className="blog-nav">
        <ul className="menu-cat entry-filter justify-content-center">
          <li className="active"><a href="#" data-filter="*">All Blog Posts<span>8</span></a></li>
          <li><a href="#" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
          <li><a href="#" data-filter=".shopping">Shopping<span>1</span></a></li>
          <li><a href="#" data-filter=".fashion">Fashion<span>2</span></a></li>
          <li><a href="#" data-filter=".travel">Travel<span>3</span></a></li>
          <li><a href="#" data-filter=".hobbies">Hobbies<span>2</span></a></li>
        </ul>{/* End .blog-menu */}
      </nav>{/* End .blog-nav */}
      <div className="entry-container max-col-4" data-layout="fitRows">
        <div className="entry-item lifestyle shopping col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <a href="single.html">
                <img src="assets/images/blog/grid/4cols/post-1.jpg" alt="image desc" />
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
              <div className="entry-content">
                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. </p>
                <a href="single.html" className="read-more">Continue Reading</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item lifestyle col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media entry-video">
              <a href="single.html">
                <img src="assets/images/blog/grid/4cols/post-2.jpg" alt="image desc" />
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
              <div className="entry-content">
                <p>Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulumvo lutpat, lacus a ultrices sagittis ... </p>
                <a href="single.html" className="read-more">Continue Reading</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item lifestyle fashion col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                <a href="single.html">
                  <img src="assets/images/blog/grid/4cols/post-3.jpg" alt="image desc" />
                </a>
                <a href="single.html">
                  <img src="assets/images/blog/grid/4cols/post-4.jpg" alt="image desc" />
                </a>
              </div>{/* End .owl-carousel */}
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
              <div className="entry-content">
                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh ... </p>
                <a href="single.html" className="read-more">Continue Reading</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <a href="single.html">
                <img src="assets/images/blog/grid/4cols/post-4.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 15, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">4 Comments</a>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Fusce pellentesque suscipit.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Travel</a>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros ...</p>
                <a href="single.html" className="read-more">Continue Reading</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item travel hobbies col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <a href="single.html">
                <img src="assets/images/blog/grid/4cols/post-5.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 11, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">2 Comments</a>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Aenean dignissim pellente squefelis.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Travel</a>,
                <a href="#">Hobbies</a>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus ... </p>
                <a href="single.html" className="read-more">Continue Reading</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item hobbies col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <a href="single.html">
                <img src="assets/images/blog/grid/4cols/post-6.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 10, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">4 Comments</a>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Quisque volutpat mattiseros.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Hobbies</a>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis ...</p>
                <a href="single.html" className="read-more">Continue Reading</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                <a href="single.html">
                  <img src="assets/images/blog/grid/4cols/post-7.jpg" alt="image desc" />
                </a>
                <a href="single.html">
                  <img src="assets/images/blog/grid/4cols/post-6.jpg" alt="image desc" />
                </a>
              </div>{/* End .owl-carousel */}
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 11, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">3 Comments</a>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Utaliquam sollicitudin leo.</a>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Travel</a>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros ...</p>
                <a href="single.html" className="read-more">Continue Reading</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item fashion col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <a href="single.html">
                <img src="assets/images/blog/grid/4cols/post-8.jpg" alt="image desc" />
              </a>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 08, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">0 Comments</a>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Quisque a lectus. </a>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Fashion</a>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus ... </p>
                <a href="single.html" className="read-more">Continue Reading</a>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
      </div>{/* End .entry-container */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
              <span aria-hidden="true"><i className="icon-long-arrow-left" /></span>Prev
            </a>
          </li>
          <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item">
            <a className="page-link page-link-next" href="#" aria-label="Next">
              Next <span aria-hidden="true"><i className="icon-long-arrow-right" /></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>{/* End .container */}
  </div>{/* End .page-content */}
</main>{/* End .main */}


      
      

    </div>
  )
}

export default BlogGrid4
