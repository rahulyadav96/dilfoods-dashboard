function getMonthlyRevenurForm(year, data) {
  let yearData = data.filter((item) => item.year == year?.code);
  let monthyRevenu = yearData[0]?.monthly?.map((month) => month.revenu);
  return monthyRevenu;
}
function getMonthlyProfitForm(year, data) {
  let yearData = data.filter((item) => item.year == year?.code);
  let monthlyProfit = yearData[0]?.monthly?.map((month) => month.profit);
  return monthlyProfit;
}

export { getMonthlyProfitForm, getMonthlyRevenurForm };
