import React from "react";
import { useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Signup.css";

import useHTTP from "../../../hook/use-http";
import { addCredentials, getData } from "../../../api/Api";

const Signup = () => {

  const inputName = useRef();
  const inputEmail = useRef();
  const inputNumber = useRef();
  const inputState = useRef();
  const inputPassword = useRef();

  const history = useHistory();


  // fetching data from database
  const { sendRequest, data } = useHTTP(getData);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  // console.log(data);


  
  // send data to the database
  const { sendRequest: sendRequestData, status } = useHTTP(addCredentials);

  const registerFormSubmit = (e) => {
    e.preventDefault();

    const isHad =  data.find(d => d.email === inputEmail.current.value);
    // console.log(isHad);
    if(isHad){
      alert('This email already used!!');
      inputName.current.value = '';
      inputEmail.current.value = '';
      inputNumber.current.value = '';
      inputState.current.value = '';
      inputPassword.current.value = '';
      return;
    }

    sendRequestData({
      name: inputName.current.value,
      email: inputEmail.current.value,
      number: inputNumber.current.value,
      state: inputState.current.value,
      password: inputPassword.current.value,
    });
  };

  useEffect(() => {
    if (status === "completed") {
      history.push("/login");
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
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                ref={inputNumber}
                type="tel"
                className="field phone"
                name="phone"
                pattern="[6-9][0-9]{9}"
                title="Please enter valid phone number"
                placeholder="Indian no (+91)"
                required
              />
              <input
                ref={inputState}
                type="text"
                className="field typeahead"
                data-provide="typeahead"
                placeholder="Enter your state name "
                name="statename"
                required
              />
              <input
                ref={inputPassword}
                type="password"
                className="field"
                placeholder="Create Password"
                name="createpassword"
                required
              />
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
