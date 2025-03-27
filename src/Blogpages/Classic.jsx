import React from 'react'

const BlogPage= () => {
  return (
    <div>
      
      <main className="main">
    <div className="page-header text-center" style={{"background-image": "url('assets/images/page-header-bg.jpg')"}}>
        <div className="container">
            <h1 className="page-title">Blog Classic<span>Blog</span></h1>
        </div>
    </div>
    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Blog</a></li>
                <li className="breadcrumb-item active" aria-current="page">Classic</li>
            </ol>
        </div>
    </nav>

    <div className="page-content">
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <article className="entry">
                        <figure className="entry-media">
                            <a href="single.html">
                                <img src="assets/images/blog/post-1.jpg" alt="image desc"/>
                            </a>
                        </figure>
                        <div className="entry-body">
                            <div className="entry-meta">
                                <span className="entry-author">
                                    by <a href="#">John Doe</a>
                                </span>
                                <span className="meta-separator">|</span>
                                <a href="#">Nov 22, 2018</a>
                                <span className="meta-separator">|</span>
                                <a href="#">2 Comments</a>
                            </div>
                            <h2 className="entry-title">
                                <a href="single.html">Cras ornare tristique elit.</a>
                            </h2>
                            <div className="entry-cats">
                                in <a href="#">Lifestyle</a>,
                                <a href="#">Shopping</a>
                            </div>
                            <div className="entry-content">
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue.</p>
                                <a href="single.html" className="read-more">Continue Reading</a>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media entry-video">
                            <a href="single.html">
                                <img src="assets/images/blog/post-2.jpg" alt="image desc"/>
                            </a>
                        </figure>
                        <div className="entry-body">
                            <div className="entry-meta">
                                <span className="entry-author">
                                    by <a href="#">John Doe</a>
                                </span>
                                <span className="meta-separator">|</span>
                                <a href="#">Nov 21, 2018</a>
                                <span className="meta-separator">|</span>
                                <a href="#">0 Comments</a>
                            </div>
                            <h2 className="entry-title">
                                <a href="single.html">Vivamus vestibulum ntulla necante.</a>
                            </h2>
                            <div className="entry-cats">
                                in <a href="#">Lifestyle</a>
                            </div>
                            <div className="entry-content">
                                <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum eturna.</p>
                                <a href="single.html" className="read-more">Continue Reading</a>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                                <a href="single.html">
                                    <img src="assets/images/blog/post-3.jpg" alt="image desc"/>
                                </a>
                                <a href="single.html">
                                    <img src="assets/images/blog/post-2.jpg" alt="image desc"/>
                                </a>
                            </div>
                        </figure>
                        <div className="entry-body">
                            <div className="entry-meta">
                                <span className="entry-author">
                                    by <a href="#">John Doe</a>
                                </span>
                                <span className="meta-separator">|</span>
                                <a href="#">Nov 18, 2018</a>
                                <span className="meta-separator">|</span>
                                <a href="#">3 Comments</a>
                            </div>
                            <h2 className="entry-title">
                                <a href="single.html">Utaliquam sollicitudin leo.</a>
                            </h2>
                            <div className="entry-cats">
                                in <a href="#">Fashion</a>,
                                <a href="#">Lifestyle</a>
                            </div>
                            <div className="entry-content">
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. </p>
                                <a href="single.html" className="read-more">Continue Reading</a>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <a href="single.html">
                                <img src="assets/images/blog/post-4.jpg" alt="image desc"/>
                            </a>
                        </figure>
                        <div className="entry-body">
                            <div className="entry-meta">
                                <span className="entry-author">
                                    by <a href="#">Jane Doe</a>
                                </span>
                                <span className="meta-separator">|</span>
                                <a href="#">Nov 15, 2018</a>
                                <span className="meta-separator">|</span>
                                <a href="#">4 Comments</a>
                            </div>
                            <h2 className="entry-title">
                                <a href="single.html">Fusce pellentesque suscipit.</a>
                            </h2>
                            <div className="entry-cats">
                                in <a href="#">Travel</a>
                            </div>
                            <div className="entry-content">
                                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                                <a href="single.html" className="read-more">Continue Reading</a>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <a href="single.html">
                                <img src="assets/images/blog/post-5.jpg" alt="image desc"/>
                            </a>
                        </figure>
                        <div className="entry-body">
                            <div className="entry-meta">
                                <span className="entry-author">
                                    by <a href="#">John Doe</a>
                                </span>
                                <span className="meta-separator">|</span>
                                <a href="#">Nov 11, 2018</a>
                                <span className="meta-separator">|</span>
                                <a href="#">2 Comments</a>
                            </div>
                            <h2 className="entry-title">
                                <a href="single.html">Aenean dignissim pellentesque felis.</a>
                            </h2>
                            <div className="entry-cats">
                                in <a href="#">Travel</a>,
                                <a href="#">Hobbies</a>
                            </div>
                            <div className="entry-content">
                                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                                <a href="single.html" className="read-more">Continue Reading</a>
                            </div>
                        </div>
                    </article>

                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
                                    <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                                </a>
                            </li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item">
                                <a className="page-link page-link-next" href="#" aria-label="Next">
                                    Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <aside className="col-lg-3">
                    <div className="sidebar">
                        <div className="widget widget-search">
                            <h3 className="widget-title">Search</h3>
                            <form action="#">
                                <label for="ws" className="sr-only">Search in blog</label>
                                <input type="search" className="form-control" name="ws" id="ws" placeholder="Search in blog" required/>
                                <button type="submit" className="btn"><i className="icon-search"></i><span className="sr-only">Search</span></button>
                            </form>
                        </div>

                        <div className="widget widget-cats">
                            <h3 className="widget-title">Categories</h3>
                            <ul>
                                <li><a href="#">Lifestyle<span>3</span></a></li>
                                <li><a href="#">Shopping<span>3</span></a></li>
                                <li><a href="#">Fashion<span>1</span></a></li>
                                <li><a href="#">Travel<span>3</span></a></li>
                                <li><a href="#">Hobbies<span>2</span></a></li>
                            </ul>
                        </div>

                        <div className="widget">
                            <h3 className="widget-title">Popular Posts</h3>
                            <ul className="posts-list">
                                <li>
                                    <figure>
                                        <a href="single.html">
                                            <img src="assets/images/blog/sidebar/post-1.jpg" alt="post"/>
                                        </a>
                                    </figure>
                                    <div>
                                        <span>Nov 22, 2018</span>
                                        <h4><a href="single.html">Cras ornare tristique elit.</a></h4>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <a href="single.html">
                                            <img src="assets/images/blog/sidebar/post-2.jpg" alt="post"/>
                                        </a>
                                    </figure>
                                    <div>
                                        <span>Nov 21, 2018</span>
                                        <h4><a href="single.html">Vivamus vestibulum ntulla.</a></h4>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <a href="single.html">
                                            <img src="assets/images/blog/sidebar/post-3.jpg" alt="post"/>
                                        </a>
                                    </figure>
                                    <div>
                                        <span>Nov 18, 2018</span>
                                        <h4><a href="single.html">Utaliquam sollicitudin leo.</a></h4>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="widget widget-banner-sidebar">
                            <div className="banner-sidebar-title">ad box 280 x 280</div>
                            <div className="banner-sidebar banner-overlay">
                                <a href="#">
                                    <img src="assets/images/blog/sidebar/banner.jpg" alt="banner"/>
                                </a>
                            </div>
                        </div>

                        <div className="widget">
                            <h3 className="widget-title">Browse Tags</h3>
                            <div className="tagcloud">
                                <a href="#">fashion</a>
                                <a href="#">style</a>
                                <a href="#">women</a>
                                <a href="#">photography</a>
                                <a href="#">travel</a>
                                <a href="#">shopping</a>
                                <a href="#">hobbies</a>
                            </div>
                        </div>

                        <div className="widget widget-text">
                            <h3 className="widget-title">About Blog</h3>
                            <div className="widget-text-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</main>

    </div>
  )
}

export default BlogPage;
