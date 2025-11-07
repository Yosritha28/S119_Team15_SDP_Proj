import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking(state, action) {
      state.list.push(action.payload);
    },
    clearBookings(state) {
      state.list = [];
    },
  },
});

export const { addBooking, clearBookings } = bookingSlice.actions;
export default bookingSlice.reducer;