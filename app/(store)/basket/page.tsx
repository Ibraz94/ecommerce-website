"use client"

import { createCheckOutSession, Metadata } from "@/actions/createCheckOutSession";
import AddToBasketButton from "@/app/components/AddToBasketButton";
import Loader from "@/app/components/Loader";
import { urlFor } from "@/sanity/lib/image";
import useBasketStore from "@/store/store";
import { SignInButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function BasketPage() {
   const groupedItems = useBasketStore((state) => state.getGroupedItems());
   const { isSignedIn } = useAuth();
   const { user } = useUser();
   const router = useRouter();
   const [ isClient, setIsClient ] = useState(false);
   const [ isLoading, setIsLoading ] = useState(false);

   useEffect(() => {
    setIsClient(true);
   }, []);

   if (!isClient) {
    return <Loader/>
   }

   if (groupedItems.length === 0) {
     return (
        <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-4xl w-full h-32 flex flex-col items-center justify-center border-2 rounded-xl">
            <h1 className="text-4xl font-extrabold mb-6 text-gray-800">CART</h1>
            <p className="text-2xl font-bold text-gray-600">Your Cart is Empty!</p>
            </div>
            </div>       
     );
   }

   const handleCheckOut = async () => {
     if (!isSignedIn) return;
     setIsLoading(true);
   

   try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "Unknown",
        clerkUserId: user!.id,
      };

   const checkoutUrl = await createCheckOutSession(groupedItems, metadata);

   if (checkoutUrl) {
    window.location.href = checkoutUrl;
   }
   } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setIsLoading(false);
    }
  };
   

   return (
   <div className="container mx-auto p-4 max-w-6xl">
    <h1 className="text-[40px] font-extrabold mb-4">YOUR CART</h1>
    <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
        {groupedItems?.map((item) => (
         <div key={item.product._id}
         className="mb-4 p-4 border rounded-2xl flex items-center justify-between"
         >
         <div className="flex items-center cursor-pointer flex-1 min-w-0"
         onClick={() =>
          router.push(`/product/${item.product.slug?.current}`)
         }
         >
          <div className="w-20 h-20 sm:w-24 sm:h-24  flex-shrink-0 mr-4">
           {item.product.image && (
            <Image
            src={urlFor(item.product.image).url()}
            alt={item.product.name || "product image"}
            width={96}
            height={96}
            className="w-full h-full bg-[#F0F0F0] object-cover rounded-lg"
            />
            )}
          </div>
          <div className="min-w-0">
            <h2 className="text-lg sm:text-xl font-semibold truncate">
              {item.product.name}
            </h2>
            <p className="text-sm sm:text-base">
             Price: $
             {((item.product.price ?? 0)* item.quantity).toFixed(2)}
            </p>
          </div>
         </div>
         <div className="flex items-center ml-4 flex-shrink-0">
          <AddToBasketButton product={item.product}/>
         </div>
        </div>
        ))}
      </div>
      <div className="w-full lg:w-80 lg:sticky lg:top-4 h-fit bg-white p-6 border rounded-2xl order-first lg:order-last fixed bottom-0 left-0 lg:left-auto">
      <h3 className="text-xl font-semibold">Order Summary</h3>
      <div className="mt-4 space-y-2">
      <p className="flex justify-between">
        <span>Items:</span>
        <span>
          {groupedItems.reduce((total, item) => total + item.quantity, 0)}
        </span>
      </p>
      <p className="flex justify-between text-2xl font-bold border-t pt-2">
        <span>Total:</span>
        <span>
          ${useBasketStore.getState().getTotalPrice().toFixed(2)}
        </span>
      </p>
      </div>

      {isSignedIn ?(
        <button
        onClick={handleCheckOut}
        disabled={isLoading}
        className="mt-4 w-full bg-black text-white px-4 py-2 rounded-[20px] hover:bg-gray-700 disabled:bg-gray-400"
        >
        {isLoading ? "Processing..." : "Go To Checkout"}
        </button>
      ) : (
        <SignInButton mode="modal">
          <button className="mt-4 w-full bg-black text-white px-4 py-2 rounded-[20px] hover:bg-gray-700">
            Sign in to Checkout
          </button>
        </SignInButton>
      )}
       </div>
       <div className="h-64 lg:h-0">
       </div>
      </div>
  </div>
   ) 
}