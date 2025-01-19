"use client";

import { Circle } from "lucide-react";
import { useState } from "react";








const COLORS = [
    { name: "Brown", 
      value: "#4F4631" 
    },
    { name: "Green", 
      value: "#314F4A" 
    },
    { name: "Blue", 
      value: "#31344F"
    },
    ];


export default function ColorSelector(){


const [selectedColor, setSelectedColor] = useState(COLORS[0]);   


return(

    <div className="space-y-6">
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Select Colors</h2>
              <div className="flex gap-2">
                {COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`relative rounded-full ${
                      selectedColor.value === color.value ? 'ring-2 ring-offset-2 ring-black' : ''
                    }`}
                  >
                    <Circle className="size-10" style={{ fill: color.value, stroke: 'none' }} />
                  </button>
                ))}
              </div>
            </div>
        </div>
)

}