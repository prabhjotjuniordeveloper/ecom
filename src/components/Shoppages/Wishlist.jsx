import { React, useState, useEffect } from "react";
import { allWish } from "../../Api/product/getWish";
import { delWish } from "../../Api/product/delWish";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const [wish, setWish] = useState([]);
  const generateSlug = (name, id) => {
    return `${name.toLowerCase().replace(/\s+/g, "-")}-${id}`;
};
const handleRemoveItem = async (id) => {
  try {
    const response = await delWish(id);
    console.log(response);
    if (response?.status === "Successful") {
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
  useEffect(() => {
    const fetchWish = async () => {
      try {
        const response2 = await allWish();
        setWish(response2.wishlist?.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setWish([])
      }
    };

    fetchWish();
  }, [handleRemoveItem]);



  return (
    <div>
      <main className="main">
        <div
          className="page-header text-center"
          style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
        >
          <div className="container">
            <h1 className="page-title">
              Wishlist
            </h1>
          </div>
        </div>
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/shoplist">Shop</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Wishlist
              </li>
            </ol>
          </div>
        </nav>

        <div className="page-content">
          <div className="container">
            <table className="table table-wishlist table-mobile">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Stock Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {wish?.map((item) => (
                  <tr key={item._id}>
                    <td className="product-col">
                      <div className="product">
                        <figure className="product-media">
                          <Link to={`/ProductCenterd/${generateSlug(item.productName, item._id)}`}>
                            <img src={item.mainImage} alt="Product image" />
                          </Link>
                        </figure>

                        <h3 className="product-title">
                          <Link to={`/ProductCenterd/${generateSlug(item.productName, item._id)}`}>{item.productName}</Link>
                        </h3>
                      </div>
                    </td>
                    <td className="price-col">₹{item.price.toFixed(2)}</td>
                    <td className="stock-col">
                      <span
                        className={item.stock > 0 ? "in-stock" : "out-of-stock"}
                      >
                        {item.stock > 0 ? "In stock" : "Out of stock"}
                      </span>
                    </td>
                    <td className="action-col">
                      {item.stock > 0 ? (
                        <Link to={`/ProductCenterd/${generateSlug(item.productName, item._id)}`} className="btn btn-block btn-outline-primary-2" >
                          <i className="icon-cart-plus"></i>Add to Cart
                        </Link>
                      ) : (
                        <button className="btn btn-block btn-outline-primary-2 disabled">
                          Out of Stock
                        </button>
                      )}
                    </td>

                    <td className="remove-col">
                      <button
                        className="btn-remove"
                        onClick={() => handleRemoveItem(item._id)}
                      >
                        <i className="icon-close"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wishlist;
