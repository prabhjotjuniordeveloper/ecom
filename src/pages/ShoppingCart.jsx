import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    return (
        <main className="main">
            <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
                <div className="container">
                    <h1 className="page-title">Shopping Cart<span>Shop</span></h1>
                </div>
            </div>

            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link href="#">Shop</Link></li>
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
                                        {/* Example product row */}
                                        <tr>
                                            <td className="product-col">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <Link href="#">
                                                            <img src="assets/images/products/table/product-1.jpg" alt="Product image" />
                                                        </Link>
                                                    </figure>
                                                    <h3 className="product-title">
                                                        <Link href="#">Beige knitted elastic runner shoes</Link>
                                                    </h3>
                                                </div>
                                            </td>
                                            <td className="price-col">$84.00</td>
                                            <td className="quantity-col">
                                                <div className="cart-product-quantity">
                                                    <input type="number" className="form-control" defaultValue={1} min={1} max={10} step={1} required />
                                                </div>
                                            </td>
                                            <td className="total-col">$84.00</td>
                                            <td className="remove-col">
                                                <button className="btn-remove"><i className="icon-close"></i></button>
                                            </td>
                                        </tr>
                                        {/* Add more product rows here */}
                                    </tbody>
                                </table>

                                <div className="cart-bottom">
                                    <div className="cart-discount">
                                        <form action="#">
                                            <div className="input-group">
                                                <input type="text" className="form-control" required placeholder="Coupon code" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-primary-2" type="submit">
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <Link href="#" className="btn btn-outline-dark-2">
                                        <span>UPDATE CART</span>
                                        <i className="icon-refresh"></i>
                                    </Link>
                                </div>
                            </div>
                            <aside className="col-lg-3">
                                <div className="summary summary-cart">
                                    <h3 className="summary-title">Cart Total</h3>
                                    <table className="table table-summary">
                                        <tbody>
                                            <tr className="summary-subtotal">
                                                <td>Subtotal:</td>
                                                <td>$160.00</td>
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
                                                        <input type="radio" id="standart-shipping" name="shipping" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="standart-shipping">Standard:</label>
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
                                                <td>Estimate for Your Country<br /> <Link href="/Checkout">Change address</Link></td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr className="summary-total">
                                                <td>Total:</td>
                                                <td>$160.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Link href="/Checkout" className="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</Link>
                                </div>
                                <Link href="/Checkout" className="btn btn-outline-dark-2 btn-block mb-3">
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
