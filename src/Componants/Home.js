import React, { useContext } from "react";
import SingleProduct from "./SingleProduct";
import "./Home.css";
import MenuButtons from "./MenuButtons";
import ProdLoader from "../Loader/ProdLoader";
import { ProdContext } from "../Store/ProdContext";



function Home() {
  
  const {Products, loading} = useContext(ProdContext)



  return (
    <div className="home__">
      <MenuButtons />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {loading ? (
            <>
              {Array.from({ length: 12 }).map(
                (i, item) => {
                  return <ProdLoader key={i} />;
                }
              )}
            </>
          ) : (
            <>
              {Object.keys(Products).map((id, index) => (
                <SingleProduct id={id} index={index} key={id} Products={Products} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
