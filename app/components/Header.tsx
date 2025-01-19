"use client"

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "@/store/store";
import { Search, ChevronDown, CircleUserRound} from "lucide-react";

function Header() {
    const { user } = useUser();
    const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
    );
    
  return (
    <header className="h-28 flex flex-wrap justify-between items-center px-4 py-2 border-b-2 ">
     <div className="flex w-full flex-wrap justify-between items-center">
        <div className="flex items-center gap-24">
        <Link href="/"
        className="text-3xl text-black font-extrabold hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >SHOP.CO
        </Link>
        <div className="hidden md:flex gap-6">

          <Link 
          href="/categories"
          className="flex gap-1 text-sm md:text-base hover:underline">Shop<ChevronDown/> </Link>
          <button className="text-sm md:text-base hover:underline">On Sale</button>
          <button className="text-sm md:text-base hover:underline">New Arrivals</button>
          <button className="text-sm md:text-base hover:underline">Brands</button>
        </div>
        </div>
       

        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none ">
        <Form action='/search'
         className="w-full flex items-center bg-gray-100 rounded-full focus:ring-2 border sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0">
          <Search className="ml-2"/>
         <input type="text"
         name="query"
         placeholder="Search for Products"
         className="bg-gray-100 text-gray-800 px-2 py-2 rounded-full focus:outline-none focus:ring-black  w-[600px] max-w-2xl"
          />
        </Form>

            <Link href="/basket"
             className="relative top-2 right-2">
            <TrolleyIcon className="w-8 h-8"/>
            <span className="relative -top-8 -right-4 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
             {itemCount}
            </span>
            </Link>
            <ClerkLoaded>
                {user && (
                    <Link href="/orders"
                    className="flex-1 relative flex justify-center sm:justify-center items-center space-x-2 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                    <PackageIcon className="w-6 h-6"/>
                    <span>My Orders</span>
                    </Link>
                )}
                {user ? (
                    <div className="flex items-center space-x-2">
                        <UserButton/>
                     <div className="hidden sm:block text-xs">
                        <p className="text-gray-400">Welcome Back</p>
                        <p className="font-bold">{user.fullName}!</p>
                     </div>   
                    </div>
                ) : (
                    <SignInButton mode="modal">
                      <button>
                       <CircleUserRound/>
                      </button>
                    </SignInButton>
                )
            }
            </ClerkLoaded>
            </div>
        </div>
    </header>
  )
}

export default Header;
