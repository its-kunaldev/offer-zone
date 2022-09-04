import React from 'react'
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="row">
                    <div className="col">
                        <h2 className="logo">Offer<span>Zone</span> </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                            dolor sit amet, Lorem ipsum dolor sit
                        </p>
                    </div>
                    <div className="col">
                        <h3>Site <div className="underline"><span></span></div></h3>
                        <p>ITPL Road</p>
                        <p>Whitefield, bangalore</p>
                        <p>Karnataka, Pin 144004, India</p>
                        <Link className="email">officialofferszone@gmail.com</Link>
                        <h4>+91  987654321</h4>
                    </div>
                    <div className="col">
                        <h3>Links <div className="underline"><span></span></div></h3>
                        <ul>
                            <li><Link to={'/about-us'}>About us</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li><Link to={'/termsandcondition'}>Terms &amp; conditions</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Contact Us <div className="underline"><span></span></div></h3>
                        <form>
                            <i className="far fa-envelope"></i>
                            <input type="text" placeholder="enter name" required />
                            <hr />
                            <input type="email" placeholder="enter email" required />
                            <hr />
                            <textarea name="message" id="" cols="30" rows="3" placeholder='enter message'></textarea>
                            <hr />
                            <button type="submit">Submit</button>
                        </form>
                        <div className="icons">
                            <Link><img src={require('../../assests/social icons/instagram.png')} alt="instgram" /></Link>
                            <Link><img src={require('../../assests/social icons/facebook.png')} alt="facebook" /></Link>
                            <Link><img src={require('../../assests/social icons/youtube.png')} alt="youtube" /></Link>
                            <Link><img src={require('../../assests/social icons/mail.png')} alt="mail" /></Link>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="cr">copyright offerZone @2022</p>
            </footer>
        </>
    )
};

export default Footer;