"use client";

import { useState } from "react";
import { Button } from "./ui/button";




const SIZES = [
    { name: "Small", value: "S" },
    { name: "Medium", value: "M" },
    { name: "Large", value: "L" },
    { name: "X-Large", value: "XL" },
  ];




export default function SizeSelector(){

    const [selectedSize, setSelectedSize] = useState(SIZES[2]);

   return(
    <div>
    <h2 className="text-sm font-medium text-gray-700 mb-2">Choose Size</h2>
    <div className="flex flex-wrap gap-3">
      {SIZES.map((size) => (
        <Button
          key={size.value}
          onClick={() => setSelectedSize(size)}
          className={`rounded-full px-6 ${
            selectedSize.value === size.value
              ? 'bg-black text-white'
              : 'bg-[#F0F0F0] text-slate-500'
          }`}
        >
          {size.name}
        </Button>
      ))}
    </div>
  </div>

   )

  }