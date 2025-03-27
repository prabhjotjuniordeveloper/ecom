import React from 'react'

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
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Blog</a></li>
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
                                            <a href="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-1.jpg" alt="image desc"/>
                                            </a>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <a href="#">Nov 22, 2018</a>
                                                <span class="meta-separator">|</span>
                                                <a href="#">2 Comments</a>
                                            </div>

                                            <h2 class="entry-title">
                                                <a href="single.html">Cras ornare tristique elit.</a>
                                            </h2>

                                            <div class="entry-cats">
                                                in <a href="#">Lifestyle</a>,
                                                <a href="#">Shopping</a>
                                            </div>

                                            <div class="entry-content">
                                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas vulputate ...</p>
                                                <a href="single.html" class="read-more">Continue Reading</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media entry-video">
                                            <a href="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-2.jpg" alt="image desc"/>
                                            </a>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <a href="#">Nov 21, 2018</a>
                                                <span class="meta-separator">|</span>
                                                <a href="#">0 Comments</a>
                                            </div>

                                            <h2 class="entry-title">
                                                <a href="single.html">Vivamus vestibulum ntulla necante.</a>
                                            </h2>
                                            <div class="entry-cats">
                                                in <a href="#">Lifestyle</a>
                                            </div>
                                            <div class="entry-content">
                                                <p>Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulumvolutpat, lacus a ultrices sagittis, mi neque euismod dui ...</p>
                                                <a href="single.html" class="read-more">Continue Reading</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <div class="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                                                <a href="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-3.jpg" alt="image desc"/>
                                                </a>
                                                <a href="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-4.jpg" alt="image desc"/>
                                                </a>
                                            </div>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <a href="#">Nov 18, 2018</a>
                                                <span class="meta-separator">|</span>
                                                <a href="#">3 Comments</a>
                                            </div>

                                            <h2 class="entry-title">
                                                <a href="single.html">Utaliquam sollicitudin leo.</a>
                                            </h2>

                                            <div class="entry-cats">
                                                in <a href="#">Fashion</a>,
                                                <a href="#">Lifestyle</a>
                                            </div>

                                            <div class="entry-content">
                                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas ... </p>
                                                <a href="single.html" class="read-more">Continue Reading</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-4.jpg" alt="image desc"/>
                                            </a>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <a href="#">Jane Doe</a>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <a href="#">Nov 15, 2018</a>
                                                <span class="meta-separator">|</span>
                                                <a href="#">4 Comments</a>
                                            </div>

                                            <h2 class="entry-title">
                                                <a href="single.html">Fusce pellentesque suscipit.</a>
                                            </h2>
                                            <div class="entry-cats">
                                                in <a href="#">Travel</a>
                                            </div>

                                            <div class="entry-content">
                                                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat ... </p>
                                                <a href="single.html" class="read-more">Continue Reading</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-5.jpg" alt="image desc"/>
                                            </a>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <a href="#">Nov 11, 2018</a>
                                                <span class="meta-separator">|</span>
                                                <a href="#">2 Comments</a>
                                            </div>

                                            <h2 class="entry-title">
                                                <a href="single.html">Aenean dignissim pellente squefelis.</a>
                                            </h2>

                                            <div class="entry-cats">
                                                in <a href="#">Travel</a>,
                                                <a href="#">Hobbies</a>
                                            </div>

                                            <div class="entry-content">
                                                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus ... </p>
                                                <a href="single.html" class="read-more">Continue Reading</a>
                                            </div>
                                        </div>
                                    </article>
                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-6.jpg" alt="image desc"/>
                                            </a>
                                        </figure>
                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <a href="#">Nov 10, 2018</a>
                                                <span class="meta-separator">|</span>
                                                <a href="#">4 Comments</a>
                                            </div>
                                            <h2 class="entry-title">
                                                <a href="single.html">Quisque volutpat mattiseros.</a>
                                            </h2>
                                            <div class="entry-cats">
                                                in <a href="#">Hobbies</a>
                                            </div>

                                            <div class="entry-content">
                                                <p>Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus. Donec consectetuer ... </p>
                                                <a href="single.html" class="read-more">Continue Reading</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <div class="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                                                <a href="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-7.jpg" alt="image desc"/>
                                                </a>
                                                <a href="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-6.jpg" alt="image desc"/>
                                                </a>
                                            </div>
                                        </figure>

                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <a href="#">Nov 11, 2018</a>
                                                <span class="meta-separator">|</span>
                                                <a href="#">3 Comments</a>
                                            </div>

                                            <h2 class="entry-title">
                                                <a href="single.html">Utaliquam sollicitudin leo.</a>
                                            </h2>

                                            <div class="entry-cats">
                                                in <a href="#">Travel</a>
                                            </div>

                                            <div class="entry-content">
                                                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat ... </p>
                                                <a href="single.html" class="read-more">Continue Reading</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="entry-item col-sm-6">
                                    <article class="entry entry-grid">
                                        <figure class="entry-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/grid/3cols/post-8.jpg" alt="image desc"/>
                                            </a>
                                        </figure>
                                        <div class="entry-body">
                                            <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <a href="#">Nov 08, 2018</a>
                                                <span class="meta-separator">|</span>
                                                <a href="#">0 Comments</a>
                                            </div>
                                            <h2 class="entry-title">
                                                <a href="single.html">Quisque a lectus. </a>
                                            </h2>

                                            <div class="entry-cats">
                                                in <a href="#">Fashion</a>
                                            </div>

                                            <div class="entry-content">
                                                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus ... </p>
                                                <a href="single.html" class="read-more">Continue Reading</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <nav aria-label="Page navigation">
                                <ul class="pagination">
                                    <li class="page-item disabled">
                                        <a class="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
                                            <span aria-hidden="true"><i class="icon-long-arrow-left"></i></span>Prev
                                        </a>
                                    </li>
                                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item">
                                        <a class="page-link page-link-next" href="#" aria-label="Next">
                                            Next <span aria-hidden="true"><i class="icon-long-arrow-right"></i></span>
                                        </a>
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
                                        <li><a href="#">Lifestyle<span>3</span></a></li>
                                        <li><a href="#">Shopping<span>3</span></a></li>
                                        <li><a href="#">Fashion<span>1</span></a></li>
                                        <li><a href="#">Travel<span>3</span></a></li>
                                        <li><a href="#">Hobbies<span>2</span></a></li>
                                    </ul>
                                </div>

                                <div class="widget">
                                    <h3 class="widget-title">Popular Posts</h3>

                                    <ul class="posts-list">
                                        <li>
                                            <figure>
                                                <a href="#">
                                                    <img src="assets/images/blog/sidebar/post-1.jpg" alt="post"/>
                                                </a>
                                            </figure>

                                            <div>
                                                <span>Nov 22, 2018</span>
                                                <h4><a href="#">Aliquam tincidunt mauris eurisus.</a></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <figure>
                                                <a href="#">
                                                    <img src="assets/images/blog/sidebar/post-2.jpg" alt="post"/>
                                                </a>
                                            </figure>

                                            <div>
                                                <span>Nov 19, 2018</span>
                                                <h4><a href="#">Cras ornare tristique elit.</a></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <figure>
                                                <a href="#">
                                                    <img src="assets/images/blog/sidebar/post-3.jpg" alt="post"/>
                                                </a>
                                            </figure>

                                            <div>
                                                <span>Nov 12, 2018</span>
                                                <h4><a href="#">Vivamus vestibulum ntulla nec ante.</a></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <figure>
                                                <a href="#">
                                                    <img src="assets/images/blog/sidebar/post-4.jpg" alt="post"/>
                                                </a>
                                            </figure>

                                            <div>
                                                <span>Nov 25, 2018</span>
                                                <h4><a href="#">Donec quis dui at dolor  tempor interdum.</a></h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="widget widget-banner-sidebar">
                                    <div class="banner-sidebar-title">ad box 280 x 280</div>
                                    
                                    <div class="banner-sidebar banner-overlay">
                                        <a href="#">
                                            <img src="assets/images/blog/sidebar/banner.jpg" alt="banner"/>
                                        </a>
                                    </div>
                                </div>

                                <div class="widget">
                                    <h3 class="widget-title">Browse Tags</h3>

                                    <div class="tagcloud">
                                        <a href="#">fashion</a>
                                        <a href="#">style</a>
                                        <a href="#">women</a>
                                        <a href="#">photography</a>
                                        <a href="#">travel</a>
                                        <a href="#">shopping</a>
                                        <a href="#">hobbies</a>
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
