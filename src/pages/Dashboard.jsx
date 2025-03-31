import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Api/product/account/getUser";
import { getADD } from "../Api/product/address/getAdd";
import { getOrder } from "../Api/product/account/getOrder";
import orderplaced from "../../src/images/orderPlaced.png";
import { updatePass } from "../Api/product/account/updatePass";

const Dashboard = ({ isLoggedIn }) => {
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

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const generateSlug = (name, id) => {
    if (!name) {
      return `unknown-${id}`;
    }
    return `${name.toLowerCase().replace(/\s+/g, "-")}-${id}`;
  };

  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged Out Successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  const [user, setUser] = useState("dashboard");
  const [add, setAdd] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        const response2 = await getADD();
        const response3 = await getOrder();

        if (response?.success) {
          setUser(response.user);
        }
        if (response2?.success) {
          setAdd(response2.addresses);
        }
        if (response3?.success) {
          const formattedProducts = response3.orders.flatMap((order) =>
            order.products?.map((p) => ({
              ...p.product,
              quantity: p.quantity,
              color: p.color,
              size: p.size,
              orderId: order._id,
            }))
          );
          setProducts(formattedProducts);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      showToast("warning","All fields are required.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      showToast("warning","New password and confirm password do not match.");
      return;
    }

    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!passwordRegex.test(formData.newPassword)) {
    showToast(
      "warning",
      "Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, one number, and one special character."
    );
    return;
  }

    try {
      const response = await updatePass(formData);

      if (response.success === true) {
        showToast("success","Password updated successfully.");
        setFormData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.error("Failed to change password:", error);
      const capitalizeFirstLetter = (text) => 
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      
      showToast("error", capitalizeFirstLetter(error.response?.data?.error));
    }
  };

  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
      >
        <div className="container">
          <h1 className="page-title">My Account</h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/#/shoplist">Shop</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="dashboard">
          <div className="container">
            <div className="row">
              <aside className="col-md-4 col-lg-3">
                <ul className="nav nav-dashboard flex-column mb-3 mb-md-0">
                  <li className="nav-item">
                    <a
                      href="#"
                      className={`nav-link ${
                        activeTab === "dashboard" ? "active" : ""
                      }`}
                      onClick={(e) => handleTabChange(e, "dashboard")}
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className={`nav-link ${
                        activeTab === "orders" ? "active" : ""
                      }`}
                      onClick={(e) => handleTabChange(e, "orders")}
                    >
                      Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className={`nav-link ${
                        activeTab === "address" ? "active" : ""
                      }`}
                      onClick={(e) => handleTabChange(e, "address")}
                    >
                      Addresses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className={`nav-link ${
                        activeTab === "account" ? "active" : ""
                      }`}
                      onClick={(e) => handleTabChange(e, "account")}
                    >
                      Update Your Details
                    </a>
                  </li>
                </ul>
              </aside>
<ToastContainer/>
              <div className="col-md-8 col-lg-9">
                <div className="tab-content">
                  {activeTab === "dashboard" && (
                    <div
                      className={`tab-pane fade ${
                        activeTab === "dashboard" ? "show active" : ""
                      }`}
                    >
                      <p>
                        Hello,
                        <span className="font-weight-normal text-dark">
                          {user?.name || "Unknown"}
                        </span>
                        (not
                        <span className="font-weight-normal text-dark">
                          You
                        </span>
                        ?
                        <a href="#" onClick={handleLogout}>
                          Log out
                        </a>
                        )
                        <br />
                        From your account dashboard you can view your
                        <a
                          href="#"
                          className="tab-trigger-link link-underline"
                          onClick={(e) => handleTabChange(e, "orders")}
                        >
                          recent orders
                        </a>
                        , manage your
                        <a
                          href="#"
                          className="tab-trigger-link"
                          onClick={(e) => handleTabChange(e, "address")}
                        >
                          shipping and billing addresses
                        </a>
                        , and
                        <a
                          href="#"
                          className="tab-trigger-link"
                          onClick={(e) => handleTabChange(e, "account")}
                        >
                          edit your password and account details
                        </a>
                      </p>
                    </div>
                  )}
                  {activeTab === "orders" && (
                    <div
                      className={`tab-pane fade ${
                        activeTab === "orders" ? "show active" : ""
                      }`}
                    >
                      {products && products.length > 0 ? (
                        <>
                          <div className="tab-content">
                            <div
                              className="tab-pane p-0 fade show active"
                              id="recent-all-tab"
                              role="tabpanel"
                              aria-labelledby="recent-all-link"
                            >
                              <div className="products">
                                <div className="row justify-content-center">
                                  {products?.map((product) => (
                                    <div
                                      className="col-6 col-md-4 col-lg-3"
                                      key={product._id}
                                    >
                                      <div className="product product-2 text-center">
                                        <figure className="product-media">
                                          {product.onSale && (
                                            <span className="product-label label-sale">
                                              Sale
                                            </span>
                                          )}
                                          <a
                                            href={`/#/ProductCenterd/${generateSlug(
                                              product.productName,
                                              product._id
                                            )}`}
                                          >
                                            <img
                                              src={product.mainImage}
                                              alt={product.productName}
                                              className="product-image"
                                            />
                                          </a>
                                          <div className="product-action">
                                            <a
                                              href={`/#/ProductCenterd/${generateSlug(
                                                product.productName,
                                                product._id
                                              )}`}
                                              className="btn-product btn-cart"
                                            >
                                              <span>Order Placed</span>
                                            </a>
                                          </div>
                                        </figure>
                                        <div className="product-body">
                                          <h3 className="product-title">
                                            <a
                                              href={`/#/ProductCenterd/${generateSlug(
                                                product.productName,
                                                product._id
                                              )}`}
                                            >
                                              {product.productName}
                                            </a>
                                          </h3>
                                          <div className="product-price">
                                            <span className="new-price">
                                              Now ₹{product.price}
                                            </span>
                                            <span className="old-price">
                                              Was ₹
                                              {product.mrp ||
                                                (product.price * 1.2).toFixed(
                                                  2
                                                )}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                {/* End .row */}
                              </div>
                              {/* End .products */}
                            </div>
                            {/* .End .tab-pane */}
                          </div>
                          {/* End .container */}
                          {/* Show "Check More Products" when orders exist */}
                          <div>
                            <a
                              href="/#/shoplist"
                              className="btn btn-outline-primary-2"
                            >
                              <span>CHECK MORE PRODUCTS</span>
                              <i className="icon-long-arrow-right"></i>
                            </a>
                          </div>
                        </>
                      ) : (
                        // Show this only when no orders exist
                        <div>
                          <p>No order has been made yet.</p>
                          <a
                            href="/#/shoplist"
                            className="btn btn-outline-primary-2"
                          >
                            <span>GO SHOP</span>
                            <i className="icon-long-arrow-right"></i>
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "address" && (
                    <div
                      className={`tab-pane fade ${
                        activeTab === "address" ? "show active" : ""
                      }`}
                    >
                      <p>
                        The following addresses will be used on the checkout
                        page by default.
                      </p>
                      <div className="row">
                        <div className="col-lg-6">
                          {add?.length > 0 ? (
                            <div className="card card-dashboard">
                              <div className="card-body">
                                <h3 className="card-title">Address</h3>
                                <p>
                                  {add[0]?.firstName} {add[0]?.lastName}
                                  <br />
                                  {add[0]?.phone}
                                  <br />
                                  {add[0]?.streetAddress}, {add[0]?.city},{" "}
                                  {add[0]?.state}
                                  <br />
                                  {add[0]?.country}
                                  <br />
                                  <a href="#/updateAdd">
                                    Edit <i className="icon-edit"></i>
                                  </a>
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="tab-pane">
                              <p>No addresses yet...</p>
                              <a
                                href="/#/newAdd"
                                className="btn btn-outline-primary-2"
                              >
                                <span>ADD ONE</span>
                                <i className="icon-long-arrow-right"></i>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "account" && (
                    <div
                      className={`tab-pane fade ${
                        activeTab === "account" ? "show active" : ""
                      }`}
                    >
                      <form action="">
                        <div>
                          <label>First Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder={user?.name}
                            disabled
                          />

                          <small className="form-text">
                            This will be how your name will be displayed in the
                            account section and in reviews
                          </small>

                          <label>Username *</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder={user?.userName}
                            disabled
                          />

                          <label>Email address *</label>
                          <input
                            type="email"
                            className="form-control"
                            required
                            placeholder={user?.email}
                            disabled
                          />

                          {/* <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>UPDATE DETAILS</span>
                            <i className="icon-long-arrow-right"></i>
                          </button> */}
                        </div>

                        <div>
                          <form>
                            <label style={{ marginTop: "20px" }}>
                              Current password (leave blank to leave unchanged)
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="currentPassword"
                              value={formData.currentPassword}
                              onChange={handleChange}
                              required
                            />
                            <label>
                              New password (leave blank to leave unchanged)
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="newPassword"
                              value={formData.newPassword}
                              onChange={handleChange}
                              required
                            />
                            <label>Confirm new password</label>
                            <input
                              type="password"
                              className="form-control mb-2"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              required
                            />
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                              onClick={handleSubmit}
                            >
                              <span>CHANGE PASSWORD</span>
                              <i className="icon-long-arrow-right"></i>
                            </button>
                          </form>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
