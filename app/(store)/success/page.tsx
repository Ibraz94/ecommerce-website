"use client"

import { useEffect } from "react"
import useBasketStore from "@/store/store"
import { Button } from "@/app/components/ui/button"
import { useSearchParams } from "next/navigation"
import { Link } from "lucide-react"

export default function SuccessPage() {

    const searchParams = useSearchParams()
    const orderNumber = searchParams.get("order_number")
    const clearBasket = useBasketStore((state) => state.clearBasket);

    useEffect(() => {
        if (orderNumber) {
            clearBasket()
    }
    }, [orderNumber, clearBasket]);


    return (
       <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-12 rounded-xl shadow-lg max-w-2xl w-full mx-4">
        <div className="flex justify-center mb-8">
         <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
         <svg 
         className="h-8 w-8 text-gray-600" 
         viewBox="0 0 24 24" 
         fill="none"
         stroke="currentColor"
         >

          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
          />
         </svg>
         </div>
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">
          Thank You  for Your Order!
        </h1>
        
        <div className="border-t border-b border-gray-200 py-6 mb-6 flex items-center justify-center">
            <p className="text-lg text-gray-700 mb-4">
                Your order has been confirmed and will be shipped shortly.
            </p>
            <div className="space-y-2">
                {orderNumber && (
                    <p className="text-gray-600 flex items-center space-x-5">
                     <span>Order Number:</span>
                     <span className="font-mono text-sm text-gray-600">{orderNumber}
                     </span>
                    </p>
                )}

            </div>
        </div>
            <div className="space-y-4 flex flex-col gap-4 items-center justify-center">
                <p className="text-gray-600">
                 A confirmation email has been sent to your email address.
                </p>
               <div className="flex flex-col sm:flex-row justify-center gap-2">
                 <Button className="bg-gray-900 hover:bg-gray-700">
                 View Order Details
                 </Button>
                 <Button
                 variant={"outline"}
                 className="text-black">
                 Continue Shopping
                 </Button>
               </div>
            </div>

     </div>
    </div>

    )
}

