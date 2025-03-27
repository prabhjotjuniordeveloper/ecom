import React from 'react'

const FullWidth = () => {
  return (
    <div>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Blog</a></li>
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
                        by <a href="#">John Doe</a>
                      </span>
                      <span className="meta-separator">|</span>
                      <a href="#">Nov 22, 2018</a>
                      <span className="meta-separator">|</span>
                      <a href="#">2 Comments</a>
                    </div>

                    <h2 className="entry-title entry-title-big">
                      Fusce pellentesque suscipit nibh.
                    </h2>

                    <div className="entry-cats">
                      in <a href="#">Travel</a>
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
                          <span>Tags:</span> <a href="#">photography</a> <a href="#">style</a>
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
                      <a href="#" className="social-icon social-facebook" title="Facebook"><i className="icon-facebook-f"></i></a>
                      <a href="#" className="social-icon social-twitter" title="Twitter"><i className="icon-twitter"></i></a>
                      <a href="#" className="social-icon social-pinterest" title="Pinterest"><i className="icon-pinterest"></i></a>
                      <a href="#" className="social-icon social-linkedin" title="Linkedin"><i className="icon-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Section */}
              <div className="entry-author-details">
                <figure className="author-media">
                  <a href="#">
                    <img src="assets/images/blog/single/author.jpg" alt="User name" />
                  </a>
                </figure>
                <div className="author-body">
                  <h4><a href="#">John Doe</a></h4>
                  <p>Praesent dapibus, neque id cursus faucibus...</p>
                </div>
              </div>
            </article>

            {/* Navigation and Related Posts */}
            <nav className="pager-nav" aria-label="Page navigation">
              <a className="pager-link pager-link-prev" href="#" aria-label="Previous">
                Previous Post <span className="pager-link-title">Cras iaculis ultricies nulla</span>
              </a>
              <a className="pager-link pager-link-next" href="#" aria-label="Next">
                Next Post <span className="pager-link-title">Praesent placerat risus</span>
              </a>
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
