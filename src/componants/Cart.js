import React from 'react'
import {FaTrash} from 'react-icons/fa'

function Cart({cartItem,RemoveItem}) {
  return (
    <div>
       <div className='cards'>
        {
            cartItem.length>0?
            <>{
                cartItem.map((prod,id)=>{
                return(
                    <div className='card'key={id}>
                        <img className='prod_img' alt='product' variant='top'src={prod.image}></img>  
                        {/* <hr style={{top:"45.4%",position:"relative",height:"20px",width:"15rem",right:"18%"}}/>  */}
                        <div className='product_desc'>         
                            <h6 className='text-1'>{prod.title}</h6>
                            <h7 className='text-start-1'>★{prod.rating.rate}</h7>
                            <h4 className='text-start-2'><strong>₹ {prod.price.toFixed(0)}</strong></h4>
                            <FaTrash className='Fevorites'onClick={()=>{RemoveItem(prod);console.log();}}>Remove</FaTrash>
                            <p className='text-start'>InStock :<strong>{prod.rating.count} Nos</strong></p>
                            <p className='text-start'>Product Catagory : <strong>{prod.category.charAt(0).toUpperCase()+ prod.category.slice(1)} </strong></p>
                            <p className='text-start'>View More Details</p>
                        </div>
                    </div>
                )})}</>
            :(
                    <div>
                        <p>Cart is Empty !!</p>
                    </div>
            )  
        }         
        </div>
    </div>
  )
}

export default Cart