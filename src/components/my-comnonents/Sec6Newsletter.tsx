import React from "react"
import { Button } from "../ui/button"

export default function Sec6Newsleter(){
    return(
        
<>
<div className='relative'>
{/* Thiis section is for bg text */}
<div className="absolute inset-0 flex items-center justify-center">
        <h1 className=" font-bold text-gray-100  bg-opacity-70  mx-5  pb-5  text-5xl  md:text-9xl ">
        Newsletter
        </h1>
</div>

{/* heading */}
    <div className="py-20 pt-10 container mx-auto  text-center relative ">

        <h1 className="text-3xl md:text-4xl font-bold">Subscribe Our Newsletter</h1>
        <p className="text-red-400 text-sm md:text-xl ">Get the latest information and promo offers directly</p>
       

{/* input box */}
        <div className="py-5 pt-10 ">
            <input type="text" className="border border-black md:mx-5 md:px-5 py-2" />
            <Button className="rounded-none">Get Started</Button>
        </div>

   </div>

</div>
 </>
    )
}