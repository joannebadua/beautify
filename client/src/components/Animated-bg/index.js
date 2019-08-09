import React from "react";
import "./style.css";

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

                        <h3 id="subtitle">Health and Wellness On Demand...At Your Home</h3>
                        <br />
                        <button className="btn btn-outline-light btn-lg" id="services-btn">
                            <a href="/services">BOOK A SERVICE</a></button>

                        <button className="btn btn-outline-light btn-lg" id="form-btn">

                            <a href="providers/new">BECOME A PROVIDER</a></button>

                        <button className="btn btn-outline-light btn-lg" id="form-btn" onClick={props.logout}>LOGOUT</button>


                        <br />
                    </div>
                </div>
            </section>
        </div>


    )
}
export default AnimatedBG;