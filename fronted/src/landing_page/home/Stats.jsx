import React from "react";
import ecosystem from "../../assets/ecosystem.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Stats = () => {
  return (
    <div className="w-full flex flex-col pl-10 pr-2  md:flex-row   mt-40">
      <div className=" w-full lg:w-1/2 ">
        <div className="w-full lg:pl-42 ">
          <h2 className="text-3xl">Trust with confidence</h2>
          <div className="mt-10">
            <h3 className="text-2xl">Customer-first always</h3>
            <p className="text-gray-600 py-2  max-w-lg">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl">No spam or gimmicks</h3>
            <p className="text-gray-600  py-2 max-w-lg">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you useot your pace, the way you like.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl"> The Zerodha universe</h3>
            <p className="text-gray-600  py-2 max-w-lg">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl">Do better with money</h3>
            <p className="text-gray-600 max-w-lg py-2">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2   ">
        <img src={ecosystem} alt="" className="w-full max-w-xl " />
        <div className="mt-3 px-3 flex gap-6">
          <Link className="text-blue-600 inline-flex items-center ">
            Explore our products
            <FaLongArrowAltRight />
          </Link>
          <Link className="text-blue-600 inline-flex items-center ">
            Try Kite demo
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stats;
