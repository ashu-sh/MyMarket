import React, { createContext, useState, useEffect} from "react";
import { ProductDatabase } from "./Config";
import { storage } from "./Config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";


export const ProdContext = createContext();

const initialState = {
  name: "",
  description: "",
  price: "",
  seller: "",
  stock: "In stock",
  delivery: "",
  rating: "",
  qty: "",
};

function Context({ children }) {
  const [data, setData] = useState(initialState);
  const [Products, setProducts] = useState([]);
  const [searchedProd, SetSearchedProd] = useState("");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(false);

  const { name, description, price, seller, stock, delivery, rating, qty } = data;

  useEffect(() => {
    file && uploadProductPhoto();
  }, [file]);

  useEffect(() => {
    GetProd();
  }, []);

  const uploadProductPhoto = () => {
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", () => {
      
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData((prev) => ({ ...prev, img: downloadURL }));
        });
      }
    );
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ProductDatabase.child("products").push(data, (err) => {
      if (err) {
        console.warn("error");
      } else {
        console.log("Success");
      }
    });
  };

  const GetProd = () => {
    ProductDatabase.child("products").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        const Prod = snapshot.val();
        const ProductsArray = Object.values(Prod);
        setProducts(ProductsArray);
        setLoading(false);
      } else {
        setLoading(false);
        console.log({ message: "error" });
      }
    });
  };

  const AddProd = async (data) => {
    await ProductDatabase.child("products").push(data, (error) =>
      error
        ? console.log({ message: error })
        : console.log({ message: "success" })
    );
  };

  // Search Products Functionality
  const SearchProductFunction = Products.filter((prod) => {
    const searchResults = prod.name.toLowerCase().includes(searchedProd.toLowerCase());

    return searchResults;
  });



  return (
    <div>
      <ProdContext.Provider
        value={{
          name,
          description,
          price,
          seller,
          stock,
          delivery,
          rating,
          qty,
          progress,
          loading,
          data,
          Products,
          searchedProd,
          SearchProductFunction,
          SetSearchedProd,
          setProducts,
          AddProd,
          setData,
          setFile,
          handleChange,
          handleSubmit,
        }}
      >
        {children}
      </ProdContext.Provider>
    </div>
  );
}

export default Context;
