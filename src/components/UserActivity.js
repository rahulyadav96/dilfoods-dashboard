import { useEffect, useState } from "react";
import user_activity from "../mock/user_activity.json";
import { Chart } from "primereact/chart";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { changeUserActivityFilter } from "../redux/slices/appSlice";
export default function UserActivity() {
  const dataFilter = useSelector(
    (state) => state.application.userActivityFilter
  );
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const dispatch = useDispatch();

  const handleFilterButtonClick = (newFilter) => {
    dispatch(changeUserActivityFilter(newFilter));
  };

  useEffect(() => {
    const data = {
      labels: [...user_activity[dataFilter].datalabel],
      datasets: [
        {
          label: "New Users",
          backgroundColor: "#018E42",
          borderColor: "#018E42",
          data: [...user_activity[dataFilter].newCustomers],
        },
        {
          label: "Old Users",
          backgroundColor: "#BBA0CA",
          borderColor: "#BBA0CA",
          data: [...user_activity[dataFilter].oldCustomers],
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
  }, [dataFilter]);
  return (
    <div className="card p-2 lg:p-4 border-round-md border-1 border-solid border-200">
      <div className="mb-4">
        <div className="flex flex-column lg:flex-row gap-4 align-items-center justify-content-between">
          <h3 className="m-0 white-space-nowrap">User Activity</h3>
          <div className="flex gap-2">
            <Button
              label="Last Year"
              severity="secondary"
              onClick={() => handleFilterButtonClick("lastYear")}
              outlined={dataFilter == "lastYear"}
              text={dataFilter !== "lastYear"}
            />
            <Button
              label="This Year"
              severity="secondary"
              onClick={() => handleFilterButtonClick("thisYear")}
              outlined={dataFilter == "thisYear"}
              text={dataFilter !== "thisYear"}
            />
            <Button
              label="Last Week"
              severity="secondary"
              onClick={() => handleFilterButtonClick("lastWeek")}
              outlined={dataFilter == "lastWeek"}
              text={dataFilter !== "lastWeek"}
            />
          </div>
        </div>
      </div>
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  );
}
