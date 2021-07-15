import React, { FC, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link"


const Navbar:FC = ()=> {
  const [state, setstate] = useState<boolean>(true);
  return (
    <nav className={styles.navbar_postion}>
      {state ? (
        <Defaultnavbar handleclick={() => setstate(!state)} />
      ) : (
        <Searchbar handleclick={() => setstate(!state)} />
      )}
      <Hamburger />
    </nav>
  );
}

function Defaultnavbar({ handleclick }: { handleclick: any }) {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.logo}`}>
        <div>
          <a href="/">
            <img
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-logo-top.png"
              alt="logo"
            />
          </a>
        </div>
      </div>

      <div className={`${styles.navitem} d-none d-lg-flex`}>
        <div>
          <a className="textColor">
           <Link  href="/">home</Link>
          </a>
        </div>
        <div>
          <a className="textColor">
          <Link  href="https://colorlibsupport.com/">Support</Link>
          </a>
        </div>
        <div>
          <a className="textColor">
          <Link  href="/freethemes">Free themes</Link>
          </a>
        </div>
        <div>
          <a className="textColor">
          <Link  href="/freethemes">Premium themses</Link>
          </a>
        </div>
        <div>
          <a className="textColor">
          <Link  href="/home">Website Template</Link>
          </a>
        </div>
        <div>
          <a className="textColor" >
          <Link  href="/home">Blog</Link>
          </a>
        </div>
        <div>
          <a className="textColor">
            <Link  href="https://colorlib.com/checkout/my-account/">Acount</Link>
          </a>
        </div>
        <div>
          <i className="fas fa-search btn" onClick={handleclick}></i>
        </div>
      </div>
    </div>
  );
}

function Searchbar({display,placeholder,handleclick}:{display: string, placeholder: string, handleclick: any}) 
{
  return (
    <div className={`${styles.search_container} ${display}`}>
      <form action="">
        <div className="row">
          <div className="col-11">
            <input
              type="text"
              placeholder={placeholder}
              name="search"
              className={styles.searchBox}
            />
          </div>
          <div className="col-1">
            <div className="my-4 pt-2">
              <i className="fas fa-times fa-2x btn" onClick={handleclick}></i>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

Searchbar.defaultProps = {
  display: "d-none d-lg-block",
  placeholder: "TYPE THEN HIT ENTER TO SEARCH",
};





const Hamburger:FC = ()=> {
  const [width, setwidth] = useState<object>({ width: "" });

  function openNav() {
    setwidth({ width: "300px" });
  }
  function closeNav() {
    setwidth({ width: "0px" });
  }
  return (
    <div className={` d-lg-none  `}>
      <div className={`${styles.logo} p-2 row w-100 bg-white`}>
        <div className="col-6">
          <img
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-logo-top.png"
            alt="logo"
          />
        </div>
        <div className="col-6 d-flex justify-content-end">
          {" "}
          <span className="btn" onClick={openNav}>
            &#9776;
          </span>{" "}
        </div>
      </div>

      <div className={`${styles.mySidenav} ${styles.sidenav}`} style={width}>
        <a href="#" className={styles.closebtn} onClick={closeNav}>
          &times;
        </a>
        <a href="/">home</a>
        <a href="https://colorlibsupport.com/">support</a>
        <a href="/freethemes">Free themes</a>
        <a href="/home">Premium theme</a>
        <a href="/home">Website Template</a>
        <a href="home">Blog</a>
        <a href="https://colorlib.com/checkout/my-account">Acount</a>
        <Searchbar
          display="d-block"
          placeholder="search"
          handleclick={console.log("clicked")}
        />
      </div>
    </div>
  );
}

export default Navbar;
