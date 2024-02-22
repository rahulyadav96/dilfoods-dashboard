import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import top_products from "../mock/top_selling.json";
export default function TopSellingProducts() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: [...top_products.topSelling.products],
      datasets: [
        {
          data: [...top_products.topSelling.quntities],
          backgroundColor: ["#C4E0A5", "#FFC832", "#018E42", "#F0C6B7"],
          hoverBackgroundColor: ["#C4E0A5", "#FFC832", "#018E42", "#F0C6B7"],
        },
      ],
    };
    const options = {
      cutout: "60%",
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card p-2 lg:p-4 border-round-md border-1 border-solid border-200">
      <div className="mb-6">
        <h3 className="m-0 white-space-nowrap">Top Selling Products</h3>
        <p className="m-0 text-xs">( * No. of items per day )</p>
      </div>
      <div className="card flex justify-content-center mb-5">
        <Chart type="doughnut" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
