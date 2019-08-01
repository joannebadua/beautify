import React from "react";
import "./style.css";

function SideNav() {
    return (
      <div>
<aside style={{background: 'rgb(204, 214, 193, 0.3)'}}>
        <div className="container p-5">
          <div className="block-form-search">
          <label htmlFor="service"><h5>Choose Your Service</h5></label>
            <div className="form-group">
              <select id="types" name="types" className="form-control">
                <option disabled selected>Type</option>
                <option value="make-up">Make-Up</option>
                <option value="hair-barber">Hair/Barber</option>
                <option value="yoga">Yoga Instructor</option>
                <option value="massage">Massage</option>
                <option value="fitness">Fitness Trainer</option>
                <option value="nutritionist">Nutritionist</option>
                <option value="fashion">Fashion Stylist</option>
              </select>
            </div>
            {/* <div className="form-group">
              <label htmlFor="autofill">Autofill</label>
              <input autoComplete="on" className="form-control autocomplete" type="text" id="autofill" />
            </div> */}
            <br />
            <div className="checkbox">
              <div id="sexes">
              <label htmlFor="location"><h5>Gender</h5></label><br />
                <label className="checkbox-inline">
                  <input type="checkbox" id="sexes" name="sexes" defaultValue={1} />Male
                </label>
                <br />
                <label className="checkbox-inline">
                  <input type="checkbox" id="sexes" name="sexes" defaultValue={2} />Female
                </label>
              </div>
            </div>
            <div className="form-group">
              <br />
              <label htmlFor="time"><h5>Time</h5></label>
              <select id="time" name="time" className="form-control">
                <option disabled selected>Time</option>
                <option value={1}>Early Morning</option>
                <option value={2}>Late Morning</option>
                <option value={3}>Afternoon</option>
                <option value={4}>Evening</option>
                <option value={4}>Night</option>
              </select>
            </div>
            <br />
            
            <div className="form-group">
            <label htmlFor="day"><h5>Day</h5></label>
              <select id="species" name="day" className="form-control">
                <option disabled selected>Day</option>
                <option value={1}>Monday</option>
                <option value={2}>Tuesday</option>
                <option value={3}>Wednesday</option>
                <option value={4}>Thursday</option>
                <option value={5}>Friday</option>
                <option value={6}>Saturday</option>
              </select>
            </div>
            <br />
            
            <div className="form-group">
              <label htmlFor="location"><h5>Location</h5></label>
              <input type="text" className="form-control" id="location" placeholder="Enter your location" />
            </div>
            <input className="btn btn-primary" type="submit" defaultValue="Submit" />
          </div>
        </div>
      </aside>
</div>
);
}

export default SideNav;