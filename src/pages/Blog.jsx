// Blog.js
import React from 'react';
import { Link } from "react-router-dom";
const BlogEntry = ({ imageSrc, author, date, comments, title, categories, content, link }) => (
  <article className="entry">
    <figure className="entry-media">
      <Link to={link}>
        <img src={imageSrc} alt="Blog entry" />
      </Link>
    </figure>
    <div className="entry-body">
      <div className="entry-meta">
        <span className="entry-author">by <Link to="#">{author}</Link></span>
        <span className="meta-separator">|</span>
        <Link to="#">{date}</Link>
        <span className="meta-separator">|</span>
        <Link to="#">{comments} Comments</Link>
      </div>
      <h2 className="entry-title"><Link to={link}>{title}</Link></h2>
      <div className="entry-cats">
        in {categories.map((category, index) => (
          <React.Fragment key={index}>
            <Link to="#">{category}</Link>{index < categories.length - 1 && ", "}
          </React.Fragment>
        ))}
      </div>
      <div className="entry-content">
        <p>{content}</p>
        <Link to={link} className="read-more">Continue Reading</Link>
      </div>
    </div>
  </article>
);

const Sidebar = () => (
  <aside className="col-lg-3">
    <div className="sidebar">
      {/* Search Widget */}
      <div className="widget widget-search">
        <h3 className="widget-title">Search</h3>
        <form action="#">
          <input type="search" className="form-control" placeholder="Search in blog" required />
          <button type="submit" className="btn"><i className="icon-search"></i></button>
        </form>
      </div>

      {/* Categories Widget */}
      <div className="widget widget-cats">
        <h3 className="widget-title">Categories</h3>
        <ul>
          {["Lifestyle", "Shopping", "Fashion", "Travel", "Hobbies"].map((category, index) => (
            <li key={index}><Link to="#">{category}<span>3</span></Link></li>
          ))}
        </ul>
      </div>

      {/* Popular Posts Widget */}
      <div className="widget">
        <h3 className="widget-title">Popular Posts</h3>
        <ul className="posts-list">
          {/* Add similar structure as BlogEntry component for each popular post */}
        </ul>
      </div>

      {/* Other Widgets */}
      <div className="widget widget-banner-sidebar">
        <div className="banner-sidebar-title">ad box 280 x 280</div>
        <div className="banner-sidebar banner-overlay">
          <Link to="#">
            <img src="assets/images/blog/sidebar/banner.jpg" alt="banner" />
          </Link>
        </div>
      </div>
    </div>
  </aside>
);

const Blog = () => (
  <main className="main">
    <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
      <div className="container">
        <h1 className="page-title">Blog Classic<span>Blog</span></h1>
      </div>
    </div>

    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="#">Blog</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Classic</li>
        </ol>
      </div>
    </nav>

    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {/* Blog Entries */}
            <BlogEntry
              imageSrc="assets/images/blog/post-1.jpg"
              author="John Doe"
              date="Nov 22, 2018"
              comments="2"
              title="Cras ornare tristique elit."
              categories={["Lifestyle", "Shopping"]}
              content="Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh..."
              link="single.html"
            />
            {/* Add more <BlogEntry /> components here for each post */}
            
            {/* Pagination */}
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item disabled"><Link className="page-link" href="#">Prev</Link></li>
                <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
              </ul>
            </nav>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  </main>
);

export default Blog;
