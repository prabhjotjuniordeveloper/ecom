import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../Api/axios/axios_config';
import { useAuth } from '../context/AuthContext';
import { useGoogleLogin } from '@react-oauth/google';
import { useSearchParams } from "react-router-dom";

// import axios from 'axios';

const Login = ({ setIsLoggedIn }) => {
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
    const { login } = useAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const aff_id = searchParams.get("aff_id");

    const [email, setEmail] = useState(''); // email
    const [user, setUser] = useState(""); // user
    const [password, setPassword] = useState(''); // password
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    });  // form data

    const handleChange = (e) => { // handle changes in form data
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }; 


    // register user with simple login function
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if formData has required fields before sending
        if (!formData.name || !formData.username || !formData.email || !formData.password) {
            showToast("error", "Please fill out all fields!");
            return;
        }

        try {
            const response = await axios.post('user/registerUser', { name: formData.name, userName: formData.username, email: formData.email, password: formData.password });

        //  const response = await axios.post("https://e-comm-app-fo7i.onrender.com/user/registerUser", { formData });
         console.log("Affiliate register response : ", response);

            console.log("statasss : ", response.status);
            if (response.status === 200) {
                console.log(response);
                const data = response.data.Message; // Parse the response data
                console.log("datta : ", data);
                console.log('API Response:', data); // Log the response from the API
                toast.success('Account created successfully!');
                setFormData({ name: '', username: '', email: '', password: '' }); // Reset form data
            } else {
                const errorData = response.data.Message;
                console.error('Error Response:', errorData); // Log error response from API
                toast.error(errorData || 'Failed to create account');
            }
        } catch (error) {
            console.error('Network Error:', error.response.data.Message); // Log network or server errors
            toast.error(error.response.data.Message || 'Something went wrong. Please try again.');
        }
    };

    // handle simple login 
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('user/loginUser', { userName: email, password }); // call api for user login with email and password
            // console.log(response.data)
            if (response.data && response.data.token) {  // response according to api's response
                toast.success(`Login successfull ! `);
                login(response.data.token);
                navigate('/');
                setEmail('');
                setPassword('');
            } else {
                toast.error(response.data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('An error occurred during login. Please try again.');
        }
    };

    const fetchUserInfo = async (accessToken) => { // fetch user info from google function
        try {
            const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", { // google api fot fect user
                headers: {
                    Authorization: `Bearer ${accessToken}`, // give access token in headers for user fetching 
                },
            });
            const userInfo = await response.json(); // convert response into json formet
            // console.log("User Info:", userInfo);
            // console.log("AFAFAFFAFF ", aff_id);
            setUser(userInfo); // set user
           const ress = await axios.post('http://localhost:4500/affiliate/registerAffiliateWithGoogle', { firstName: userInfo.given_name, lastName: userInfo.family_name, email : userInfo.email, googleId : userInfo.sub, aff_id : aff_id});
            // ,,,
            if(ress.data.token){
                navigate('/account');
            }
            console.log("response", ress);
        } catch (error) {
            console.error("Error fetching user info:", error); // error handling
        }
    };

    // google response handle function
    const responseGoogle = (authResult) => {
        try {
            console.log("Google Login Success:", authResult);
            fetchUserInfo(authResult.access_token); // call fetch user function
        } catch (error) {
            console.log("Error while requesting google code : ", error); // error handling
        }

    }

    // google login function 
    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle, // handle on sucess function 
        onError: responseGoogle, // handle error
        flow: 'implicit' // google flow for frontend
    })

    const loginWithGoogle = (e) =>{
        e.preventDefault();

    }
    

    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Login</li>
                    </ol>
                </div>
            </nav>

            <div
                className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
                style={{ backgroundImage: `url('assets/images/backgrounds/login-bg.jpg')` }}
            >
                <div className="container">
                    <div className="form-box">
                        <div className="form-tab">
                            <ul className="nav nav-pills nav-fill" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Sign In</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="register-tab-2" data-toggle="tab" href="#register-2" role="tab" aria-controls="register-2" aria-selected="true">Register</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                {/* Sign In Tab */}
                                <div className="tab-pane fade show active" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
                                    <form onSubmit={handleLoginSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="signin-email-2">Email address *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="signin-email-2"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="signin-password-2">Password *</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="signin-password-2"
                                                name="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-footer">
                                            <button type="submit" className="btn btn-outline-primary-2">
                                                <span>LOG IN</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </button>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="signin-remember-2" />
                                                <label className="custom-control-label" htmlFor="signin-remember-2">Remember Me</label>
                                            </div>
                                            <a href="#" className="forgot-link">Forgot Your Password?</a>
                                        </div>
                                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                                        <button className="btn btn-danger" onClick={googleLogin}>
                                            <i className="icon-google"></i> Log In with Google
                                        </button>
                                    </div>
                                    </form>
                                </div>

                                {/* Register Tab */}
                                <div className="tab-pane fade" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="register-name-2">Name *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="register-name-2"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="register-username-2">Username *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="register-username-2"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="register-email-2">Email address *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="register-email-2"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="register-password-2">Password *</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="register-password-2"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-footer">
                                            <button type="submit" className="btn btn-outline-primary-2">
                                                <span>SIGN UP</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </button>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                                <label className="custom-control-label" htmlFor="register-policy-2">
                                                    I agree to the <a href="#">privacy policy</a> *
                                                </label>
                                            </div>
                                        </div>
                                    </form>

                                    {/* Google Sign-Up Button */}
                                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                                        <button className="btn btn-danger" onClick={googleLogin}>
                                            <i className="icon-google"></i> Sign Up with Google
                                        </button>
                                    </div>

                                    {user && (
                                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                                            <h4>Welcome, {user.name}!</h4>
                                            <img src={user.picture} alt="Profile" width="80" style={{ borderRadius: "50%" }} />
                                            <p>Email: {user.email}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </main>

        // <main className="main">
        //     <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        //         <div className="container">
        //             <ol className="breadcrumb">
        //                 <li className="breadcrumb-item">
        //                     <Link to="/">Home</Link>
        //                 </li>
        //                 <li className="breadcrumb-item">
        //                     <a href="#">Pages</a>
        //                 </li>
        //                 <li className="breadcrumb-item active" aria-current="page">
        //                     Login
        //                 </li>
        //             </ol>
        //         </div>
        //     </nav>

        //     <div
        //         className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
        //         style={{ backgroundImage: `url('assets/images/backgrounds/login-bg.jpg')` }}
        //     >
        //         <div className="container">
        //             <div className="form-box">
        //                 <div className="form-tab">
        //                     <ul className="nav nav-pills nav-fill" role="tablist">
        //                         <li className="nav-item">
        //                             <a
        //                                 className="nav-link"
        //                                 id="signin-tab-2"
        //                                 data-toggle="tab"
        //                                 href="#signin-2"
        //                                 role="tab"
        //                                 aria-controls="signin-2"
        //                                 aria-selected="false"
        //                             >
        //                                 Sign In
        //                             </a>
        //                         </li>
        //                         <li className="nav-item">
        //                             <a
        //                                 className="nav-link active"
        //                                 id="register-tab-2"
        //                                 data-toggle="tab"
        //                                 href="#register-2"
        //                                 role="tab"
        //                                 aria-controls="register-2"
        //                                 aria-selected="true"
        //                             >
        //                                 Register
        //                             </a>
        //                         </li>
        //                     </ul>

        //                     <div className="tab-content">
        //                         {/* Sign In Tab */}
        //                         <div className="tab-pane fade" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
        //                             <form>
        //                                 <div className="form-group">
        //                                     <label htmlFor="signin-email-2">Email address *</label>
        //                                     <input type="email" className="form-control" id="signin-email-2" name="email" required />
        //                                 </div>
        //                                 <div className="form-group">
        //                                     <label htmlFor="signin-password-2">Password *</label>
        //                                     <input type="password" className="form-control" id="signin-password-2" name="password" required />
        //                                 </div>
        //                                 <div className="form-footer">
        //                                     <button type="submit" className="btn btn-outline-primary-2">
        //                                         <span>LOG IN</span>
        //                                         <i className="icon-long-arrow-right"></i>
        //                                     </button>
        //                                     <a href="#" className="forgot-link">
        //                                         Forgot Your Password?
        //                                     </a>
        //                                 </div>
        //                             </form>
        //                         </div>

        //                         {/* Register Tab */}
        //                         <div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
        //                             <form>
        //                                 <div className="form-group">
        //                                     <label htmlFor="register-name-2">Name *</label>
        //                                     <input
        //                                         type="text"
        //                                         className="form-control"
        //                                         id="register-name-2"
        //                                         name="name"
        //                                         value={formData.name}
        //                                         onChange={handleChange}
        //                                         required
        //                                     />
        //                                 </div>
        //                                 <div className="form-group">
        //                                     <label htmlFor="register-username-2">Username *</label>
        //                                     <input
        //                                         type="text"
        //                                         className="form-control"
        //                                         id="register-username-2"
        //                                         name="username"
        //                                         value={formData.username}
        //                                         onChange={handleChange}
        //                                         required
        //                                     />
        //                                 </div>
        //                                 <div className="form-group">
        //                                     <label htmlFor="register-email-2">Email address *</label>
        //                                     <input
        //                                         type="email"
        //                                         className="form-control"
        //                                         id="register-email-2"
        //                                         name="email"
        //                                         value={formData.email}
        //                                         onChange={handleChange}
        //                                         required
        //                                     />
        //                                 </div>
        //                                 <div className="form-group">
        //                                     <label htmlFor="register-password-2">Password *</label>
        //                                     <input
        //                                         type="password"
        //                                         className="form-control"
        //                                         id="register-password-2"
        //                                         name="password"
        //                                         value={formData.password}
        //                                         onChange={handleChange}
        //                                         required
        //                                     />
        //                                 </div>
        //                                 <div className="form-footer">
        //                                     <button type="submit" className="btn btn-outline-primary-2">
        //                                         <span>SIGN UP</span>
        //                                         <i className="icon-long-arrow-right"></i>
        //                                     </button>
        //                                 </div>
        //                             </form>

        //                             {/* Google Sign-Up Button */}
        //                             <div style={{ textAlign: "center", marginTop: "20px" }}>
        //                                 <button className="btn btn-danger" onClick={googleLogin}>
        //                                     <i className="icon-google"></i> Sign Up with Google
        //                                 </button>
        //                             </div>

        //                             {user && (
        //                                 <div style={{ textAlign: "center", marginTop: "20px" }}>
        //                                     <h4>Welcome, {user.name}!</h4>
        //                                     <img src={user.picture} alt="Profile" width="80" style={{ borderRadius: "50%" }} />
        //                                     <p>Email: {user.email}</p>
        //                                 </div>
        //                             )}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <ToastContainer position="top-right" autoClose={3000} />
        // </main>
    );
};

export default Login;
