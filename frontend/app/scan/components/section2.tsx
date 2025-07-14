"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Section2 = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<{ predicted_class: string; confidence: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      setResult(null);
      setTimeout(() => {
        setUploadedFile(file);
        setUploading(false);
      }, 1200);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    setUploadedFile(null);
    setResult(null);
  };

  const handleScan = async () => {
    if (!uploadedFile) return;
    setScanning(true);
    setResult(null);

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Failed to scan image");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.log(error);
      setResult({ predicted_class: "Error", confidence: "0%" });
    } finally {
      setScanning(false);
    }
  };

  return (
    <section className="bg-[#2F7E82] py-[60px] md:py-[120px] md:px-0 px-[10px] flex justify-center items-center min-h-screen">
      <div className="bg-white w-full max-w-2xl p-8 md:p-[64px] rounded-lg flex flex-col items-center">
        <h1 className="font-semibold text-[25px] md:text-[36px] text-center pb-[32px] md:pb-[52px]">
          Upload
        </h1>
        <div className="bg-[#F9FFF9] border-dashed border-2 border-[#2F7E82] py-8 px-4 md:py-[52px] md:px-[27px] flex flex-col items-center gap-4 w-full">
          <Image
            src="/Upload_icon.png"
            alt=""
            width={80}
            height={70}
            className="mb-2"
          />
          {!uploadedFile && !uploading && (
            <div className="flex font-semibold gap-2 text-[20px] md:text-[26px] flex-wrap md:flex-nowrap">
              <h1 className="text-[#333333]">Drag & drop files or </h1>
              <button
                className="text-[#2F7E82] underline cursor-pointer"
                type="button"
                onClick={handleBrowseClick}
              >
                Browse
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          )}
          {(uploading || uploadedFile) && (
            <div className="w-full flex flex-col items-center gap-2">
              <span className="text-[#2F7E82] font-semibold text-[18px]">
                {uploading ? "Uploading..." : "Uploaded"}
              </span>
              {uploadedFile && (
                <>
                  <span className="text-[#333333] text-[16px]">
                    {uploadedFile.name}
                  </span>
                  {/* Image Preview */}
                  <div className="w-full flex justify-center my-2">
                    <img
                      src={URL.createObjectURL(uploadedFile)}
                      alt="Preview"
                      className="max-h-[200px] rounded-lg border border-gray-300"
                    />
                  </div>
                </>
              )}
              <div className="w-full flex items-center gap-2 mt-2">
                <div className="flex-1 h-2 bg-[#2F7E82] rounded-full" />
                {uploadedFile && (
                  <button
                    className="ml-2 cursor-pointer px-3 py-1 bg-red-500 text-white rounded text-xs"
                    type="button"
                    onClick={handleRemove}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          )}
          <p className="text-[#676767] text-[15px] md:text-[19px] mt-2 text-center ">
            Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
          </p>
        </div>
        <button
          className={`bg-[#2F7E82] cursor-pointer w-full py-4 font-semibold text-[18px] md:text-[22px] rounded-lg mt-8 text-white transition-opacity ${
            !uploadedFile || scanning ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!uploadedFile || scanning}
          onClick={handleScan}
        >
          {scanning ? "Scanning..." : "Scan Image"}
        </button>
        {result && (
          <div className="mt-8 w-full bg-[#F9FFF9] border border-[#2F7E82] rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold text-[#2F7E82] mb-2">Result</h2>
            <p className="text-lg text-[#333]">
              <span className="font-semibold">Class:</span> {result.predicted_class}
            </p>
            <p className="text-lg text-[#333]">
              <span className="font-semibold">Confidence:</span> {result.confidence}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section2;