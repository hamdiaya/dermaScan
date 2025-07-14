import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface TypesCardProps {
  subTitle: string;
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
}

const TypesCard: React.FC<TypesCardProps> = ({ subTitle, title, desc, link, imgUrl }) => {
  return (
    <div className='border-[1px] border-gray-300 rounded-lg' >
      <div className='bg-[#F2F2F2] p-[48px]'>
        <h1 className='font-semibold pb-[8px]'>{subTitle}</h1>
        <h1 className="text-[36px] font-bold pb-[24px]">{title}</h1>
        <p className='pb-[32px]'>{desc}</p>
       
          <Link href="/">{link}{" >"}</Link>
          
       
      </div>
      <div className='relative w-full h-[300px]'>
        <Image src={imgUrl} alt={title} fill className='absolute'/>
      </div>
    </div>
  )
}

export default TypesCard