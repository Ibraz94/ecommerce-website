"use client";

import { Product } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";

interface AddToBasketButtonProps {
    product: Product;
    disabled?: boolean;
}


export default function AddToBasketButton({product, disabled}: AddToBasketButtonProps) {
    const { addItem, removeItem, getItemCount } = useBasketStore();
    const itemCount = getItemCount(product._id);
    const [ isClient, setIsClient ] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }


        return (
          <div className="w-[170px] h-[44px] bg-[#F0F0F0] rounded-[62px] flex items-center justify-center space-x-4">
            <button
            onClick={() => removeItem(product._id)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            itemCount === 0
            ? "bg-gray-100 cursor-not-allowed" : "hover:bg-gray-300"
            }`}
            disabled={itemCount == 0 || disabled}>
            <span
            className={`text-3xl ${ itemCount === 0 ? "" : ""}`}>
              -
            </span>
            </button>
            <span className="w-8 text-center text-xl">{itemCount}</span>
            <button
            onClick={() => addItem(product)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            disabled
            ? "bg-gray-100 cursor-not-allowed" : "hover:bg-gray-300"
            }`}
            disabled={disabled}>
            <span className="text-2xl">
              +
            </span>
            </button>
          </div>
        );
    };