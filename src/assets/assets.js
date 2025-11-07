// import logo from './pinchoftaste.png';
import search_icon from './search.png';
import nav_cart_icon from './cart.png';
import menu_icon from './menu_icon.png';
import profile_icons from './profile.png';


import main_banner1_bg from './banner22.jpg';

import white_arrow_icon from './arrow.jpg';
import black_arrow_icon from './arrow2.jpg';


import box_icon1 from './medicineicon.png';
import box_icon2 from './childcare.png';
import box_icon3 from './skincare.png';
import box_icon4 from './dailyuse.png';
import box_icon5 from './adultuse.png';
import box_icon6 from './equipments.png';



import cart_icon from './cartin.png';


import med1 from './medicine1.png';
import med2 from './medicine2.png';
import med3  from './move.png';

import baby1 from './dipar.png';
import baby2 from './viks.png';

import skincare1 from './facewash.png';
import skincare2 from './facewash3.png';

import soap11 from './soap1.png';
import soap12 from './soap2.png';
import soap13 from './dettol1.png';
import soap14 from './dettol2.png';
 
import adult1 from './condom.png';

import imgmachine1 from './imgmachine1.png';
import imgmachine2 from './imgmachine2.png';
import imgmachine3 from './imgmachine3.png';
import imgmachine4 from './imgmachine4.png';
import imgmachine5 from './imgmachine5.png';
import imgmachine6 from './imgmachine6.png';



// import bottom_banner_image1 from './banner_bottom1.png';

import trust_icon from './btbannericon4.png';
import order_icon from  './btbannericon1.png';
import leaf_icon from  './btbannericon2.png';
import coin_icon from  './btbannericon3.png';

import star_icon from './star.png';
import refresh_icon from './refresh.png';
import arrow_right_icon_colored from './arrow3.png';
import address_img from './bannerlast.png';

import { img } from 'framer-motion/client';

export const assets = {
  address_img,
  refresh_icon,
  arrow_right_icon_colored,
  star_icon,
  cart_icon,
  // logo,
  search_icon,
  nav_cart_icon,
  menu_icon,

  main_banner1_bg,
  // main_banner2_bg,
  profile_icons,
  white_arrow_icon,
  black_arrow_icon,


  box_icon1,
  box_icon2,
  box_icon3,
  box_icon4,
  box_icon5,
  box_icon6,


  med1,
  med2,
  med3,

  baby1,
  baby2,

  skincare1,
  skincare2,


  
  soap11,
  soap12,
  soap13,
  soap14,

  adult1,

  imgmachine1,
  imgmachine2,
  imgmachine3,
  imgmachine4,
  imgmachine5,
  imgmachine6,




  // bottom_banner_image1,


  trust_icon,
  order_icon,
  leaf_icon,
  coin_icon,
};




export const categories = [
  { text: 'Medicines', path: 'medicines', bgColor: 'oklch(0.845 0.143 164.978)', image: assets.box_icon1 },
  { text: 'Childcare', path: 'childcare', bgColor: 'oklch(0.95 0.12 85)', image: assets.box_icon2 },
  { text: 'Skincare', path: 'skincare', bgColor: 'oklch(0.96 0.08 120)', image: assets.box_icon3 },
  { text: 'Daily Use', path: 'daily use', bgColor: '   oklch(0.954 0.038 75.164)', image: assets.box_icon4},
  { text: 'Adult Use', path: 'adultuse', bgColor: 'oklch(0.95 0.06 75)', image: assets.box_icon5},
  { text: 'Machines', path: 'machine', bgColor: 'oklch(0.808 0.114 19.571)', image: assets.box_icon6},
];



export const footerLinks =[
  {
    title:"Quick Links",
    links: [
      {text: "Home", url:""},
       {text: "Best Sellers", url:""},
        {text: "Offers", url:""},
         {text: "Contact us",url:""},
          {text: "FAQs", url:""},
          {text: "Category",url:""},
    ],
  },

  {
    title: "Need Help?",
    links: [
      {text: "Delivery Info",url:"#"},
      {text:"Return & Refund",url:"#"},
      {text:"Payment Methods",url:"#"},
      {text:"Track your Order", url:"#"},
      {text:"Contact Us",url:"#"},
      {text:"8840307681",url:"#"},
      {text:"Shudhanshutiwari2018@gmail.com",url:"#"},



    ]
  }
];


