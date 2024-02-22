import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/slices/appSlice";
import SalesStatcis from "../components/SalesStatics";

import { useState } from "react";
import UserActivity from "../components/UserActivity";
import TopSellingProducts from "../components/TopSellingProducts";

export default function Dashboard() {
  const isLoading = useSelector((state) => state.application.isLoading);
  const dispatch = useDispatch();
  const showhandler = () => {
    dispatch(showLoading());
  };
  const hideHandler = () => {
    dispatch(hideLoading());
  };

  return (
    <div className="w-11 m-auto">
      <h3>Dashboard Analytics</h3>
      <div className=" m-auto">
        <div className="flex flex-column lg:flex-row gap-4">
          <div className="flex-1 card">
            <SalesStatcis />
          </div>
          <div className="flex-2">
            <TopSellingProducts />
          </div>
        </div>
      </div>
      <div className="flex-1 my-4">
        <UserActivity />
      </div>
    </div>
  );
}
