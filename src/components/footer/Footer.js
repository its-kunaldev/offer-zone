import React from 'react'


import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div class="row">
                    <div class="col">
                        <h2 class="logo">XTYLE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                            dolor sit amet, Lorem ipsum dolor sit
                        </p>
                    </div>
                    <div class="col">
                        <h3>Office <div class="underline"><span></span></div></h3>
                        <p>ITPL Road</p>
                        <p>Whitefield, bangalore</p>
                        <p>Karnataka, Pin 144004, India</p>
                        <p class="email">thakurajput98765@gmail.com</p>
                        <h4>987654321</h4>
                    </div>
                    <div class="col">
                        <h3>Links <div class="underline"><span></span></div></h3>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Contacts</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Newsletter <div class="underline"><span></span></div></h3>
                        <form>
                            <i class="far fa-envelope"></i>
                            <input type="email" placeholder="enter email" required />
                                <button type="submit"><i class="fas fa-arrow-right"></i></button>
                        </form>
                        <div class="icons">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-whatsapp"></i>
                            <i class="fab fa-pinterest"></i>
                        </div>
                    </div>
                </div>
                <hr />
                    <p class="cr">copyright@2021</p>
            </footer>
        </>
    )
};

export default Footer;