import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface Card2Props {
  subTitle: string;
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
}

const Card2: React.FC<Card2Props> = ({ subTitle, title, desc, link, imgUrl }) => {
  return (
    <div className='border-[1px] border-gray-300 rounded-lg flex '>
          <div className='relative w-full min-h-[312px] border  rounded-l-lg'>
        <Image src={imgUrl} alt={title} fill className='absolute'/>
      </div>
      <div className='bg-[#F2F2F2] p-[48px]'>
        <h1 className='font-semibold pb-[8px]'>{subTitle}</h1>
        <h1 className="text-[25px] font-bold pb-[24px]">{title}</h1>
        <p className='pb-[32px]'>{desc}</p>
        <Link href="/">{link}{" >"}</Link>
      </div>
    
    </div>
  )
}

export default Card2