import React from "react";
import "./style.css";

function AnimatedBG() {
    return (
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
                    <h1 className="animated lightSpeedIn" id="friend">Beautify</h1>

                    <h3 id="subtitle">Health and Wellness On Demand...At Your Home</h3>
                    <br />
                    <button className="btn btn-outline-light btn-lg" id="services-btn">
                        <a href="/services">BOOK A SERVICE</a></button>

                    <button className="btn btn-outline-light btn-lg" id="form-btn">
                        <a href="/create">BECOME A PROVIDER</a></button>
                    <br />
                </div>
            </div>
        </section>


    )
}
export default AnimatedBG;