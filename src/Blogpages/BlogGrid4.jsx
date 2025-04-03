import React from 'react'
import { Link } from "react-router-dom";
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
        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
        <li className="breadcrumb-item"><Link to="#">Blog</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Grid 4 Columns</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <nav className="blog-nav">
        <ul className="menu-cat entry-filter justify-content-center">
          <li className="active"><Link to="#" data-filter="*">All Blog Posts<span>8</span></Link></li>
          <li><Link to="#" data-filter=".lifestyle">Lifestyle<span>3</span></Link></li>
          <li><Link to="#" data-filter=".shopping">Shopping<span>1</span></Link></li>
          <li><Link to="#" data-filter=".fashion">Fashion<span>2</span></Link></li>
          <li><Link to="#" data-filter=".travel">Travel<span>3</span></Link></li>
          <li><Link to="#" data-filter=".hobbies">Hobbies<span>2</span></Link></li>
        </ul>{/* End .blog-menu */}
      </nav>{/* End .blog-nav */}
      <div className="entry-container max-col-4" data-layout="fitRows">
        <div className="entry-item lifestyle shopping col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/grid/4cols/post-1.jpg" alt="image desc" />
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
              <div className="entry-content">
                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. </p>
                <Link to="single.html" className="read-more">Continue Reading</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item lifestyle col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media entry-video">
              <Link to="single.html">
                <img src="assets/images/blog/grid/4cols/post-2.jpg" alt="image desc" />
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
              <div className="entry-content">
                <p>Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulumvo lutpat, lacus a ultrices sagittis ... </p>
                <Link to="single.html" className="read-more">Continue Reading</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item lifestyle fashion col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                <Link to="single.html">
                  <img src="assets/images/blog/grid/4cols/post-3.jpg" alt="image desc" />
                </Link>
                <Link to="single.html">
                  <img src="assets/images/blog/grid/4cols/post-4.jpg" alt="image desc" />
                </Link>
              </div>{/* End .owl-carousel */}
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
              <div className="entry-content">
                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh ... </p>
                <Link to="single.html" className="read-more">Continue Reading</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/grid/4cols/post-4.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <Link to="#">Nov 15, 2018</Link>
                <span className="meta-separator">|</span>
                <Link to="#">4 Comments</Link>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Fusce pellentesque suscipit.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <Link to="#">Travel</Link>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros ...</p>
                <Link to="single.html" className="read-more">Continue Reading</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item travel hobbies col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/grid/4cols/post-5.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <Link to="#">Nov 11, 2018</Link>
                <span className="meta-separator">|</span>
                <Link to="#">2 Comments</Link>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Aenean dignissim pellente squefelis.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <Link to="#">Travel</Link>,
                <Link to="#">Hobbies</Link>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus ... </p>
                <Link to="single.html" className="read-more">Continue Reading</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item hobbies col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/grid/4cols/post-6.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <Link to="#">Nov 10, 2018</Link>
                <span className="meta-separator">|</span>
                <Link to="#">4 Comments</Link>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Quisque volutpat mattiseros.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <Link to="#">Hobbies</Link>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis ...</p>
                <Link to="single.html" className="read-more">Continue Reading</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                <Link to="single.html">
                  <img src="assets/images/blog/grid/4cols/post-7.jpg" alt="image desc" />
                </Link>
                <Link to="single.html">
                  <img src="assets/images/blog/grid/4cols/post-6.jpg" alt="image desc" />
                </Link>
              </div>{/* End .owl-carousel */}
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <Link to="#">Nov 11, 2018</Link>
                <span className="meta-separator">|</span>
                <Link to="#">3 Comments</Link>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Utaliquam sollicitudin leo.</Link>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <Link to="#">Travel</Link>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros ...</p>
                <Link to="single.html" className="read-more">Continue Reading</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
        <div className="entry-item fashion col-sm-6 col-md-4 col-lg-3">
          <article className="entry entry-grid text-center">
            <figure className="entry-media">
              <Link to="single.html">
                <img src="assets/images/blog/grid/4cols/post-8.jpg" alt="image desc" />
              </Link>
            </figure>{/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <Link to="#">Nov 08, 2018</Link>
                <span className="meta-separator">|</span>
                <Link to="#">0 Comments</Link>
              </div>{/* End .entry-meta */}
              <h2 className="entry-title">
                <Link to="single.html">Quisque a lectus. </Link>
              </h2>{/* End .entry-title */}
              <div className="entry-cats">
                in <Link to="#">Fashion</Link>
              </div>{/* End .entry-cats */}
              <div className="entry-content">
                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus ... </p>
                <Link to="single.html" className="read-more">Continue Reading</Link>
              </div>{/* End .entry-content */}
            </div>{/* End .entry-body */}
          </article>{/* End .entry */}
        </div>{/* End .entry-item */}
      </div>{/* End .entry-container */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <Link className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
              <span aria-hidden="true"><i className="icon-long-arrow-left" /></span>Prev
            </Link>
          </li>
          <li className="page-item active" aria-current="page"><Link className="page-link" href="#">1</Link></li>
          <li className="page-item"><Link className="page-link" href="#">2</Link></li>
          <li className="page-item">
            <Link className="page-link page-link-next" href="#" aria-label="Next">
              Next <span aria-hidden="true"><i className="icon-long-arrow-right" /></span>
            </Link>
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
