import React from 'react'

import styles from './Plans.module.css';

const Plans = () => {
    return (
        <>
            <hr className='hr' />
            <section className={`${styles.subsciptions_plans}`}>
                <h2>Free 14-Days Trial</h2>
                <p>Get Started now. No Credit Card Required</p>
                <div className={styles.allPlans}>
                    <div className={styles.plan}>
                        <div className={styles.plan_name}>
                            <h2>Basic</h2>
                            <p>₹ 5/<span>mo</span></p>
                            <hr />
                        </div>
                        <div className={styles.plan_features}>
                            <ul>
                                <li>umlimited offers</li>
                                <li>Life time access to the ofers</li>
                                <li>umlimited offers</li>
                                <li>umlimited offers</li>
                            </ul>
                        </div>
                        <div className={styles.explore_btns}>
                            <button className={styles.tryFree_btn}>Try it Free</button>
                            <button className={styles.getPlan_btn}>Choose Plan</button>
                        </div>
                    </div>
                    <div className={styles.plan}>
                        <div className={styles.plan_name}>
                            <h2>Premium</h2>
                            <p>₹ 50/<span>mo</span></p>
                            <hr />
                        </div>
                        <div className={styles.plan_features}>
                            <ul>
                                <li>umlimited offers</li>
                                <li>Life time access to the ofers</li>
                                <li>umlimited offers</li>
                                <li>umlimited offers</li>
                                <li>umlimited offers</li>
                                <li>umlimited offers</li>
                            </ul>
                        </div>
                        <div className={styles.explore_btns}>
                            <button className={styles.tryFree_btn}>Try it Free</button>
                            <button className={styles.getPlan_btn}>Choose Plan</button>
                        </div>
                        <span className={styles.header}>Premium <br/> plan</span>
                    </div>
                     <div className={styles.plan}>
                        <div className={styles.plan_name}>
                            <h2>Enterprise</h2>
                            <p>₹ 25/<span>mo</span></p>
                            <hr />
                        </div>
                        <div className={styles.plan_features}>
                            <ul>
                                <li>umlimited offers</li>
                                <li>Life time access to the ofers</li>
                                <li>umlimited offers</li>
                                <li>umlimited offers</li>
                            </ul>
                        </div>
                        <div className={styles.explore_btns}>
                            <button className={styles.tryFree_btn}>Try it Free</button>
                            <button className={styles.getPlan_btn}>Choose Plan</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Plans;