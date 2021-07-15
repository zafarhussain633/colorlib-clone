import React,{FC} from "react";
import styles from "../styles/Navbar.module.scss";


const Topbar2:FC = ()=> {
  return (
    <div
      className={`${styles.margin} p-4 d-sm-flex justify-content-around bgcolor`}
    >
      <div className="h5">Templates</div>

      <div className="d-flex ">
        Home » HTML & Bootstrap Website Templates » Blog » Readit Blog
      </div>
    </div>
  );
}

export default Topbar2;
