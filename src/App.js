import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import CustomFilters from './componants/CustomFilters';
import Header from './componants/Header';
import ProductsCards from './componants/ProductsCards';
import ProductDetails from './componants/ProductDetails';
import Cart from './componants/Cart';
import { useState } from 'react';
import CustomCart from './componants/CustomCart';
import Footer from './componants/Footer';



function App() {

  const [cartItem,setCartItem] = useState([]);

  const AddItem = (Item)=>{
    setCartItem([...cartItem, Item]);
  };

  const RemoveItem = (Item)=>{
    const updateCartItem = cartItem.filter(item=>item.id !== Item.id);
    setCartItem(updateCartItem);
  }


  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
          <Route path='/'>
          <Route path='/' element={[<Header/>,<CustomCart cartItem={cartItem}/>,<ProductsCards/>,<CustomFilters/>,<Footer/>]}/>
          <Route path='/ProductDetails/:title' element={[<Header/>,<CustomCart cartItem={cartItem}/>,<ProductDetails AddItem={AddItem}/>,<CustomFilters/>,<Footer/>]}/>
          <Route path='Cart'element={[<Header/>,<CustomCart cartItem={cartItem}/>,<Cart cartItem={cartItem} RemoveItem={RemoveItem}/>,<Footer/>]}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
