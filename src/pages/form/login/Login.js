import React from 'react';

import './Login.css';

const Login = () => {
    return (
        <>
            <div className="login_container">
                <div className="contact-box">
                    <div className="right"></div>
                    <div className="left">
                        <form action="login.php" method="POST" >
                            <h2> Log In</h2>
                            <p> Login and Enjoy Additional Features </p>&nbsp;
                            <p> Create a New <span> <a href="index.php">Account</a></span></p>
                            <br />
                            <input type="text" className="field" name="email" placeholder="Your Email" />
                            <input type="password" className="field" name="password" placeholder="Enter password" />
                            <button className="btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
     )
};

export default Login;