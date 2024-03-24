import React from "react";
import Here from "../components/commons/Here";

const Contact = () => {
  return (
  
      <div className="w-full h-full flex flex-col">
    <div className="flex-1 h-full flex items-center justify-center max-w-2xl m-auto ">
    <p className="text-center text-base md:text-xl">Thank you for visiting my portfolio! If you have any questions, inquiries,
      or would like to discuss potential collaborations, feel free to reach out
      by emailing me directly <Here/> 
      </p>
    </div>
    {/* <div className="text-right p-7">
        <p className="font-semibold">credits</p>
        <a href="https://stormix.co/" className="text-sm text-gray-700 hover:underline"> stormix</a>
    </div> */}
    <div className="text-center italic">
        <p className=" font-semibold text-sm">Burzum | 2024</p>
        <p className="text-xs">credits: <br /> stormix</p>
    </div>
      </div>

  );
};

export default Contact;
