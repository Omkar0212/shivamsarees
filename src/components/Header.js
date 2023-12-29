import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSerachForm, SetShowSerachForm] = useState(false);

  useEffect(() => {
    // Update the windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-md-2 py-0">
      <div class="container-fluid he">
        <a class="navbar-brand d-flex flex-row align-items-center" href="#">
          <Link to="/">
            <img
              src={logo}
              style={{ marginLeft: 0, borderRadius: 4 }}
              alt="Logo"
            />
            {/* <h6 className="compName" style={{ marginLeft: 6 }}>
            Shivam Sarees
          </h6>*/}
          </Link>
        </a>
        <ul
          style={{
            width: "60%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          class="navbar-nav ms-auto  mb-lg-0 flex-row  my-auto justify-content-space-between align-items-center"
          id="mobHead"
        >
          <li class="nav-item ms-3">
            {showSerachForm ? (
              <a
                onClick={() => {
                  SetShowSerachForm(!showSerachForm);
                }}
                style={{ fontSize: 20, color: "#1D1D1D", marginTop: 6 }}
                class="nav-link d-flex"
                href="#"
              >
                <i class="fa-solid fa-xmark"></i>
              </a>
            ) : (
              <a
                onClick={() => {
                  SetShowSerachForm(!showSerachForm);
                }}
                style={{ fontSize: 20, color: "#1D1D1D", marginTop: 6 }}
                class="nav-link d-flex"
                href="#"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            )}
          </li>
          <li class="nav-item ms-3">
            <Link to="/cart">
              <a
                style={{ fontSize: 24, color: "#1D1D1D" }}
                class="nav-link d-flex"
                href=""
              >
                <i class="fa-solid fa-bag-shopping"></i>
              </a>
            </Link>
          </li>
          <li class="nav-item ms-3">
            <a
              style={{ fontSize: 22, color: "#1D1D1D", marginTop: 4 }}
              class="nav-link d-flex"
              href=""
            >
              <i class="fa-regular fa-heart"></i>
            </a>
          </li>
          <li class="nav-item ms-3 me-2">
            <a
              style={{ fontSize: 20, color: "#1D1D1D" }}
              class="nav-link d-flex"
              href="https://next-u.in"
            >
              <i class="fa-regular fa-user"></i>
            </a>
          </li>
        </ul>
        <button
          class="navbar-toggler"
          type="button"
          style={{ color: "#1D1D1D" }}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class=" sForm" style={{}}>
            <input
              style={{ border: 0, outline: 0 }}
              class="form-control"
              type="search"
              placeholder="Product name"
              aria-label="Search"
            />
            <i id="searchicon" class="fa-solid fa-magnifying-glass"></i>
            {/* <button class="btn btn-dark" type="submit">
              SEARCH
            </button> */}
          </form>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="Desk">
            <li class="nav-item mt-2">
              <a class="nav-link active d-flex" aria-current="page" href="">
                Become a Supplier ?
              </a>
            </li>
            <li class="nav-item">
              <Link to="/cart">
                <a class="nav-link d-flex" href="">
                  <i class="fa-solid fa-bag-shopping"></i>
                  <p style={{ marginBottom: 0 }}> Cart</p>
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex" href="">
                <i class="fa-solid fa-heart"></i>
                <p style={{ marginBottom: 0 }}> Whishlist</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex" href="https://next-u.in">
                <i class="fa-solid fa-user"></i>

                <p style={{ marginBottom: 0 }}> Profile</p>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ps-2" id="mob">
            <li class="nav-item mt-2">
              <a class="nav-link active" aria-current="page" href="">
                Paithani Silk
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <p style={{ marginBottom: 0 }}> Banarasi</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <p style={{ marginBottom: 0 }}> Ilkal Sarees</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex" href="https://next-u.in">
                <p style={{ marginBottom: 0 }}> Designer Sarees</p>
              </a>
            </li>
          </ul>
        </div>
        {showSerachForm ? (
          <form class="mForm" style={{ marginBottom: 8 }}>
            <input
              style={{ paddingLeft: 10 }}
              class="form-control me-2"
              type="search"
              placeholder="Product name"
              aria-label="Search"
            />
            <i id="searchicon" class="fa-solid fa-magnifying-glass"></i>
            {/* <button class="btn btn-dark" type="submit">
              SEARCH
            </button> */}
          </form>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Header;
