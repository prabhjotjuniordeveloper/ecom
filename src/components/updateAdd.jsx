import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getADD } from "../Api/product/address/getAdd";
import { updateAdd } from "../Api/product/address/updateAddress";

const UpdateAddress = ({ isLoggedIn }) => {
  const [add, setAdd] = useState([]);
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getADD();
        if (response?.success) {
          setAdd(response.addresses);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (add.length > 0) {
      setFormData({
        firstName: add[0]?.firstName || "",
        lastName: add[0]?.lastName || "",
        streetAddress: add[0]?.streetAddress || "",
        city: add[0]?.city || "",
        state: add[0]?.state || "",
        country: add[0]?.country || "",
        pincode: add[0]?.pincode || "",
        phone: add[0]?.phone || "",
        email: add[0]?.email || ""
      });
    }
  }, [add]);

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
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("Please log in to update your address.");
      navigate("/login");
      return;
    }

    if (!validate()) return;

    try {
      const response = await updateAdd(add[0]?._id, formData);

      if (response.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Failed to update Address:", error);
    }
  };

  return (
    <div className="container">
      <div className="col-lg-9">
        <h2 className="checkout-title">Update Shipping Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <label>First Name *</label>
              <input type="text" name="firstName" className="form-control" onChange={handleChange} value={formData.firstName} />
              {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
            </div>
            <div className="col-sm-6">
              <label>Last Name *</label>
              <input type="text" name="lastName" className="form-control" onChange={handleChange} value={formData.lastName} />
              {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
            </div>
          </div>

          <label>Street address *</label>
          <input type="text" name="streetAddress" className="form-control" onChange={handleChange} value={formData.streetAddress} />
          {errors.streetAddress && <p className="text-danger">{errors.streetAddress}</p>}

          <div className="row">
            <div className="col-sm-6">
              <label>Town / City *</label>
              <input type="text" name="city" className="form-control" onChange={handleChange} value={formData.city} />
              {errors.city && <p className="text-danger">{errors.city}</p>}
            </div>
            <div className="col-sm-6">
              <label>State *</label>
              <input type="text" name="state" className="form-control" onChange={handleChange} value={formData.state} />
              {errors.state && <p className="text-danger">{errors.state}</p>}
            </div>
          </div>

          <label>Country *</label>
          <input type="text" name="country" className="form-control" onChange={handleChange} value={formData.country} />
          {errors.country && <p className="text-danger">{errors.country}</p>}

          <div className="row">
            <div className="col-sm-6">
              <label>Postcode / ZIP *</label>
              <input type="text" name="pincode" className="form-control" onChange={handleChange} value={formData.pincode} />
              {errors.pincode && <p className="text-danger">{errors.pincode}</p>}
            </div>
            <div className="col-sm-6">
              <label>Phone *</label>
              <input type="tel" name="phone" className="form-control" onChange={handleChange} value={formData.phone} />
              {errors.phone && <p className="text-danger">{errors.phone}</p>}
            </div>
          </div>

          <label>Email address *</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} />
          {errors.email && <p className="text-danger">{errors.email}</p>}

          <button type="submit" className="btn btn-primary mt-3" style={{ marginBottom: "20px" }}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAddress;
