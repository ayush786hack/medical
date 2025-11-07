import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
       {/* left section */}
      <div>
        <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
        
        </p>

        <ul className="space-y-4  ">
          <li className="flex items-start gap-3">
            <FaPhoneVolume className="text-primary text-xl mt-1" />
            <span className="cursor-pointer hover:text-blue-500/60 text-gray-700">+91 8840307681</span>
          </li>
          <li className="flex items-start gap-3">
            <MdLocationOn className="text-primary text-xl mt-1" />
            <span className="cursor-pointer hover:text-blue-500/60 text-gray-700"> Kalayanpur,Lucknow</span>
          </li>
          <li className="flex items-start gap-3">
            <MdMarkEmailUnread className="text-primary text-xl mt-1" />
            <span className="cursor-pointer hover:text-blue-500/60 text-gray-700">Shudhanshutiwari2018@gmail.com</span>
          </li>
        </ul>
      </div>

       {/* right section  */}
      <form className="bg-white  rounded-lg p-8 space-y-6">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300  hover:border-blue-500/70 rounded-md p-2 focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full   hover:border-blue-500/70 border border-gray-300 rounded-md p-2 focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message"
            className="w-full   hover:border-blue-500/70  border border-gray-300 rounded-md p-2 focus:border-primary focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-md transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;