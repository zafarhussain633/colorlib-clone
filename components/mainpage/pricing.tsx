import React,{FC} from "react";


const Pricing:FC=()=> {
  return (
    <div>
      <h3 className="border-bottom">
        <span className="border-bottom border-primary">
          Pricing Readit Blog
        </span>
      </h3>
      <div className="row text-center price">
        <div className="col-lg-3 d-none d-lg-block mb-4 mb-md-0 purchase_advantages">
          <li>
            PREMIUM SUPPORT
            <i
              className="fas fa-question-circle m-3 text-success"
              data-toggle="tooltip"
              data-placement="top"
              title="you will get updated templet"
            ></i>
          </li>
          <li>
            TEMPLATE UPDATES
            <i
              className="fas fa-question-circle m-3 text-success"
              data-toggle="tooltip"
              data-placement="top"
              title="you will get updated templet"
            ></i>
          </li>
          <li>
            SUPPORT & UPDATES
            <i
              className="fas fa-question-circle m-3 text-success"
              data-toggle="tooltip"
              data-placement="top"
              title="you will get updated templet"
            ></i>
          </li>
          <li>
            ACCESS ALL TEMPLATES
            <i
              className="fas fa-question-circle m-3 text-success"
              data-toggle="tooltip"
              data-placement="top"
              title="you will get updated templet"
            ></i>
          </li>
        </div>

        <div className="col-lg-3 bgcolor mb-4 mb-md-0 p-1">
          <div className="price_title">SINGLE</div>
          <div className="price_dollor">
            <sup>$</sup>19
          </div>
          <div className="mt-5">
            <li className="bgcolor">
              <i className="fas fa-check text-success"></i>{" "}
              <span className=" d-md-none"> PREMIUM SUPPORT</span>
            </li>
            <li>
              <i className="fas fa-check text-success"></i>
              <span className=" d-md-none"> TEMPLATE UPDATES</span>
            </li>
            <li className="bgcolor">FOR 1 YEAR</li>
            <li>
              <i className="fas fa-times text-danger pt-3"></i>{" "}
              <span className=" d-md-none"> ACCESS ALL TEMPLATES</span>
            </li>
          </div>
          <div>
            <button className="buy_btn">BUY NOW</button>
          </div>
        </div>

        <div className="col-lg-3 shadow mb-4 mb-md-0 p-1">
          <div className="price_title">MEMBERSHIP</div>
          <div className="price_dollor">
            <sup>$</sup>129
          </div>
          <div className="mt-5">
            <li className="bgcolor">
              <i className="fas fa-check text-success "></i>
              <span className=" d-md-none"> PREMIUM SUPPORT</span>
            </li>
            <li>
              <i className="fas fa-check text-success "></i>
              <span className=" d-md-none"> TEMPLATE UPDATES</span>
            </li>
            <li className="bgcolor">FOR 1 YEAR</li>
            <li>FOR 1 YEAR</li>
          </div>
          <div>
            <button className="buy_btn">BUY NOW</button>
          </div>
        </div>

        <div className="col-lg-3 bgcolor  mb-4 mb-md-0 p-1">
          <div className="price_title">LIFETIME</div>
          <div className="price_dollor">
            <sup>$</sup>349
          </div>
          <div className="mt-5">
            <li className="bgcolor">
              <i className="fas fa-check text-success"></i>
              <span className=" d-md-none"> PREMIUM SUPPORT</span>
            </li>
            <li>
              <i className="fas fa-check text-success"></i>
              <span className=" d-md-none"> TEMPLATE UPDATES</span>
            </li>
            <li className="bgcolor">FOR LIFE</li>
            <li>FOR LIFE</li>
          </div>
          <div>
            <button className="buy_btn">BUY NOW</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Pricing;
