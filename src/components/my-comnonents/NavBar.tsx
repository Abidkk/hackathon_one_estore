


"use client"


import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {Menu} from 'lucide-react'
import {ShoppingCart} from 'lucide-react'

import { useEffect} from 'react'
import SearchBar from "./SearchBar";
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="p-2 bg-white shadow md:flex md:items-center md:justify-between relative lg:px-20 ">
        <div className="flex justify-between  items-center  ">
          <span className="text-3xl font-[Poppins] cursor-pointer ">
          <Link href='/'>
          <img src="/logo1.png" alt="logo" className='h-12 pl-5' />
          </Link>
     
          </span>

          <span className="text-3xl cursor-pointer mx-2 md:hidden block ">

 <Menu 
    onClick={handleMenuClick}
    className="h-10"
    >  
     
    </Menu>

          </span>
        </div>

        <ul
          className={`md:flex md:items-center z-20 md:static absolute bg-orange-200 md:bg-white w-full  
          md:w-auto left-0  md:py-0 py-0 md:pl-0 lg:gap-5    ${
            menuOpen ? "opacity-100 top-[70px] " : "opacity-100 top-[-400px] "
          } transition-all ease-in duration-500 overflow-hidden text-center  `}
        >





<div className=" pt-10 mx-10 md:hidden">
<div className="p-3 bg-white shadow-sm rounded-full w-[50px] h-[50px] hover:scale-110 duration-500">
<ShoppingCart/>
 </div>
</div>


          <li className="mx-2 my-2 md:my-0 
           bg-orange-100 hover:bg-white duration-500 hover:scale-105 hover:overflow-hidden cursor-pointer md:bg-white 
          ">
          <Link href={"/category/male"} className="text-sm lg:text-xl hover:text-orange-500 duration-500">
             Male
            </Link>
          </li>
          <li className="mx-2  my-2 md:my-0 
           bg-orange-100 hover:bg-white duration-500 hover:scale-105 hover:overflow-hidden cursor-pointer md:bg-white 
          ">
            <Link
              href={"/category/female"}
              className="text-sm lg:text-xl hover:text-orange-500 duration-500"
            >
           Female
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0   
            bg-orange-100 hover:bg-white duration-500 hover:scale-105 hover:overflow-hidden cursor-pointer md:bg-white ">
            <Link  href={"/category/kids"}
              className="text-sm lg:text-xl hover:text-orange-500 duration-500 
           
              
              "
            >
             Kids
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0
           bg-orange-100 hover:bg-white duration-500 hover:scale-105 hover:overflow-hidden cursor-pointer md:bg-white 
          ">
            <Link
              href="/allProducts"
              className="text-sm lg:text-xl hover:text-orange-500 duration-500"
            >
           All_Products
            </Link>
          </li>
          <div className="lg:mr-10 xl:mr-32"></div>
{/* <form action="">
          <div className='my-2   rounded-md flex xl:w-96 mx-2 border-2 border-orange-300
           md:border-gray-200  '>

<Search />
<input type="text" placeholder='what are you looking for '
 className=' ml-2  text-[15px] w-[90%] rounded-md 
 bg-orange-100 pl-2  md:bg-white' />
</div>

</form>
 */}

 <SearchBar/>

<div className='p-2 bg-gray-200 rounded-full ml-10  hover:scale-110 duration-500 hidden md:block my-3 '>
<Link href="">
<ShoppingCart />
</Link>
    </div>


        </ul>



      </nav>
    </>
  );
}

