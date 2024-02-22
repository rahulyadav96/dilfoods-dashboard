import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/slices/appSlice";
import SalesStatcis from "../components/SalesStatics";

import { useState } from "react";

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
      <div className="gap-4 m-auto">
        <div className="flex">
          <div className="w-full lg:w-6 card">
            <SalesStatcis />
          </div>
        </div>
      </div>
    </div>
  );
}
