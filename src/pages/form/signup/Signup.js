import React from "react";
import { useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { signinCredentials } from "../../../api/Api";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import useHTTP from "../../../hook/use-http";

import "./Signup.css";

const Signup = () => {

  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();

  const history = useHistory();


  // send data to the database
  const { sendRequest: sendData, status, error } = useHTTP(signinCredentials);
  // console.log(error);

  useEffect(() => {
    if (status === "completed" && !error) {
      history.push("/login");
    }
  }, [status, history, error]);



  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }



  const registerFormSubmit = (e) => {
    e.preventDefault();

    sendData({ email: inputEmail.current.value, password: inputPassword.current.value });

  };

  return (
    <>
      <div className="signup_container">
        <div className="contact-box">
          <div className="right">
            <img src={require('../../../assests//form//signup.jpg')} alt="" />
          </div>
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
                name="email"
                placeholder="Your Email"
                required
              />
              {/* <input
                ref={inputNumber}
                type="tel"
                className="field phone"
                name="phone"
                pattern="[6-9][0-9]{9}"
                title="Please enter valid phone number"
                placeholder="Indian no (+91)"
                required
              /> */}
              {/* <input
                ref={inputState}
                type="text"
                className="field typeahead"
                data-provide="typeahead"
                placeholder="Enter your state name "
                name="statename"
                required
              /> */}
              <input
                ref={inputPassword}
                type="password"
                className="field"
                placeholder="Create Password"
                name="createpassword"
                required
              />
              {error && <h5 className="error_message">{error}</h5>}
              <p>
                Already a Member?
                <span>
                  <Link to={'/login'}> Log-In </Link>
                </span>
              </p>

              <button className="btn" type="submit">
                Register as a Consumer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
