import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import sales from "../mock/sales.json";
import { Dropdown } from "primereact/dropdown";
import {
  getMonthlyProfitForm,
  getMonthlyRevenurForm,
} from "../utils/chartUtils";
const options = [
  { name: "2023", code: "2023" },
  { name: "2022", code: "2022" },
  { name: "2021", code: "2021" },
];
export default function SalesStatcis() {
  const [year, setYear] = useState({ name: "2023", code: "2023" });
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: [
        "Janurary",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Revenue",
          backgroundColor: "#92D5E6",
          borderColor: "#92D5E6",
          data: getMonthlyRevenurForm(year, sales),
        },
        {
          label: "Profit",
          backgroundColor: "#C4E0A5",
          borderColor: "#C4E0A5",
          data: getMonthlyProfitForm(year, sales),
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: "#000",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#000",
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: "#000",
          },
          grid: {
            color: "#E1E3EA",
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [year]);
  return (
    <div className="card p-2 lg:p-4 border-round-md border-1 border-solid border-200">
      <div className="flex justify-content-between align-item-center mb-4 align-items-center gap-4">
        <div>
          <h3 className="m-0 white-space-nowrap">Sales Statics</h3>
          <p className="m-0 text-xs">( *All values are in crore)</p>
        </div>
        <div>
          <Dropdown
            value={year || options[0]}
            onChange={(e) => setYear(e.value)}
            options={options}
            optionLabel="name"
            placeholder="Sort By"
            className="w-full md:w-14rem"
          />
        </div>
      </div>
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
