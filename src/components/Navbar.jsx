
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/Appcontext'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartCount
  } = useAppContext()

  const location = useLocation()
  const cartCount = getCartCount ? getCartCount() : 0

  const logout = async () => {
    setUser(null)
    navigate('/')
    setProfileOpen(false)
  }

  useEffect(() => {
    if (searchQuery.length > 0 && location.pathname !== '/products') {
      navigate('/products')
    }
  }, [searchQuery, navigate, location.pathname])

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative z-50">

      {/* Logo */}
      <NavLink to='/' onClick={() => setOpen(false)}>
        <img className="h-10" src={assets.profile_icons} alt="brand" />
      </NavLink>

      {/* Desktop Menu */}
       <div>
          <p className='text-medium text-blue-500  cursor-pointer'>Sudhanshu Medical Store</p>
        </div>
      <div className="hidden sm:flex  items-center gap-8">
       
        <NavLink to='/' className="transition  hover:text-blue-400/80 ease-in-out duration-200 hover:text-primary">Home</NavLink>
        <NavLink to='/products' className="transition  hover:text-blue-400/80  ease-in-out duration-200 hover:text-primary">All Products</NavLink>
        <NavLink to='/contact' className="transition hover:text-blue-400/80 ease-in-out duration-200 hover:text-primary">Contact</NavLink>
        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full bg-white hover:bg-gray-100 transition-colors">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="text"
            placeholder="Search products"
            className="py-1.5 w-45 bg-transparent text-gray-800 placeholder-gray-500 outline-none"
          />
          <img src={assets.search_icon} alt="search" className='w-4 h-4 opacity-70' />
        </div>

        {/* Cart */}
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt="cart" className='w-9 opacity-70' />
          {cartCount > 0 && (
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
              {cartCount}
            </button>
          )}
        </div>

        {/* Login / Profile */}
        {!user ? (
          <button onClick={() => setShowUserLogin(true)} className="cursor-pointer  bg-blue-500/60 hover:bg-blue-500/90  px-8 py-2 bg-primary hover:bg-primary/90 transition text-white rounded-full">
            Login
          </button>
        ) : (
          <div className='relative group'>
            <img src={assets.profile_icons} className="w-10 bg-gray-200 rounded-full" alt="profile" />
            <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-300 py-2.5 w-30 rounded-md text-sm z-40'>
              <li onClick={() => navigate("my-orders")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Order</li>
              <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile header (cart + profile + menu) */}
      <div className="flex items-center gap-3 sm:hidden relative">
        {/* Cart icon (mobile) */}
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt="cart" className="w-7 opacity-70" />
          {cartCount > 0 && (
            <button className="absolute -top-2 -right-2 text-[10px] text-white bg-primary w-[16px] h-[16px] rounded-full">
              {cartCount}
            </button>
          )}
        </div>

        {/* Profile icon (mobile) */}
        {user && (
          <div className="relative">
            <img
              src={assets.profile_icons}
              className="w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
              alt="profile"
              onClick={() => setProfileOpen(!profileOpen)}
            />
            {profileOpen && (
              <ul className='absolute top-10 right-0 bg-white shadow border border-gray-300 py-2.5 w-32 rounded-md text-sm z-50'>
                <li onClick={() => { navigate("my-orders"); setProfileOpen(false); }} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Order</li>
                <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
              </ul>
            )}
          </div>
        )}

        {/* Menu icon */}
        <div className='flex items-center gap-6 sm:hidden'>
          <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className=''>
            <img src={assets.menu_icon} alt="menu" className='h-10 ' />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-[80%] sm:w-[60%] h-full bg-white shadow-lg py-6 px-5 flex flex-col gap-4 animate-slideIn overflow-y-auto">
            {/* Close button */}
            <button onClick={() => setOpen(false)} className="self-end mb-2 text-gray-600 hover:text-black">✕</button>

            {/* Search Bar for Mobile */}
            <div className="flex items-center w-full border border-gray-300 rounded-full px-3 py-1 mb-2 bg-white hover:bg-gray-100 transition-colors">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                type="text"
                placeholder="Search products"
                className="w-full bg-white text-gray-800 placeholder-gray-500 outline-none py-1"
              />
              <img src={assets.search_icon} alt="search" className="w-4 h-4 opacity-70" />
            </div>

            <NavLink to="/" className="transition ease-in-out duration-200 hover:text-primary" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/products" className="transition ease-in-out duration-200 hover:text-primary" onClick={() => setOpen(false)}>All Products</NavLink>
            {user && (
              <NavLink to="/my-orders" className="transition ease-in-out duration-200 hover:text-primary" onClick={() => setOpen(false)}>My Order</NavLink>
            )}
            <NavLink to="/" className="transition ease-in-out duration-200 hover:text-primary" onClick={() => setOpen(false)}>Contact</NavLink>

            {!user ? (
              <button
                onClick={() => {
                  setOpen(false)
                  setShowUserLogin(true)
                }}
                className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary/90 transition text-white rounded-full text-sm"
              >
                Login
              </button>
            ) : (
              <button
                onClick={logout}
                className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary/90 transition text-white rounded-full text-sm"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
