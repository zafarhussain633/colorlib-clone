import React,{FC}from "react";

const Topbar:FC = ()=>{
  return (
    <div className=" p-3 d-sm-flex justify-content-around  bg-primary text-white">
      <div className="text-center">
        <i className="fab fa-wordpress-simple"></i>
        <b> Our free WordPress themes are downloaded over 5 MILLION times.</b>
        <a href="https://colorlib.com/wp/themes/" className="subtextColor">
          {" "}
          Get them now!
        </a>
      </div>

      <div className="d-flex justify-content-center">
        <i className="fab m-1 fa-twitter"></i>
        <i className="fab m-1 fa-facebook-f"></i>
        <i className="fab m-1 fa-instagram"></i>
        <i className="fab m-1 fa-linkedin-in"></i>
        <i className="fab m-1 fa-youtube"></i>
        <i className="fab m-1 fa-github"></i>
      </div>
    </div>
  );
}

export default Topbar;
