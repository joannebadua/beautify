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

                        <h5 id="subtitle">Health & Wellness On Demand...At Your Home</h5>
                        <br />
                        <a href="/services"><button className="btn btn-outline-light btn-lg" id="services-btn">
                            BOOK A SERVICE</button></a>

                        <a href="providers/new"><button className="btn btn-outline-light btn-lg" id="form-btn">
                            BECOME A PROVIDER</button></a>

                        <button className="btn btn-outline-light btn-lg" id="form-btn" onClick={props.logout}>LOGOUT</button>


                        <br />
                    </div>
                </div>
            </section>
        </div>


    )
}
export default AnimatedBG;