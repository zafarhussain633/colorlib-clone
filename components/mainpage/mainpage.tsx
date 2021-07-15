import React,{FC} from "react";
import Pricing from "./pricing";
import Socialmediabtn from "./socialmediabtn";
import Template from "./template";
import SimmilarTemplate from "./similarTemplate";
import Findmorebar from "./findmorebar";


const Mainpage:FC = ()=> {
  return (
    <>
      <div className="container margin">
        <MainpageContent />
        <Template />
        <Pricing />
        <Socialmediabtn />
        <SimmilarTemplate />
      </div>
      <Findmorebar />
    </>
  );
}

const MainpageContent:FC = ()=>{
  return (
    <>
      <h3>Readit Blog</h3>
      <div className="text-secondary">
        <time>
          <i className="far fa-clock m-2"> June 16,2021 </i>
        </time>
        <i className="far fa-user m-2">
          <a href="https://colorlib.com/wp/aigars-silkalns/">
            {" "}
            Aigars Silkalns
          </a>
        </i>
        <i className="far fa-folder m-2"> Blog</i>
      </div>

      <div>
        <img
          src="https://colorlib.com/wp/wp-content/uploads/sites/2/readit-free-template.jpg.webp"
          alt="def image"
          className="img-fluid"
        />
      </div>
    </>
  );
}

export default Mainpage;
