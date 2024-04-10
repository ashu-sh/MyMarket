import React, { createContext, useState, useEffect } from "react";
import { ProductDatabase } from "./Config";
import { storage } from "../Store/Config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const ProductContext = createContext();

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
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);

  const { name, description, price, seller, stock, delivery, rating, qty } = data;

  useEffect(() => {
    file && uploadProductPhoto();
  }, [file]);


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

  const AddProd = async (data) => {
    await ProductDatabase.child("products").push(data, (error) =>
      error
        ? console.log({ message: error })
        : console.log({ message: "success" })
    );
  };

  

  return (
    <div>
      <ProductContext.Provider
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
          data,
          AddProd,
          setData,
          setFile,
        }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
}

export default Context;
