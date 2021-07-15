import React ,{FC} from "react";
import imageurl from "../imagelink";

const SimmilarTemplate:FC = ()=> {
  return (
    <div>
      <h5 className="border-bottom">Similar Templates</h5>
      <div className="d-flex justify-content-center flex-wrap">
        {imageurl?.map((v,i) => (
          <div key={i}>
            <a href="#">
              <img src={v.imgUrl} alt="" width="345px" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimmilarTemplate;
