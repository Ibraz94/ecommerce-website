import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Divide, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


function ProductThumb({ product }: {product: Product}) {
    const isOutOfStock = product.stock != null && product.stock <= 0;

    return (
            <div className="w-[350px] flex flex-col gap-4">
            <Link
            href={`/product/${product.slug?.current}`}
            className={`group flex flex-col w-[320px] h-[398px] items-center justify-center bg-[#F0EEED] rounded-[20px] border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
            >
        
            <div className="w-[295px] h-[398px]">
                {product.image && (
                    <Image
                    src={urlFor(product.image).url()}
                    alt={product.name || "product image"}
                    width={408}
                    height={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    )}
                {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                     <span className="text-white font-bold text-lg">Out of Stock</span>
                    </div>
                )}
            </div>
          </Link>
              <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
              </h2>
              <div className="flex gap-1">
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <p>5.0<span className="opacity-60">/5</span></p>
                </div>
              <p className="mt-2 text-2xl font-bold text-gray-900">
              ${product.price?.toFixed(2)}
              </p>
          </div>
          </div>
    );
}

export default ProductThumb;