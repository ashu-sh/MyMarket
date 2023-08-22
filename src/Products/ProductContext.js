import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ApiContext } from './ApiContext'
import HashLoader from "react-spinners/HashLoader";
 


function ProductContext({children}) {

    const [product,getProduct] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const response = await axios.get('https://fakestoreapi.com/products');
                getProduct(response.data);
                setLoading(false);
            }catch(error){
                console.log('Error');
                setLoading(false);
            }
        }
        fetchProducts();
    },[])
  return (

    <div>
        {
            loading ? (
                <HashLoader color="#36d7b7" loading={loading}size={60}timeout={30000} speedMultiplier={1} aria-label="Loading Spinner"data-testid="loader" style={{top:"50%"}}/>
            ):(
                <ApiContext.Provider value={[product,getProduct]}>
                {children}
                </ApiContext.Provider>
            )
        }
    
    </div>
  )
}

export default ProductContext;