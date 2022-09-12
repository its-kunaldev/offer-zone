import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useHTTP from '../../../hook/use-http';

import { getData } from '../../../api/Api';

import './Login.css';

const Login = () => {

    const {sendRequest, status, data} = useHTTP(getData);

    console.log(status,data);
    
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if(status === 'pending'){
        return(
            <div className="centered">loading.....</div>
        )
    }

    return (
        <>
            <div className="login_container">
                <div className="contact-box">
                    <div className="right"></div>
                    <div className="left">
                        <form action="login.php" method="POST" >
                            <h2> Log In</h2>
                            <p> Login and Enjoy Additional Features </p>&nbsp;
                            <p> Create a New <span> <Link to={'/signup'}>Account</Link></span></p>
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