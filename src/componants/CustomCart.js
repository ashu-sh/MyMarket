import { IconButton } from '@material-ui/core'
import React from 'react'
import { Nav } from 'react-bootstrap'
import {ImCart} from 'react-icons/im'
import { Link } from 'react-router-dom'

function CustomCart({cartItem}) {
  return (
    <Nav className='justify-content-end'>
        <div style={{display:"flex",right:"100px",top:"-60px",position:"relative"}}>
        <Link to="/Cart">
        <IconButton>
        <ImCart color='black'style={{width:"25px",height:"25px",color:"#ffe680"}}/>
        </IconButton>
        </Link>
        <p style={{top:"25%",color:"#fff",position:"relative",fontWeight:"500"}}>{cartItem.length}</p>
    </div>
    </Nav> 
    

  )
}

export default CustomCart