import React, {FC } from 'react'
import imageurl from '../imagelink';



function DefaultHome({ handleclick }: { handleclick: any }) {
    return (
      <div className="container margin">
        <div className="row">
          <div className="col-lg-9 d-flex justify-content-center flex-wrap">
            <Card handleclick={handleclick} />
          </div>
  
          <div className="col-lg-3 d-none d-lg-block">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
  
  function Card({ handleclick }: { handleclick: any }) {
    return (
      <>
        {imageurl?.map((v, i) => (
          <div className="m-1 card-width" key={i}>
            <img
              className="card-img-top btn"
              src={v.imgUrl}
              alt="Card image cap"
              onClick={handleclick}
            />
            <div className="card-body">
              <h5 className="card-title">{v.title}</h5>
              <p className="card-text">{v.description}</p>
              <a href="#" className="btn btn-primary" onClick={handleclick}>
                Read more
              </a>
            </div>
          </div>
        ))}
      </>
    );
  }
  
  const Sidebar:FC = ()=> {
    return (
      <>
        <div>
          <input
            type="text"
            placeholder="search"
            name="search"
            className="w-100 p-2"
          />
        </div>
        <h5>follow us</h5>
        <div>
          <i className="fab mx-1 fa-facebook-square text-info fa-3x"></i>
          <i className="fab mx-1 fa-twitter-square text-primary fa-3x"></i>
          <i className="fab mx-1 fa-linkedin text-primary fa-3x"></i>
          <i className="fab mx-1 fa-instagram-square text-danger fa-3x"></i>
          <i className="fab mx-1 fa-github-square fa-3x"></i>
        </div>
  
        <div>
          {imageurl?.map((v, i) => (
            <div className="row mt-4" key={i}>
              <div className="col-4">
                <img src={v.imgUrl} alt="image" width="80px" />
              </div>
              <div className="col-8">
                <div>lorem10 jfem10 jfdj j hgt ojuithdd l orem uyttgi</div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  const ExpandCard:FC = ()=> {
    return (
      <div className="margin container">
        <div>
          <img
            className="img-fluid"
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/travel-agency-wordpress-themes-2.jpg.webp"
            alt="image"
          />
        </div>
  
        <div className="text-center bg-primary p-2 text-white mt-2">
          lorem10 lor lorem10 lorem vdfii io gifd lorem10 lorem vdfii io gifd em
          vdfii io gifd{" "}
        </div>
  
        <div className="row">
          <div className="col-lg-9">
            <h3>30 Customizable Travel Agency WordPress Themes 2021</h3>
  
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
            <p>
              <b>
                Are you building a travel agency website and looking for a
                WordPress theme to speed up the process? We have got you covered!
                All the best travel agency WordPress themes in one place.
              </b>
            </p>
            <p>
              Every year, the number of people who travel continues to increase at
              an exponential pace. This has led to the rapid development of
              countries and popular travel destinations across the globe. The best
              part about travel from a business perspective is the fact that
              travel is such a diverse and lucrative business niche.
            </p>
            <p>
              Every year, the number of people who travel continues to increase at
              an exponential pace. This has led to the rapid development of
              countries and popular travel destinations across the globe. The best
              part about travel from a business perspective is the fact that
              travel is such a diverse and lucrative business niche.
            </p>
  
            <p>
              Every year, the number of people who travel continues to increase at
              an exponential pace. This has led to the rapid development of
              countries and popular travel destinations across the globe. The best
              part about travel from a business perspective is the fact that
              travel is such a diverse and lucrative business niche.
            </p>
  
            <p>
              Every year, the number of people who travel continues to increase at
              an exponential pace. This has led to the rapid development of
              countries and popular travel destinations across the globe. The best
              part about travel from a business perspective is the fact that
              travel is such a diverse and lucrative business niche.
            </p>
          </div>
  
          <div className="col-lg-3 d-none d-lg-block mt-3">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }

  export {DefaultHome ,Card , Sidebar , ExpandCard}
