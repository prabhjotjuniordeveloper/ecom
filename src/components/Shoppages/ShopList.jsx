import { React, useState, useEffect } from "react";
import ReactSlider from "react-slider";
import { Link } from "react-router-dom";
import { allCat } from "../../Api/product/allCategory";
import { allBrands } from "../../Api/product/allBrands";
import { getAllProducts } from "../../Api/product/allProduct";
import { allColors } from "../../Api/product/allColors";

const ShopList = ({ onChange, step = 10, colors  }) => {

  const generateSlug = (name, id) => {
    return `${name.toLowerCase().replace(/\s+/g, "-")}-${id}`;
};


  const [cat, setCat] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };
  
  useEffect(() => {
    const fetchCat = async () => {
      try {
        const response = await allCat();
        if (response?.success === true) {
          setCat(
            response.all_categories.map((category) => category.toUpperCase())
          );
        }
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchCat();
  }, []);


  const [brand, setBrand] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const handleBrandChange = (brand) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((item) => item !== brand)
        : [...prevSelected, brand]
    );
  };
  
  useEffect(() => {
    const fetchCat = async () => {
      try {
        const response = await allBrands();
        if (response?.success === true) {
          setBrand(
            response.all_Brands.map((category) => category.toUpperCase())
          );
        }
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchCat();
  }, []);

  const [color, setColor] = useState([]);
  const [selectedColor, setSelectedColors] = useState([]);
  useEffect(() => {
    const fetchColor = async () => {
      try {
        const response = await allColors();
        if (response?.success === true) {
          setColor(response.all_Colors);
        }
      } catch (error) {
        console.error("Error fetching colors:", error);
      }
    };

    fetchColor();
  }, []);

  const toggleColorSelection = (color) => {
    setSelectedColors((prevSelected) =>
      prevSelected.includes(color)
        ? prevSelected.filter((c) => c !== color) // Remove if already selected
        : [...prevSelected, color] // Add if not selected
    );
  };


   const [selectedSizes, setSelectedSizes] = useState([]);
  const handleSizeChange = (size) => {
    setSelectedSizes((prevSelected) =>
      prevSelected.includes(size)
        ? prevSelected.filter((item) => item !== size)
        : [...prevSelected, size]
    );
  };

  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([100, 10000]);
  const [products, setProducts] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts(
        selectedColor,
        selectedCategories,
        values[1], // maxPrice
        values[0], // minPrice
        selectedSizes,
        selectedBrands
      );
  
      if (data) {
        setProducts(data.products);
      }
    };
  
    fetchProducts();
  }, [selectedColor, selectedCategories, values, selectedSizes, selectedBrands]);
  

 
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle Next Page
  const nextPage = () => {
    if (indexOfLastProduct < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle Previous Page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // console.log(currentProducts) 

  const handleChange = (newValues) => {
    setValues(newValues);
    onChange && onChange(newValues);
  };

  const handleClean = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColors([]);
  }


  return (
    <div>
      <main className="main">
        <div
          className="page-header text-center"
          style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
        >
          <div className="container">
            <h1 className="page-title"><span>Shop</span>
            </h1>
          </div>
        </div>

        <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Shop</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Grid 3 Columns
              </li>
            </ol>
          </div>
        </nav>

        <div className="page-content">
          <div className="container">
            <div className="row">
              <div class="col-lg-9">
                <div className="toolbox">
                  <div className="toolbox-left">
                    <div className="toolbox-info">
                      Showing <span>{currentProducts.length} of {products.length}</span> Products
                    </div>
                  </div>

                  <div className="toolbox-right">
                    <div className="toolbox-layout">
                      <a href="/ShopList" className="btn-layout active">
                        <svg width="16" height="10">
                          <rect x="0" y="0" width="4" height="4" />
                          <rect x="6" y="0" width="10" height="4" />
                          <rect x="0" y="6" width="4" height="4" />
                          <rect x="6" y="6" width="10" height="4" />
                        </svg>
                      </a>

                      <a href="/ShopGrid2" className="btn-layout">
                        <svg width="10" height="10">
                          <rect x="0" y="0" width="4" height="4" />
                          <rect x="6" y="0" width="4" height="4" />
                          <rect x="0" y="6" width="4" height="4" />
                          <rect x="6" y="6" width="4" height="4" />
                        </svg>
                      </a>

                      <a href="/Shop" className="btn-layout">
                        <svg width="16" height="10">
                          <rect x="0" y="0" width="4" height="4" />
                          <rect x="6" y="0" width="4" height="4" />
                          <rect x="12" y="0" width="4" height="4" />
                          <rect x="0" y="6" width="4" height="4" />
                          <rect x="6" y="6" width="4" height="4" />
                          <rect x="12" y="6" width="4" height="4" />
                        </svg>
                      </a>

                      <a href="/ShopGrid4" className="btn-layout">
                        <svg width="22" height="10">
                          <rect x="0" y="0" width="4" height="4" />
                          <rect x="6" y="0" width="4" height="4" />
                          <rect x="12" y="0" width="4" height="4" />
                          <rect x="18" y="0" width="4" height="4" />
                          <rect x="0" y="6" width="4" height="4" />
                          <rect x="6" y="6" width="4" height="4" />
                          <rect x="12" y="6" width="4" height="4" />
                          <rect x="18" y="6" width="4" height="4" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="products mb-3">
                  <div className="product-list">
                        <div className="product-list">
      <div className="row">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => {
            const isOutOfStock = product.stock === 0;

            return (
              <div className="col-12" key={product._id}>
                <div className="product product-list">
                  <div className="row">
                    {/* Product Image */}
                    <div className="col-6 col-lg-3">
                      <figure className="product-media">
                        {isOutOfStock && (
                          <span className="product-label label-out">
                            Out of Stock
                          </span>
                        )}
                        <a href="/ProductExtend">
                          <img
                            src={`${product.mainImage}`}
                            alt={product.productName}
                            className="product-image"
                          />
                        </a>
                      </figure>
                    </div>

                    {/* Product Price & Ratings */}
                    <div className="col-6 col-lg-3 order-lg-last">
                      <div className="product-list-action">
                        <div className="product-price">
                          {product.discount > 0 && (
                            <span className="discount-price">
                              ₹{product.price} (-{product.discount}%)
                            </span>
                          )}
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: `${(product.rating / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span className="ratings-text">({product.rating} Reviews)</span>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                          className="btn-product btn-cart"
                          disabled={isOutOfStock}
                        >
                          <span>{isOutOfStock ? "Out of Stock" : "Add to Cart"}</span>
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="col-lg-6">
                      <div className="product-body product-action-inner">
                      <a href="#" className="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>

                        <div className="product-cat">
                          <span>{product.productCategory}</span>
                        </div>
                        <h3 className="product-title">
                        <Link to={`/ProductCenterd/${generateSlug(product.productName, product._id)}`}>
                          {product.productName}
                      </Link>

                        </h3>
                        <div className="product-content">
                          <p>{product.productDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
                  </div>
                </div>

                <nav aria-label="Page navigation">
                  <ul className="pagination">
                  {currentProducts.length > 0 && currentProducts[0]._id !== products[0]._id && (
                    <li className="page-item">
                      <a
                        className="page-link page-link-prev"
                        onClick={prevPage}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">
                          <i className="icon-long-arrow-left"></i>
                        </span>
                        Prev
                      </a>
                    </li>
                  )}

                    {currentProducts.length > 0 && currentProducts[currentProducts.length - 1]._id !== products[products.length - 1]._id && (
                      <li className="page-item">
                        <a
                          className="page-link page-link-next"
                          onClick={nextPage}
                          aria-label="Next"
                        >
                          Next
                          <span aria-hidden="true">
                            <i className="icon-long-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                    )}


                  </ul>
                </nav>
              </div>

              <aside className="col-lg-3 order-lg-first">
                <div className="sidebar sidebar-shop">
                  <div className="widget widget-clean curson-pointer ">
                    <label>Filters:</label>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleClean();
                      }} 
                      className="sidebar-filter-clear cursor-pointer"
                    >
                      Clear All
                    </a>

                  </div>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-1"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-1"
                    >
                      Category
                    </a>
                  </h3>

                  <div className="collapse show" id="widget-1">
                    <div className="widget-body">
                    <div className="filter-items filter-items-count">
      {cat.map((item, index) => (
        <div className="filter-item" key={index}>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id={`cat-${index}`}
              onChange={() => handleCategoryChange(item)}
              checked={selectedCategories.includes(item)}
            />
            <label className="custom-control-label" htmlFor={`cat-${index}`}>
              {item}
            </label>
          </div>
        </div>
      ))}

    </div>
                    </div>
                  </div>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-2"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-2"
                    >
                      Size
                    </a>
                  </h3>

                  <div className="collapse show" id="widget-2">
                    <div className="widget-body">
                    <div className="filter-items">
      <h6>Clothing Sizes</h6>
      {["XS", "S", "M", "L", "XL", "XXL"].map((size, index) => (
        <div className="filter-item" key={`clothing-${index}`}>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id={`size-${index}`}
              onChange={() => handleSizeChange(size)}
              checked={selectedSizes.includes(size)}
            />
            <label className="custom-control-label" htmlFor={`size-${index}`}>
              {size}
            </label>
          </div>
        </div>
      ))}

      <h6 style={{ marginTop: "20px" }}>Shoe Sizes</h6>
      {["6", "7", "8", "9", "10", "11", "12"].map((size, index) => (
        <div className="filter-item" key={`shoe-${index}`}>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id={`shoe-size-${index}`}
              onChange={() => handleSizeChange(size)}
              checked={selectedSizes.includes(size)}
            />
            <label className="custom-control-label" htmlFor={`shoe-size-${index}`}>
              {size}
            </label>
          </div>
        </div>
      ))}
    </div>
                    </div>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <a
                        data-toggle="collapse"
                        href="#widget-3"
                        role="button"
                        aria-expanded="true"
                        aria-controls="widget-3"
                      >
                        Colour
                      </a>
                    </h3>

                    <div className="collapse show" id="widget-3">
                      <div className="widget-body">
                        <div className="filter-colors">
                        {color.map((color, index) => (
  <a
    key={index}
    style={{ background: color,cursor: "pointer",}}
    className={selectedColor.includes(color) ? "selected" : ""}
    title={color}
    onClick={() => toggleColorSelection(color)}
  >
    <span className="sr-only">Color Name</span>
  </a>
))}

                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <a
                        data-toggle="collapse"
                        href="#widget-4"
                        role="button"
                        aria-expanded="true"
                        aria-controls="widget-4"
                      >
                        Brand
                      </a>
                    </h3>

                    <div className="collapse show" id="widget-4">
                      <div className="widget-body">
                      <div className="filter-items">
      {brand.map((brand, index) => (
        <div className="filter-item" key={index}>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id={`brand-${index}`}
              onChange={() => handleBrandChange(brand)}
              checked={selectedBrands.includes(brand)}
            />
            <label className="custom-control-label" htmlFor={`brand-${index}`}>
              {brand}
            </label>
          </div>
        </div>
      ))}
    </div>
                      </div>
                    </div>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <a
                        data-toggle="collapse"
                        href="#widget-5"
                        role="button"
                        aria-expanded="true"
                        aria-controls="widget-5"
                      >
                        Price
                      </a>
                    </h3>

                    <div className="collapse show" id="widget-5">
                      <div className="widget-body">
                        <div className="filter-price">
                          <div className="filter-price-text">
                            Price Range(Rs): {values[0]} - {values[1]}
                            <span id="filter-price-range"></span>
                          </div>

                          <div style={{ width: "90%", textAlign: "center" }}>
                            <ReactSlider
                              className="custom-slider"
                              thumbClassName="custom-thumb"
                              trackClassName="custom-track"
                              min={100}
                              max={10000}
                              step={step}
                              value={values}
                              onChange={handleChange}
                              pearling
                              minDistance={10}
                              renderTrack={(props, state) => (
                                <div
                                  {...props}
                                  className={`custom-track ${
                                    state.index === 1
                                      ? "selected"
                                      : "unselected"
                                  }`}
                                />
                              )}
                            />
                            <style>
                              {`
          .custom-slider {
            height: 6px;
            background: #444;
          }
          .custom-thumb {
            height: 25px;
            width: 25px;
            background: white;
            border-radius: 50%;
            border: 2px solid #0a7373;
            cursor: grab;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            margin-top: -9px;
          }
          .custom-thumb::after {
            content: '|||';
            color: #0a7373;
            font-size: 10px;
            font-weight: bold;
          }
          .custom-track {
            height: 6px;
          }
          .custom-track.unselected {
            background: #fff;
          }
          .custom-track.selected {
            background: #0a7373;
          }
        `}
                            </style>
                          </div>

                          <div id="price-slider"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShopList;
