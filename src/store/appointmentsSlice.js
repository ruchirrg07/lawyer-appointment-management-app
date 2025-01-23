import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    bookAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
  },
});

export const { bookAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
