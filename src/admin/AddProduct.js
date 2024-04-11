import React, { useContext } from "react";
import "./AddProduct.css";
import { ProdContext } from "../Store/ProdContext";

function AddProduct() {

  const { AddProd, data, setData, name, description, price,seller,stock,delivery,rating, qty,setFile,progress } = useContext(ProdContext);

  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data) {
      await AddProd(data);
    }
  };


  return (
    <div>
      <div className="prod-form">
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "23px",
            maxWidth: "400px",
            alignContent: "center",
          }}
        >
          <label htmlFor="name">Product name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
            required
          />
          <label htmlFor="description">Product Description</label>
          <input
            type="description"
            id="description"
            name="description"
            placeholder="description"
            value={description}
            onChange={handleChange}
            required
          />
          <label htmlFor="price">Price</label>
          <input
            type="price"
            id="price"
            name="price"
            placeholder="price"
            value={price}
            onChange={handleChange}
            required
          />
          <label htmlFor="seller">Selled by</label>
          <input
            type="seller"
            id="seller"
            name="seller"
            placeholder="seller"
            value={seller}
            onChange={handleChange}
            required
          />
          <label htmlFor="stock">Stock</label>
          <input
            type="stock"
            id="stock"
            name="stock"
            placeholder="stock"
            value={stock}
            onChange={handleChange}
            required
          />
          <label htmlFor="delivery">Delivery</label>
          <input
            type="delivery"
            id="delivery"
            name="delivery"
            placeholder="delivery"
            value={delivery}
            onChange={handleChange}
            required
          />
          <label htmlFor="rating">Rating</label>
          <input
            type="rating"
            id="rating"
            name="rating"
            placeholder="rating"
            value={rating}
            onChange={handleChange}
            required
          />
          <label htmlFor="qty">Quantity</label>
          <input
            type="qty"
            id="qty"
            name="qty"
            placeholder="qty"
            value={qty}
            onChange={handleChange}
            required
          />
          <label htmlFor="file">Upload</label>
          <input
            type="file"
            id="file"
            name="file"
            placeholder="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="submit"
            value="Submit"
            disabled={progress !== null && progress < 100}
          />
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
