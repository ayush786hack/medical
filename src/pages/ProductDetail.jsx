import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/Appcontext";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const { products, currency, addToCart } = useAppContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const found = products.find((p) => p._id === id || p.id === id);
      setProduct(found);

      if (found) {
        const related = products.filter(
          (p) => p.category === found.category && p._id !== found._id
        );
        setRelatedProducts(related);
      }
    }
  }, [products, id]);

  if (!product) {
    return (
      <div className="mt-20 text-center text-gray-500">
        Product not found or still loading.
      </div>
    );
  }

  return (
    <div className="mt-12 p-6">
      {/* Breadcrumb */}
      <p>
        <Link
          className="hover:text-[#5160b1] transition ease-in-out duration-1000"
          to="/"
        >
          Home
        </Link>{" "}
        /{" "}
        <Link
          className="hover:text-[#5160b1] transition ease-in-out duration-1000"
          to={`/products/${product.category.toLowerCase()}`}
        >
          {product.category}
        </Link>{" "}
        / <span className="text-[#5160b1]">{product.name}</span>
      </p>

      {/* Product Detail Section */}
      <div className="shadow-black mt-6 flex flex-col md:flex-row gap-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <img
            src={product.image?.[0] || product.image || ""}
            alt={product.name}
            className="max-w-xs rounded"
          />
        </motion.div>

        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>

          {/* Price Section */}
          <div className="mt-3 flex flex-col">
            <div className="flex items-center gap-3">
              {product.offerPrice && product.offerPrice < product.price && (
                <p className="text-gray-400 line-through">
                  {currency}
                  {product.price}
                </p>
              )}
              <p className="text-2xl font-semibold text-[#5160b1]">
                {currency}
                {product.offerPrice ?? product.price}
              </p>
            </div>
            <span className="text-xs text-gray-500 mt-1">
              Exclusive of taxes
            </span>
          </div>

          {/* Description */}
          {product.description && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">About Food</h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {product.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className="flex items-center mt-10 gap-4 text-base">
            <button
              onClick={() => addToCart(product._id)}
              className="mt-4 px-4 py-2 rounded flex cursor-pointer font-medium bg-[#5160b1]/60 text-white hover:bg-[#5160b1] transition"
            >
              Add To Cart
            </button>

            <button
              onClick={() => {
                addToCart(product._id);
                navigate("/cart");
              }}
              className="mt-4 px-4 py-2 rounded flex cursor-pointer font-medium bg-[#5160b1]/60 text-white hover:bg-[#5160b1] transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="flex flex-col items-center mt-20">
        <div className="flex flex-col items-center w-max">
          <p className="text-3xl font-medium">Related Products</p>
          <div className="w-20 h-0.5 bg-[#5160b1] rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
          {relatedProducts
            .filter((p) => p.inStock)
            .map((p, index) => (
              <ProductCard key={index} product={p} />
            ))}
        </div>

        <button
          onClick={() => {
            navigate("/products");
            scrollTo(0, 0);
          }}
          className="mx-auto cursor-pointer px-12 my-16 py-2.5 border bg-white border-[#5160b1]/70 rounded text-[#5160b1] hover:text-white hover:bg-[#5160b1]/70 transition"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
