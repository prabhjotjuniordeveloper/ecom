import {React,useState} from 'react';
import { useNavigate } from "react-router-dom";
import { contactUs } from '../Api/product/account/contact';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const ContactPage = () => {
    const showToast = (type, message) => {
        toast[type](message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (
        !formData.phone ||
        !formData.email ||
        !formData.name ||
        !formData.message ||
        !formData.subject 
      ) {
        showToast("warning","All fields are required.");
        return;
      }
  
      try {
        const response = await contactUs(formData);
  
        if (response.success) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });

          showToast("success", "Details sent successfully.");
  
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      } catch (error) {
        console.error("Failed to send:", error);
      }
    };

    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                    </ol>
                </div>
            </nav>
            <div className="container">
                <div className="page-header page-header-big text-center" style={{ backgroundImage: "url('assets/images/contact-header-bg.jpg')" }}>
                    <h1 className="page-title text-white">Contact us<span className="text-white">keep in touch with us</span></h1>
                </div>
            </div>
<ToastContainer/>
            <div className="page-content pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-2 mb-lg-0">
                            <h2 className="title mb-1">Contact Information</h2>
                            <p className="mb-3">Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="contact-info">
                                        <h3>The Office</h3>
                                        <ul className="contact-list">
                                            <li>
                                                <i className="icon-map-marker"></i>
                                                70 Washington Square South New York, NY 10012, United States
                                            </li>
                                            <li>
                                                <i className="icon-phone"></i>
                                                <Link to="tel:#">+92 423 567</Link>
                                            </li>
                                            <li>
                                                <i className="icon-envelope"></i>
                                                <Link to="mailto:#">info@Probo.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="contact-info">
                                        <h3>Office Hours</h3>
                                        <ul className="contact-list">
                                            <li>
                                                <i className="icon-clock-o"></i>
                                                <span className="text-dark">Monday-Saturday</span><br />11am-7pm ET
                                            </li>
                                            <li>
                                                <i className="icon-calendar"></i>
                                                <span className="text-dark">Sunday</span><br />11am-6pm ET
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="title mb-1">Got Any Questions?</h2>
                            <p className="mb-2">Use the form below to get in touch with the sales team</p>

                            <form className="contact-form mb-3">
      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="cname" className="sr-only">Name</label>
          <input
            type="text"
            className="form-control"
            id="cname"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name *"
            required
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="cemail" className="sr-only">Email</label>
          <input
            type="email"
            className="form-control"
            id="cemail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="cphone" className="sr-only">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="cphone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="csubject" className="sr-only">Subject</label>
          <input
            type="text"
            className="form-control"
            id="csubject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
        </div>
      </div>
      <label htmlFor="cmessage" className="sr-only">Message</label>
      <textarea
        className="form-control"
        cols="30"
        rows="4"
        id="cmessage"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Message *"
      ></textarea>
      <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm" onClick={handleSubmit}>
        <span>SUBMIT</span>
        <i className="icon-long-arrow-right"></i>
      </button>
    </form>

                        </div>
                    </div>

                    <hr className="mt-4 mb-5" />

                    <div className="stores mb-4 mb-lg-5">
                        <h2 className="title text-center mb-3">Our Stores</h2>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="store">
                                    <div className="row">
                                        <div className="col-sm-5 col-xl-6">
                                            <figure className="store-media mb-2 mb-lg-0">
                                                <img src="assets/images/stores/img-1.jpg" alt="Wall Street Plaza" />
                                            </figure>
                                        </div>
                                        <div className="col-sm-7 col-xl-6">
                                            <div className="store-content">
                                                <h3 className="store-title">Wall Street Plaza</h3>
                                                <address>88 Pine St, New York, NY 10005, USA</address>
                                                <div><Link to="tel:#">+1 987-876-6543</Link></div>
                                                <h4 className="store-subtitle">Store Hours:</h4>
                                                <div>Monday - Saturday 11am to 7pm</div>
                                                <div>Sunday 11am to 6pm</div>
                                                <Link to="#" className="btn btn-link" target="_blank" rel="noopener noreferrer"><span>View Map</span><i className="icon-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="store">
                                    <div className="row">
                                        <div className="col-sm-5 col-xl-6">
                                            <figure className="store-media mb-2 mb-lg-0">
                                                <img src="assets/images/stores/img-2.jpg" alt="One New York Plaza" />
                                            </figure>
                                        </div>
                                        <div className="col-sm-7 col-xl-6">
                                            <div className="store-content">
                                                <h3 className="store-title">One New York Plaza</h3>
                                                <address>88 Pine St, New York, NY 10005, USA</address>
                                                <div><Link to="tel:#">+1 987-876-6543</Link></div>
                                                <h4 className="store-subtitle">Store Hours:</h4>
                                                <div>Monday - Friday 9am to 8pm</div>
                                                <div>Saturday - 9am to 2pm</div>
                                                <div>Sunday - Closed</div>
                                                <Link to="#" className="btn btn-link" target="_blank" rel="noopener noreferrer"><span>View Map</span><i className="icon-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
