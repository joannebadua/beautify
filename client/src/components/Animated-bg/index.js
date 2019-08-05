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

                    <a href="/services"><button className="btn btn-outline-light btn-lg" id="survey-btn"><span
                        className="fa fa-th-list"></span> BOOK A SERVICE</button></a>

                    <a href="/create"><button className="btn btn-outline-light btn-lg" id="survey-btn"><span
                        className="fa fa-th-list"></span> ADD A SERVICE</button></a>

                    <br />
                </div>
            </div>
      </section>


    )
}
export default AnimatedBG;