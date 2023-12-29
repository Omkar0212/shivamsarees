import React from "react";

const ProductDetail = () => {
  return (
    <div className="container-fluid py-md-5 py-0 px-0 px-md-5 px-0">
      <div className="breadcrum" style={{marginLeft:-20,marginBottom:20 }}>
      <small style={{letterSpacing:0.5,fontSize:13}}>Home / Clothing / Women Clothing / Sarees / Banarasi Saree</small>
      
      </div>
      
      <div className="row">
        <div className="col-md-7">
          <div className="conatainer-fluid">
            <div className="row">
              <div className="col-md-10">
                <div className="imgContainer">
                  <img
                    src={process.env.PUBLIC_URL + "/images/saree6.jpg"}
                    class=""
                    alt="..."
                  />
                </div>
              </div>
              <div
                className="col-md-2 py-md-0"
                style={{ marginTop: 0, marginBottom: 2 }}
              >
                <div className="galleryContainer">
                  <div className="imgContainer">
                    <img
                      src={process.env.PUBLIC_URL + "/images/saree3.webp"}
                      class="d-block"
                      alt="..."
                    />
                  </div>
                  <div className="imgContainer">
                    <img
                      src={process.env.PUBLIC_URL + "/images/saree5.webp"}
                      class="d-block"
                      alt="..."
                    />
                  </div>
                  <div className="imgContainer">
                    <img
                      src={process.env.PUBLIC_URL + "/images/saree4.webp"}
                      class="d-block"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 px-4 py-md-0 py-3">
          <div className="productDetail">
            <h5 className="card-title1" style={{ letterSpacing: 0.5 }}>
              BANARASI
            </h5>
            <h6
              className="productName"
              style={{ letterSpacing: 0.5, lineHeight: 1.7 }}
            >
              Navy Blue & Gold-Toned Woven Design Zari Silk Blend Fusion
              Banarasi Saree
            </h6>
            <hr />
            <h6 style={{ fontWeight: "bold" }}>₹ 7999</h6>
            <div className="">
              <h6 className="detailSubTitle" style={{ marginTop: 15,fontWeight: "bold", }}>More Colors</h6>
              <div className="attribute">
                <div className="imgContainer">
                  <img
                    src={process.env.PUBLIC_URL + "/images/saree3.webp"}
                    class="d-block"
                    alt="..."
                  />
                </div>
                <div className="imgContainer">
                  <img
                    src={process.env.PUBLIC_URL + "/images/saree5.webp"}
                    class="d-block"
                    alt="..."
                  />
                </div>
                <div className="imgContainer">
                  <img
                    src={process.env.PUBLIC_URL + "/images/saree4.webp"}
                    class="d-block"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="">
              <h6 className="detailSubTitle" style={{ marginTop: 15,fontWeight: "bold", }}>Select Size</h6>
              <div className="attribute">
                <a className="sizeBtn">One Size</a>
              </div>
            </div>
            <div style={{ paddingTop: 20 }}>
              <div className="container-fluid d-block px-2 pb-3">
                <div className="row">
                  <div className="col-6">
                    <button className="bagBtn" href="">
                      <span style={{marginRight:6}}><i class="fa-solid fa-bag-shopping"></i></span> Add To Bag
                    </button>
                  </div>
                  <div className="col-6 p-0">
                    <button className="wishBtn" href="">
                      <i class="fa-regular fa-heart"></i> Whishlist
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="container-fluid pt-4 px-0 d-flex align-items-center">
              <h6
              className="detailTitle"
                style={{ marginBottom: 0, marginRight: 8, fontWeight: "bold" }}
              >
                DELIVERY OPTIONS
              </h6>{" "}
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div className="py-3">
              <div className="pincodeCheck">
                <input type="number" style={{ border: 0, }} placeholder="Enter a Pincode" />{" "}
                <a href="#" style={{ textDecoration: "none", color: "gray" }}>
                  Check
                </a>
              </div>
              <span style={{ fontSize: 10 }}>
                Please enter PIN code to check Delivery Availability
              </span>
              <br />
              <br />
              <span>100% Original Products</span>
            </div>
            <div className="pDetails">
              <div className="container-fluid py-3 px-0 d-flex align-items-center">
                <h6
                className="detailTitle"
                  style={{
                    marginBottom: 0,
                    marginRight: 8,
                    fontWeight: "bold",
                  }}
                >
                  PRODUCT DETAILS
                </h6>{" "}
                <i class="fa-solid fa-note-sticky"></i>
              </div>
              <div>
                <p className="detailSubTitle" style={{ fontWeight: "bold", marginBottom: 0,color:'#000' }}>
                  Design Details
                </p>
                <p>
                  Blue and cream-coloured kanjeevaram saree Ethnic motifs woven
                  design saree with woven design border Has zari detail
                </p>
               
                <p>
                  The saree comes with an unstitched blouse piece The blouse
                  worn by the model might be for modelling purpose only. Check
                  the image of the blouse piece to understand how the actual
                  blouse piece looks like.
                </p>
                <p className="detailSubTitle" style={{ fontWeight: "bold", marginBottom: 0,color:'#000' }}>
                  Size & Fit
                </p>
                <ul
                  style={{ paddingLeft: 0, marginLeft: 0, listStyle: "none" }}
                >
                  <li>Length: 5.5 metres plus 0.8 metre blouse piece</li>
                  <li>Width: 1.06 metres (approx.)</li>
                </ul>
                <p className="detailSubTitle" style={{ fontWeight: "bold", marginBottom: 0,color:'#000' }}>
                  Material & Care
                </p>
                <ul
                  style={{ paddingLeft: 0, marginLeft: 0, listStyle: "none" }}
                >
                  <li>Silk Blend</li>
                  <li>Hand Wash</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
