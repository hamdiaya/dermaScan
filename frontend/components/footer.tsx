import React from "react";
import Image from "next/image";
import Link from "next/link";
const footer = () => {
  return (
    <div className="bg-[#D7EBEC] flex flex-col  items-center  gap-[32px] py-[80px] ">
     
        <Image src="/logo.png" alt="logo" width={162} height={48} />
         <div className="flex items-center gap-8 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Awareness</Link>
          <Link href="/">Notice</Link>
        </div>
    
    </div>
  );
};

export default footer;
