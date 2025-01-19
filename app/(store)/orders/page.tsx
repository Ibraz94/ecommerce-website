import { getMyOrders } from "@/sanity/lib/orders/getMyOrders";
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export default async function Orders() {
       const { userId } = await auth();
        
       if (!userId) {
           return redirect("/"); 
        }

        const orders = await getMyOrders(userId);
     
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
             <div className="bg-white p-4 sm:p-8 rounded-xl border-2 w-full max-w-4xl flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-8">
                MY ORDERS
                </h1>
                {orders.length === 0 ? (
                    <div className="text-2xl font-bold text-gray-600">
                    <p>You have not placed any orders yet!</p>
                    </div>
                ) : (
                     <div className="p-4 sm:p-6 border border-gray-200">
                        {orders.map((order) => (
                        <div
                        key={order.orderNumber}>
                        <div>
                        <p>Order Number</p>
                        <p>{order.orderNumber}</p>
                        <div>
                        <div>
                            <p>Order Date</p>
                            <p>{order.orderDate  ? new Date(order.orderDate).toLocaleDateString():"N/A"}</p>
                        </div>
                        </div>
                        </div>
                        </div>
                        ))}
                     </div>
                )}
             </div>   
            </div>
        )
}