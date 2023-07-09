import React from 'react'

export default function Overview() {
  return (
    
    <>
    <div className='md:mx-10 pt-20 pb-10  '>
<div className='relative'>
  <div className="absolute inset-0 flex items-center  ">
    <h1 className="text-5xl md:text-9xl font-bold text-gray-100  bg-opacity-5 text-opacity-60 mx-5 p-4 mt-20 md:mt-0  ">
   Overview
    </h1>
  </div>

</div>


<div className='relative   mx-10'>
    <h1 className='text-4xl font-bold  font-sans  '>Product Information</h1>
</div>

</div>
<h1 className='border-b-4 mx-5 md:mx-20'></h1>







{/* product details */}

<div className=' mx-5 mt-10 md:mx-20 grid grid-cols-1 md:grid-cols-4 gap-5 '>

    <div className=''>
         <h1  className='font-bold text-xl md:text-2xl opacity-70'>PRODUCT DETAILS</h1>
    </div>

    <div className='  col-span-3'>
    <p className='text-sm md:text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique impedit provident
         illum quis ut delectus dignissimos beatae qui maiores totam aliquam porro optio alias asperiores maxime in,
          quisquam vel. Suscipit similique impedit provident illum quis ut delectus dignissimos beatae qui maiores totam 
          aliquam porro optio alias asperiores maxime in, quisquam vel  Suscipit similique impedit provident illum quis ut 
          delectus dignissimos beatae qui maiores totam aliquam porro optio alias asperiores maxime in, quisquam vel.
    </p>
    </div>

</div>



{/* 02 */}

<div className=' mx-5 md:mx-20 mt-10 grid grid-cols-1 md:grid-cols-4 gap-5'>

    <div className=''>
         <h1  className='font-bold  text-xl md:text-2xl opacity-70'>PRODUCT CARE</h1>
    </div>

    <div className=' col-span-3'>
   
   <div className='text-sm md:text-lg font-bold opacity-80'>
    <li>Hand wash using cold water.</li>
    <li>Do not using bleach.</li>
    <li>Hang it to dry.</li>
     </div>
 </div>

</div>


    </>
  )
}
