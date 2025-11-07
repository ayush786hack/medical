import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/Appcontext";
import { assets } from "../assets/assets";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    removeFromCart,
    getCartCount,
    updateCartItem,
    navigate,
    getCartAmount,
  } = useAppContext();

  const [cartArray, setCartArray] = useState([]);
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    phono: "",
    place: "",
    email: "",
  });
  const [showAddress, setShowAddress] = useState(false);
  const [paymentOption, setPaymentOption] = useState("COD");

  // Build cart array from cartItems + products
  const getCart = () => {
    const tempArray = [];
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key);
      if (product) {
        product.quantity = cartItems[key];
        tempArray.push(product);
      }
    }
    setCartArray(tempArray);
  };

  const placeOrder = () => {
    console.log("Placing order with:", {
      items: cartArray,
      address,
      paymentOption,
    });
  };

  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart();
    }
  }, [products, cartItems]);

  if (!products.length || !cartItems) return null;

  return (
    <div className="flex flex-col md:flex-row mt-16">
      {/* Left: Cart Items */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-medium mb-6">
          Shopping Cart{" "}
          <span className="text-sm text-primary">({getCartCount()})</span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {cartArray.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3"
          >
            <div className="flex items-center md:gap-6 gap-3">
              <div
                onClick={() => {
                  navigate(
                    `/products/${product.category.toLowerCase()}/${product._id}`
                  );
                  scrollTo(0, 0);
                }}
                className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden"
              >
                <img
                  className="max-w-full h-full object-cover"
                  src={product.image?.[0] || ""}
                  alt={product.name}
                />
              </div>
              <div>
                <p className="hidden md:block font-semibold">{product.name}</p>
                <div className="font-normal text-gray-500">
                  <p>
                    Portion: <span>{product.portion || "N/A"}</span>
                  </p>
                  <div className="flex text-black items-center">
                    <p>Qty:&nbsp;</p>
                    <select
                      onChange={(e) =>
                        updateCartItem(product._id, Number(e.target.value))
                      }
                      value={cartItems[product._id]}
                      className="outline-none text-primary"
                    >
                      {Array.from({
                        length:
                          cartItems[product._id] > 9
                            ? cartItems[product._id]
                            : 9,
                      }).map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center">
              {currency}
              {product.offerPrice * product.quantity}
            </p>
            <button
              onClick={() => removeFromCart(product._id)}
              className="cursor-pointer mx-auto"
            >
              <img className="h-3" src={assets.refresh_icon} alt="remove" />
            </button>
          </div>
        ))}

        <button
          onClick={() => {
            navigate("/products");
            scrollTo(0, 0);
          }}
          className="group cursor-pointer flex items-center mt-8 gap-2 text-primary/70 font-medium"
        >
          <img
            className="h-4 w-4"
            src={assets.arrow_right_icon_colored}
            alt="arrow"
          />
          Continue Shopping
        </button>
      </div>

      {/* Right: Order Summary */}
      <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
        <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
        <hr className="border-gray-300 my-5" />

        {/* Delivery Address */}
        <div className="mb-6">
          <p className="text-sm font-medium uppercase">Order Place At</p>

          <div className="relative flex justify-between items-start mt-2">
            {address && address.firstName ? (
              <div className="text-gray-500 leading-relaxed">
                <p>
                  {address.firstName} {address.lastName}
                </p>
                <p>{address.email}</p>
                <p>{address.phono}</p>
                <p>{address.place}</p>
              </div>
            ) : (
              <p className="text-gray-500">No Address Found</p>
            )}

            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-primary hover:underline cursor-pointer ml-4"
            >
              Change
            </button>

            {showAddress && (
              <div className="absolute top-12 py-3 bg-white border border-gray-300 text-sm w-full h-20rounded-md shadow-md">
                <div
                  onClick={() => {
                    navigate("/add-detail");
                    setShowAddress(false);
                  }}
                  className="text-primary text-center cursor-pointer p-2 hover:bg-primary/20 rounded"
                >
                  Update Details
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="text-sm font-medium uppercase mt-6">Payment Method</p>
        <select
          onChange={(e) => setPaymentOption(e.target.value)}
          value={paymentOption}
          className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
        >
          <option value="COD">Cash On Delivery</option>
          <option value="Online">Online Payment</option>
        </select>

        <hr className="border-gray-300 my-5" />

        {/* Price Summary */}
        <div className="text-gray-500 mt-4 space-y-2">
          <p className="flex justify-between">
            <span>Price</span>
            <span>
              {currency}
              {getCartAmount()}
            </span>
          </p>
          <p className="flex justify-between">
            
            
          </p>
          <p className="flex justify-between">
            <span>Tax (18%)</span>
            <span>
              {currency}
              {(getCartAmount() * 12) / 100}
            </span>
          </p>
          <p className="flex justify-between">
            <span>Platform Fee</span>
            <span>{currency}100</span>
          </p>
          <p className="flex justify-between text-lg font-medium mt-3">
            <span>Total Amount:</span>
            <span>
              {currency}
              {Math.floor(getCartAmount() + (getCartAmount() * 12) / 100 + 12)}
            </span>
          </p>
        </div>

        <button
          onClick={placeOrder}
          className="w-full py-3 mt-6 cursor-pointer bg-blue-500/40 text-white font-medium hover:bg-blue-500/80 transition"
        >
          {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
