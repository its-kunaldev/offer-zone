import React from 'react'

import './Signup.css';

import { Link } from 'react-router-dom';

const Signup = () => {

    const registerFormSubmit = (e) => {
        e.preventDefault();
        

        
    }

    return (
        <>
            <div class="signup_container">
                <div class="contact-box">
                    <div class="right"></div>
                    <div class="left">

                        <form onSubmit={registerFormSubmit}>
                            <h2> Sign Up</h2>
                            <input type="text" class="field" name="fullname" placeholder="Your full Name" required />
                            <input type="email" class="field" name="email" placeholder="Your Email" required />
                            <input type="tel" class="field phone" name="phone" pattern="[6-9][0-9]{9}" title="Please enter valid phone number" placeholder="Indian no (+91)" required />
                            <input type="text" class="field typeahead" data-provide="typeahead" placeholder="Enter your state name " name="statename" required />
                            <input type="password" class="field" placeholder="Create Password" name="createpassword" required />
                            <p> Already a Member? <span> <a href="login.html"> Log-In </a> </span>  </p>

                            <Link to={'/login'} class="btn" type="submit">Register as a Consumer</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Signup;