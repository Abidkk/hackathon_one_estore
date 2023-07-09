import React from "react";
import Link from "next/link";
import {Github, GithubIcon, Twitter } from "lucide-react"
import {Facebook} from "lucide-react"
import {Linkedin} from "lucide-react"
export default function Footer(){
    return(
        <>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-5  p-5">


 {/* Left Portion Logo adn Icons */}
 <div className="">
            
            {/* Logo */}
            <div> <Link href='/'> <img src="/logo1.png" alt="logo" className=' h-14 md:h-20' />   </Link> </div>

            
        <p className=" py-10">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>

        <div className="flex gap-5 pr-5 pt-5">
           <Link href="/">    <div className='bg-gray-300 rounded-md p-3 hover:bg-gray-400  duration-500'>  <Twitter /> </div>  </Link>  
           <Link href="/">  <div className='bg-gray-300 rounded-md p-3 hover:bg-gray-400 duration-500'>    <Facebook/>  </div></Link>   
           <Link href="/">  <div className='bg-gray-300 rounded-md p-3 hover:bg-gray-400 duration-500'>    <Linkedin />  </div></Link> 
           <Link href="/">  <div className='bg-gray-300 rounded-md p-3 hover:bg-gray-400 duration-500'>    <GithubIcon></GithubIcon> </div></Link>   
         </div>


</div>





        {/* Right portion Links */}
        <div className=" col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:ml-20">

        {/* Link Group -1 */}
            <div className="my-5 opacity-80">
            <h1 className="font-bold text-[20px] opacity-90">Company</h1>
            <ul>
            <li className="pt-2 hover:font-bold duration-500"><Link href="/">  About  </Link></li>
            <li className="pt-2 hover:font-bold duration-500"><Link href="/">  Terms of Use </Link></li>
            <li className="pt-2 hover:font-bold duration-500"><Link href="/">  Privacy Policy  </Link></li>
            <li className="pt-2 hover:font-bold duration-500"><Link href="/">  How it Works  </Link></li>
            <li className="pt-2 hover:font-bold duration-500"><Link href="/">  Contact Us </Link></li>
            </ul>
            </div>


        {/* Link Group-2 */}

        <div className="my-5 opacity-80">
        <h1 className="font-bold text-[20px] hover:font-bold duration-500 opacity-90">Support</h1>
            <ul>
            <li className="pt-2 hover:font-bold duration-500"><Link href="/">  Support Carrer  </Link></li>
            <li className="pt-2 hover:font-bold duration-500"><Link href="/">  24h Service </Link></li>
            <li className="pt-2 hover:font-bold duration-500"><Link href="/">  Quick Chat </Link></li>
            </ul>
        </div>


{/* Link Group-3 */}
        <div className="my-5 opacity-80">
        <h1 className="font-bold text-[20px] hover:font-bold duration-500 opacity-90">Contact</h1>
            <ul>
            <li className="pt-2 hover:font-bold duration-500"><Link href="/">  WhatsApp  </Link></li>
            <li className="pt-2 hover:font-bold duration-500"><Link href="/">  Support 24h </Link></li>
        
            </ul>


        </div>






        </div>

        </div>



        </div>


        
{/* last portion */}
<div className="border border-t-black"></div>


<div className=" my-2 md:mb-2 md:flex md:justify-between text-sm">
  <div className="">
      <h1>Copyright © 2023  <b>AbidKK PIAIC B-42</b></h1>
  </div>

  <div className="">
      <h1>Design by. <b>Abid KK</b> </h1>
  </div>

  <div className="">
      <h1>Code by. <b>Abid KK</b> </h1>
  </div>

</div>
        

        
        
        </>
    )
}