import React from 'react';

const Privacy = () => {
  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
          </ol>
        </div>
      </nav>
      <div className="container">
        <div className="page-header page-header-big text-center" style={{ backgroundImage: 'url(assets/images/contact-header-bg.jpg)' }}>
          <h1 className="page-title text-white">Privacy Policy</h1>
        </div>
      </div>

      <div className="page-content pb-0">
        <div className="container">
          <div className="row">
              <h2 className="title">Privacy Policy *</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
        
          </div>

          <div className="mb-5"></div>
        </div>

      </div>
    </main>
  );
};

export default Privacy;
