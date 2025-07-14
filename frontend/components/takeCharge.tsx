import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TakeCharge = () => {
  return (
    <div className="relative overflow-visible bg-[#3B9EA3]  flex lg:items-end items-center justify-center lg:justify-between min-h-[420px] xl:px-[160px]">
      {/* Text Content */}
      <div className="text-white text-center lg:text-left max-w-xl py-16 pl-[16px] ">
        <h2 className="text-4xl font-bold mb-4">Take Charge of Your Skin</h2>
        <p className="text-lg pb-[36px]">Empower yourself with our AI tool to analyze skin lesions for educational insights. Remember, for a professional diagnosis, always consult a healthcare provider..</p>
       <Link
            href="/scan"
            className="text-center w-full text-[#3B9EA3] bg-white py-4  w-full sm:px-[110px] px-[30px] font-bold text-lg rounded-lg cursor-pointer"
          >
            <span >Try the Skin Cancer Checker</span>
          </Link>
      </div>

      {/* Nurse Image */}
      <div className="absolute -top-20 xl:right-38 right-10 hidden lg:block">
        <Image
          src="/nurse.png"
          alt="Nurse"
          width={392}
          height={501}
        />
      </div>
    </div>
  )
}

export default TakeCharge
