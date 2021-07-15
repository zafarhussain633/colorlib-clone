import React,{FC}from "react";

const Socialmediabtn:FC = ()=> {
  return (
    <div>
      <button className="btn btn-primary m-1">
        <i className="fab fa-facebook-f">
          <a href="https://www.facebook.com/"> share</a>
        </i>
      </button>
      <button className="btn btn-info text-white m-1">
        <i className="fab fa-twitter">
          <a href="https://twitter.com/intent/tweet?text=Readit%20Blog&url=https%3A%2F%2Fcolorlib.com%2Fwp%2Ftemplate%2Freadit&via=colorlib">
            {" "}
            tweet
          </a>
        </i>
      </button>
      <button className="btn btn-danger text-white m-1">
        <i className="fab fa-pinterest">
          <a href="https://bit.ly/2Te2lNA"> pin it</a>
        </i>
      </button>
    </div>
  );
}

export default Socialmediabtn;
