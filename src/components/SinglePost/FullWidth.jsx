import React from 'react'
import { Link } from "react-router-dom";
const FullWidth = () => {
  return (
    <div>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
              <li className="breadcrumb-item"><Link to="#">Blog</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Fullwidth</li>
            </ol>
          </div>
        </nav>

        <div className="page-content">
          {/* Blog Main Content */}
          <figure className="entry-media">
            <img src="assets/images/blog/single/fullwidth/1.jpg" alt="image desc" />
          </figure>

          <div className="container">
            <article className="entry single-entry entry-fullwidth">
              <div className="row">
                {/* Main Article Content */}
                <div className="col-lg-11">
                  <div className="entry-body">
                    {/* Article Meta Data */}
                    <div className="entry-meta">
                      <span className="entry-author">
                        by <Link to="#">John Doe</Link>
                      </span>
                      <span className="meta-separator">|</span>
                      <Link to="#">Nov 22, 2018</Link>
                      <span className="meta-separator">|</span>
                      <Link to="#">2 Comments</Link>
                    </div>

                    <h2 className="entry-title entry-title-big">
                      Fusce pellentesque suscipit nibh.
                    </h2>

                    <div className="entry-cats">
                      in <Link to="#">Travel</Link>
                    </div>

                    <div className="entry-content editor-content">
                      {/* Article Content */}
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
                      <img src="assets/images/blog/single/fullwidth/2.jpg" alt="image" />
                      <blockquote>
                        <p>“ Sed egestas, ante et vulputate volutpat, eros pede semper est...”</p>
                      </blockquote>
                    </div>

                    {/* Tags and Social Icons */}
                    <div className="entry-footer row no-gutters">
                      <div className="col">
                        <div className="entry-tags">
                          <span>Tags:</span> <Link to="#">photography</Link> <Link to="#">style</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="col-lg-1 order-lg-first mb-2 mb-lg-0">
                  <div className="sticky-content">
                    <div className="social-icons social-icons-colored social-icons-vertical">
                      <span className="social-label">SHARE:</span>
                      <Link to="#" className="social-icon social-facebook" title="Facebook"><i className="icon-facebook-f"></i></Link>
                      <Link to="#" className="social-icon social-twitter" title="Twitter"><i className="icon-twitter"></i></Link>
                      <Link to="#" className="social-icon social-pinterest" title="Pinterest"><i className="icon-pinterest"></i></Link>
                      <Link to="#" className="social-icon social-linkedin" title="Linkedin"><i className="icon-linkedin"></i></Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Section */}
              <div className="entry-author-details">
                <figure className="author-media">
                  <Link to="#">
                    <img src="assets/images/blog/single/author.jpg" alt="User name" />
                  </Link>
                </figure>
                <div className="author-body">
                  <h4><Link to="#">John Doe</Link></h4>
                  <p>Praesent dapibus, neque id cursus faucibus...</p>
                </div>
              </div>
            </article>

            {/* Navigation and Related Posts */}
            <nav className="pager-nav" aria-label="Page navigation">
              <Link className="pager-link pager-link-prev" href="#" aria-label="Previous">
                Previous Post <span className="pager-link-title">Cras iaculis ultricies nulla</span>
              </Link>
              <Link className="pager-link pager-link-next" href="#" aria-label="Next">
                Next Post <span className="pager-link-title">Praesent placerat risus</span>
              </Link>
            </nav>
            
            {/* Related Posts */}
            <div className="related-posts">
              <h3 className="title">Related Posts</h3>
              {/* Carousel Component */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FullWidth;
