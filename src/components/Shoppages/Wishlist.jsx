import React from 'react'

const Wishlist = () => {
    const wishlistItems = [
        {
            id: 1,
            name: 'Beige knitted elastic runner shoes',
            price: 84.00,
            stockStatus: 'In stock',
            image: 'assets/images/products/table/product-1.jpg',
            outOfStock: false
        },
        {
            id: 2,
            name: 'Blue utility pinafore denim dress',
            price: 76.00,
            stockStatus: 'In stock',
            image: 'assets/images/products/table/product-2.jpg',
            outOfStock: false
        },
        {
            id: 3,
            name: 'Orange saddle lock front chain cross body bag',
            price: 52.00,
            stockStatus: 'Out of stock',
            image: 'assets/images/products/table/product-3.jpg',
            outOfStock: true
        },
    ];

    const handleRemoveItem = (id) => {
        // Logic to remove the item from the wishlist
        console.log(`Remove item with id: ${id}`);
    };

  return (
    <div>
              <main className="main">
            <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
                <div className="container">
                    <h1 className="page-title">Wishlist<span>Shop</span></h1>
                </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Shop</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
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
                            {wishlistItems.map(item => (
                                <tr key={item.id}>
                                    <td className="product-col">
                                        <div className="product">
                                            <figure className="product-media">
                                                <a href="#">
                                                    <img src={item.image} alt="Product image" />
                                                </a>
                                            </figure>

                                            <h3 className="product-title">
                                                <a href="#">{item.name}</a>
                                            </h3>
                                        </div>
                                    </td>
                                    <td className="price-col">${item.price.toFixed(2)}</td>
                                    <td className="stock-col">
                                        <span className={item.outOfStock ? 'out-of-stock' : 'in-stock'}>{item.stockStatus}</span>
                                    </td>
                                    <td className="action-col">
                                        {item.outOfStock ? (
                                            <button className="btn btn-block btn-outline-primary-2 disabled">Out of Stock</button>
                                        ) : (
                                            <button className="btn btn-block btn-outline-primary-2"><i className="icon-cart-plus"></i>Add to Cart</button>
                                        )}
                                    </td>
                                    <td className="remove-col">
                                        <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>
                                            <i className="icon-close"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="wishlist-share">
                        <div className="social-icons social-icons-sm mb-2">
                            <label className="social-label">Share on:</label>
                            <a href="#" className="social-icon" title="Facebook" target="_blank" rel="noopener noreferrer"><i className="icon-facebook-f"></i></a>
                            <a href="#" className="social-icon" title="Twitter" target="_blank" rel="noopener noreferrer"><i className="icon-twitter"></i></a>
                            <a href="#" className="social-icon" title="Instagram" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a>
                            <a href="#" className="social-icon" title="Youtube" target="_blank" rel="noopener noreferrer"><i className="icon-youtube"></i></a>
                            <a href="#" className="social-icon" title="Pinterest" target="_blank" rel="noopener noreferrer"><i className="icon-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </div>
  )
}

export default Wishlist
