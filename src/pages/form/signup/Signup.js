import React from 'react';
import { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './Signup.css';

import useHTTP from '../../../hook/use-http';
import { addCredentials } from '../../../api/Api';

const Signup = () => {

    const {sendRequest: sendRequestData, status} = useHTTP(addCredentials);

    const inputName = useRef();
    const inputEmail = useRef();
    const inputNumber = useRef();
    const inputState = useRef();
    const inputPassword = useRef();

    const history = useHistory();

    const registerFormSubmit = (e) => {
        e.preventDefault();

        sendRequestData({
            name: inputName.current.value,
            email: inputEmail.current.value, 
            number: inputNumber.current.value, 
            state: inputState.current.value, 
            password: inputPassword.current.value
        });
    }
    
    useEffect(() => {
        if (status === 'completed') {
          history.push('/login');
        }
      }, [status, history]);
    

    return (
        <>
            <div className="signup_container">
                <div className="contact-box">
                    <div className="right"></div>
                    <div className="left">

                        <form onSubmit={registerFormSubmit}>
                            <h2> Sign Up</h2>
                            <input 
                                ref={inputName} 
                                type="text" 
                                className="field" 
                                name="fullname" 
                                placeholder="Your full Name" 
                                required 
                            />
                            <input 
                                ref={inputEmail} 
                                type="email" 
                                className="field" 
                                name="email" placeholder="Your Email" 
                                required />
                            <input 
                                ref={inputNumber} 
                                type="tel" 
                                className="field phone" 
                                name="phone" 
                                pattern="[6-9][0-9]{9}" 
                                title="Please enter valid phone number" 
                                placeholder="Indian no (+91)" 
                                required />
                            <input 
                                ref={inputState} 
                                type="text" 
                                className="field typeahead" 
                                data-provide="typeahead" 
                                placeholder="Enter your state name " 
                                name="statename" 
                                required />
                            <input 
                                ref={inputPassword} 
                                type="password" 
                                className="field" 
                                placeholder="Create Password" 
                                name="createpassword" 
                                required />
                            <p> Already a Member? <span> <a href="login.html"> Log-In </a> </span>  </p>

                            <button className="btn" type="submit">Register as a Consumer</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Signup;