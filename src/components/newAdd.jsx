import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewAdd } from "../Api/product/address/createAdd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Address = ({ isLoggedIn }) => {
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
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    pincode: "",  // Fixed: Previously "zip"
    phone: "",
    email: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.streetAddress.trim()) newErrors.streetAddress = "Street Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required"; // Fixed key
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      showToast("error", "Please log in to proceed further.");
      navigate("/login");
      return;
    }
  
    if (!validate()) return;
  
    try {
      const response = await addNewAdd(formData);
      // console.log("Response:", response);
  
      if (response.success === true) {
        setFormData({
          firstName: "",
          lastName: "",
          streetAddress: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
          phone: "",
          email: ""
        });

        showToast("success", "Address added successfully.");
  
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.error("Failed to add Address:", error);
    }
    // console.log("Details:", formData);
  };
  

  return (
    <div className="container">
      <div className="col-lg-9">
        <h2 className="checkout-title">Add Shipping Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <label>First Name *</label>
              <input type="text" name="firstName" className="form-control" required onChange={handleChange} value={formData.firstName} />
              {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
            </div>
            <div className="col-sm-6">
              <label>Last Name *</label>
              <input type="text" name="lastName" className="form-control" required onChange={handleChange} value={formData.lastName} />
              {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
            </div>
          </div>
<ToastContainer/>
          <label>Street address *</label>
          <input type="text" name="streetAddress" className="form-control" placeholder="House number" required onChange={handleChange} value={formData.streetAddress} />
          {errors.streetAddress && <p className="text-danger">{errors.streetAddress}</p>}

          <div className="row">
            <div className="col-sm-6">
              <label>Town / City *</label>
              <input type="text" name="city" className="form-control" required onChange={handleChange} value={formData.city} />
              {errors.city && <p className="text-danger">{errors.city}</p>}
            </div>
            <div className="col-sm-6">
              <label>State *</label>
              <input type="text" name="state" className="form-control" required onChange={handleChange} value={formData.state} />
              {errors.state && <p className="text-danger">{errors.state}</p>}
            </div>
          </div>

          <label>Country *</label>
          <input type="text" name="country" className="form-control" required onChange={handleChange} value={formData.country} />
          {errors.country && <p className="text-danger">{errors.country}</p>}

          <div className="row">
            <div className="col-sm-6">
              <label>Postcode / ZIP *</label>
              <input type="text" name="pincode" className="form-control" required onChange={handleChange} value={formData.pincode} /> 
              {errors.pincode && <p className="text-danger">{errors.pincode}</p>} 
            </div>
            <div className="col-sm-6">
              <label>Phone *</label>
              <input type="tel" name="phone" className="form-control" required onChange={handleChange} value={formData.phone} />
              {errors.phone && <p className="text-danger">{errors.phone}</p>}
            </div>
          </div>

          <label>Email address *</label>
          <input type="email" name="email" className="form-control" required onChange={handleChange} value={formData.email} />
          {errors.email && <p className="text-danger">{errors.email}</p>}

          <button type="submit" className="btn btn-primary mt-3" style={{ marginBottom: "20px" }}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Address;
