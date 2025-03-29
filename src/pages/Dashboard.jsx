import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../Api/product/account/getUser';


const  Dashboard= () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleTabChange = (e, tab) => {
        e.preventDefault();
        setActiveTab(tab);
    };

    const { logout } = useAuth();

      const handleLogout = async () => {
        try {
            await logout();
            toast.success('Logged Out Successfully');
            navigate('/login');
        } catch (error) {
            toast.error('Failed to logout');
        }
    };

    const [user, setUser] = useState('dashboard');

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await getUser();
            if (response?.success === true) {
              setUser(response.user);
            }
          } catch (error) {
            console.error("Error fetching cats:", error);
          }
        };
    
        fetchUser();
      }, []);


    return (
        <main className="main">
            <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
                <div className="container">
                    <h1 className="page-title">My Account</h1>
                </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/#/shoplist">Shop</a></li>
                        <li className="breadcrumb-item active" aria-current="page">My Account</li>
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
                                        <a href='#' className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={(e) => handleTabChange(e, 'dashboard')}>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='#' className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`} onClick={(e) => handleTabChange(e, 'orders')}>
                                            Orders
                                        </a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a href='#' className={`nav-link ${activeTab === 'downloads' ? 'active' : ''}`} onClick={(e) => handleTabChange(e, 'downloads')}>
                                            Downloads
                                        </a>
                                    </li> */}
                                    <li className="nav-item">
                                        <a href='#' className={`nav-link ${activeTab === 'address' ? 'active' : ''}`} onClick={(e) => handleTabChange(e, 'address')}>
                                            Addresses
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='#' className={`nav-link ${activeTab === 'account' ? 'active' : ''}`} onClick={(e) => handleTabChange(e, 'account')}>
                                             Your Details
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                         className="nav-link " onClick={handleLogout}>Sign Out</button>

                                    </li>
                                </ul>
                            </aside>

                            <div className="col-md-8 col-lg-9">
                                <div className="tab-content">
                                    {activeTab === 'dashboard' && (
                                        <div className={`tab-pane fade ${activeTab === 'dashboard' ? 'show active' : ''}`}>
                                        <p>Hello, <span className="font-weight-normal text-dark">{user?.name || "Unknown"}</span> (not <span className="font-weight-normal text-dark">You</span>? <a href="#" onClick={handleLogout}>Log out</a>) 
                                            <br />
                                            From your account dashboard you can view your <a href="#" className="tab-trigger-link link-underline" onClick={(e) => handleTabChange(e, 'orders')}>recent orders</a>, manage your <a href="#" className="tab-trigger-link" onClick={(e) => handleTabChange(e, 'address')}>shipping and billing addresses</a>, and <a href="#" className="tab-trigger-link" onClick={(e) => handleTabChange(e, 'account')}>edit your password and account details</a>.</p>
                                        </div>
                                    )}
                                    {activeTab === 'orders' && (
                                        <div className={`tab-pane fade ${activeTab === 'orders' ? 'show active' : ''}`}>
                                        <p>No order has been made yet.</p>
                                            <a href="/#/shoplist" className="btn btn-outline-primary-2">
                                                <span>GO SHOP</span><i className="icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    )}
                                    {/* {activeTab === 'downloads' && (
                                        <div className={`tab-pane fade ${activeTab === 'downloads' ? 'show active' : ''}`}>
                                        <p>No downloads available yet.</p>
                                            <a href="category.html" className="btn btn-outline-primary-2">
                                                <span>GO SHOP</span><i className="icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    )} */}
                                    {activeTab === 'address' && (
                                        <div className={`tab-pane fade ${activeTab === 'address' ? 'show active' : ''}`}>
                                        <p>The following addresses will be used on the checkout page by default.</p>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="card card-dashboard">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Billing Address</h3>
                                                            <p>
                                                                User Name<br />
                                                                User Company<br />
                                                                John str<br />
                                                                New York, NY 10001<br />
                                                                1-234-987-6543<br />
                                                                yourmail@mail.com<br />
                                                                <a href="#">Edit <i className="icon-edit"></i></a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card card-dashboard">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Shipping Address</h3>
                                                            <p>
                                                                You have not set up this type of address yet.<br />
                                                                <a href="#">Edit <i className="icon-edit"></i></a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'account' && (
                                        <div className={`tab-pane fade ${activeTab === 'account' ? 'show active' : ''}`}>
                                        <form action="#">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <label>First Name *</label>
                                                        <input type="text" className="form-control" required />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label>Last Name *</label>
                                                        <input type="text" className="form-control" required />
                                                    </div>
                                                </div>
                                                <label>Display Name *</label>
                                                <input type="text" className="form-control" required />
                                                <small className="form-text">This will be how your name will be displayed in the account section and in reviews</small>
                                                <label>Email address *</label>
                                                <input type="email" className="form-control" required />
                                                <label>Current password (leave blank to leave unchanged)</label>
                                                <input type="password" className="form-control" />
                                                <label>New password (leave blank to leave unchanged)</label>
                                                <input type="password" className="form-control" />
                                                <label>Confirm new password</label>
                                                <input type="password" className="form-control mb-2" />
                                                <button type="submit" className="btn btn-outline-primary-2">
                                                    <span>SAVE CHANGES</span>
                                                    <i className="icon-long-arrow-right"></i>
                                                </button>
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
