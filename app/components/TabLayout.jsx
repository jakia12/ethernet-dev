"use client";

import { useState } from "react";
import Dashboard from "./Dashboard";
import Docs from "./Docs";
import Launch from "./Launch";
import Tokens from "./Tokens";
import TopBtn from "./TopBtn";

const tabs = ["DASH", "LAUNCH", "TOKENS", "DOCS"];

export default function TabLayout() {
  const [activeTab, setActiveTab] = useState("DASH");

  const renderContent = () => {
    switch (activeTab) {
      case "DASH":
        return <Dashboard />;
      case "LAUNCH":
        return <Launch />;
      case "TOKENS":
        return <Tokens />;
      case "DOCS":
        return <Docs />;
      default:
        return null;
    }
  };

  return (
    // <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 ">
    //   <div className="flex flex-col items-start ">
    //     <TopBtn />
    //     <div className="flex gap-2 bg-[#171717]  rounded-[12px] shadow border border-[#383838] sticky top-0 z-10">
    //       {tabs.map((tab) => (
    //         <button
    //           key={tab}
    //           onClick={() => setActiveTab(tab)}
    //           className={`text-sm  transition-colors  font-[400] text-[17px] px-6 rounded-[12px]
    //           ${
    //             activeTab === tab
    //               ? "bg-[#100F0F] text-[#00FFB2]  border border-[#383838] py-[9px] w-[110px] "
    //               : " text-[#fff] hover:text-white  "
    //           }`}
    //         >
    //           {tab}
    //         </button>
    //       ))}
    //     </div>

    //     <div className="mt-10 w-full lg:w-[610px] h-[500px]  ">
    //       {renderContent()}
    //     </div>
    //   </div>
    // </div>

    <div className=" bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-start w-full max-w-2xl">
        <TopBtn />

        {/* Tab Bar */}
        <div className="flex gap-2 bg-[#171717] rounded-[12px] shadow border border-[#383838] sticky top-0 z-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm cursor-pointer transition-colors font-[400] text-[13px] px-[19px] lg:text-[17px] lg:px-6 rounded-[12px]
                ${
                  activeTab === tab
                    ? "bg-[#100F0F] text-[#00FFB2] border border-[#383838] py-[9px] lg:w-[110px]"
                    : "text-[#fff] hover:text-white py-[9px] lg:w-[110px]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section with Fixed Height */}
        <div className="mt-[22px] w-full lg:w-[630px]  lg:h-[700px] h-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
