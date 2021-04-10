import React from "react";
import doctorAppointment from "../../../images/doctorAppointment.png";
import './Appointment.css';

const Appointment = () => {
  return (
    <section className="appointment-container">
      <div style={{height:'500px'}} className="row d-flex justify-content-center">
        <div style={{height:'500px'}} className="col-md-5 text-center">
          <img
            className="img-fluid appointment-doctor-img"
            src={doctorAppointment}
            alt=""
          />
        </div>
        <div style={{height:'500px'}} className="col-md-6 d-flex align-items-center">
          <div className="text-white">
            <h5 style={{ color: "#69CBCB" }}>APPOINTMENT</h5>
            <h2 className="mb-5">
              Make an appointment <br /> Today
            </h2>
            <p className="lh-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse
              autem repellendus, delectus saepe sed vero possimus, doloribus
              quasi nostrum corporis, nulla illo.
            </p>
            <button className="btn btn-primary mt-5">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
