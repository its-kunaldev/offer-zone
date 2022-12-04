import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

import { loginCredentials } from '../../../api/Api';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';
// import { useDispatch } from 'react-redux';
import useHTTP from '../../../hook/use-http';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/uiSlice';

import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaYahoo } from 'react-icons/fa';


const Login = () => {

    const {sendRequest, status, error} = useHTTP(loginCredentials);
    
    const dispatch = useDispatch();
    
    const inputEmail = useRef();
    const inputPassword = useRef();

    const history = useHistory();


    useEffect(() => {
        if(status === 'completed' && !error){
            dispatch(uiActions.loginValidity());
            history.push('/');
        }
    }, [status, error, history, dispatch]);


    if(status === 'pending'){
        return(
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }

    // if(error){
    //     return(
    //         <div className="centered">
    //             <h2>{error}</h2>
    //         </div>
    //     )
    // }

    const loginFormHandler = (e) => {
        e.preventDefault();

        sendRequest({email: inputEmail.current.value,password: inputPassword.current.value});

        inputEmail.current.value = '';
        inputPassword.current.value = '';
    }

    return (
        <>
            <div className="login_container">
                <div className="contact-box">
                    <div className="right">
                        <img src={require('../../../assests//form//login_vector.jpg')} alt="" />
                    </div>
                    <div className="left">
                        <form onSubmit={loginFormHandler} action="login.php" method="POST" >
                            <h2> Log In</h2>
                            <p> Login and Enjoy Additional Features </p>&nbsp;
                            <br />
                            <input ref={inputEmail} type="text" className="field" name="email" placeholder="Your Email"required/>
                            <input ref={inputPassword} type="password" className="field" name="password" placeholder="Enter password" required/>
                            <button className="btn">Login</button>
                            {error && <p className='invalid_credentials'>{error}</p>}
                            <p>Don't have an account? <span> <Link to={'/signup'}>New Account</Link></span></p>
                        </form>
                        <div className="loginDirectlyWith">
                            <button><BsGoogle /></button>
                            <button><FaFacebookF /></button>
                            <button><BsInstagram /></button>
                            <button><FaYahoo /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     )
};

export default Login;