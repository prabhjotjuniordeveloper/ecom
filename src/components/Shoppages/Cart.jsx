import React, { useState } from 'react';

const ShoppingCart = () => {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Beige knitted elastic runner shoes',
            price: 84.00,
            quantity: 1,
            image: 'assets/images/products/table/product-1.jpg',
        },
        {
            id: 2,
            name: 'Blue utility pinafore denim dress',
            price: 76.00,
            quantity: 1,
            image: 'assets/images/products/table/product-2.jpg',
        },
    ]);

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const getSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    <main className="main">
    <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
        <div className="container">
            <h1 className="page-title">Shopping Cart<span>Shop</span></h1>
        </div>
    </div>
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
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
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartItems.map(item => (
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
                                        <td className="quantity-col">
                                            <div className="cart-product-quantity">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={item.quantity}
                                                    min="1"
                                                    max="10"
                                                    step="1"
                                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                                    required
                                                />
                                            </div>
                                        </td>
                                        <td className="total-col">${(item.price * item.quantity).toFixed(2)}</td>
                                        <td className="remove-col">
                                            <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>
                                                <i className="icon-close"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="cart-bottom">
                            <div className="cart-discount">
                                <form action="#">
                                    <div className="input-group">
                                        <input type="text" className="form-control" required placeholder="coupon code" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-primary-2" type="submit">
                                                <i className="icon-long-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <a href="#" className="btn btn-outline-dark-2">
                                <span>UPDATE CART</span><i className="icon-refresh"></i>
                            </a>
                        </div>
                    </div>
                    <aside className="col-lg-3">
                        <div className="summary summary-cart">
                            <h3 className="summary-title">Cart Total</h3>

                            <table className="table table-summary">
                                <tbody>
                                    <tr className="summary-subtotal">
                                        <td>Subtotal:</td>
                                        <td>${getSubtotal()}</td>
                                    </tr>
                                    <tr className="summary-shipping">
                                        <td>Shipping:</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr className="summary-shipping-row">
                                        <td>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="free-shipping" name="shipping" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="free-shipping">Free Shipping</label>
                                            </div>
                                        </td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr className="summary-shipping-row">
                                        <td>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="standard-shipping" name="shipping" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="standard-shipping">Standard:</label>
                                            </div>
                                        </td>
                                        <td>$10.00</td>
                                    </tr>
                                    <tr className="summary-shipping-row">
                                        <td>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="express-shipping" name="shipping" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="express-shipping">Express:</label>
                                            </div>
                                        </td>
                                        <td>$20.00</td>
                                    </tr>
                                    <tr className="summary-shipping-estimate">
                                        <td>Estimate for Your Country<br /> <a href="dashboard.html">Change address</a></td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr className="summary-total">
                                        <td>Total:</td>
                                        <td>${getSubtotal()}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <a href="checkout.html" className="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</a>
                        </div>

                        <a href="category.html" className="btn btn-outline-dark-2 btn-block mb-3">
                            <span>CONTINUE SHOPPING</span><i className="icon-refresh"></i>
                        </a>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</main>

};

export default ShoppingCart;