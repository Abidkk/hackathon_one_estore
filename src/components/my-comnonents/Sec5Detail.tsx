import React from 'react'
import { Button } from '../ui/button'

export default function Sec5Detail() {
  return (
   <>


<div className='relative'>

{/* Thiis section is for bg text */}

<div className="absolute ">
        <h1 className=" font-bold text-gray-100  text-6xl  sm:text-8xl xl:text-9xl   ">
      Different <br /> from <br /> Others
        </h1>
    </div>



<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-10 md:my-20 relative'>



{/* Left Side */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mr-5 pb-10 xl:text-xl  '>


    
  <div className='my-2'>
  <h1 className="font-bold    ">01.Using Good Quality Materials</h1>
      <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>



<div className='my-2'>
<h1 className="font-bold    ">02.Using Good Quality Materials</h1>
      <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>



<div className='my-2'>
<h1 className="font-bold    ">03.Using Good Quality Materials</h1>
      <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>



<div className='my-2'>
<h1 className="font-bold  ">04.Using Good Quality Materials</h1>
      <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>


</div>


{/* Right Side */}
    <div className='relative grid grid-cols-1 md:grid-cols-2 gap-3'>

    <div className=" bg-gray-100">
    <img src="/pp3.png" alt="pic" className="bg-gray-200"/>
    </div>

    <div className=' mt-5  md:mt-20 lg:mt-0 xl:mt-10'>
        <p className='lg:text-lg xl:text-xl'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. 
        The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
        <div className="mt-5">
        <Button className="rounded-none">see all products</Button>
        </div>
        </div>
    </div>

</div>

   
   
</div>
   
   </>
  )
}
