import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProduct } from "../../Api/product/product";
import { getAllProducts } from "../../Api/product/allProduct";
import { addProductToCart } from "../../Api/product/addCart";
import { addToWishlist } from "../../Api/product/addWish";
import { getReview } from "../../Api/product/getReview";
import { addReview } from "../../Api/product/addReview";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const ProductCenterd = ({ isLoggedIn }) => {
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
  const generateSlug = (name, id) => {
    if (!name) {
      return `unknown-${id}`;
    }
    return `${name.toLowerCase().replace(/\s+/g, "-")}-${id}`;
  };
  const { slug } = useParams();
  const id = slug?.split("-").pop();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToWish, setIsAddedToWish] = useState(false);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value);
  };

  const goToCart = () => {
    navigate("/shopping-cart");
  };

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      showToast("error", "Please log in to add products to the cart.");
      navigate("/login");
      return;
    }
  
    if (!selectedColor) {
      showToast("warning", "Color selection is required.");
      return;
    }
  
    if (!selectedSize) {
      showToast("warning", "Size selection is required.");
      return;
    }
  
    if (!quantity || quantity <= 0) {
      showToast("warning", "Valid quantity is required.");
      return;
    }
  
    if (quantity > 10) {
      showToast("warning", "Max quantity is 10.");
      return;
    }
  
    try {
      const data = { color: selectedColor, size: selectedSize, quantity };
      const response = await addProductToCart(id, data);
  
      if (response.Message === "Cart has been updated") {
        setIsAddedToCart(true);
        showToast("success", "Product added to the cart successfully.");
        handleColorSelect(null);
        handleSizeChange({ target: { value: "" } });
        handleQuantityChange({ target: { value: 1 } });
      }
    } catch (error) {
      showToast("error", "Failed to add product to cart.");
      console.error("Failed to add product to cart:", error);
    }
  };

  const handleAddToWish = async () => {
    if (!isLoggedIn) {
      showToast("error","Please log in to add products to the wishlist.");
      navigate("/login");
      return;
    }

    try {
      const response = await addToWishlist(id);

      if (response.Message === "Wish list has been updated") {
        showToast("success", "Product added to the wishlist successfully.");
        setIsAddedToWish(true);
      }
    } catch (error) {
      console.error("Failed to add product to wishlist:", error);
      showToast("error", "Failed to add product to wishlist.");
    }
  };

  const handleGoToWishlist = () => {
    navigate("/Wishlist#/Wishlist");
  };

  const [product, setproduct] = useState([]);
  const [review, setReview] = useState([]);
  const [moreProduct, setMoreProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(id);
        const response2 = await getReview(id);
        if (response?.success === true) {
          setproduct(response.product);
        }
        setReview(response2.reviews);
      } catch (error) {
        console.error("Error fetching colors:", error);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchTopProducts = async () => {
      const data = await getAllProducts();

      if (data) {
        setMoreProduct(data.products);
      }
    };

    fetchTopProducts();
  }, []);

  const [review2, setReview2] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async(e) => {
    if (!isLoggedIn) {
      showToast("error", "Please log in to post review.");
      navigate("/login");
      return;
    }
    if (!rating) {
      showToast("warning", "Rating is required.");
      return;
    }
    if (!review2) {
      showToast("warning", "Enter a review.");
      return;
    }

    try {
      const data = { productId: id, rating: rating, comment:review2 };
      const response = await addReview(data);

      if (response.message === "Review has been saved") {
        showToast("success", "Review posted successfully.");
        setReview2("")
        setRating(0)
      }
    } catch (error) {
      console.error("Failed to add review", error);
      showToast("error", "Failed to add review.");
    }
  };

  const handleRefresh = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  

  return (
    <div>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container d-flex align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/ShopList#/ShopList">Products</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product?.productName}
              </li>
            </ol>
          </div>
        </nav>
        <ToastContainer/>
        <div className="page-content">
          <div className="container">
            <div className="product-details-top mb-2">
              <div className="row">
                <div className="col-md-6">
                  <div className="product-gallery product-gallery-vertical">
                    <div className="row">
                      <figure className="product-main-image">
                        <img
                          id="product-zoom"
                          src={product?.mainImage}
                          data-zoom-image={product?.mainImage}
                          alt="product image"
                        />
                      </figure>
                      {/* End .product-main-image */}
                      {/* <div id="product-zoom-gallery" className="product-image-gallery">
                  <Link className="product-gallery-item active" to="#" data-image="assets/images/products/single/centered/1.jpg" data-zoom-image="assets/images/products/single/centered/1-big.jpg">
                    <img src="assets/images/products/single/centered/1-small.jpg" alt="product side" />
                  </Link>
                  <Link className="product-gallery-item" to="#" data-image="assets/images/products/single/centered/2.jpg" data-zoom-image="assets/images/products/single/centered/2-big.jpg">
                    <img src="assets/images/products/single/centered/2-small.jpg" alt="product cross" />
                  </Link>
                  <Link className="product-gallery-item" to="#" data-image="assets/images/products/single/centered/3.jpg" data-zoom-image="assets/images/products/single/centered/3-big.jpg">
                    <img src="assets/images/products/single/centered/3-small.jpg" alt="product with model" />
                  </Link>
                  <Link className="product-gallery-item" to="#" data-image="assets/images/products/single/centered/4.jpg" data-zoom-image="assets/images/products/single/centered/4-big.jpg">
                    <img src="assets/images/products/single/centered/4-small.jpg" alt="product back" />
                  </Link>
                </div> */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .product-gallery */}
                </div>
                {/* End .col-md-6 */}
                <div className="col-md-6">
                  <div className="product-details product-details-centered">
                    <h1 className="product-title">{product?.productName}</h1>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: `${(product?.rating / 5) * 100}%` }}
                        />
                      </div>
                      <Link
                        className="ratings-text"
                        to="#product-review-link"
                        id="review-link"
                      >
                        ( {product?.rating} Reviews )
                      </Link>
                    </div>
                    <div className="product-price">₹{product?.price}</div>
                    <div className="product-content">
                      <p>Brand: {product?.brand}</p>
                    </div>
                    <div>
                      {/* Color Selection */}
                      <div className="details-filter-row details-row-size">
                        <label>Color:</label>
                        <div className="product-nav product-nav-dots cursor-pointer">
                        {product?.colour?.map((color, index) => (
  <Link
    key={index}
    onClick={(e) => {
      e.preventDefault();
      handleColorSelect(color);
    }}
    style={{
      background: color,
      borderWidth: 2,
      borderColor: selectedColor === color ? "white" : "black",
      padding: 10,
      display: "inline-block",
      cursor: "pointer",
      textAlign: "center",
    }}
  >
        {selectedColor === color && (
      <span
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: selectedColor === "white" ? "black" : "white",
          fontSize: 10,
        }}
      >
        ✔
      </span>
    )}
    <span className="sr-only">{color}</span>
  </Link>
))}

                        </div>
                      </div>

                      {/* Size Selection */}
                      <div className="details-filter-row details-row-size">
                        <label htmlFor="size">Size:</label>
                        <div className="select-custom">
                          <select
                            name="size"
                            id="size"
                            className="form-control"
                            value={selectedSize}
                            onChange={handleSizeChange}
                          >
                            <option value="" disabled>
                              Select Size
                            </option>
                            {product?.size?.map((size, index) => (
                              <option key={index} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Quantity Selection */}
                        <div className="product-details-quantity">
                          <input
                            type="number"
                            id="qty"
                            className="form-control"
                            value={quantity}
                            min={1}
                            max={10}
                            step={1}
                            onChange={handleQuantityChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="product-details-action">
                      <div
                        className="details-action-col "
                        onClick={isAddedToCart ? goToCart : handleAddToCart}
                      >
                        <Link className="btn-product btn-cart cursor-pointer">
                          <span>
                            {isAddedToCart ? "Go to Cart" : "Add to Cart"}
                          </span>
                        </Link>
                      </div>
                      <div className="details-action-wrapper">
                        <Link
                          onClick={
                            isAddedToWish ? handleGoToWishlist : handleAddToWish
                          }
                          className="btn-product cursor-pointer"
                          title="Wishlist"
                        >
                          <span>
                            {isAddedToWish
                              ? "Go to Wishlist"
                              : "Add to Wishlist"}
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="product-details-footer">
                      <div className="product-cat">
                        <span>Category:</span>
                        <Link to="#">{product?.productCategory}</Link>
                      </div>
                      <div className="social-icons social-icons-sm">
                        <span className="social-label">Share:</span>
                        <Link
                          to="#"
                          className="social-icon"
                          title="Facebook"
                          target="_blank"
                        >
                          <i className="icon-facebook-f" />
                        </Link>
                        <Link
                          to="#"
                          className="social-icon"
                          title="Twitter"
                          target="_blank"
                        >
                          <i className="icon-twitter" />
                        </Link>
                        <Link
                          to="#"
                          className="social-icon"
                          title="Instagram"
                          target="_blank"
                        >
                          <i className="icon-instagram" />
                        </Link>
                        <Link
                          to="#"
                          className="social-icon"
                          title="Pinterest"
                          target="_blank"
                        >
                          <i className="icon-pinterest" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-details-tab">
              <ul
                className="nav nav-pills justify-content-center"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="product-desc-link"
                    data-toggle="tab"
                    href="#product-desc-tab"
                    role="tab"
                    aria-controls="product-desc-tab"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="product-info-link"
                    data-toggle="tab"
                    href="#product-info-tab"
                    role="tab"
                    aria-controls="product-info-tab"
                    aria-selected="false"
                  >
                    Additional information
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="product-shipping-link"
                    data-toggle="tab"
                    href="#product-shipping-tab"
                    role="tab"
                    aria-controls="product-shipping-tab"
                    aria-selected="false"
                  >
                    Shipping &amp; Returns
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="product-review-link"
                    data-toggle="tab"
                    href="#product-review-tab"
                    role="tab"
                    aria-controls="product-review-tab"
                    aria-selected="false"
                  >
                    Reviews ({review?.slice(0, 5).length})
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="product-desc-tab"
                  role="tabpanel"
                  aria-labelledby="product-desc-link"
                >
                  <div className="product-desc-content">
                    <h3>Product Information</h3>
                    <p>{product?.productDescription}</p>
                  </div>
                  {/* End .product-desc-content */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="product-info-tab"
                  role="tabpanel"
                  aria-labelledby="product-info-link"
                >
                  <div className="product-desc-content">
                    <h3>Information</h3>
                    <p>{product?.additionalInformation}</p>
                  </div>
                  {/* End .product-desc-content */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="product-shipping-tab"
                  role="tabpanel"
                  aria-labelledby="product-shipping-link"
                >
                  <div className="product-desc-content">
                    <h3>Delivery &amp; returns</h3>
                    <p>
                      We deliver to over 100 countries around the world. For
                      full details of the delivery options we offer, please view
                      our <Link to="#">Delivery information</Link>
                      <br />
                      We hope you’ll love every purchase, but if you ever need
                      to return an item you can do so within a month of receipt.
                      For full details of how to make a return, please view our{" "}
                      <Link to="#">Returns information</Link>
                    </p>
                  </div>
                  {/* End .product-desc-content */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="product-review-tab"
                  role="tabpanel"
                  aria-labelledby="product-review-link"
                >
                  <div className="reviews">
                    <h3>Reviews ({review.slice(0, 5).length})</h3>

                    <div>
                      {review?.slice(0, 5).map((review) => (
                        <div className="review">
                          <div className="row no-gutters">
                            <div className="col-auto">
                              <h4>
                                <Link to="#">{review.userId.name}</Link>
                              </h4>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div
                                    className="ratings-val"
                                    style={{
                                      width: `${(review.rating / 5) * 100}%`,
                                    }}
                                  />
                                </div>
                              </div>
                              <span className="review-date">
                                {new Date(
                                  review.createdAt
                                ).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="col">
                              <h4>Review</h4>
                              <div className="review-content">
                                <p>{review.comment}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="review-form">
                      <h4 style={{marginTop: "10px" }}>Write a Review</h4>
                      <div className="ratings-container">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`star ${
                              star <= rating ? "selected" : ""
                            }`}
                            onClick={() => setRating(star)}
                            style={{
                              cursor: "pointer",
                              fontSize: "24px",
                              color: star <= rating ? "#fcb941" : "gray",
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <textarea
                        placeholder="Write your review here..."
                        value={review2}
                        onChange={(e) => setReview2(e.target.value)}
                        rows={4}
                        style={{ width: "100%", marginTop: "10px",padding:"20px" }}
                      ></textarea>
                      <button
                        onClick={handleSubmit}
                        style={{
                          marginTop: "10px",
                          padding: "10px",
                          cursor: "pointer",
                        }}
                      >
                        Submit Review
                      </button>
                    </div>

                    {/* End .review */}
                  </div>
                  {/* End .reviews */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>

            {moreProduct.length > 0 && (
              <h2 className="title text-center mb-4">You May Also Like</h2>
            )}

            {/* <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                      "nav": false, 
                      "dots": true,
                      "margin": 20,
                      "loop": false,
                      "responsive": {
                          "0": {
                              "items":1
                          },
                          "480": {
                              "items":2
                          },
                          "768": {
                              "items":3
                          },
                          "992": {
                              "items":4
                          },
                          "1200": {
                              "items":4,
                              "nav": true,
                              "dots": false
                          }
                      }
                  }'
            > */}
            <div className="tab-content">
              <div
                className="tab-pane p-0 fade show active"
                id="recent-all-tab"
                role="tabpanel"
                aria-labelledby="recent-all-link"
              >
                <div className="products">
                  <div className="row justify-content-center">
                    {moreProduct?.slice(0, 8).map((product) => (
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
                            <Link
                              to={`/ProductCenterd/${generateSlug(
                                product?.productName,
                                product?._id
                              )}`}
                              onClick={handleRefresh}
                            >
                              <img
                                src={product.mainImage}
                                alt={product.productName}
                                className="product-image"
                              />
                              {product.subImages.length > 0 && (
                                <img
                                  src={product.subImages[0]}
                                  alt="Product preview"
                                  className="product-image-hover"
                                />
                              )}
                            </Link>
                            <div
                              className="product-action-vertical"
                              onClick={() => handleAddToWish(product?._id)}
                              
                            >
                              <Link
                                to="/Wishlist"
                                className="btn-product-icon btn-wishlist btn-expandable"
                                style={{cursor:"pointer"}}
                              >
                                <span>add to wishlist</span>
                              </Link>
                            </div>
                            <div className="product-action ">
                              <Link
                                to={`/ProductCenterd/${generateSlug(
                                  product?.productName,
                                  product?._id
                                )}`}
                                onClick={handleRefresh}
                                className="btn-product btn-cart"
                              >
                                <span>Buy Now</span>
                              </Link>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                                {product.productCategory}
                            </div>
                            <h3 className="product-title">
                              <Link
                                to={`/ProductCenterd/${generateSlug(
                                  product?.productName,
                                  product?._id
                                )}`}
                                onClick={handleRefresh}
                              >
                                {product.productName}
                              </Link>
                            </h3>
                            <div className="product-price">
                              <span className="new-price">
                                Now ₹{product.price}
                              </span>
                              <span className="old-price">
                                Was ₹{product.mrp}
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
          </div>
          {/* </div> */}
        </div>
      </main>
    </div>
  );
};

export default ProductCenterd;
