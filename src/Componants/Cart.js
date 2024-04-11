import React, { useContext, useState } from "react";
import { Container, Typography, Button, Grid, IconButton, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { CartProd } from "../reducer/CartContext";



function Cart() {

  const {Cart, dispatch} = useContext(CartProd);
  const [Quantity, setQuantity] = useState(1);

  const options = Array.from({ length: 10 }, (_, index) => index + 1);

  const totalPrice = Cart.reduce((total, item) => total + item.price * 1, 0);
  


  return (
    <div>
      <Container>
      <Typography variant="h4" className="m-4"gutterBottom>
        Shopping Cart
      </Typography>
      {Cart.length === 0 ? (
        <Typography className="m-4" variant="subtitle1">Your cart is empty ❗❗❗</Typography>
      ) : (
        <Grid container spacing={2} className="mb-2">
          {Cart.map((item,id) => (
            <Grid item xs={12} key={id}>
              <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.name}
                  sx={{ width:200, objectFit: 'contain',height:134 }}
                />
                <CardContent >
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1">
                    Price: ₹{item.price*Quantity} | Quantity : <select value={Quantity} onChange={(e)=>setQuantity(parseInt(e.target.value))} style={{width:"45px",padding:"3px 1px"}}>
                      {
                        options.map((count) => (
                          <option key={count} value={count}>{count}</option>
                        ))
                        
                      }
                    </select>
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="remove from cart"onClick={() => dispatch({type: "REMOVE_CART",payload: Cart[id]})}>
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Total Price: ₹ {totalPrice}
            </Typography>
            <Button variant="contained" color="primary">
              Proceed to Checkout
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
    </div>
  );
}

export default Cart;
