import { useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

import useHTTP from '../../../hook/use-http';
import { getData } from '../../../api/Api';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/uiSlice';


const Login = () => {

    const {sendRequest, status, data, error} = useHTTP(getData, true);
    const inputEmail = useRef();
    const inputPassword = useRef();
    const history = useHistory();

    const isCredentialValid = useSelector(state => state.uiSliceReducer.isCredentialValid);
    const dispatch = useDispatch();

    // console.log(status,data);
    
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if(status === 'pending'){
        return(
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }

    if(error){
        return(
            <div className="centered">
                <h2>{error}</h2>
            </div>
        )
    }

    const loginFormHandler = (e) => {
        e.preventDefault();

        if (data.some(d => d.email === inputEmail.current.value && d.password === inputPassword.current.value)){
            dispatch(uiActions.loginValidity());
            dispatch(uiActions.checkValidity(true));
            history.push('/');
            return;
        }

        dispatch(uiActions.checkValidity(false));
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
                            <input ref={inputEmail} type="text" className="field" name="email" placeholder="Your Email" />
                            <input ref={inputPassword} type="password" className="field" name="password" placeholder="Enter password" />
                            <button className="btn">Login</button>
                            {!isCredentialValid && <p style={ !isCredentialValid ? {animation: 'vibrate 0.1s ease-in'} : {}} className='invalid_credentials'>Invalid email/password</p>}
                        </form>
                    </div>
                </div>
            </div>
        </>
     )
};

export default Login;