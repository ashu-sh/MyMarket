import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../Products/ApiContext';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import HashLoader from 'react-spinners/HashLoader';
import Cart from './Cart';

function ProductDetails({AddItem}) {

    const [product,getProduct] = useContext(ApiContext);
    const [loading,setLoading] = useState();


    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },5000)
    },[product]);

    const {title} = useParams()

  return (

    <div>
        {
            loading ?(
                <HashLoader color="#3399ff" loading={loading}size={50} speedMultiplier={1} aria-label="Loading Spinner"data-testid="loader" style={{top:"50%",left:"60%",position:"absolute"}}/>          
            ):(
            <>  
            <div className='Product_details_page'>
            {
            product.filter((res)=>res.title===title).map((res,id)=>{
                return(
                    <div className='Product_data'key={id}>
                        <img className='prod_image' alt='product' variant='top'src={res.image}></img> 
                        {/* <hr style={{top:"45.4%",position:"relative",height:"20px",width:"15rem",right:"18%"}}/>  */}    
                        <div className='Product_data_desc'> 
                            <h5 className='Prod-text'>{res.title}</h5>  
                            <h7 className='Rating'>★{res.rating.rate}</h7>
                            <h4 className='Prod-price'><strong>₹ {res.price.toFixed(0)}</strong></h4>
                            <h5 className='fevorite'>♥</h5>
                            <p className='other-details'>InStock :<strong>{res.rating.count} Nos</strong></p>
                            <p className='other-details'>Product Catagory : <strong>{res.category.charAt(0).toUpperCase()+ res.category.slice(1)} </strong></p>
                            <br/>
                            <Button variant="contained" style={{backgroundColor:"#ffaa00",color:"#fff"}} onClick={()=>{AddItem(res)}} className='Addcart_btn'>Add To Cart</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="contained" className='Addcart_btn'style={{backgroundColor:"#ff6600",color:"#fff"}}>Buy Now</Button>
                        </div>
                    </div>
                    )})}     
            </div>
            </>  
            )}
    </div>
  )
}

export default ProductDetails
