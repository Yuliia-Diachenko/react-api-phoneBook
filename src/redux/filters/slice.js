import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const { name, number } = action.payload;
      if (name !== undefined) {
        state.name = name;
      }
      if (number!== undefined) {
        state.number = number;
      }
    },
  },
});
export default filtersSlice.reducer;

export const { changeFilter } = filtersSlice.actions;


export const filtersReducer = filtersSlice.reducer;
