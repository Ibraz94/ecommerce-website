import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import AddToBasketButton from "@/app/components/AddToBasketButton"
import ColorSelector from "@/app/components/ColorSelector";
import SizeSelector from "@/app/components/SizeSelector";


export default async function ProductPage({ 
  params
 }: { 
  params: Promise<{
    slug: string
    }>;
})
 {
     const { slug } = await params;
     const product = await getProductBySlug(slug);
     
     if (!product) {
       return notFound()
     }
     const isOutOfStock = product.stock != null && product.stock <= 0;

     return ( 
     <div className="p-20 flex items-center justify-center">
     <div className="flex gap-8">
       <div className={` bg-[#F0EEED] w-[500px] h-[550px] flex items-center justify-center overflow-hidden rounded-2xl shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}>
        {product.image && (
         <Image
         src={urlFor(product.image).url()}
         alt={product.name || "product image"}
         width={400}
         height={100}
         className=""
         />
         )}
         {isOutOfStock && (
         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <span className="text-white font-bold text-lg">Out of Stock</span>
         </div>
        )}
       </div>
       <div className="flex flex-col w-[800px] justify-between gap-8">
        <div className="space-y-4">
        <h1 className="text-[40px] font-extrabold">{product.name}</h1>
          <h1 className="text- mb-4 opacity-50">
          {Array.isArray(product.description) && (
            <PortableText value={product.description}/>
          )}
         </h1>
         
         <h1 className="text-3xl font-bold mb-4 border-b-2">${product.price?.toFixed(2)}</h1>
         <div className="space-y-4">
          <ColorSelector/>
        </div>
        <div className="border-b-2"></div>
        <div className="space-y-4">
          <SizeSelector/>
        </div>
        <div className="border-b-2"></div>
        </div>
        <div>
          <AddToBasketButton product={product} disabled={isOutOfStock} />
        </div>
       </div>
      </div>
      </div>
  )};
 
