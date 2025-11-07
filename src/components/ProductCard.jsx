
import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/Appcontext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const [hover, setHover] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [randomColor, setRandomColor] = React.useState("");
  const cardRef = React.useRef(null);

  const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const bounds = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  const handleHoverEnter = () => {
    setHover(true);
    const colors = ["#f472b6", "#22c55e", "#facc15", "#3b82f6", "#a855f7"];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setRandomColor(newColor);
  };

  const handleHoverLeave = () => {
    setHover(false);
    setRandomColor("");
  };

  // ✅ Convert 425000 -> 425k, 2,000,000 -> 2M, etc.
  const shortPrice = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "k";
    return num?.toString() || "";
  };

  return (
    product && (
      <div
        onClick={() => {
          navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
          scrollTo(0, 0);
        }}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        className="relative w-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px] rounded-2xl p-1 bg-white text-gray-800 overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
      >
        {hover && (
          <div
            className="pointer-events-none blur-xl absolute z-0 transition-opacity duration-300 w-32 h-32 sm:w-32 sm:h-32 rounded-full"
            style={{
              top: position.y - 64,
              left: position.x - 64,
              background: `linear-gradient(135deg, oklch(0.954 0.038 75.164), oklch(0.845 0.143 164.978))`,
            }}
          />
        )}

        <div className="relative z-10 bg-white p-3 sm:p-4 rounded-[10px] flex flex-col items-center justify-center text-center">
          <div className="group cursor-pointer flex items-center justify-center px-2">
            <motion.img
              transition={{ duration: 0.2 }}
              className="max-w-[60px] sm:max-w-[80px] md:max-w-[100px]"
              src={product.image?.[0] || assets.placeholder_img}
              alt={product.name}
            />
          </div>

          <div
            className="text-xs sm:text-sm mt-1 transition-all ease-in-out duration-700"
            style={{
              color: hover ? randomColor : "rgba(107,114,128,0.6)",
            }}
          >
            <p>{product.category}</p>
            <p className="text-gray-700 font-medium text-sm sm:text-base truncate w-full">
              {product.name}
            </p>
          </div>

          <div className="flex items-center gap-0.5 mt-1 text-xs justify-center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <svg
                  key={i}
                  width="12"
                  height="11"
                  viewBox="0 0 18 17"
                  fill={i < product.rating ? "#5160b1" : "#5160b150"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.04894 0.927049L11.2451 4.90983L16.3839 5.60081L13.5838 9.87132L14.5146 14.9721L9.58778 13.6287L5.02426 16.0902L4.7795 10.9894L1.02827 7.40983H5.8038L8.04894 0.927049Z" />
                </svg>
              ))}
            <p className="text-xs ml-1">({product.rating})</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mt-2 w-full px-1 text-xs sm:text-sm gap-1">
            <div className="flex flex-col sm:flex-row sm:items-end gap-0.5 text-center sm:text-left font-medium" style={{ color: "#5160b1" }}>
              <span className="truncate max-w-[100px] sm:max-w-[120px]">
                {currency}
                {shortPrice(product.offerPrice)}
              </span>
              <span className="text-gray-500/60 line-through text-xs sm:text-sm truncate max-w-[80px]">
                {currency}
                {shortPrice(product.price)}
              </span>
            </div>

            <div onClick={(e) => e.stopPropagation()} style={{ color: "#5160b1" }}>
              {!cartItems[product._id] ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product._id);
                  }}
                  className="flex items-center justify-center gap-1 border w-18 h-7 rounded font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: "#5160b133",
                    borderColor: "#5160b14d",
                    color: "#5160b1",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#5160b166")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#5160b133")
                  }
                >
                  <img src={assets.cart_icon} alt="cart" className="h-8 w-8" />
                  <span>Add</span>
                </button>
              ) : (
                <div
                  className="flex items-center justify-center gap-1 w-18 h-7 rounded select-none"
                  style={{ backgroundColor: "#5160b14d" }}
                >
                  <button onClick={() => removeFromCart(product._id)} className="px-1 h-full">
                    -
                  </button>
                  <span className="w-4 text-center text-xs">
                    {cartItems[product._id]}
                  </span>
                  <button onClick={() => addToCart(product._id)} className="px-1 h-full">
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
