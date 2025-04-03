import React from 'react'
import { Link } from "react-router-dom";
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
            <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
            <li className="breadcrumb-item"><Link to="#">Blog</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Grid 3 Columns</li>
        </ol>
    </div>
</nav>



            <div className="page-content">
              
            <div className="container">
    <nav className="blog-nav">
        <ul className="menu-cat entry-filter justify-content-center">
            <li className="active"><Link to="#" data-filter="*">All Blog Posts<span>9</span></Link></li>
            <li><Link to="#" data-filter=".lifestyle">Lifestyle<span>3</span></Link></li>
            <li><Link to="#" data-filter=".shopping">Shopping<span>1</span></Link></li>
            <li><Link to="#" data-filter=".fashion">Fashion<span>2</span></Link></li>
            <li><Link to="#" data-filter=".travel">Travel<span>4</span></Link></li>
            <li><Link to="#" data-filter=".hobbies">Hobbies<span>2</span></Link></li>
        </ul>
    </nav>

    <div className="entry-container max-col-3" data-layout="fitRows">
        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <Link to="single.html">
                        <img src="assets/images/blog/grid/3cols/post-1.jpg" alt="image desc"/>
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
                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas vulputate ...</p>
                        <Link to="single.html" className="read-more">Continue Reading</Link>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item lifestyle col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media entry-video">
                    <Link to="single.html">
                        <img src="assets/images/blog/grid/3cols/post-2.jpg" alt="image desc"/>
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
                        <p>Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui ...</p>
                        <Link to="single.html" className="read-more">Continue Reading</Link>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item lifestyle fashion col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                        <Link to="single.html">
                            <img src="assets/images/blog/grid/3cols/post-3.jpg" alt="image desc"/>
                        </Link>
                        <Link to="single.html">
                            <img src="assets/images/blog/grid/3cols/post-4.jpg" alt="image desc"/>
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
                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas ... </p>
                        <Link to="single.html" className="read-more">Continue Reading</Link>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item travel col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <Link to="single.html">
                        <img src="assets/images/blog/grid/3cols/post-4.jpg" alt="image desc"/>
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
                        <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat ... </p>
                        <Link to="single.html" className="read-more">Continue Reading</Link>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item travel hobbies col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <Link to="single.html">
                        <img src="assets/images/blog/grid/3cols/post-5.jpg" alt="image desc"/>
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
                        <Link to="single.html">Aenean dignissim pellente squefelis.</Link>
                    </h2>

                    <div className="entry-cats">
                        in <Link to="#">Travel</Link>,
                        <Link to="#">Hobbies</Link>
                    </div>

                    <div className="entry-content">
                        <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus ... </p>
                        <Link to="single.html" className="read-more">Continue Reading</Link>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item hobbies col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <Link to="single.html">
                        <img src="assets/images/blog/grid/3cols/post-6.jpg" alt="image desc"/>
                    </Link>
                </figure>

                <div className="entry-body">
                    <div className="entry-meta">
                        <span className="entry-author">
                            by <Link to="#">John Doe</Link>
                        </span>
                        <span className="meta-separator">|</span>
                        <Link to="#">Nov 10, 2018</Link>
                        <span className="meta-separator">|</span>
                        <Link to="#">4 Comments</Link>
                    </div>

                    <h2 className="entry-title">
                        <Link to="single.html">Quisque volutpat mattiseros.</Link>
                    </h2>

                    <div className="entry-cats">
                        in <Link to="#">Hobbies</Link>
                    </div>

                    <div className="entry-content">
                        <p>Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum dapibus, nisi at egestas faucibus, purus lectus vehicula dolor ... </p>
                        <Link to="single.html" className="read-more">Continue Reading</Link>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item travel hobbies col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <Link to="single.html">
                        <img src="assets/images/blog/grid/3cols/post-7.jpg" alt="image desc"/>
                    </Link>
                </figure>

                <div className="entry-body">
                    <div className="entry-meta">
                        <span className="entry-author">
                            by <Link to="#">Jane Doe</Link>
                        </span>
                        <span className="meta-separator">|</span>
                        <Link to="#">Nov 5, 2018</Link>
                        <span className="meta-separator">|</span>
                        <Link to="#">6 Comments</Link>
                    </div>

                    <h2 className="entry-title">
                        <Link to="single.html">Sed viverra a feugiat.</Link>
                    </h2>

                    <div className="entry-cats">
                        in <Link to="#">Travel</Link>,
                        <Link to="#">Hobbies</Link>
                    </div>

                    <div className="entry-content">
                        <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus ultrices nulla quis nibh. Quisque lectus. Vestibulum ... </p>
                        <Link to="single.html" className="read-more">Continue Reading</Link>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item fashion col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <Link to="single.html">
                        <img src="assets/images/blog/grid/3cols/post-8.jpg" alt="image desc"/>
                    </Link>
                </figure>

                <div className="entry-body">
                    <div className="entry-meta">
                        <span className="entry-author">
                            by <Link to="#">Jane Doe</Link>
                        </span>
                        <span className="meta-separator">|</span>
                        <Link to="#">Nov 1, 2018</Link>
                        <span className="meta-separator">|</span>
                        <Link to="#">2 Comments</Link>
                    </div>

                    <h2 className="entry-title">
                        <Link to="single.html">Sed viverra a feugiat.</Link>
                    </h2>

                    <div className="entry-cats">
                        in <Link to="#">Fashion</Link>
                    </div>

                    <div className="entry-content">
                        <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus ultrices nulla quis nibh. Quisque lectus ... </p>
                        <Link to="single.html" className="read-more">Continue Reading</Link>
                    </div>
                </div>
            </article>
        </div>

        <div className="entry-item travel hobbies col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
                <figure className="entry-media">
                    <Link to="single.html">
                        <img src="assets/images/blog/grid/3cols/post-9.jpg" alt="image desc"/>
                    </Link>
                </figure>

                <div className="entry-body">
                    <div className="entry-meta">
                        <span className="entry-author">
                            by <Link to="#">John Doe</Link>
                        </span>
                        <span className="meta-separator">|</span>
                        <Link to="#">Oct 28, 2018</Link>
                        <span className="meta-separator">|</span>
                        <Link to="#">0 Comments</Link>
                    </div>

                    <h2 className="entry-title">
                        <Link to="single.html">Lorem ipsum dolor sit amet.</Link>
                    </h2>

                    <div className="entry-cats">
                        in <Link to="#">Travel</Link>,
                        <Link to="#">Hobbies</Link>
                    </div>

                    <div className="entry-content">
                        <p>Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui ... </p>
                        <Link to="single.html" className="read-more">Continue Reading</Link>
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
