import React from "react";
import appStoreBadge from "../../assets/appstoreBadge.svg";
import googlePlayBadge from "../../assets/googlePlayBadge.svg";
const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="w-full flex flex-col items-start justify-center p-5 mt-10  lg:mt-40 lg:flex-row">
      <div className="w-full  lg:w-1/2  ">
        <img src={imageUrl} alt="product image" className="max-w-full" />
      </div>
      
      <div className="w-full  lg:w-1/4 mt-10 ">
        <h1 className="text-2xl font-medium">{productName}</h1>
        <p  className="mt-5 text-lg">{productDescription}</p>
        <div className="flex py-3">
          <a href={tryDemo} className="text-blue-600 text-lg">Try Demo →</a>
          <a href={learnMore} className="px-10 text-blue-600 text-lg">Learn More →</a>
        </div>
        <div className="flex ">
          <a href={appStore}>
            <img src={appStoreBadge} alt="" />
          </a>
          <a href={googlePlay} className="px-5">
            <img src={googlePlayBadge} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
