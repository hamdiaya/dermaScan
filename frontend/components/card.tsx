import React from 'react'
import Image from 'next/image'

interface CardProps {
  imgSrc: string;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, desc }) => {
  return (
    <div className='bg-[#EBF5F5] lg:px-[36px] px-[20px] py-[27px] lg:w-[395px] w-full items-center flex flex-col gap-[16px] '>
      <Image src={imgSrc} alt={title} width={48} height={48} />
      <h1 className='font-semibold text-[24px] text-center '>{title}</h1>
      <p className='text-center'>{desc}</p>
    </div>
  )
}

export default Card