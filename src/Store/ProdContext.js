import React, { createContext, useState, useEffect } from "react";
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
  qty:"",
};


function Context({ children }) {
  const [data, setData] = useState(initialState);
  const [Products, setProducts] = useState({});
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(false);

  const { name, description, price, seller, stock, delivery, rating, qty } = data;

  useEffect(() => {
    file && uploadProductPhoto();
  }, [file]);

  useEffect(() => {
    GetProd()
  }, []);


  const uploadProductPhoto = () => {
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);

        switch (snapshot.state) {
          case "paused":
            console.log("upload is paused");
            break;
          case "running":
            console.log("upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
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
        setProducts({ ...snapshot.val() });
        // setLoading(true);
        setLoading(false);
      } else {
        setLoading(true);
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
