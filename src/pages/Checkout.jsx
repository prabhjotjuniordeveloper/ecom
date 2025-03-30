import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getADD } from "../Api/product/address/getAdd";
import { allCart } from "../Api/product/getCart";
import { addNewOrd } from "../Api/product/account/cretaeOrder";
import { useNavigate } from "react-router-dom";

const Checkout = ({isLoggedIn}) => {
    const navigate = useNavigate();
  const location = useLocation();
  const shippingCost = location.state?.shippingCost || 0;
  const shippingType = location.state?.shippingType || "Free Shipping";

  const [add, setAdd] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response2 = await getADD();
        if (response2?.success === true) {
          setAdd(response2.addresses);
        }
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchUser();
  }, []);

    const [product, setproduct] = useState([]);
    useEffect(() => {
      const fetchCart = async () => {
        try {
          const response = await allCart();
          if (response.success === true) {
            setproduct(response.cart.products);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchCart();
    }, []);

      const totalPrice = product?.reduce(
        (acc, product) => acc + product.product.price * product.quantity,
        0
      );
    
      const grandTotal = totalPrice + shippingCost;

      const transformedProducts = product?.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
        color: item.color,
        size: item.size,
      }));


      

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoggedIn) {
          alert("Please log in to add products to the cart.");
          navigate("/login");
          return;
        }
      
        try {
          const data = {
            products: transformedProducts,
            shippingAddress: add[0]._id,
            billingAddress: add[0]._id,
            totalAmount: grandTotal,
            paymentMethod: "cod",
            shippingCost: shippingCost,
          };

          
          const response = await addNewOrd(data);
      
          if (response.success === true) {
            navigate("/dashboard");
          }
        } catch (error) {
          console.error("Failed to place order:", error);
        }
      };

  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: "assets/images/page-header-bg.jpg" }}
      >
        <div className="container">
          <h1 className="page-title">
            Checkout
          </h1>
        </div>
      </div>

      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/#/shoplist">Shop</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="checkout">
          <div className="container">
            <form>
              <div className="row" style={{justifyContent:"center"}}>

                <div className={`tab-pane`} style={{width:"50%"}}>
                  <p>The following addresses will be used to checkout .</p>
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
                              {add[0]?.streetAddress}
                              <br />
                              {add[0]?.city}
                              <br />
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
                          <p>No addresses yet.</p>
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

                <aside className="col-lg-3">
                  <div className="summary">
                    <h3 className="summary-title">Your Order</h3>
                    {/* End .summary-title */}
                    <table className="table table-summary">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                      {product?.map((product) => (
                        <tr key={product.id}>
                          <td>
                            <a>{product.product.productName}</a>
                          </td>
                          <td>₹{product?.product.price}</td>
                        </tr>
                      ))}
                        <tr className="summary-subtotal">
                          <td>Subtotal:</td>
                          <td>₹{totalPrice}</td>
                        </tr>
                        {/* End .summary-subtotal */}
                        <tr>
                          <td>Shipping:</td>
                          <td>{shippingType}: ₹{shippingCost}</td>
                        </tr>
                        <tr className="summary-total">
                          <td>Total:</td>
                          <td>₹{grandTotal}</td>
                        </tr>
                        {/* End .summary-total */}
                      </tbody>
                    </table>
                    {/* End .table table-summary */}
                    <div className="accordion-summary" id="accordion-payment">
                      <div className="card">
                        <div className="card-header" id="heading-1">
                          <h2 className="card-title">
                            <a
                              role="button"
                              data-toggle="collapse"
                              href="#collapse-1"
                              aria-expanded="true"
                              aria-controls="collapse-1"
                            >
                              Direct bank transfer
                            </a>
                          </h2>
                        </div>
                        {/* End .card-header */}
                        <div
                          id="collapse-1"
                          className="collapse show"
                          aria-labelledby="heading-1"
                          data-parent="#accordion-payment"
                        >
                          <div className="card-body">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order will not be shipped until the funds have
                            cleared in our account.
                          </div>
                          {/* End .card-body */}
                        </div>
                        {/* End .collapse */}
                      </div>
                      {/* End .card */}
                      <div className="card">
                        <div className="card-header" id="heading-2">
                          <h2 className="card-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              href="#collapse-2"
                              aria-expanded="false"
                              aria-controls="collapse-2"
                            >
                              Check payments
                            </a>
                          </h2>
                        </div>
                        {/* End .card-header */}
                        <div
                          id="collapse-2"
                          className="collapse"
                          aria-labelledby="heading-2"
                          data-parent="#accordion-payment"
                        >
                          <div className="card-body">
                            Ipsum dolor sit amet, consectetuer adipiscing elit.
                            Donec odio. Quisque volutpat mattis eros. Nullam
                            malesuada erat ut turpis.
                          </div>
                          {/* End .card-body */}
                        </div>
                        {/* End .collapse */}
                      </div>
                      {/* End .card */}
                      <div className="card">
                        <div className="card-header" id="heading-3">
                          <h2 className="card-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              href="#collapse-3"
                              aria-expanded="false"
                              aria-controls="collapse-3"
                            >
                              Cash on delivery
                            </a>
                          </h2>
                        </div>
                        {/* End .card-header */}
                        <div
                          id="collapse-3"
                          className="collapse"
                          aria-labelledby="heading-3"
                          data-parent="#accordion-payment"
                        >
                          <div className="card-body">
                            Quisque volutpat mattis eros. Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit. Donec odio.
                            Quisque volutpat mattis eros.
                          </div>
                          {/* End .card-body */}
                        </div>
                        {/* End .collapse */}
                      </div>
                      {/* End .card */}
                      <div className="card">
                        <div className="card-header" id="heading-4">
                          <h2 className="card-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              href="#collapse-4"
                              aria-expanded="false"
                              aria-controls="collapse-4"
                            >
                              PayPal{" "}
                              <small className="float-right paypal-link">
                                What is PayPal?
                              </small>
                            </a>
                          </h2>
                        </div>
                        {/* End .card-header */}
                        <div
                          id="collapse-4"
                          className="collapse"
                          aria-labelledby="heading-4"
                          data-parent="#accordion-payment"
                        >
                          <div className="card-body">
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                          </div>
                          {/* End .card-body */}
                        </div>
                        {/* End .collapse */}
                      </div>
                      {/* End .card */}
                      <div className="card">
                        <div className="card-header" id="heading-5">
                          <h2 className="card-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              href="#collapse-5"
                              aria-expanded="false"
                              aria-controls="collapse-5"
                            >
                              Credit Card (Stripe)
                              <img
                                src="assets/images/payments-summary.png"
                                alt="payments cards"
                              />
                            </a>
                          </h2>
                        </div>
                        {/* End .card-header */}
                        <div
                          id="collapse-5"
                          className="collapse"
                          aria-labelledby="heading-5"
                          data-parent="#accordion-payment"
                        >
                          <div className="card-body">
                            {" "}
                            Donec nec justo eget felis facilisis fermentum.Lorem
                            ipsum dolor sit amet, consectetuer adipiscing elit.
                            Donec odio. Quisque volutpat mattis eros. Lorem
                            ipsum dolor sit ame.
                          </div>
                          {/* End .card-body */}
                        </div>
                        {/* End .collapse */}
                      </div>
                      {/* End .card */}
                    </div>
                    {/* End .accordion */}
                    <a
                      type="submit"
                      className="btn btn-outline-primary-2 btn-order btn-block"
                      onClick={handleSubmit}
                    >
                      Place Order
                    </a>
                  </div>
                  {/* End .summary */}
                </aside>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
