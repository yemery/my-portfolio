import Here from "../components/commons/Here";

const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 h-full flex items-center justify-center max-w-2xl m-auto ">
        <p className="text-center text-base md:text-xl">
          Thank you for visiting my portfolio! If you have any questions,
          inquiries, or would like to discuss potential collaborations, feel
          free to reach out by emailing me directly <Here email="mailto:meryemajmani33@gmail.com" />
        </p>
      </div>
      {/* <div className="text-right p-7">
        <p className="font-semibold">credits</p>
        <a href="https://stormix.co/" className="text-sm text-gray-700 hover:underline"> stormix</a>
    </div> */}
      <div className="text-center italic text-xs p-3">
       
        <p>
          © 2024 Meryem Ajmani  . All rights reserved. 
        </p>
        <p> Some designs used  were adapted from <span><Here email="https://stormix.co/" /> </span>. Credit goes to <span className="font-semibold">Stormix</span>.</p>
      </div>
    </div>
  );
};

export default Contact;
