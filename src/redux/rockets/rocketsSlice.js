import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    checkStatus: (state) => {
      const newState = state;
      return newState;
    },
  },
});

export const { checkStatus } = rocketsSlice.actions;

export default rocketsSlice.reducer;
