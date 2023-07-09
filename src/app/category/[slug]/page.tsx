

import { Products } from "@/components/dataComponents/Mock"
import ProductCard from "@/components/productComponents/ProductCard";
import { StaticImageData } from "next/image";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const getProductsByCategory = (category: string) => {
  return Products.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);
  return (
    <>
<div>
<h1 className="text-center bg-gray-100 font-bold text-3xl md:text-5xl text-gray-500 my-2 py-2 mt-10">{params.slug} products</h1>
</div>
   
    <div className="flex justify-evenly mt-5 md:mt-16 py-10 flex-wrap mx-5 md:mx-20">
  
      {result.length > 0 ? (
        result.map((product) => (
<>


          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
            category={product.category}
            id={product.id}
          />

</>

        ))
      ) : (
        <p>No Products Found


        </p>
      )}
    </div>
    </>
  );
}





