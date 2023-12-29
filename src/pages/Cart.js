import React from "react";

const Cart = () => {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col">
          <div style={{ width: "70%" }} className="p-4 me-auto ms-auto d-flex justify-content-center">
            <ul class="navbar-nav  mb-2 mb-lg-0 flex-row align-items-center" id="">
              <li class="nav-item me-2">
                <a class="nav-link d-flex" href="">
                  <i class="fa-solid fa-bag-shopping"></i>
                  <p style={{ marginBottom: 0 }}> Cart</p>
                </a>
              </li>
              <hr style={{height:2,width:120}} className="me-2"/>
              <li class="nav-item me-2">
                <a class="nav-link d-flex" href="">
                  <i class="fa-solid fa-heart"></i>
                  <p style={{ marginBottom: 0 }}> Address</p>
                </a>
              </li><hr style={{height:2,width:120}} className="me-2"/>
              <li class="nav-item">
                <a class="nav-link d-flex" href="https://next-u.in">
                  <i class="fa-solid fa-user"></i>

                  <p style={{ marginBottom: 0 }}> Payment</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
