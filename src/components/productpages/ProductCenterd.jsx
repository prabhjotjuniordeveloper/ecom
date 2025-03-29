import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProduct } from "../../Api/product/product";
import { getAllProducts } from "../../Api/product/allProduct";
import { addProductToCart } from "../../Api/product/addCart";
import { addToWishlist } from "../../Api/product/addWish";

const ProductCenterd = ({ isLoggedIn }) => {
  const navigate = useNavigate();
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
      alert("Please log in to add products to the cart.");
      navigate("/login");
      return;
    }
    if (!selectedColor) {
      alert("Color selection is required.");
      return;
    }
    if (!selectedSize) {
      alert("Size selection is required.");
      return;
    }
    if (!quantity || quantity <= 0) {
      alert("Valid quantity is required.");
      return;
    }
    if (quantity > 10) {
      alert("Max quantity is 10.");
      return;
    }

    try {
      const data = { color: selectedColor, size: selectedSize, quantity };
      const response = await addProductToCart(id, data);

      if (response.Message === "Cart has been updated") {
        setIsAddedToCart(true);
        handleColorSelect(null);
        handleSizeChange({ target: { value: "" } });
        handleQuantityChange({ target: { value: 1 } });
      }
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };
  const handleAddToWish = async () => {
    if (!isLoggedIn) {
      alert("Please log in to add products to the cart.");
      navigate("/login");
      return;
    }

    try {
      const response = await addToWishlist(id);

      if (response.Message === "Wish list has been updated") {
        console.log(response);
        setIsAddedToWish(true);
      }
    } catch (error) {
      console.error("Failed to add product to wishlist:", error);
    }
  };

  const handleGoToWishlist = () => {
    navigate("/Wishlist#/Wishlist");
  };

  const [product, setproduct] = useState([]);
  const [moreProduct, setMoreProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(id);
        if (response?.success === true) {
          setproduct(response.product);
        }
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

  return (
    <div>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container d-flex align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/ShopList#/ShopList">Products</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product?.productName}
              </li>
            </ol>
          </div>
        </nav>
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
                  <a className="product-gallery-item active" href="#" data-image="assets/images/products/single/centered/1.jpg" data-zoom-image="assets/images/products/single/centered/1-big.jpg">
                    <img src="assets/images/products/single/centered/1-small.jpg" alt="product side" />
                  </a>
                  <a className="product-gallery-item" href="#" data-image="assets/images/products/single/centered/2.jpg" data-zoom-image="assets/images/products/single/centered/2-big.jpg">
                    <img src="assets/images/products/single/centered/2-small.jpg" alt="product cross" />
                  </a>
                  <a className="product-gallery-item" href="#" data-image="assets/images/products/single/centered/3.jpg" data-zoom-image="assets/images/products/single/centered/3-big.jpg">
                    <img src="assets/images/products/single/centered/3-small.jpg" alt="product with model" />
                  </a>
                  <a className="product-gallery-item" href="#" data-image="assets/images/products/single/centered/4.jpg" data-zoom-image="assets/images/products/single/centered/4-big.jpg">
                    <img src="assets/images/products/single/centered/4-small.jpg" alt="product back" />
                  </a>
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
                      <a
                        className="ratings-text"
                        href="#product-review-link"
                        id="review-link"
                      >
                        ( {product?.rating} Reviews )
                      </a>
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
                            <a
                              key={index}
                              onClick={(e) => {
                                e.preventDefault();
                                handleColorSelect(color);
                              }}
                              style={{
                                background: color,
                                borderWidth: 0.1,
                                borderColor: "black",
                                padding: 10,
                                display: "inline-block",
                                cursor: "pointer",
                              }}
                            >
                              <span className="sr-only">{color}</span>
                            </a>
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
                        <a className="btn-product btn-cart cursor-pointer">
                          <span>
                            {isAddedToCart ? "Go to Cart" : "Add to Cart"}
                          </span>
                        </a>
                      </div>
                      <div className="details-action-wrapper">
                        <a
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
                        </a>
                      </div>
                    </div>
                    <div className="product-details-footer">
                      <div className="product-cat">
                        <span>Category:</span>
                        <a href="#">{product?.productCategory}</a>
                      </div>
                      <div className="social-icons social-icons-sm">
                        <span className="social-label">Share:</span>
                        <a
                          href="#"
                          className="social-icon"
                          title="Facebook"
                          target="_blank"
                        >
                          <i className="icon-facebook-f" />
                        </a>
                        <a
                          href="#"
                          className="social-icon"
                          title="Twitter"
                          target="_blank"
                        >
                          <i className="icon-twitter" />
                        </a>
                        <a
                          href="#"
                          className="social-icon"
                          title="Instagram"
                          target="_blank"
                        >
                          <i className="icon-instagram" />
                        </a>
                        <a
                          href="#"
                          className="social-icon"
                          title="Pinterest"
                          target="_blank"
                        >
                          <i className="icon-pinterest" />
                        </a>
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
                    Reviews (2)
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
                      our <a href="#">Delivery information</a>
                      <br />
                      We hope you’ll love every purchase, but if you ever need
                      to return an item you can do so within a month of receipt.
                      For full details of how to make a return, please view our{" "}
                      <a href="#">Returns information</a>
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
                    <h3>Reviews (2)</h3>
                    <div className="review">
                      <div className="row no-gutters">
                        <div className="col-auto">
                          <h4>
                            <a href="#">Samanta J.</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                          </div>
                          {/* End .rating-container */}
                          <span className="review-date">6 days ago</span>
                        </div>
                        {/* End .col */}
                        <div className="col">
                          <h4>Good, perfect size</h4>
                          <div className="review-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Ducimus cum dolores assumenda
                              asperiores facilis porro reprehenderit animi culpa
                              atque blanditiis commodi perspiciatis doloremque,
                              possimus, explicabo, autem fugit beatae quae
                              voluptas!
                            </p>
                          </div>
                          {/* End .review-content */}
                          <div className="review-action">
                            <a href="#">
                              <i className="icon-thumbs-up" />
                              Helpful (2)
                            </a>
                            <a href="#">
                              <i className="icon-thumbs-down" />
                              Unhelpful (0)
                            </a>
                          </div>
                          {/* End .review-action */}
                        </div>
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .review */}
                    <div className="review">
                      <div className="row no-gutters">
                        <div className="col-auto">
                          <h4>
                            <a href="#">John Doe</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                          </div>
                          {/* End .rating-container */}
                          <span className="review-date">5 days ago</span>
                        </div>
                        {/* End .col */}
                        <div className="col">
                          <h4>Very good</h4>
                          <div className="review-content">
                            <p>
                              Sed, molestias, tempore? Ex dolor esse iure hic
                              veniam laborum blanditiis laudantium iste amet.
                              Cum non voluptate eos enim, ab cumque nam, modi,
                              quas iure illum repellendus, blanditiis
                              perspiciatis beatae!
                            </p>
                          </div>
                          {/* End .review-content */}
                          <div className="review-action">
                            <a href="#">
                              <i className="icon-thumbs-up" />
                              Helpful (0)
                            </a>
                            <a href="#">
                              <i className="icon-thumbs-down" />
                              Unhelpful (0)
                            </a>
                          </div>
                          {/* End .review-action */}
                        </div>
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}
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
            {moreProduct?.map((product, index) => {
              const isOutOfStock = product.stock === 0;
              return (
                <div key={index} className="product product-7 text-center">
                  <figure className="product-media">
                    <span className="product-label label-new">New</span>
                    <a href="product.html">
                      <img
                        src={product?.mainImage}
                        alt="Product image"
                        className="product-image"
                      />
                    </a>
                    <div className="product-action-vertical">
                      <a className="btn-product-icon btn-wishlist btn-expandable">
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    <div className="product-action">
                      <a
                        className={`btn-product btn-cart ${
                          isOutOfStock ? "disabled" : ""
                        }`}
                      >
                        <span>
                          {isOutOfStock ? "Out of Stock" : "add to cart"}
                        </span>
                      </a>
                    </div>
                  </figure>
                  <div className="product-body">
                    <div className="product-cat">
                      <a>{product.productCategory}</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">{product.productName}</a>
                    </h3>
                    <div className="product-price">₹{product.price}</div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{
                            width: `${(product.rating / 5) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="ratings-text">
                        ({product.rating} Reviews)
                      </span>
                    </div>
                    <div className="product-nav product-nav-dots">
                      {product?.colour?.map((color, index) => (
                        <a key={index} style={{ background: color }}>
                          <span className="sr-only">{color}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* </div> */}
        </div>
      </main>
    </div>
  );
};

export default ProductCenterd;
