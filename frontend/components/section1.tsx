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
      "
      >
        
        <div className="lg:w-[566px] w-full">
          <h1 className="text-[#112F30] text-[50px] lg:text-[70px] font-medium pb-[10px] text-center lg:text-left">
            Revolutionizing Skin Cancer Detection with AI
          </h1>
          <p className="text-gray pb-[30px] text-center lg:text-left">
            Discover how our advanced AI model analyzes skin lesions to help
            identify potential cancerous conditions. Empower yourself with
            knowledge and take the first step towards proactive skin health.
          </p>
       <Link href="">
          <button className="bg-[#3B9EA3] py-2 w-full text-white font-bold text-lg rounded-lg cursor-pointer">
            Try the Skin Cancer Checker
          </button></Link>
        </div>
      </section>
  )
}

export default section1