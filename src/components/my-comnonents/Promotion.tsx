 import React from 'react'
 import Link from 'next/link'


export default function Promotion(){

 return(
<>

{/* Promotions Headings */}
    <div className='pt-20 '>     
        <h5 className='text-center text-blue-700 font-bold'>PROMOTIONS</h5>
        <h1 className='text-[30px] md:text-[40px] text-center font-bold  pb-10'>Our Promotions Events</h1>
         <div className='grid   grid-cols-1 lg:grid-cols-2  gap-5'></div>
    </div>


{/*  Promotion Boxes  */}
<div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-5' >


{/* Left Side */}

<div className='grid gap-5'>

    {/* Rows Left Side Box-1 */}
    <div className=' bg-gray-200  flex justify-between  flex-wrap '>
        <div className='pl-2 md:pl-5'>
            <h1 className='text-[30px] md:text-[50px] lg:text-[40px] font-bold pt-10 '>GET UP TO 60%</h1> 
            <p className='text-[20px]'>For the summer season</p></div>
        <div className=' pt-2'> <img src="/p8.png" alt="pic7"  className=' h-52  '/></div>   
    </div>

    {/* Rows Left Side Box-2 */}
        <div className='bg-gray-800   h-[200px] text-center text-white self-center'>
                     <h1 className='pt-5 text-[30px] md:text-[40px] font-bold'>GET 30% Off</h1>
                     <p className='pt-2'>USE PROMO CODE</p>
                     <button className='px-3 py-0 mt-2 bg-gray-600 text-[25px] md:text-[30px] text-gray-300 rounded-lg font-mono'><Link href='/'>KKWEKENDSALE</Link></button>
        </div>

</div>


{/* Right Side */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

    {/* cols right Side Box-3  */}
        <div className='bg-orange-100 font-bold'>
            <div className='p-5 pb-0'>
                <p>Flex Push Button Bomber</p>
                <h1 className='font-sans text-xl'> <span className='line-through line-through-solid px-2 font-normal'>  $225.00</span>$190.00</h1>
            </div>
                <img src="/pp1.png" alt="" className='pt-2' />
        </div>

            


 {/* cols right Side Box-4  */}
        <div className='bg-gray-300'>
            <div className='p-5 pb-0 font-bold'>
                <p>Flex Push Button Bomber</p>
                <h1 className='font-sans text-xl'> <span className='line-through line-through-solid px-2 font-normal '>  $225.00</span>$190.00</h1>
            </div>
                <img src="/pp2.png" alt="" className='pt-2' />
        </div>
    </div>

</div>

 </>
    )
}