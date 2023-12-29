import React, { useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [wishList, setWhishList] = useState([true, false, false, false]);
  return (
    <div className="container-fluid pb-4">
      <div className="row pt-4 px-0">
        <small style={{ letterSpacing: 0.5 }}>Home / paithani</small>
        <div className="sort" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingBottom:8}}>
        <h6 style={{ marginTop: 20, fontWeight: "bold" }}>Filters</h6>
        <select style={{padding:4}}>
            <option>Popular</option>
            <option>New Collection</option>
        </select>
        </div>
       
        <hr style={{ height: 0.09, color: "gray" }} />
      </div>
      <div className="row">
        <div className="col-md-2 pe-4   " style={{}}>
            <div className="filtersection">

            
          <div className="filter py-2">
            <strong style={{ marginBottom: 20 }}>CATEGORIES</strong>
            <div className="filterGroup pt-3">
              <div className="group">
                <input type="checkbox" />
                <small style={{ marginLeft: 8 }}> Paithani</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <small style={{ marginLeft: 8 }}> Banarasi</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <small style={{ marginLeft: 8 }}> Silk</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <small style={{ marginLeft: 8 }}> Ilkal Sarees</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <small style={{ marginLeft: 8 }}> Gujarati Silk</small>
              </div>
            </div>
            <hr style={{height:0.1}}/>
          </div>
          <div className="filter py-2">
            <strong style={{ marginBottom: 20 }}>BRANDS</strong>
            <div className="filterGroup pt-3">
              <div className="group">
                <input type="checkbox" />
                <small style={{ marginLeft: 8 }}> Mitera</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <small style={{ marginLeft: 8 }}> Kalani</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <small style={{ marginLeft: 8 }}> ANouk</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <small style={{ marginLeft: 8 }}>Sarees Mall</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <small style={{ marginLeft: 8 }}>Saadhvi</small>
              </div>
            </div>
            <hr style={{height:0.1}}/>
          </div>
          <div className="filter py-2">
            <strong style={{ marginBottom: 20 }}>COLORS</strong>
            <div className="filterGroup pt-3">
              <div className="group">
                <input type="checkbox" />
                <div style={{backgroundColor:'blue',width:15, height:15,borderRadius:7.5,marginLeft:8}}></div>
                <small style={{ marginLeft: 8 }}> Blue</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <div style={{backgroundColor:'green',width:15, height:15,borderRadius:7.5,marginLeft:8}}></div>
                <small style={{ marginLeft: 8 }}> Green</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <div style={{backgroundColor:'red',width:15, height:15,borderRadius:7.5,marginLeft:8}}></div>
                <small style={{ marginLeft: 8 }}> Red</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <div style={{backgroundColor:'yellow',width:15, height:15,borderRadius:7.5,marginLeft:8}}></div>
                <small style={{ marginLeft: 8 }}>Yellow</small>
              </div>
              <div className="group">
                <input type="checkbox" />
                <div style={{backgroundColor:'lightblue',width:15, height:15,borderRadius:7.5,marginLeft:8}}></div>
                <small style={{ marginLeft: 8 }}>Light Blue</small>
              </div>
            </div>
            <hr style={{height:0.1}}/>
          </div></div>
        </div>
        <div className="col-md-10">
          <div className="container-fluid py-0 px-0">
            <div className="row">
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
            <div className="row">
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
            <div className="row">
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
            <div className="row">
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
            <div className="row">
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
            <div className="row">
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
            <div className="row">
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
              <div className="col-md-3 col-6 px-1">
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
      </div>
    </div>
  );
};
export default Shop;
