
 import ProductCard from './ProductCard'

import {Products }from "../dataComponents/Mock"
import { StaticImageData } from 'next/image';



export default function ProductList() {
 
  const productChecks = Products.slice(0,4);

  return(

    <div className="flex flex-wrap justify-center gap-5 ">
{
  productChecks.map((product) => (


    <ProductCard  
    key={product.id} 
    title={product.name} 
    price={product.price}
    img={product.image as StaticImageData}
    category={product.category}
    id={product.id}
    
    />
  
  ))}
    </div>
  );

};

 



