import Image from 'next/image'

import Hero from '@/components/my-comnonents/Hero'
import Promotion from '@/components/my-comnonents/Promotion'
import Sec4Heading from '@/components/my-comnonents/Sec4Heading'
import Sec5Detail from '@/components/my-comnonents/Sec5Detail'
import Sec6Newsleter from '@/components/my-comnonents/Sec6Newsletter'

import ProductList from '@/components/productComponents/ProductList'

export default function Home() {
  return (
   <>

   <div className='mx-5 lg:mx-20'>
 

   <Hero/>
   <Promotion/>



<div className='text-center py-20'>
  <span className='text-indigo-700 font-bold my-5'>PRODUCTS</span>
  <h1 className='text-2xl md:text-4xl font-bold mb-10 mt-2 underline'>Check What We Have</h1>
<div className='flex justify-center ' >
<ProductList />
</div>
</div>


   <Sec4Heading/>
   <Sec5Detail/>
   <Sec6Newsleter/>
 
 

   </div>
   </>
  )
}
