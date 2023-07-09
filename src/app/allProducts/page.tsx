import { Products } from "@/components/dataComponents/Mock";
import ProductCard from "@/components/productComponents/ProductCard"
import { StaticImageData } from "next/image";

const AllProducts = () => {
  return (
    <>
    <h1 className="text-center bg-gray-100 font-bold text-3xl md:text-5xl text-gray-500 my-2 py-2 mt-10">ALL PRODUCTS</h1>
    <div className="flex justify-evenly mt-16 py-10 flex-wrap gap-5  mx-10 ">
      {Products.map((product) => (
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
    </>
  );
};
export default AllProducts;