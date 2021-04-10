import React from "react";
import dentalCare from "../../../images/dentalCare.png";

const DentalCare = () => {
  return (
    <section className="d-flex justify-content-center mt-5 mb-5">
      <div className="row w-75">
        <div className="col-md-5">
          <img style={{height:'600px', width:'100%'}} className="" src={dentalCare} alt="" />
        </div>
        <div className="col-md-7 d-flex align-items-center">
          <div className="">
            <h2 style={{color:'#203047'}} className="mb-5">
              Exceptional Dental <br /> Care, On Your Teams
            </h2>
            <p className="lh-lg text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse
              autem repellendus, delectus saepe sed vero possimus, doloribus
              quasi nostrum corporis, nulla illo. Dicta sit, aliquid atque ab at
              explicabo quasi iusto exercitationem iure? Architecto dolores
              perspiciatis consequatur voluptatum amet autem eveniet. Quo
              dignissimos quod earum placeat, perspiciatis incidunt iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates modi molestiae eos placeat commodi est praesentium nihil officiis cupiditate? Qui quis eaque temporibus dolorem ut sint quia praesentium neque sapiente.
            </p>
            <button className="btn btn-primary mt-5">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalCare;
