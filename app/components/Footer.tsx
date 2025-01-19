import Image from "next/image";
import { Mail, Twitter, Facebook, Instagram, Github } from "lucide-react";

export default function Footer() {
    return (
    <div>
   <div className="w-full max-w-[1240px] h-auto md:h-[180px] bg-black rounded-[20px] flex flex-col md:flex-row items-center justify-around px-6 py-8 md:py-0 mx-auto relative top-24">
   <h4 className="text-[24px] md:text-[40px] font-extrabold text-white text-center md:text-left">
    STAY UP TO DATE ABOUT <br className="hidden md:block" /> OUR LATEST OFFERS
    </h4>
    <div className="flex flex-col gap-4 w-full md:w-auto mt-6 md:mt-0">
    <div className="w-full md:w-[349px] h-[48px] bg-white rounded-[62px] flex items-center gap-4 px-6">
      <Mail className="opacity-50" />
      <input
        type="text"
        placeholder="Enter Your Email Address"
        className="flex-1 bg-transparent outline-none placeholder-opacity-50"
      />
    </div>
    <button className="w-full md:w-[349px] h-[48px] bg-white text-black rounded-[62px] font-medium">
      Subscribe To Newsletter
    </button>
    </div>
    </div>
    <div className="h-[530px] bg-[#F0F0F0] flex flex-col items-center justify-center gap-10">
    <div className="w-[1240px] h-[177px] flex justify-between">
    <div className="flex flex-col justify-between">
    <h1 className="text-4xl font-extrabold">SHOP.CO</h1>
    <p className="text-sm opacity-60">We have clothes that suits your style and  <br />which you’re proud to wear. <br /> From women to men.</p>
    <div className="flex gap-4">
    <Twitter/>
    <Facebook/>
    <Instagram/>
    <Github/>
    </div>
    </div>
    <div className="flex flex-col justify-between">
    <h4 className="text-base font-semibold">C O M P A N Y</h4>
    <h1 className="opacity-60 font-normal">About</h1>
    <h1 className="opacity-60 font-normal">Features</h1>
    <h1 className="opacity-60 font-normal">Works</h1>
    <h1 className="opacity-60 font-normal">Career</h1>
    </div>
    <div className="flex flex-col justify-between">
    <h4 className="text-base font-semibold">H E L P</h4>
    <h1 className="opacity-60 font-normal">Customer Support</h1>
    <h1 className="opacity-60 font-normal">Delivery Details</h1>
    <h1 className="opacity-60 font-normal">Terms & Conditions</h1>
    <h1 className="opacity-60 font-normal">payments</h1>
    </div>
    <div className="flex flex-col justify-between">
    <h4 className="text-base font-semibold">F A Q</h4>
    <h1 className="opacity-60 font-normal">Account</h1>
    <h1 className="opacity-60 font-normal">Manage Deliveries</h1>
    <h1 className="opacity-60 font-normal">Order</h1>
    <h1 className="opacity-60 font-normal">Payments</h1>
    </div>
    <div className="flex flex-col justify-between">
    <h4 className="text-base font-semibold">R E S O U R C E S</h4>
    <h1 className="opacity-60 font-normal">Free eBooks</h1>
    <h1 className="opacity-60 font-normal">Development Tutorial</h1>
    <h1 className="opacity-60 font-normal">How To - Blog</h1>
    <h1 className="opacity-60 font-normal">Youtube Playlist</h1>
    </div>
    </div>
   
    <div className="w-[1240px] flex items-end justify-between border-t-2  ">
    <p className="text-sm opacity-50">Shop.co © 2000-2024, All Rights Reserved</p>
    <Image
    src="/cards.png"
    width={300}
    height={300}
    alt="image"/>
    </div>
    </div>
    </div>
)
}