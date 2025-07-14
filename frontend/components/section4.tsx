import React from "react";

const section4 = () => {
  return (
    <section className="bg-[#F2F2F2] flex flex-col md:flex-row py-[60px] md:py-[120px] gap-[40px] md:gap-[67px] 2xl:px-[116px] md:px-[90px] px-[20px]">
      <div className="min-w-[220px] md:min-w-[320px] w-full md:w-auto mb-8 md:mb-0">
        <h1 className="font-bold pb-[16px] text-[28px] md:text-[36px] text-[#112F30]">Important Notice</h1>
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-semibold pl-[12px] text-[18px] md:text-[20px] text-[#3B9EA3]">Educational Use</h2>
          <h2 className="pl-[32px] text-[16px] md:text-[18px]">Consult a Doctor</h2>
          <h2 className="pl-[48px] text-[16px] md:text-[18px]">Seek Help</h2>
          <h2 className="pl-[64px] text-[16px] md:text-[18px]">Stay Informed</h2>
          <h2 className="pl-[80px] text-[16px] md:text-[18px]">Be Aware</h2>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] md:gap-[36px] text-[16px] md:text-[20px] w-full md:w-2/3">
        <p>
          This tool is designed to assist users in understanding potential skin
          cancer risks based on uploaded images. However, it is crucial to
          remember that this analysis is not definitive and should not replace a
          thorough examination by a healthcare professional.
        </p>
        <p>
          While the AI model can provide insights, it is not a diagnostic tool.
          Users are encouraged to seek medical attention for any concerning
          symptoms or changes in their skin.
        </p>
        <p>
          Understanding the limitations of AI in healthcare is essential. The
          technology is continually evolving, but it cannot replicate the
          expertise of trained medical professionals.
        </p>
        <p>
          For any health-related concerns, always prioritize consulting with a
          qualified doctor who can provide personalized advice and treatment
          options.
        </p>
        <p>
          Your health is paramount, and being proactive about skin health is
          vital. Regular check-ups and being vigilant about changes in your skin
          can lead to early detection and better outcomes.
        </p>
        <p>
          Stay informed about skin cancer and its signs. Knowledge is your best
          defense against health issues.
        </p>
        <p>
          Remember, this tool serves as a guide, not a replacement for
          professional healthcare. Always act on your instincts and seek help
          when needed.
        </p>
      </div>
    </section>
  );
};

export default section4;