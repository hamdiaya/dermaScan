import React from "react";
import Image from "next/image";
import Card from "@/components/card";
import Link from "next/link";

const section2 = () => {
  return (
    <section className="bg-[#D7EBEC] pb-[137px] flex flex-col items-center justify-center ">
      <div className=" pb-[90px] lg:w-[768px] w-full px-[50px] lg:px-0 pt-[112px] flex flex-col items-center justify-center">
        <h1 className="font-bold pb-[16px] ">Analyse</h1>
        <h2 className="text-[#112F30] pb-[24px] text-[40px] lg:text-[50px] font-medium text-center">
          Understanding Our AI-Powered Detection Tool
        </h2>
        <p className=" text-center ">
          Our AI model utilizes advanced deep learning techniques to analyze
          skin images. Trained on extensive medical datasets, it provides
          accurate predictions for skin cancer detection.
        </p>
      </div>
      <div className="  lg:p-0 p-[30px] md:flex md:flex-row flex flex-col gap-[64px]  ">
        <div className="flex flex-col gap-[64px]">
          <Card
            imgSrc={"/model_training.png"}
            title={"Deep Learning Insights"}
            desc={
              "The model learns from thousands of images to identify patterns associated with skin cancer."
            }
          />
          <Card
            imgSrc={"/layers_clear.png"}
            title={"How It Works"}
            desc={
              "Images are processed through layers of neural networks, enhancing detection accuracy and reliability."
            }
          />
        </div>
        <div className="hidden 2xl:flex flex-col items-center">
          <Image
            src="/doctor2.png"
            alt="doctor"
            width={514}
            height={514}
            className="mb-[-32px]"
          />
          <Link
            href="/scan"
            className="text-center w-full bg-[#3B9EA3] py-4  w-full text-white font-bold text-lg rounded-lg cursor-pointer"
          >
            <span>Try the Skin Cancer Checker</span>
          </Link>
        </div>
        <div className="flex flex-col gap-[64px]">
          <Card
            imgSrc={"/model_training.png"}
            title={"Deep Learning Insights"}
            desc={
              "The model learns from thousands of images to identify patterns associated with skin cancer."
            }
          />
          <Card
            imgSrc={"/layers_clear.png"}
            title={"How It Works"}
            desc={
              "Images are processed through layers of neural networks, enhancing detection accuracy and reliability."
            }
          />
        </div>
      </div>
      <div className="flex 2xl:hidden flex-col items-center px-[20px]">
        <Image
          src="/doctor2.png"
          alt="doctor"
          width={514}
          height={514}
          className="mb-[-32px]"
        />
        <Link
          href="/scan"
          className=" text-center w-full bg-[#3B9EA3] py-4  w-full text-white font-bold text-lg rounded-lg cursor-pointer"
        >
          <span className="">Try the Skin Cancer Checker</span>
        </Link>
      </div>
    </section>
  );
};

export default section2;
