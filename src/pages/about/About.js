import React from 'react';

import './About.css';

const About = () => {
    return (
        <>
            <div class="background">
                <section class="about">
                    <div class="main">
                        <img src={require('../../assests/about.jpg')} alt='aboutus'/>
                            <div class="all-text">
                                <h1>ABOUT US </h1>
                                <p>
                                    Our vision of a real world to provide platform (OfferZone) for
                                    local retailers where they can showcase their products digitally.
                                    It will help to consumers get to know what's new offers going on their
                                    area. It gives enviornment for consumers to enjoy shopping offline
                                    with extra discounts. It makes strong connection between retailer and
                                    consumers. Our team trying to make this platform as much as better.
                                    For more info, Click on Read More
                                </p>
                                <div class="btn">
                                    <button type="button"> Read More</button>
                                </div>
                            </div>
                    </div>
                </section>
            </div>
        </>
    )
};

export default About;