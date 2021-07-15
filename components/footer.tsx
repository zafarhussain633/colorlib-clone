import React ,{FC} from "react";
import Socialmediabtn from "./mainpage/socialmediabtn";

const Footer:FC = ()=> {
  return (
    <footer className="bg-dark text-light pt-4">
      <div className="row footer-container">
        <div className="col-sm-4 text-center mb-4">
          <div>
            <img
              className="text-center mb-4"
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-logo-top.png"
              alt="logo"
              width="180px"
            />
          </div>
          <p>We change everything WordPress.</p>
          <p>One WP theme at a time.</p>
          <Socialmediabtn />
        </div>

        <div className="col-sm-4 mb-4">
          <h3 className="text-white mt-0">useful</h3> <hr />
          <p>
            <a href="#">link 1</a>
          </p>
          <hr />
          <p>
            <a href="#">link 2</a>
          </p>
          <hr />
          <p>
            <a href="#">link 3</a>
          </p>
          <hr />
          <p>
            <a href="#">link 4</a>
          </p>
          <hr />
          <p>
            <a href="#">link 1</a>
          </p>
          <hr />
          <p>
            <a href="#">link 2</a>
          </p>
          <hr />
          <p>
            <a href="#">link 3</a>
          </p>
          <hr />
          <p>
            <a href="#">link 4</a>
          </p>
          <hr />
        </div>

        <div className="col-sm-4 mb-4">
          <h3 className="text-white mt-0">free themes</h3> <hr />
          <p>
            <a href="#">link 1</a>
          </p>
          <hr />
          <p>
            <a href="#">link 2</a>
          </p>
          <hr />
          <p>
            <a href="#">link 3</a>
          </p>
          <hr />
          <p>
            <a href="#">link 4</a>
          </p>
          <hr />
          <p>
            <a href="#">link 1</a>
          </p>
          <hr />
          <p>
            <a href="#">link 2</a>
          </p>
          <hr />
          <p>
            <a href="#">link 3</a>
          </p>
          <hr />
          <p>
            <a href="#">link 4</a>
          </p>
          <hr />
        </div>
      </div>
      <p className="text-center p-4 mt-4 footer-bottom">
        Copyright 2013-2021 colorlib.com | operated by Divilab LLC Privacy
        Policy | Site Terms & Disclosures.Hosted by Kinsta
      </p>
    </footer>
  );
}

export default Footer;
