import React from "react";
import logo from "../Images/sample.png";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                  Grow your bussiness with <strong className="brand-name">Lristechnologies</strong>
                </h1>
                <h2 className="my-3">
                  We are the team of telanted developermaking
                  </h2>
                  <br></br>
                <div className="mt-3">
                  <a href="" className="btn-get-strted">
                    Get started
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
             <img src={logo} className="img-fulid animation" alt="homw-image"/>

                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
