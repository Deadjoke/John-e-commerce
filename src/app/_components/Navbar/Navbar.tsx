'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Logo from '@images/freshcart-logo.svg'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { GetUserCart } from '_/app/_services/cart.services';
import { CartContext } from '../MySessionProvider/CartContext';

let Mystyle = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"; 

export default function Navbar() {
  const [initialCartCount,setCartCount] = useState(0);
  const {data:isAuthenticated} = useSession();
  const router =  useRouter();

  const {cartCount} =  useContext(CartContext);
  
  useEffect(()=>{
   GetUserCart().then(res => {
    setCartCount(res.numOfCartItems)
   });
  },[])


  function handleLogout (){
    signOut({redirect:false});
    router.push('/login');
  }

  // console.log(isAuthenticated);
  
return (
<nav className="bg-gray-50  border-gray-200 text-black">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src={Logo} alt='Fresh Cart' priority/>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">

        <li>
          <Link href="/" className={Mystyle}>Home</Link>
        </li>
        <li>
          <Link href="/brands" className={Mystyle}>Brands</Link>
        </li>
        <li>
          <Link href="/categories" className={Mystyle}>Categories</Link>
        </li>
        <li>
          <Link href="/products" className={Mystyle}>Products</Link>
        </li>
        {!isAuthenticated &&        
        <>
        <li>
          <Link href="/login" className={Mystyle}>Login</Link>
        </li>
        <li>
          <Link href="register" className={Mystyle}>Register</Link>
        </li> 
        </>
        }

        {isAuthenticated &&
        <>
        <li>
          <Link href="/wishlist" className={Mystyle}>WishList</Link>
        </li>
        <li>
          <Link href="/cart" className={Mystyle}>Cart</Link>
        </li>

        </> 
        }

        

  {isAuthenticated &&
    <div className='flex gap-12 items-center'>
      <label ></label>
    <i className="fa-solid fa-2xl fa-cart-shopping text-blue-600 relative" > <span className='absolute text-xs'>{cartCount || initialCartCount}</span></i>
    <label>
          <span onClick={handleLogout} className={`cursor-pointer ${Mystyle}`}>Logout</span>
    </label>
    </div>
  }
      </ul>
    </div>
     
  </div>
</nav>
  )
}
