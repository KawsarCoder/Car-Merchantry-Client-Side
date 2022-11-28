import React from "react";

const SaleInfo = () => {
  return (
    <div className="m-auto grid my-20">
      <div className="m-auto">
        <h1 className="font-bold w-80 text-center border-b-4 border-blue-400 mb-5 p-5 text-2xl">
          Here is Our sales!!
        </h1>
      </div>
      <div className="stats stats-vertical bg-gray-200 lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Monthly Sales</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Nov 1st - Dec 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Buyer's</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Seller's</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default SaleInfo;
