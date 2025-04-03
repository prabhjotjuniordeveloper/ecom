import React from 'react'
import { Link } from "react-router-dom";

const BlogGrid = () => {
  return (
    <div>
      
      <main class="main">
        	<div class="page-header text-center" style={{"background-image": "url('assets/images/page-header-bg.jpg')"}}>
        		<div class="container">
        			<h1 class="page-title">Blog Grid With Sidebar<span>Blog</span></h1>
        		</div>
        	</div>
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-3">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="index.html">Home</Link></li>
                        <li class="breadcrumb-item"><Link to="#">Blog</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Grid With Sidebar</li>
                    </ol>
                </div>
            </nav>

            <div class="page-content">
                <div class="container">
                	<div class="row">
                		<div class="col-lg-9">
                            <div class="entry-container max-col-2" data-layout="fitRows">
                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <Link to="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-1.jpg" alt="image desc"/>
                                            </Link>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <Link to="#">John Doe</Link>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">Nov 22, 2018</Link>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">2 Comments</Link>
                                            </div>

                                            <h2 class="entry-title">
                                                <Link to="single.html">Cras ornare tristique elit.</Link>
                                            </h2>

                                            <div class="entry-cats">
                                                in <Link to="#">Lifestyle</Link>,
                                                <Link to="#">Shopping</Link>
                                            </div>

                                            <div class="entry-content">
                                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas vulputate ...</p>
                                                <Link to="single.html" class="read-more">Continue Reading</Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media entry-video">
                                            <Link to="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-2.jpg" alt="image desc"/>
                                            </Link>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <Link to="#">John Doe</Link>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">Nov 21, 2018</Link>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">0 Comments</Link>
                                            </div>

                                            <h2 class="entry-title">
                                                <Link to="single.html">Vivamus vestibulum ntulla necante.</Link>
                                            </h2>
                                            <div class="entry-cats">
                                                in <Link to="#">Lifestyle</Link>
                                            </div>
                                            <div class="entry-content">
                                                <p>Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulumvolutpat, lacus a ultrices sagittis, mi neque euismod dui ...</p>
                                                <Link to="single.html" class="read-more">Continue Reading</Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <div class="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                                                <Link to="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-3.jpg" alt="image desc"/>
                                                </Link>
                                                <Link to="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-4.jpg" alt="image desc"/>
                                                </Link>
                                            </div>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <Link to="#">John Doe</Link>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">Nov 18, 2018</Link>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">3 Comments</Link>
                                            </div>

                                            <h2 class="entry-title">
                                                <Link to="single.html">Utaliquam sollicitudin leo.</Link>
                                            </h2>

                                            <div class="entry-cats">
                                                in <Link to="#">Fashion</Link>,
                                                <Link to="#">Lifestyle</Link>
                                            </div>

                                            <div class="entry-content">
                                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas ... </p>
                                                <Link to="single.html" class="read-more">Continue Reading</Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <Link to="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-4.jpg" alt="image desc"/>
                                            </Link>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <Link to="#">Jane Doe</Link>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">Nov 15, 2018</Link>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">4 Comments</Link>
                                            </div>

                                            <h2 class="entry-title">
                                                <Link to="single.html">Fusce pellentesque suscipit.</Link>
                                            </h2>
                                            <div class="entry-cats">
                                                in <Link to="#">Travel</Link>
                                            </div>

                                            <div class="entry-content">
                                                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat ... </p>
                                                <Link to="single.html" class="read-more">Continue Reading</Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <Link to="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-5.jpg" alt="image desc"/>
                                            </Link>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <Link to="#">John Doe</Link>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">Nov 11, 2018</Link>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">2 Comments</Link>
                                            </div>

                                            <h2 class="entry-title">
                                                <Link to="single.html">Aenean dignissim pellente squefelis.</Link>
                                            </h2>

                                            <div class="entry-cats">
                                                in <Link to="#">Travel</Link>,
                                                <Link to="#">Hobbies</Link>
                                            </div>

                                            <div class="entry-content">
                                                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus ... </p>
                                                <Link to="single.html" class="read-more">Continue Reading</Link>
                                            </div>
                                        </div>
                                    </article>
                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <Link to="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-6.jpg" alt="image desc"/>
                                            </Link>
                                        </figure>
                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <Link to="#">John Doe</Link>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">Nov 10, 2018</Link>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">4 Comments</Link>
                                            </div>
                                            <h2 class="entry-title">
                                                <Link to="single.html">Quisque volutpat mattiseros.</Link>
                                            </h2>
                                            <div class="entry-cats">
                                                in <Link to="#">Hobbies</Link>
                                            </div>

                                            <div class="entry-content">
                                                <p>Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus. Donec consectetuer ... </p>
                                                <Link to="single.html" class="read-more">Continue Reading</Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <div class="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                                                <Link to="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-7.jpg" alt="image desc"/>
                                                </Link>
                                                <Link to="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-6.jpg" alt="image desc"/>
                                                </Link>
                                            </div>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <Link to="#">John Doe</Link>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">Nov 11, 2018</Link>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">3 Comments</Link>
                                            </div>

                                            <h2 class="entry-title">
                                                <Link to="single.html">Utaliquam sollicitudin leo.</Link>
                                            </h2>

                                            <div class="entry-cats">
                                                in <Link to="#">Travel</Link>
                                            </div>

                                            <div class="entry-content">
                                                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat ... </p>
                                                <Link to="single.html" class="read-more">Continue Reading</Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <Link to="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-8.jpg" alt="image desc"/>
                                            </Link>
                                        </figure>
                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <Link to="#">John Doe</Link>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">Nov 08, 2018</Link>
                                                <span class="meta-separator">|</span>
                                                <Link to="#">0 Comments</Link>
                                            </div>
                                            <h2 class="entry-title">
                                                <Link to="single.html">Quisque a lectus. </Link>
                                            </h2>

                                            <div class="entry-cats">
                                                in <Link to="#">Fashion</Link>
                                            </div>

                                            <div class="entry-content">
                                                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus ... </p>
                                                <Link to="single.html" class="read-more">Continue Reading</Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <nav aria-label="Page navigation">
                                <ul class="pagination">
                                    <li class="page-item disabled">
                                        <Link class="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
                                            <span aria-hidden="true"><i class="icon-long-arrow-left"></i></span>Prev
                                        </Link>
                                    </li>
                                    <li class="page-item active" aria-current="page"><Link class="page-link" href="#">1</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">2</Link></li>
                                    <li class="page-item">
                                        <Link class="page-link page-link-next" href="#" aria-label="Next">
                                            Next <span aria-hidden="true"><i class="icon-long-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                		</div>
                		</div>

                        <aside class="col-lg-3">
                			<div class="sidebar">
                				<div class="widget widget-search">
                                    <h3 class="widget-title">Search</h3>

                                    <form action="#">
                                        <label for="ws" class="sr-only">Search in blog</label>
                                        <input type="search" class="form-control" name="ws" id="ws" placeholder="Search in blog" required/>
                                        <button type="submit" class="btn"><i class="icon-search"></i><span class="sr-only">Search</span></button>
                                    </form>
                				</div>

                                <div class="widget widget-cats">
                                    <h3 class="widget-title">Categories</h3>

                                    <ul>
                                        <li><Link to="#">Lifestyle<span>3</span></Link></li>
                                        <li><Link to="#">Shopping<span>3</span></Link></li>
                                        <li><Link to="#">Fashion<span>1</span></Link></li>
                                        <li><Link to="#">Travel<span>3</span></Link></li>
                                        <li><Link to="#">Hobbies<span>2</span></Link></li>
                                    </ul>
                                </div>

                                <div class="widget">
                                    <h3 class="widget-title">Popular Posts</h3>

                                    <ul class="posts-list">
                                        <li>
                                            <figure>
                                                <Link to="#">
                                                    <img src="assets/images/blog/sidebar/post-1.jpg" alt="post"/>
                                                </Link>
                                            </figure>

                                            <div>
                                                <span>Nov 22, 2018</span>
                                                <h4><Link to="#">Aliquam tincidunt mauris eurisus.</Link></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <figure>
                                                <Link to="#">
                                                    <img src="assets/images/blog/sidebar/post-2.jpg" alt="post"/>
                                                </Link>
                                            </figure>

                                            <div>
                                                <span>Nov 19, 2018</span>
                                                <h4><Link to="#">Cras ornare tristique elit.</Link></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <figure>
                                                <Link to="#">
                                                    <img src="assets/images/blog/sidebar/post-3.jpg" alt="post"/>
                                                </Link>
                                            </figure>

                                            <div>
                                                <span>Nov 12, 2018</span>
                                                <h4><Link to="#">Vivamus vestibulum ntulla nec ante.</Link></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <figure>
                                                <Link to="#">
                                                    <img src="assets/images/blog/sidebar/post-4.jpg" alt="post"/>
                                                </Link>
                                            </figure>

                                            <div>
                                                <span>Nov 25, 2018</span>
                                                <h4><Link to="#">Donec quis dui at dolor  tempor interdum.</Link></h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="widget widget-banner-sidebar">
                                    <div class="banner-sidebar-title">ad box 280 x 280</div>
                                    
                                    <div class="banner-sidebar banner-overlay">
                                        <Link to="#">
                                            <img src="assets/images/blog/sidebar/banner.jpg" alt="banner"/>
                                        </Link>
                                    </div>
                                </div>

                                <div class="widget">
                                    <h3 class="widget-title">Browse Tags</h3>

                                    <div class="tagcloud">
                                        <Link to="#">fashion</Link>
                                        <Link to="#">style</Link>
                                        <Link to="#">women</Link>
                                        <Link to="#">photography</Link>
                                        <Link to="#">travel</Link>
                                        <Link to="#">shopping</Link>
                                        <Link to="#">hobbies</Link>
                                    </div>
                                </div>

                                <div class="widget widget-text">
                                    <h3 class="widget-title">About Blog</h3>

                                    <div class="widget-text-content">
                                        <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, pulvinar nunc sapien ornare nisl.</p>
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

export default BlogGrid
