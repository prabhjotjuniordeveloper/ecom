import React from 'react'
import { Link } from "react-router-dom";
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
                <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                <li className="breadcrumb-item"><Link to="#">Blog</Link></li>
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
                            <Link to="single.html">
                                <img src="assets/images/blog/post-1.jpg" alt="image desc"/>
                            </Link>
                        </figure>
                        <div className="entry-body">
                            <div className="entry-meta">
                                <span className="entry-author">
                                    by <Link to="#">John Doe</Link>
                                </span>
                                <span className="meta-separator">|</span>
                                <Link to="#">Nov 22, 2018</Link>
                                <span className="meta-separator">|</span>
                                <Link to="#">2 Comments</Link>
                            </div>
                            <h2 className="entry-title">
                                <Link to="single.html">Cras ornare tristique elit.</Link>
                            </h2>
                            <div className="entry-cats">
                                in <Link to="#">Lifestyle</Link>,
                                <Link to="#">Shopping</Link>
                            </div>
                            <div className="entry-content">
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue.</p>
                                <Link to="single.html" className="read-more">Continue Reading</Link>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media entry-video">
                            <Link to="single.html">
                                <img src="assets/images/blog/post-2.jpg" alt="image desc"/>
                            </Link>
                        </figure>
                        <div className="entry-body">
                            <div className="entry-meta">
                                <span className="entry-author">
                                    by <Link to="#">John Doe</Link>
                                </span>
                                <span className="meta-separator">|</span>
                                <Link to="#">Nov 21, 2018</Link>
                                <span className="meta-separator">|</span>
                                <Link to="#">0 Comments</Link>
                            </div>
                            <h2 className="entry-title">
                                <Link to="single.html">Vivamus vestibulum ntulla necante.</Link>
                            </h2>
                            <div className="entry-cats">
                                in <Link to="#">Lifestyle</Link>
                            </div>
                            <div className="entry-content">
                                <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum eturna.</p>
                                <Link to="single.html" className="read-more">Continue Reading</Link>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                                <Link to="single.html">
                                    <img src="assets/images/blog/post-3.jpg" alt="image desc"/>
                                </Link>
                                <Link to="single.html">
                                    <img src="assets/images/blog/post-2.jpg" alt="image desc"/>
                                </Link>
                            </div>
                        </figure>
                        <div className="entry-body">
                            <div className="entry-meta">
                                <span className="entry-author">
                                    by <Link to="#">John Doe</Link>
                                </span>
                                <span className="meta-separator">|</span>
                                <Link to="#">Nov 18, 2018</Link>
                                <span className="meta-separator">|</span>
                                <Link to="#">3 Comments</Link>
                            </div>
                            <h2 className="entry-title">
                                <Link to="single.html">Utaliquam sollicitudin leo.</Link>
                            </h2>
                            <div className="entry-cats">
                                in <Link to="#">Fashion</Link>,
                                <Link to="#">Lifestyle</Link>
                            </div>
                            <div className="entry-content">
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. </p>
                                <Link to="single.html" className="read-more">Continue Reading</Link>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <Link to="single.html">
                                <img src="assets/images/blog/post-4.jpg" alt="image desc"/>
                            </Link>
                        </figure>
                        <div className="entry-body">
                            <div className="entry-meta">
                                <span className="entry-author">
                                    by <Link to="#">Jane Doe</Link>
                                </span>
                                <span className="meta-separator">|</span>
                                <Link to="#">Nov 15, 2018</Link>
                                <span className="meta-separator">|</span>
                                <Link to="#">4 Comments</Link>
                            </div>
                            <h2 className="entry-title">
                                <Link to="single.html">Fusce pellentesque suscipit.</Link>
                            </h2>
                            <div className="entry-cats">
                                in <Link to="#">Travel</Link>
                            </div>
                            <div className="entry-content">
                                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                                <Link to="single.html" className="read-more">Continue Reading</Link>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <Link to="single.html">
                                <img src="assets/images/blog/post-5.jpg" alt="image desc"/>
                            </Link>
                        </figure>
                        <div className="entry-body">
                            <div className="entry-meta">
                                <span className="entry-author">
                                    by <Link to="#">John Doe</Link>
                                </span>
                                <span className="meta-separator">|</span>
                                <Link to="#">Nov 11, 2018</Link>
                                <span className="meta-separator">|</span>
                                <Link to="#">2 Comments</Link>
                            </div>
                            <h2 className="entry-title">
                                <Link to="single.html">Aenean dignissim pellentesque felis.</Link>
                            </h2>
                            <div className="entry-cats">
                                in <Link to="#">Travel</Link>,
                                <Link to="#">Hobbies</Link>
                            </div>
                            <div className="entry-content">
                                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                                <Link to="single.html" className="read-more">Continue Reading</Link>
                            </div>
                        </div>
                    </article>

                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <Link className="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
                                    <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                                </Link>
                            </li>
                            <li className="page-item active" aria-current="page"><Link className="page-link" href="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                            <li className="page-item">
                                <Link className="page-link page-link-next" href="#" aria-label="Next">
                                    Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                                </Link>
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
                                <li><Link to="#">Lifestyle<span>3</span></Link></li>
                                <li><Link to="#">Shopping<span>3</span></Link></li>
                                <li><Link to="#">Fashion<span>1</span></Link></li>
                                <li><Link to="#">Travel<span>3</span></Link></li>
                                <li><Link to="#">Hobbies<span>2</span></Link></li>
                            </ul>
                        </div>

                        <div className="widget">
                            <h3 className="widget-title">Popular Posts</h3>
                            <ul className="posts-list">
                                <li>
                                    <figure>
                                        <Link to="single.html">
                                            <img src="assets/images/blog/sidebar/post-1.jpg" alt="post"/>
                                        </Link>
                                    </figure>
                                    <div>
                                        <span>Nov 22, 2018</span>
                                        <h4><Link to="single.html">Cras ornare tristique elit.</Link></h4>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <Link to="single.html">
                                            <img src="assets/images/blog/sidebar/post-2.jpg" alt="post"/>
                                        </Link>
                                    </figure>
                                    <div>
                                        <span>Nov 21, 2018</span>
                                        <h4><Link to="single.html">Vivamus vestibulum ntulla.</Link></h4>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <Link to="single.html">
                                            <img src="assets/images/blog/sidebar/post-3.jpg" alt="post"/>
                                        </Link>
                                    </figure>
                                    <div>
                                        <span>Nov 18, 2018</span>
                                        <h4><Link to="single.html">Utaliquam sollicitudin leo.</Link></h4>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="widget widget-banner-sidebar">
                            <div className="banner-sidebar-title">ad box 280 x 280</div>
                            <div className="banner-sidebar banner-overlay">
                                <Link to="#">
                                    <img src="assets/images/blog/sidebar/banner.jpg" alt="banner"/>
                                </Link>
                            </div>
                        </div>

                        <div className="widget">
                            <h3 className="widget-title">Browse Tags</h3>
                            <div className="tagcloud">
                                <Link to="#">fashion</Link>
                                <Link to="#">style</Link>
                                <Link to="#">women</Link>
                                <Link to="#">photography</Link>
                                <Link to="#">travel</Link>
                                <Link to="#">shopping</Link>
                                <Link to="#">hobbies</Link>
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
