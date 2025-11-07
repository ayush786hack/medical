import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
export const AppContext = createContext();
import  toast  from "react-hot-toast"; 
export const AppContextProvider = ({ children }) => {

const currency = "₹";



  const navigate = useNavigate();
  
  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(true);
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState({})
  const [searchQuery, setSearchQuery] = useState('')




  const fetchProducts = async ()=>{
           setProducts(dummyProducts)
  }

  //Add Product to Cart
  const  addToCart =(itemId)=>{
    let cartData =structuredClone(cartItems);

    if(cartData[itemId]){
        cartData[itemId] +=1;

    }else{
      cartData[itemId] =1;
    }
    setCartItems(cartData);
    toast.success("Item is Added")
  }

  //update cart items quantity
const updateCartItem = (itemId, quantity)=>{
  let cartData = structuredClone(cartItems);
  cartData[itemId] = quantity;
  setCartItems(cartData)
  toast.success("Cart Updated")
}

//Remove products from cart ...
 const removeFromCart = (itemId)=>{
  let cartData = structuredClone(cartItems);
  if(cartData[itemId] ){
    cartData[itemId]-= 1;
    if(cartData[itemId]===0){
      delete cartData[itemId];
    }
 }

 toast.success("Item Removed")
 setCartItems(cartData)
 }
  

         // Get cart items count
const getCartCount = () => {
  let totalCount = 0;
  for (const item in cartItems) {
    totalCount += cartItems[item];
  }
  return totalCount;
};

// Get cart total amount
const getCartAmount = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    const itemInfo = products.find((product) => product._id === itemId);
    if (itemInfo && cartItems[itemId] > 0) {
      const price = itemInfo.offerPrice ?? itemInfo.price;
      totalAmount += price * cartItems[itemId];
    }
  }
  return Math.floor(totalAmount * 100) / 100;
};


   useEffect(()=>{
      fetchProducts()
   },[])

  const value = { navigate, user, setUser, setIsSeller, isSeller,showUserLogin,
    setShowUserLogin,products,currency,addToCart,updateCartItem,
    removeFromCart,cartItems,searchQuery,setSearchQuery,getCartCount,getCartAmount};

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
