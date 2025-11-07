import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/Appcontext'
const BestSeller = () => {
  const {products} = useAppContext();
  return (
    <div className='mt-18 '>
      <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center mt-5">
        {products.filter((product)=> product.inStock).slice(4).map((product,index)=>(
            <ProductCard key={index} product={product}/>

        ))}

      </div>
    </div>
  )
}

export default BestSeller
