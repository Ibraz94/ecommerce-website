import { defineQuery } from "next-sanity";
import { SanityClient } from "sanity";
import { sanityFetch } from "../live";


export async function getMyOrders(userId: string) {
      if (!userId) {
        throw new Error("user ID is Required");
      }

    const MY_ORDERS_QUERY = defineQuery(`
        *[_type == "order" && clerkUserId == $userId] | order(orderdate desc) {
           ...,
           product[]{
           ...,
           product->
         }
        }
    `);

    try {
        const orders = await sanityFetch({
        query: MY_ORDERS_QUERY, 
        params: { userId },
    });

    return orders.data || [];
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw new Error("Error fetching orders");
    }
}