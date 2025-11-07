import React, { useState } from 'react'
import { assets } from '../assets/assets';


const InputField = ({type,placeholder,name,handleChange,address} )=> (
       <input  
       className="w-72 sm:w-80 md:w-96 mx-auto px-3 py-3 border border-primary/30 rounded outline-none text-gray-700 focus:ring-2 focus:ring-primary/90 transition"

       placeholder={placeholder}
       onChange={handleChange} 
       name={name}
       value={address[name]}
       required/>
)
const AddDetail = () => {

  const [address, setAddresses] =useState({
             firstName:'',
             lastName:'',
             phono:'',
             place:'',
             email:'',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddresses((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler =async (e)=>{
    e.preventDefault();
  }
  return (
    <div className="mt-16 pb-16">
      <p className="text-3xl text-gray-500">
        Add order<span className="px-3 text-3xl text-primary">Address</span>
      </p>

      <div className="flex flex-col-reverse md:flex-row justify-between mt-13">
        <div className="flex-1 max-w-md">
          <form
            onSubmit={onSubmitHandler}
            className="space-y-3 mt-6 text-sm "
          >
            
            
            <InputField 
            
              handleChange={handleChange}
              address={address}
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <InputField
              handleChange={handleChange}
              address={address}
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <InputField
              handleChange={handleChange}
              address={address}
              name="phono"
              type="text"
              placeholder="Phone Number"
            />
            <InputField
              handleChange={handleChange}
              address={address}
              name="email"
              type="email"
              placeholder="Email"
            />
            <InputField
              handleChange={handleChange}
              address={address}
              name="place"
              type="text"
              placeholder="Place"
            />

            <button
              type="submit"
              className="bg-primary/70 text-white py-2 px-6 rounded mt-3 hover:bg-primary/80 transition"
            >
              Save Address
            </button>
          </form>
        </div>

        <img
          className="md:mr-16 mb-16 md:mt-0"
          src={assets.address_img}
          alt="add address"
        />
      </div>
    </div>
  );
};

export default AddDetail;