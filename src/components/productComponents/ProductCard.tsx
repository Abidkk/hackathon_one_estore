



import { Button } from '@/components/ui/button';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';


export default function ProductCard(props: {
  title:string;
  price:string;
  img :StaticImageData;
  category:string;
  id: number;

}){

  return(
    <>
    <Link href={`/productsdetail/${props.id}`}>

    <div className='mb-5 hover:scale-105 duration-500 '>

    <Image src={props.img} alt='ad' height={300} width={280}  />


      <h1> <b>{props.title}</b> </h1>
      <h1>Price : <b> {props.price}</b></h1>
      <h1> Category : <b>{props.category}</b> </h1>
   <Button className='hover:bg-blue-900 my-2'>Add to Cart</Button>
     
    </div>

    </Link>
    
    </>
  )
}