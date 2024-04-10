import React, { useEffect, useState } from "react";
import { ProductContext } from "./Context";
import { storage, ProductDatabase } from "./Config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const initialState = {
  name: "",
  description: "",
  price: "",
};
function ProdContext({ children }) {
  const [data, setData] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      // const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed",(snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
    file && uploadFile();
  }, [file]);

  const { name, description, price } = data;

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

  return (
    <div>
      <ProductContext.Provider
        value={{
          data,
          setData,
          name,
          description,
          price,
          progress,
          setFile,
          handleChange,
          handleSubmit,
        }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
}

export default ProdContext;
