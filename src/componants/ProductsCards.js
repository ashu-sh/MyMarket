import React, { useState } from 'react'
import { useContext } from 'react'
import { ApiContext } from '../Products/ApiContext'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';
import { Button } from '@material-ui/core';



function ProductsCards() {
    
    // eslint-disable-next-line
    const [product,getProduct] = useContext(ApiContext);
    const [loading,setLoading] = useState(false);
    const [currentPage, setCurrentpage] = useState(1);
    const [productPerpage] = useState(3);

    useEffect(()=>{
        console.log(product);
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },9000)
    },[product]);

    const handlePage_Navigation = (pageNum)=>{

        if(pageNum>=1 && pageNum<=totalPages){
            setCurrentpage(pageNum);
        }
        
    }
    const indexOfLastProduct = currentPage*productPerpage;
    const indexOfFirstProduct = indexOfLastProduct -productPerpage;
    const currentProduct = product.slice(indexOfFirstProduct,indexOfLastProduct);
    const totalPages = Math.ceil(product.length/productPerpage)

  return (

    <div>
        {
            loading ? (
                <HashLoader color="#3399ff" loading={loading}size={50} speedMultiplier={1} aria-label="Loading Spinner"data-testid="loader" style={{top:"50%",left:"60%",position:"absolute"}}/>          
            ):(
                <div className='cards'>
                {
                currentProduct.map((res,id)=>{
                return(
                    <div className='card'key={id}>
                        <Link to={`ProductDetails/${res.title}`} style={{textDecoration:"none"}}><img className='prod_img' alt='product' variant='top'src={res.image}></img></Link>  
                        {/* <hr style={{top:"45.4%",position:"relative",height:"20px",width:"15rem",right:"18%"}}/>  */}
                        <div className='product_desc'>         
                            <Link to={`ProductDetails/${res.title}`} className='Product'><h6 className='text-1'>{res.title}</h6></Link>
                            <h7 className='text-start-1'>★{res.rating.rate}</h7>
                            <h4 className='text-start-2'><strong>₹ {res.price.toFixed(0)}</strong></h4>
                            <h5 className='Fevorites'>♥</h5>
                            <p className='text-start'>InStock :<strong>{res.rating.count} Nos</strong></p>
                            <p className='text-start'>Product Catagory : <strong>{res.category.charAt(0).toUpperCase()+ res.category.slice(1)} </strong></p>
                            <p className='text-start'>View More Details</p>
                        </div>
                    </div>
                    
                )
            })
        }
        <div className='pagination'>
            <Button variant="contained"color="secondary"className={currentPage> 1 ? "":"pagination__disable"} onClick={()=>handlePage_Navigation(currentPage-1)}>Previous</Button>{
                Array.from({length:totalPages},(_, index)=>(
                    <button className={currentPage===index+1 ?"pag":"pag_2"} key={index} onClick={()=>handlePage_Navigation(index+1)}>{index+1}</button>
                ))}
            <Button variant="contained"className={currentPage<product.length/3 ?"":"pagination__disable"} onClick={()=>handlePage_Navigation(currentPage+1)}>Next</Button>

        </div>
    </div>
    )} 
    </div>
  )
}

export default ProductsCards