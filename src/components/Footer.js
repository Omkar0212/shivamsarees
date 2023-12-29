import React from "react";
import logo from "../images/logo.png";
const Footer = () => {
  return (
    <div className="container-fluid bg-light p-3 px-0 pt-md-5 pt-3 pb-0 mt-md-0 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={logo} style={{ marginBottom: 10 }} alt="Logo" />
          </div>
          <div className="col-md-3">
            <h6 style={{ fontWeight: "bold", marginBottom: 12 }}>
              Usefull Links
            </h6>
            <ul className="footerNavs">
              <li>
                <p>Bandhani Sarees</p>
              </li>
              <li>
                <p>Exlusive Store</p>
              </li>
              <li>
                <p>Paithani</p>
              </li>
              <li>
                <p>South Silk</p>
              </li>
              <li>
                <p>Handblocked Silk</p>
              </li>
              <li>
                <p>Kanjivaram Saree</p>
              </li>
              <li>
                <p>Banarasi Silk</p>
              </li>
              <li>
                <p>Vintage</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 style={{ fontWeight: "bold", marginBottom: 12 }}>Company</h6>

            <ul className="footerNavs">
              <li>
                <p>About Us</p>
              </li>
              <li>
                <p>Contact Us</p>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p>Terms & Conditons</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 style={{ fontWeight: "bold", marginBottom: 12 }}>
              Social Media
            </h6>
            <div className="social">
              <div>
                <i
                  id="insta"
                  style={{}}
                  class="fa-brands fa-square-instagram"
                ></i>
              </div>
              <div>
                <i id="face" style={{}} class="fa-brands fa-facebook-f"></i>
              </div>
              <div>
                <i id="tweet" style={{}} class="fa-brands fa-twitter"></i>
              </div>
            </div>
            <h6 style={{ fontWeight: "bold", marginBottom: 12 }}>News</h6>
            <form class="d-flex">
              <input
                style={{fontSize:'70%'}}
                class="form-control me-2"
                type="search"
                placeholder="Enter your email"
                aria-label="Search"
              />
              <button style={{fontSize:'50%'}} class="btn btn-dark" type="submit">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"#f0f0f0",marginTop:10}}>
        <p style={{textAlign:'center',marginBottom:0,padding:5,fontSize:"80%"}}>@shivamsarees.com. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