export const features = [
  {
    icon: order_icon,
    title: "Fast Order",
    description: "You can order write from our webiste siting at home",
  },
  {
    icon: leaf_icon,
    title: "Freshness Guarante",
    description: "Medicines straight from the manufacture unit",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality products at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 1000+ happy customers.",
  },
];


export const dummyProducts = [
  // 🍔 Medicines
  {
    _id: "me01",
    category: "Medicines",
    name: "Pain killer",
    price: 20,
    offerPrice: 30,
    image: [med1],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "me02",
    category: "Medicines",
    name: "Himalaya",
    price: 120,
    offerPrice: 100,
    image: [med2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "me03",
    category: "Medicines",
    name: "Move",
    price: 100,
    offerPrice: 80,
    image: [med3],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // 👶 Baby care
  {
    _id: "bc01",
    category: "Childcare",
    name: "Diaper",
    price: 399,
    offerPrice: 389,
    image: [baby1],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:17:46.018Z",
    inStock: true,
  },
  {
    _id: "bc02",
    category: "Childcare",
    name: "Viks",
    price: 120,
    offerPrice: 80,
    image: [baby2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:17:46.018Z",
    inStock: true,
  },

  // 💆 Skincare
  {
    _id: "sc01",
    category: "Skincare",
    name: "Himalaya",
    price: 130,
    offerPrice: 120,
    image: [skincare1],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:17:46.018Z",
    inStock: true,
  },
  {
    _id: "sc02",
    category: "Skincare",
    name: "Derma",
    price: 165,
    offerPrice: 150,
    image: [skincare2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:17:46.018Z",
    inStock: true,
  },

  // 🧼 Daily use
  {
    _id: "dk01",
    category: "Daily Use",
    name: "Dettol soap",
    price: 30,
    offerPrice: 20,
    image: [soap11],
    createdAt: "12",
    updatedAt: "12",
    inStock: true,
  },
  {
    _id: "dk02",
    category: "Daily Use",
    name: "Morga",
    price: 30,
    offerPrice: 20,
    image: [soap12],
    createdAt: "12",
    updatedAt: "12",
    inStock: true,
  },
  {
    _id: "dk03",
    category: "Daily Use",
    name: "Dettol",
    price: 100,
    offerPrice: 80,
    image: [soap13],
    createdAt: "12",
    updatedAt: "12",
    inStock: true,
  },
  {
    _id: "dk04",
    category: "Daily Use",
    name: "Dettol",
    price: 100,
    offerPrice: 80,
    image: [soap14],
    createdAt: "12",
    updatedAt: "12",
    inStock: true,
  },

  // 🍸 Adult use
  {
    _id: "ad01",
    category: "Adultuse",
    name: "Condom",
    price: 11,
    offerPrice: 9,
    image: [adult1],
    createdAt: "12",
    updatedAt: "12",
    inStock: true,
  },

  // ⚙️ Machines
  {
    _id: "mc01",
    category: "Machine",
    name: "Star Nuke-HF x-ray",
    price: "320k",
    offerPrice: "310k",
    image: [imgmachine1],
    createdAt: "12",
    updatedAt: "122",
    inStock: true,
  },
  {
    _id: "mc02",
    category: "Machine",
    name: "Contec 3-Channel ECG",
    price: "23k",
    offerPrice: "22k",
    image: [imgmachine2],
    createdAt: "12",
    updatedAt: "22",
    inStock: true,
  },
  {
    _id: "mc03",
    category: "Machine",
    name: "Genizer Pressure Homogenizer",
    price: "330k",
    offerPrice: "329k",
    image: [imgmachine3],
    createdAt: "12",
    updatedAt: "12",
    inStock: true,
  },
  {
    _id: "mc04",
    category: "Machine",
    name: "Adonis Machine",
    price: "2000k",
    offerPrice: "1888k",
    image: [imgmachine4],
    createdAt: "12",
    updatedAt: "12",
    inStock: true,
  },
  {
    _id: "mc05",
    category: "Machine",
    name: "BPL X-RAD 100 Machine",
    price: "220k",
    offerPrice: "200k",
    image: [imgmachine5],
    createdAt: "12",
    updatedAt: "22",
    inStock: true,
  },
  {
    _id: "mc06",
    category: "Machine",
    name: "Swelab Alfa Hematology",
    price: "450k",
    offerPrice: "425k",
    image: [imgmachine6],
    createdAt: "12",
    updatedAt: "22",
    inStock: true,
  },
];





// export const dummyAddress = [
//   {
//     street: "123 Main St",
//     city: "Delhi",
//     state: "Delhi",
//     country: "India"
//   }
// ];


