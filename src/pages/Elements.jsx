import React from 'react';

const ElementsPage = () => {
  const elementsData = [
    { href: "elements-accordions.html", label: "accordions" },
    { href: "elements-banners.html", label: "banners" },
    { href: "elements-blog-posts.html", label: "blog posts" },
    { href: "elements-buttons.html", label: "buttons" },
    { href: "elements-cta.html", label: "call to action" },
    { href: "elements-icon-boxes.html", label: "icon boxes" },
    { href: "elements-portfolio.html", label: "portfolio" },
    { href: "elements-product-category.html", label: "product categories" },
    { href: "elements-products.html", label: "products" },
    { href: "elements-tabs.html", label: "tabs" },
    { href: "elements-testimonials.html", label: "testimonials" },
    { href: "elements-titles.html", label: "titles" },
    { href: "elements-typography.html", label: "typography" },
    { href: "elements-video-banners.html", label: "video" },
  ];

  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
      >
        <div className="container">
          <h1 className="page-title">
            Elements List<span>Elements</span>
          </h1>
        </div>
      </div>

      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Elements</li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          <div className="row elements">
            {elementsData.map((element, index) => (
              <div key={index} className="col-xl-5col col-lg-4 col-md-3 col-6">
                <a href={element.href} className="element-type">
                  <div className="element">
                    <i className="element-img"></i>
                    <i className="element-hover-img"></i>
                    <p>{element.label}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ElementsPage;
