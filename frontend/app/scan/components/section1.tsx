import NavBar from '@/components/navBar'
import Link from 'next/link'
import React from 'react'

const section1 = () => {
  return (
    <section
      className="
        w-full h-screen
        flex flex-col justify-center items-center
        lg:flex-row lg:items-center lg:justify-start
        pt-[100px] lg:pt-[100px] px-8 lg:pl-[120px] bg-[url('/bg.png')] xl:bg-[url('/bg2.png')]
        bg-cover bg-center bg-no-repeat
        relative
      "
    >
      {/* Navbar on top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <NavBar />
      </div>
      {/* Content below navbar */}
      <div className="lg:w-[566px] w-full mt-[100px]">
        <h1 className="text-[#112F30] text-[50px] lg:text-[70px] font-medium pb-[10px] text-center lg:text-left">
         Check Your Skin Health in Seconds
        </h1>
        <p className="text-gray pb-[30px] text-center lg:text-left">
       Upload a clear photo of a skin spot or lesion, and our AI will provide an instant prediction (For educational use only)  </p>
       
      </div>
    </section>
  )
}

export default section1