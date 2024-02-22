import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "dilFoods",
  initialState: {
    isLoading: false,
    salesFilter: { name: "2023", code: "2023" },
    userActivityFilter: "lastWeek",
  },
  reducers: {
    changeUserActivityFilter(state, { payload }) {
      state.userActivityFilter = payload;
    },
    changeSaleStaticsFilter(state, { payload }) {
      state.salesFilter = payload;
    },
  },
});
export const { changeSaleStaticsFilter, changeUserActivityFilter } =
  appSlice.actions;
export default appSlice;
