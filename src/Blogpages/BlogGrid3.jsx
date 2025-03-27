import React from 'react'

const BlogGrid3 = () => {
  return (
    <div>
      

      <main className="main">
        	
      <div className="page-header text-center" style={{"background-image":" url('assets/images/page-header-bg.jpg')"}}>
    <div className="container">
        <h1 className="page-title">Blog Grid 3 Columns<span>Blog</span></h1>
    </div>
</div>
<nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
    <div className="container">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Blog</a></li>
            <li className="breadcrumb-item active" aria-current="page">Grid 3 Columns</li>
        </ol>
    </div>
</nav>



            <div className="page-content">
              
            <div className="container">
    <nav className="blog-nav">
        <ul className="menu-cat entry-filter justify-content-center">
            <li className="active"><a href="#" data-filter="*">All Blog Posts<span>9</span></a></li>
            <li><a href="#" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
            <li><a href="#" data-filter=".shopping">Shopping<span>1</span></a></li>
            <li><a href="#" data-filter=".fashion">Fashion<span>2</span></a></li>
            <li><a href="#" data-filter=".travel">Travel<span>4</span></a></li>
            <li><a href="#" data-filter=".hobbies">Hobbies<span>2</span></a></li>
        </ul>
    </nav>

    <div className="entry-container max-col-3" data-layout="fitRows">
        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <a href="single.html">
                        <img src="assets/images/blog/grid/3cols/post-1.jpg" alt="image desc"/>
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
                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas vulputate ...</p>
                        <a href="single.html" className="read-more">Continue Reading</a>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item lifestyle col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media entry-video">
                    <a href="single.html">
                        <img src="assets/images/blog/grid/3cols/post-2.jpg" alt="image desc"/>
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
                        <p>Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui ...</p>
                        <a href="single.html" className="read-more">Continue Reading</a>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item lifestyle fashion col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                        <a href="single.html">
                            <img src="assets/images/blog/grid/3cols/post-3.jpg" alt="image desc"/>
                        </a>
                        <a href="single.html">
                            <img src="assets/images/blog/grid/3cols/post-4.jpg" alt="image desc"/>
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
                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas ... </p>
                        <a href="single.html" className="read-more">Continue Reading</a>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item travel col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <a href="single.html">
                        <img src="assets/images/blog/grid/3cols/post-4.jpg" alt="image desc"/>
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
                        <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat ... </p>
                        <a href="single.html" className="read-more">Continue Reading</a>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item travel hobbies col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <a href="single.html">
                        <img src="assets/images/blog/grid/3cols/post-5.jpg" alt="image desc"/>
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
                        <a href="single.html">Aenean dignissim pellente squefelis.</a>
                    </h2>

                    <div className="entry-cats">
                        in <a href="#">Travel</a>,
                        <a href="#">Hobbies</a>
                    </div>

                    <div className="entry-content">
                        <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus ... </p>
                        <a href="single.html" className="read-more">Continue Reading</a>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item hobbies col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <a href="single.html">
                        <img src="assets/images/blog/grid/3cols/post-6.jpg" alt="image desc"/>
                    </a>
                </figure>

                <div className="entry-body">
                    <div className="entry-meta">
                        <span className="entry-author">
                            by <a href="#">John Doe</a>
                        </span>
                        <span className="meta-separator">|</span>
                        <a href="#">Nov 10, 2018</a>
                        <span className="meta-separator">|</span>
                        <a href="#">4 Comments</a>
                    </div>

                    <h2 className="entry-title">
                        <a href="single.html">Quisque volutpat mattiseros.</a>
                    </h2>

                    <div className="entry-cats">
                        in <a href="#">Hobbies</a>
                    </div>

                    <div className="entry-content">
                        <p>Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum dapibus, nisi at egestas faucibus, purus lectus vehicula dolor ... </p>
                        <a href="single.html" className="read-more">Continue Reading</a>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item travel hobbies col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <a href="single.html">
                        <img src="assets/images/blog/grid/3cols/post-7.jpg" alt="image desc"/>
                    </a>
                </figure>

                <div className="entry-body">
                    <div className="entry-meta">
                        <span className="entry-author">
                            by <a href="#">Jane Doe</a>
                        </span>
                        <span className="meta-separator">|</span>
                        <a href="#">Nov 5, 2018</a>
                        <span className="meta-separator">|</span>
                        <a href="#">6 Comments</a>
                    </div>

                    <h2 className="entry-title">
                        <a href="single.html">Sed viverra a feugiat.</a>
                    </h2>

                    <div className="entry-cats">
                        in <a href="#">Travel</a>,
                        <a href="#">Hobbies</a>
                    </div>

                    <div className="entry-content">
                        <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus ultrices nulla quis nibh. Quisque lectus. Vestibulum ... </p>
                        <a href="single.html" className="read-more">Continue Reading</a>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item fashion col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <a href="single.html">
                        <img src="assets/images/blog/grid/3cols/post-8.jpg" alt="image desc"/>
                    </a>
                </figure>

                <div className="entry-body">
                    <div className="entry-meta">
                        <span className="entry-author">
                            by <a href="#">Jane Doe</a>
                        </span>
                        <span className="meta-separator">|</span>
                        <a href="#">Nov 1, 2018</a>
                        <span className="meta-separator">|</span>
                        <a href="#">2 Comments</a>
                    </div>

                    <h2 className="entry-title">
                        <a href="single.html">Sed viverra a feugiat.</a>
                    </h2>

                    <div className="entry-cats">
                        in <a href="#">Fashion</a>
                    </div>

                    <div className="entry-content">
                        <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus ultrices nulla quis nibh. Quisque lectus ... </p>
                        <a href="single.html" className="read-more">Continue Reading</a>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item travel hobbies col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <a href="single.html">
                        <img src="assets/images/blog/grid/3cols/post-9.jpg" alt="image desc"/>
                    </a>
                </figure>

                <div className="entry-body">
                    <div className="entry-meta">
                        <span className="entry-author">
                            by <a href="#">John Doe</a>
                        </span>
                        <span className="meta-separator">|</span>
                        <a href="#">Oct 28, 2018</a>
                        <span className="meta-separator">|</span>
                        <a href="#">0 Comments</a>
                    </div>

                    <h2 className="entry-title">
                        <a href="single.html">Lorem ipsum dolor sit amet.</a>
                    </h2>

                    <div className="entry-cats">
                        in <a href="#">Travel</a>,
                        <a href="#">Hobbies</a>
                    </div>

                    <div className="entry-content">
                        <p>Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui ... </p>
                        <a href="single.html" className="read-more">Continue Reading</a>
                    </div>
                </div>
            </article>
        </div>
    </div>
</div>


            </div>
        </main>
    </div>
  )
}

export default BlogGrid3
