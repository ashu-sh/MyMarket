import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import logo from "../assets/pngwing.com.png"

function Header() {

  return (
    <div>
      <Navbar expand="lg"className='navbar p-3'>
      <Container>
        <Navbar.Brand href='/' style={{color:"#fff",fontWeight:"500",textDecoration:"none"}}><img src={logo} style={{width:"25px",borderRadius:"3px"}}alt='flipmart'></img>&nbsp;&nbsp;<i>flipMart</i></Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header