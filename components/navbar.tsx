import React, { FC, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Head from 'next/head'


const Navbar: FC = () => {
  const [state, setstate] = useState<boolean>(true);
  return (

    <>
     <header>
        <Head>
        <title>simple next.js app by_zafar</title>
        <meta name="keyword" content="next.js"/>
         {/* bootstrap cdn*/}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
         {/* font awsome cdn */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>
      </header>

    <nav className={styles.navbar_postion}>
      {state ? (
        <Defaultnavbar handleclick={() => setstate(!state)} />
      ) : (
        <Searchbar handleclick={() => setstate(!state)} />
      )}
      <NavbarWithHamburger />
    </nav>
    </>
  );
};

function Defaultnavbar({ handleclick }: { handleclick: any }) {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.logo}`}>
        <div>
          <Link href="/">
            <img
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-logo-top.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>

      <div className={`${styles.navitem} d-none d-lg-flex`}>
        <div>
          <Link href="/"> Home</Link>
        </div>
        <div>
          <Link href="https://colorlibsupport.com/" passHref={true}>Support</Link>
        </div>
        <div>
          <Link href="/freethemes">Free themes</Link>
        </div>
        <div>
          <Link href="/freethemes">Premium themses</Link>
        </div>
        <div>
          <Link href="/home">Website Template</Link>
        </div>
        <div>
          <Link href="/home">Blog</Link>
        </div>
        <div>
          <Link href="https://colorlib.com/checkout/my-account/" passHref={true}>Acount</Link>
        </div>
        <div>
          <i className="fas fa-search btn" onClick={handleclick}></i>
        </div>
      </div>
    </div>
  );
}

function Searchbar({
  display,
  placeholder,
  handleclick,
}: {
  display: string;
  placeholder: string;
  handleclick: any;
}) {
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


const NavbarWithHamburger: FC = () => {
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
        <div className={`${styles.closebtn} btn`} onClick={closeNav}>
          &times;
        </div>
        <Link href="/">home</Link>
        <Link href="https://colorlibsupport.com/" passHref={true}>support</Link>
        <Link href="/freethemes">Free themes</Link>
        <Link href="/home">Premium theme</Link>
        <Link href="/home">Website Template</Link>
        <Link href="/home">Blog</Link>
        <Link href="https://colorlib.com/checkout/my-account" passHref={true}>Acount</Link>
        <Searchbar
          display="d-block"
          placeholder="search"
          handleclick={console.log("clicked")}
        />
      </div>
    </div>
  );
};

export default Navbar;
