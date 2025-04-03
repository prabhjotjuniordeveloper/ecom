import React from 'react'
import { Link } from "react-router-dom";
const BlogMask = () => {
  return (
    <div>
      
      <main class="main">
        	<div class="page-header text-center" style={{"background-image": "url('assets/images/page-header-bg.jpg')"}}>
        		<div class="container">
        			<h1 class="page-title"><span>Blog</span></h1>
        		</div>
        	</div>
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="index.html">Home</Link></li>
                        <li class="breadcrumb-item"><Link to="#">Blog</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Mask Grid</li>
                    </ol>
                </div>
            </nav>

            <div class="page-content">
                <div class="container">
                    <nav class="blog-nav">
                        <ul class="menu-cat entry-filter justify-content-center">
                            <li class="active"><Link to="#" data-filter="*">All Blog Posts<span>9</span></Link></li>
                            <li><Link to="#" data-filter=".lifestyle">Lifestyle<span>3</span></Link></li>
                            <li><Link to="#" data-filter=".shopping">Shopping<span>1</span></Link></li>
                            <li><Link to="#" data-filter=".fashion">Fashion<span>2</span></Link></li>
                            <li><Link to="#" data-filter=".travel">Travel<span>4</span></Link></li>
                            <li><Link to="#" data-filter=".hobbies">Hobbies<span>2</span></Link></li>
                        </ul>
                    </nav>

                	<div class="entry-container" data-layout="fitRows">
                        <div class="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <Link to="single.html">
                                        <img src="assets/images/blog/mask/grid/post-1.jpg" alt="image desc"/>
                                    </Link>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
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
                                </div>
                            </article>
                        </div>

                        <div class="entry-item lifestyle col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media entry-video">
                                    <Link to="single.html">
                                        <img src="assets/images/blog/mask/grid/post-2.jpg" alt="image desc"/>
                                    </Link>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
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
                                </div>
                            </article>
                        </div>

                        <div class="entry-item lifestyle fashion col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media entry-gallery">
                                    <Link to="single.html">
                                        <img src="assets/images/blog/mask/grid/post-3.jpg" alt="image desc"/>
                                    </Link>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
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
                                </div>
                            </article>
                        </div>

                        <div class="entry-item travel col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <Link to="single.html">
                                        <img src="assets/images/blog/mask/grid/post-4.jpg" alt="image desc"/>
                                    </Link>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
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
                                </div>
                            </article>
                        </div>

                        <div class="entry-item travel hobbies col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <Link to="single.html">
                                        <img src="assets/images/blog/mask/grid/post-5.jpg" alt="image desc"/>
                                    </Link>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
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
                                </div>
                            </article>
                        </div>

                        <div class="entry-item hobbies col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <Link to="single.html">
                                        <img src="assets/images/blog/mask/grid/post-6.jpg" alt="image desc"/>
                                    </Link>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
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
                                </div>
                            </article>
                        </div>

                        <div class="entry-item travel col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media entry-gallery">
                                    <Link to="single.html">
                                        <img src="assets/images/blog/mask/grid/post-7.jpg" alt="image desc"/>
                                    </Link>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
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
                                </div>
                            </article>
                        </div>

                        <div class="entry-item fashion col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <Link to="single.html">
                                        <img src="assets/images/blog/mask/grid/post-8.jpg" alt="image desc"/>
                                    </Link>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
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
                                </div>
                            </article>
                        </div>

                        <div class="entry-item travel col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <Link to="single.html">
                                        <img src="assets/images/blog/mask/grid/post-9.jpg" alt="image desc"/>
                                    </Link>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
                                        <Link to="#">Nov 07, 2018</Link>
                                        <span class="meta-separator">|</span>
                                        <Link to="#">5 Comments</Link>
                                    </div>

                                    <h2 class="entry-title">
                                        <Link to="single.html">Fusce lacinia arcu etnulla.</Link>
                                    </h2>

                                    <div class="entry-cats">
                                        in <Link to="#">Travel</Link>
                                    </div>
                                </div>
                            </article>
                        </div>
                	</div>

                    <div class="mb-3"></div>

                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-center">
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
        </main>

    </div>
  )
}

export default BlogMask
