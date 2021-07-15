import React,{FC} from "react";
import Home from "./home";

const Freethemes:FC = ()=> {
  return (
    <div>
      <div className=" container margin ">
        <h6 className="text-center">
          We change everything WordPress. One WP theme at a time.{" "}
        </h6>
        <p>
          These themes are not just to be showcased, you can also download them
          and use for your free and commercial websites. We don’t charge for
          these themes, but we would appreciate if you would leave a link back
          to our website. This is not asking a lot, and we are sure you will be
          OK with our request.
        </p>
        <p>
          Please have a look at our free WordPress themes. We have made sure
          that these themes are highly customizable and have their premium look
          and feel.
        </p>
      </div>
      <Home />
    </div>
  );
}

export default Freethemes;
