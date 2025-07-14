import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface InfoCardProps {
  imgSrc: string;
  title: string;
  desc: string;
  link: string;
  className?: string; // ✅ Add optional className prop
}

const InfoCard: React.FC<InfoCardProps> = ({ imgSrc, title, desc, link, className = '' }) => {
  return (
    <div className={`border border-gray-300 rounded-lg bg-[#F2F2F2] p-[24px] h-full flex flex-col justify-center ${className}`}>
      <div className="flex flex-col items-center gap-2">
        <Image src={imgSrc} alt={title} width={48} height={48} />
        <h1 className='font-semibold text-[20px] text-center'>{title}</h1>
        <p className='text-center text-sm'>{desc}</p>
      </div>
      <div className="mt-4 text-center">
        <Link href="/" className="text-blue-600 font-medium hover:underline">
          {link} &gt;
        </Link>
      </div>
    </div>
  )
}

export default InfoCard;
