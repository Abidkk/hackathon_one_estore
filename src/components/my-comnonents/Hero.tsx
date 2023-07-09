import React from "react";
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function Hero(){
    return(
        <>

<div className=" grid grid-cols-1 md:grid-cols-2  ">

                                                {/* Left Side */}

<div className="pt-10">
{/* Label */}
<span className="px-5 py-3 bg-orange-200 rounded-lg font-bold">Sale 75% </span>  <br /> <br />

{/* Heading and peragraph */}
    <h1 className="text-5xl md:text-6xl font-bold  pr-30 text-start font-sans my-5">
    An Industrial Take on Streetwear
    </h1>
    <p className=" text-lg mb-10 lg:mr-20">
        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits</p>

{/* Button add to cart */}
    <Button className="px-3 py-4 h-14 w-52 rounded-none text-lg">
      <ShoppingCart className="mr-2 h-6 w-6" /> Start Shopping
    </Button>


{/* Brand Logos */}
    <div className="flex gap-5 flex-wrap justify-around mt-10 lg:mt-20 ">
        <img src="/brand4.png" alt="" />
        <img src="/brand1.png" alt="" />
        <img src="/brand2.png" alt="" />
        <img src="/brand3.png" alt="" />
    </div>


</div>



                                     {/* Right Side */}
{/* Image */}
<div className="mt-10 bg-orange-200 rounded-full">
        <img src="/p5.png" alt="p4"  className="h-70  bg-orange-100 rounded-2xl"/>
</div>




</div>
        
        
        
        </>
    )
}