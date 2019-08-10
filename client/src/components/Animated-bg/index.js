import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function AnimatedBG(props) {
    return (
        <div>
            <section className="content">
                <div className="bgPulse">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="container text-center">
                        <br />
                        <h1 className="animated lightSpeedIn" id="beautify">Beautify</h1>

                        <h5 id="subtitle">Health & Wellness On Demand...At Your Home</h5>
                        <br />
                        <Link to="/services"><button className="btn btn-outline-light btn-lg" id="services-btn">
                            BOOK A SERVICE</button></Link>

                        <Link to="providers/new"><button className="btn btn-outline-light btn-lg" id="form-btn">
                            BECOME A PROVIDER</button></Link>

                        <button className="btn btn-outline-light btn-lg" id="form-btn" onClick={props.logout}>LOGOUT</button>


                        <br />
                    </div>
                </div>
            </section>
        </div>


    )
}
export default AnimatedBG;