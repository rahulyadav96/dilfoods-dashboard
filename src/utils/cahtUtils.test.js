import sales from "../mock/sales.json";
import { getMonthlyProfitForm, getMonthlyRevenurForm } from "./chartUtils";

test("test monthly profit for 2023", () => {
  const expectedProfit = [
    "150",
    "110",
    "120",
    "160",
    "90",
    "170",
    "180",
    "240",
    "260",
    "310",
    "360",
    "450",
  ];
  const selectedYear = { name: "2023", code: "2023" };
  const monthProfit = getMonthlyProfitForm(selectedYear, sales);
  expect(monthProfit).toEqual(expectedProfit);
});

test("test monthy revenue for 2023", () => {
  const expectedRevenue = [
    "285",
    "200",
    "210",
    "250",
    "100",
    "200",
    "220",
    "280",
    "300",
    "350",
    "420",
    "500",
  ];
  const selectedYear = { name: "2023", code: "2023" };
  const monthRevenue = getMonthlyRevenurForm(selectedYear, sales);
  expect(monthRevenue).toEqual(expectedRevenue);
});
