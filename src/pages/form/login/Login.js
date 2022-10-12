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
                    <div className="right"></div>
                    <div className="left">
                        <form onSubmit={loginFormHandler} action="login.php" method="POST" >
                            <h2> Log In</h2>
                            <p> Login and Enjoy Additional Features </p>&nbsp;
                            <p> Create a New <span> <Link to={'/signup'}>Account</Link></span></p>
                            <br />
                            <input ref={inputEmail} type="text" className="field" name="email" placeholder="Your Email"required/>
                            <input ref={inputPassword} type="password" className="field" name="password" placeholder="Enter password" required/>
                            <button className="btn">Login</button>
                            {error && <p className='invalid_credentials'>{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </>
     )
};

export default Login;