import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allCart } from "../Api/product/getCart";
import { delCart } from "../Api/product/delCart";

const ShoppingCart = () => {
  const handleDelCart = async (id,color,size,quantity) => {
    try {
      const data = {color:color,size:size,quantity:quantity}
      const response = await delCart(id,data);
      console.log(response);
      if (response?.status === "Successful") {
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const [product, setproduct] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await allCart();
        console.log(response.success)
        if (response.success === true) {
          setproduct(response.cart.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCart();
  }, [handleDelCart]);

  const totalPrice = product?.reduce(
    (acc, product) => acc + product.product.price * product.quantity,
    0
  );
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingType, setShippingType] = useState("Free Shipping");

  const handleShippingChange = (cost, type) => {
    setShippingCost(cost);
    setShippingType(type);
  };

  const grandTotal = totalPrice + shippingCost;

  const generateSlug = (name, id) => {
    return `${name.toLowerCase().replace(/\s+/g, "-")}-${id}`;
};
// console.log(shippingCost)


  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
      >
        <div className="container">
          <h1 className="page-title">
            Your Cart
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
              Shopping Cart
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <table className="table table-cart table-mobile">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Color</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {product?.map((product, index) => (
                      <tr key={index}>
                        <td className="product-col">
                          <div className="product">
                            <figure className="product-media">
                              <Link 
                              to={`/ProductCenterd/${generateSlug(product.product.productName, product.product._id)}`}
                              >

                                <img
                                  src={product.product.mainImage}
                                  alt="Product image"
                                />
                              </Link>
                            </figure>
                          </div>
                        </td>
                        <td className="">{product?.product.productName}</td>
                        <td className="">{product?.color.toUpperCase()}</td>
                        <td className="price-col">₹{product?.product.price}</td>
                        <td className="quantity-col">
                          <div className="cart-product-quantity">
                            <p>{product.quantity}</p>
                          </div>
                        </td>
                        <td className="total-col">
                          ₹{product.product.price * product.quantity}
                        </td>
                        <td className="remove-col">
                          <button
                            className="btn-remove"
                            onClick={() => handleDelCart(product?.product._id,product?.color,product?.size,product.product._id)}
                          >
                            <i className="icon-close"></i>
                          </button>
                        </td>
                      </tr>
                    ))}

                    {/* Add more product rows here */}
                  </tbody>
                </table>

                <div className="cart-bottom">
                  {/* <div className="cart-discount">
                    <form action="#">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Coupon code"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-primary-2"
                            type="submit"
                          >
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div> */}
                  {/* <Link href="#" className="btn btn-outline-dark-2">
                                        <span>UPDATE CART</span>
                                        <i className="icon-refresh"></i>
                                    </Link> */}
                </div>
              </div>
              <aside className="col-lg-3">
                <div className="summary summary-cart">
                  <h3 className="summary-title">Cart Total</h3>
                  <table className="table table-summary">
                    <tbody>
                      <tr className="summary-subtotal">
                        <td>Subtotal:</td>
                        <td>₹{totalPrice}</td>
                      </tr>
                      <tr className="summary-shipping">
                        <td>Shipping:</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="free-shipping"
                              name="shipping"
                              className="custom-control-input"
                              onChange={() =>
                                handleShippingChange(0, "Free Shipping")
                              }
                              defaultChecked
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="free-shipping"
                            >
                              Free Shipping
                            </label>
                          </div>
                        </td>
                        <td>₹0.00</td>
                      </tr>
                      <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="standard-shipping"
                              name="shipping"
                              className="custom-control-input"
                              onChange={() =>
                                handleShippingChange(100, "Standard Shipping")
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="standard-shipping"
                            >
                              Standard:
                            </label>
                          </div>
                        </td>
                        <td>₹100.00</td>
                      </tr>
                      <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="express-shipping"
                              name="shipping"
                              className="custom-control-input"
                              onChange={() =>
                                handleShippingChange(200, "Express Shipping")
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="express-shipping"
                            >
                              Express:
                            </label>
                          </div>
                        </td>
                        <td>₹200.00</td>
                      </tr>
                      <tr className="summary-shipping-estimate">
                        <td>
                          Estimate for Your Place
                          <br /> <Link to="/updateAdd">Change address</Link>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr className="summary-total">
                        <td>Total ({shippingType}):</td>
                        <td>₹{grandTotal}</td>
                      </tr>
                    </tbody>
                  </table>
                  <Link
                    to="/checkout"
                    state={{ shippingCost,shippingType }}
                    className="btn btn-outline-primary-2 btn-order btn-block"
                  >
                    PROCEED TO CHECKOUT
                  </Link>
                </div>
                <Link
                  to="/shoplist"
                  className="btn btn-outline-dark-2 btn-block mb-3"
                >
                  <span>CONTINUE SHOPPING</span>
                  <i className="icon-refresh"></i>
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCart;
