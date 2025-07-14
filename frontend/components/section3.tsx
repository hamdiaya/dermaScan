import React from "react";
import TypesCard from "./typesCard";
import Card2 from "./card2";
import InfoCard from "./infoCard";

const Section3 = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-[112px]">
      <div className="pb-[90px] lg:w-[768px] w-full px-[50px] lg:px-0 pt-[112px] flex flex-col items-center justify-center">
        <h1 className="font-bold pb-[16px]">Awareness</h1>
        <h2 className="text-[#112F30] pb-[24px] text-[40px] lg:text-[50px] font-medium text-center">
          Understanding Skin Cancer
        </h2>
        <p className="text-center">Learn about common skin cancer types.</p>
      </div>

      <div className="xl:flex xl:flex-row flex flex-col gap-[32px] w-full items-stretch justify-center 2xl:px-[200px] md:px-[90px] px-[20px] ">
        {/* Left Column */}
        <div className="flex flex-col gap-[32px] ">
          <TypesCard
            subTitle={"Types"}
            title={"Melanoma: The Most Dangerous Type"}
            desc={
              "Melanoma is a serious form of skin cancer that can spread rapidly."
            }
            link={"Discover"}
            imgUrl={"/image3.png"}
          />
          <div className="flex gap-[32px] h-full ">
            <InfoCard
              imgSrc={"/oncology.png"}
              title={"Basal Cell Carcinoma Explained"}
              desc={"The most common type of skin cancer."}
              link={"Discover"}
              className="flex-1"
            />
            <InfoCard
              imgSrc={"/oncology.png"}
              title={"Basal Cell Carcinoma Explained"}
              desc={"The most common type of skin cancer."}
              link={"Discover"}
              className="flex-1"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-[32px] flex-1 h-full">
          <Card2
            subTitle={"Knowledge"}
            title={"Early Detection Saves Lives"}
            desc={"Stay informed and check your skin regularly."}
            link={"Discover"}
            imgUrl={"/Image.png"}
          />
          <TypesCard
            subTitle={"Awareness"}
            title={"Understanding Merkel Cell Carcinoma"}
            desc={"Learn about this rare but aggressive skin cancer."}
            link={"Learn"}
            imgUrl={"/Image2.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
