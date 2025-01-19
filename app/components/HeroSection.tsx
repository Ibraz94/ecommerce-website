import Image from "next/image"
import { Button } from "../components/ui/button"


export default function HeroSection() {
  return (
    <div className="w-full bg-[#F2F0F1] ">
      <div className="flex flex-col lg:flex-row items-center justify-evenly h-[600px] lg:h-[705px]">
        {/* Left Content */}
        <div className="flex flex-col gap-10 text-left lg:text-left justify-start">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-sm sm:text-base opacity-60">
            Browse through our diverse range of meticulously crafted garments, designed
            <br className="hidden lg:block" /> to bring out your individuality and cater to your sense of style.
          </p>
            <Button className="w-40 sm:w-52 h-10 sm:h-12 rounded-full">Shop Now</Button>
        </div>
        {/* Right Image */}
        <Image
            src="/model.png"
            width={880}
            height={100}
            alt="Model Image"
            className="max-w-sm sm:max-w-md lg:max-w-2xl relative top-10 lg:top-10"
          />

        <Image
          src="/star2.svg"
          width={80}
          height={1}
          alt="star2"
          className="absolute right-[44%]"
          />
         
          <Image
          src="/star1.svg"
          width={124}
          height={104}
          alt="star1"
          className="absolute top-60 right-56 "
          />
      </div>
    <div className="bg-black flex items-center justify-around relative h-20 lg:h-24">
      <Image
      src="/versace.svg"
      width={166}
      height={33}
      alt="1"
      />
      <Image
      src="/zara.svg"
      width={91}
      height={38}
      alt="2"
      />
      <Image
      src="/gucci.svg"
      width={156}
      height={36}
      alt="3"
      />
      <Image
      src="/prada.svg"
      width={194}
      height={32}
      alt="4"
      />
      <Image
      src="/ck.svg"
      width={206}
      height={33}
      alt="5"
      />
    </div>
    </div>
  );
}

  
