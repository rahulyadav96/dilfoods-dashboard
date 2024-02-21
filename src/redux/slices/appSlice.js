import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "dilFoods",
  initialState: {
    isLoading: false,
  },
  reducers: {
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
  },
});
export const { showLoading, hideLoading } = appSlice.actions;
export default appSlice;
