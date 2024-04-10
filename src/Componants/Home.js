import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import "./Home.css";
// import { ProductContext } from "../Store/Context";
import MenuButtons from "./MenuButtons";
import ProdLoader from "../Loader/ProdLoader";
import { ProductDatabase } from "../Store/Config";


function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => GetProd(), []);

  const GetProd = () => {
    ProductDatabase.child("products").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
        // setLoading(true);
        setLoading(false);
      } else {
        setLoading(true);
        console.log({ message: "error" });
      }
    });
  };

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
              {Object.keys(data).map((id, index) => (
                <SingleProduct id={id} index={index} key={id} data={data} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
