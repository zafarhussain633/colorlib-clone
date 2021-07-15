import React ,{FC} from "react";

const  Findmorebar:FC=()=> {
  return (
    <div className="d-flex justify-content-center bgcolor p-4">
      <div className="row   w-75">
        <div className="col-sm pt-3">
          We change everything WordPress. One WordPress theme at a time.
        </div>

        <div className="col-sm d-sm-flex justify-content-end">
          <button
            className=" btn text-white px-5  pt-3 pb-3  "
            style={{ backgroundColor: "#77cc6d" }}
          >
            Find out more!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Findmorebar;
