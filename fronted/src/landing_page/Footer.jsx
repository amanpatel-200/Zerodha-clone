import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
const Footer = () => {
  return (
    <div className="w-full  bg-gray-100 p-2  ">
      <div className="flex flex-col gap-8 lg:flex-row justify-between py-10 px-30">
        <div className="w-64">
        <img src={logo} alt="" className="w-30" />
        <p className="max-w-65 mt-5">© 2010 - 2026, Zerodha Broking Ltd.

All      rights reserved.</p>

      </div>
      <div className=" flex flex-col gap-3 text-gray-600 ">
        <h1 className="text-black text-xl">Account</h1>
        <Link className="hover:text-blue-600">Open demat account</Link>
        <Link className="hover:text-blue-600">Minor demat account</Link>
        <Link className="hover:text-blue-600">NRI demat account</Link>
        <Link className="hover:text-blue-600">HUF demat account</Link>
        <Link className="hover:text-blue-600">Commodity</Link>
        <Link className="hover:text-blue-600">Dematerialisation</Link>
        <Link className="hover:text-blue-600">Fund transfer</Link>
        <Link className="hover:text-blue-600">MTF</Link>
      </div>
      <div className="flex flex-col gap-3 text-gray-600">
        <h1 className="text-black text-xl">Support</h1>
        <Link className="hover:text-blue-600">Contact us</Link>
        <Link className="hover:text-blue-600">Support portal</Link>
        <Link className="hover:text-blue-600">How to file a complaint?</Link>
        <Link className="hover:text-blue-600">Status of your complaints</Link>
        <Link className="hover:text-blue-600">Bulletin</Link>
        <Link className="hover:text-blue-600">Circular</Link>
        <Link className="hover:text-blue-600">Z-Connect blog</Link>
        <Link className="hover:text-blue-600">Downloads</Link>
      </div>
      <div className="flex flex-col gap-3 text-gray-600">
        <h1 className="text-black text-xl">Company</h1>

        <Link className="hover:text-blue-600">About</Link>
        <Link className="hover:text-blue-600">Philosophy</Link>
        <Link className="hover:text-blue-600">Press & media</Link>
        <Link className="hover:text-blue-600">Careers</Link>
        <Link className="hover:text-blue-600">Zerodha Cares (CSR)</Link>
        <Link className="hover:text-blue-600">Zerodha.tech</Link>
        <Link className="hover:text-blue-600">Open source</Link>
        <Link className="hover:text-blue-600">Referral program</Link>
      </div>
      <div className="flex flex-col gap-3 text-gray-600">
        <h1 className="text-xl text-black">Quick links</h1>
        <Link className="hover:text-blue-600">Upcoming IPOs</Link>
        <Link className="hover:text-blue-600">Brokerage charges</Link>
        <Link className="hover:text-blue-600">Market holidays</Link>
        <Link className="hover:text-blue-600">Economic calendar</Link>
        <Link className="hover:text-blue-600">Calculators</Link>
        <Link className="hover:text-blue-600">Markets</Link>
      </div>
      </div>
      <div className="px-26 text-[12px] text-gray-600">
      <div>
        <p className=" mb-4">Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
      </div>

      <div>
        <p className=" mb-4">Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
      </div>
      <div>
        <p className=" mb-4">Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
        <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
      </div>
      <div>
        <p className="mb-4">"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

      </div>
       <div className="">
        <p className=" mb-4">*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
        <p className=" mb-4">Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
       </div>
        </div>
      </div>
  );
};

export default Footer;
