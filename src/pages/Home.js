import React, { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [wishList, setWhishList] = useState([true, false, false, false]);
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          
          <div class="carousel-item active ">
            <img
              src={process.env.PUBLIC_URL + "/images/home2.png"}
              className=" w-100 slide-desk"
              alt="..."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/home22.png"}
              class="w-100 slide-mob"
              alt="..."
            />
          </div>
          <div class="carousel-item ">
            <img
              src={process.env.PUBLIC_URL + "/images/home3.png"}
              class="w-100 slide-desk"
              alt="..."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/home33.png"}
              class="w-100 slide-mob"
              alt="..."
            />
          </div>

          <div class="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/images/home1.png"}
              className=" w-100 slide-desk"
              alt="..."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/home11.png"}
              class="w-100 slide-mob"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="pt-md-5"></div>
      <div className="container-fluid py-md-5 py-md-4 py-2 pt-md-4 pt-4">
        <div className="row">
          <div className="title">
            <div class="titleSection">
              <div class="point"></div>
              <div class="hrow" />
            </div>
            <h6 className="display-4">Popular Categories</h6>
            <div class="titleSection">
              <div class="point1"></div>
              <div class="hrow" />
            </div>
          </div>

          <div className="col-md-3 col-6">
            <Link to="/shop">
              <div class="card" style={{ width: "100%" }}>
                <div className="overlay">
                  <h6 className="display-4">Paithani</h6>
                </div>
                <img
                  src="https://mysilklove.com/cdn/shop/products/mslm1_67317ad1-fec9-4ae3-80b2-231a458c9c28_800x.jpg?v=1670046803"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6">
            <Link to="/shop">
              <div class="card" style={{ width: "100%" }}>
                <div className="overlay">
                  <h6 className="display-4">Vintage</h6>
                </div>
                <img
                  src="https://mysilklove.com/cdn/shop/files/MSlf1_150e4c64-2ead-4079-afc9-ac7135b6c074_800x.jpg?v=1689769489"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6">
            <Link to="/shop">
              <div class="card" style={{ width: "100%" }}>
                <div className="overlay">
                  <h6 className="display-4">South Silk</h6>
                </div>
                <img
                  src="https://mysilklove.com/cdn/shop/files/MSlf2_0d88a5e5-f8e3-48c3-b6d1-7623956ddc90_800x.jpg?v=1688638446"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6">
            <Link to="/shop">
              <div class="card" style={{ width: "100%" }}>
                <div className="overlay">
                  <h6 className="display-4">Banarasi Silk</h6>
                </div>
                <img
                  src="https://mysilklove.com/cdn/shop/files/MSLb1_5cda01a0-a43f-41aa-8519-49fa55451682_800x.jpg?v=1699091136"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-4">
            <div class="card" style={{ width: "100%" }}>
              <div className="overlay">
                <h6 className="display-4">Banarasi Silk</h6>
              </div>
              <img
                src="https://mysilklove.com/cdn/shop/files/MSLb1_5cda01a0-a43f-41aa-8519-49fa55451682_800x.jpg?v=1699091136"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "100%" }}>
              <div className="overlay">
                <h6 className="display-4">Raw Silk</h6>
              </div>
              <img
                src="https://mysilklove.com/cdn/shop/files/MSLc2_69d7cb66-2b25-4d38-b4e6-c5f313fd0972_800x.jpg?v=1699091200"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "100%" }}>
              <div className="overlay">
                <h6 className="display-4">Kanjivaram</h6>
              </div>
              <img
                src="https://mysilklove.com/cdn/shop/files/MSLa1_07743cf8-d484-48dc-8040-010869a0183f_800x.jpg?v=1699090506"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div> */}
      </div>
      <div>
        <iframe
          width="100%"
          height={(windowWidth * 50) / 100}
          style={{ marginBottom: 0 }}
          src="https://www.youtube.com/embed/tx80zK9QKDU?controls=0&showinfo=0&modestbranding=1&rel=0"
          title="Saree"
          frameBorder=""
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="container-fluid py-md-5 py-2  pt-md-4 pt-4">
        <div className="row">
          <div className="title">
            <div class="titleSection">
              <div class="point"></div>
              <div class="hrow" />
            </div>
            <h6 className="display-4">Fresh Arrivals </h6>
            <div class="titleSection">
              <div class="point1"></div>
              <div class="hrow" />
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-6">
            <Link className="link" to="/Productdetail">
              <div class="card" style={{ width: "100%" }}>
                <a className="heart" href="#">
                  <i class="fa-regular fa-heart"></i>
                </a>
                <img
                  src="https://assets.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acu7601-1-embroidered-lace-silk-green-saree-with-blouse-sr23275_1_.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-bold">
                    Silk Green Saree in Embroidered
                  </h5>
                  <p class="card-text">Rs 4999/-</p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6">
            <Link className="link" to="/Productdetail">
              <div class="card" style={{ width: "100%" }}>
                <a className="heart" href="#">
                  <i class="fa-regular fa-heart"></i>
                </a>
                <img
                  src="https://assets.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/c/act2025-silk-weaving-yellow-south-indian-saree-with-blouse-sr19079.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-bold">
                    Silk Green Saree in Embroidered
                  </h5>
                  <p class="card-text">Rs 4999/-</p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6">
            <Link className="link" to="/Productdetail">
              <div class="card" style={{ width: "100%" }}>
                <a className="heart" href="#">
                  <i class="fa-regular fa-heart"></i>
                </a>
                <img
                  src="https://assets.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acu8056-1-printed-weaving-silk-saree-in-pink-sr23494.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-bold">
                    Silk Green Saree in Embroidered
                  </h5>
                  <p class="card-text">Rs 4999/-</p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6">
            <Link className="link" to="/Productdetail">
              <div class="card" style={{ width: "100%" }}>
                <a className="heart" href="#">
                  {wishList[0] ? (
                    <i class="fa-solid fa-heart"></i>
                  ) : (
                    <i class="fa-regular fa-heart"></i>
                  )}
                </a>
                <img
                  src="https://assets.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prt9112-1_resham-stone-sequins-embroidered-viscose-saree-in-baby-pink-with-blouse-sr24126_1_.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-bold">
                    Silk Green Saree in Embroidered
                  </h5>
                  <p class="card-text">Rs 4999/-</p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid py-md-5 py-2 pt-md-5 pt-0  pt-md-4 pt-4">
        <div className="row">
          <div className="title">
            <div class="titleSection">
              <div class="point"></div>
              <div class="hrow" />
            </div>
            <h6 className="display-4">You May Like </h6>
            <div class="titleSection">
              <div class="point1"></div>
              <div class="hrow" />
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-6 ">
            <Link className="link" to="/Productdetail">
              <div class="card" style={{ width: "100%" }}>
                <a className="heart" href="#">
                  {wishList[0] ? (
                    <i class="fa-solid fa-heart"></i>
                  ) : (
                    <i class="fa-regular fa-heart"></i>
                  )}
                </a>
                <img
                  src="https://assets.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acu7601-1-embroidered-lace-silk-green-saree-with-blouse-sr23275_1_.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-bold">
                    Silk Green Saree in Embroidered
                  </h5>
                  <p class="card-text">Rs 4999/-</p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6 ">
            <Link className="link" to="/Productdetail">
              <div class="card" style={{ width: "100%" }}>
                <a className="heart" href="#">
                  <i class="fa-regular fa-heart"></i>
                </a>
                <img
                  src="https://assets.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/c/act2025-silk-weaving-yellow-south-indian-saree-with-blouse-sr19079.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-bold">
                    Silk Green Saree in Embroidered
                  </h5>
                  <p class="card-text">Rs 4999/-</p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6 ">
            <Link className="link" to="/Productdetail">
              <div class="card" style={{ width: "100%" }}>
                <a className="heart" href="#">
                  <i class="fa-regular fa-heart"></i>
                </a>

                <img
                  src="https://assets.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acu8056-1-printed-weaving-silk-saree-in-pink-sr23494.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-bold">
                    Silk Green Saree in Embroidered
                  </h5>
                  <p class="card-text">Rs 4999/-</p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6 ">
            <Link className="link" to="/Productdetail">
              <div class="card" style={{ width: "100%" }}>
                <a className="heart" href="#">
                  <i class="fa-regular fa-heart"></i>
                </a>
                <img
                  src="https://assets.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prt9112-1_resham-stone-sequins-embroidered-viscose-saree-in-baby-pink-with-blouse-sr24126_1_.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-bold">
                    Silk Green Saree in Embroidered
                  </h5>
                  <p class="card-text">Rs 4999/-</p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
