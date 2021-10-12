import React from 'react'
import img from "../Images/about-img.png";
const About = () => {   
    return (
      <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                 <strong className="brand-name"> About Lris Technologies...</strong>
                    </h1>  
                <h2 className="my-3">
                Lris Technologies has pioneered IT services in Mohali, consistently delivering business value with the latest technology.
                    </h2>
                    <br></br>
                <div className="mt-3">
                  <a href="" className="btn-get-strted">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
             <img src={img} className="img-fulid animation" alt="homw-image"/>

                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};

export default About;