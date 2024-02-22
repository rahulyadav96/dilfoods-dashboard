function getMonthlyRevenurForm(year, data) {
  console.log("year", year, "data", data);
  let yearData = data.filter((item) => item.year == year?.code);
  let monthyRevenu = yearData[0]?.monthly?.map((month) => month.revenu);
  console.log("revenue", monthyRevenu);
  return monthyRevenu;
}
function getMonthlyProfitForm(year, data) {
  let yearData = data.filter((item) => item.year == year?.code);
  let monthlyProfit = yearData[0]?.monthly?.map((month) => month.profit);
  console.log("profit", monthlyProfit);

  return monthlyProfit;
}

export { getMonthlyProfitForm, getMonthlyRevenurForm };
