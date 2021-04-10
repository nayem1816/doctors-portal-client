import React from "react";
import quote from "../../../images/quote.png";

const Testimonial = () => {
  return (
    <section className="d-flex justify-content-center mt-5">
      <div className="row w-75">
        <div className="col-md-9">
          <h5 style={{ color:'#6ACECE'}}>Testimonial</h5>
          <h2 className="mt-3">
            What's Our Patents <br /> Says
          </h2>
        </div>
        <div className="col-md-3">
            <img style={{width:'200px'}} src={quote} alt=""/>
        </div>
      </div>
      <div className="row w-75"></div>
    </section>
  );
};

export default Testimonial;
