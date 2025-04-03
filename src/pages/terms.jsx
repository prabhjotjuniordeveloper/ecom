import React from 'react';
import { Link } from "react-router-dom";
const Terms = () => {
  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Terms and conditions</li>
          </ol>
        </div>
      </nav>
      <div className="container">
        <div className="page-header page-header-big text-center" style={{ backgroundImage: 'url(assets/images/about-header-bg.jpg)' }}>
          <h1 className="page-title text-white">Terms and Conditions</h1>
        </div>
      </div>

      <div className="page-content pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <h2 className="title">Terms *</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
            </div>
            
            <div className="col-lg-6">
              <h2 className="title">Conditions *</h2>
              <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. <br/>Praesent elementum hendrerit tortor. Sed semper lorem at felis.</p>
            </div>
          </div>

          <div className="mb-5"></div>
        </div>

      </div>
    </main>
  );
};

export default Terms;
