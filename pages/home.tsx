import React, { useState ,FC} from "react";
import imageurl from "../components/imagelink";
import { DefaultHome } from "../components/homepage/homeComponents";
import { ExpandCard } from "../components/homepage/homeComponents";

const Home:FC = ()=> {
  const [state, setstate] = useState<boolean>(true);
  return (
    <>
      {state ? (
        <DefaultHome handleclick={() => setstate(false)} />
      ) : (
        <ExpandCard />
      )}
    </>
  );
}


export default Home;
