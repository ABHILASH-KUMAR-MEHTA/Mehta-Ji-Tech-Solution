import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  
  const { services = [] } = useAuth();

  console.log("services:", services);

  return (
    <>
      <section className="section-service">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="container grid grid-three-cols">
          {Array.isArray(services) && services.length > 0 ? (
            services.map((curElem, index) => (
              <div className="card" key={index}>
                <div className="card-img">
                  <img
                    className="service"
                    src="/images/register.png"
                    alt="Service"
                    width="500px"
                    height="auto"
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{curElem.provider}</p>
                    <p>{curElem.price}</p>
                  </div>
                  <h2>{curElem.service}</h2>
                  <p>{curElem.Description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No services available.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Service;
