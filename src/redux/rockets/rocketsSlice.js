import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {};

const rocketsURL = 'https://api.spacexdata.com/v4/rockets'

export const getRockets = createAsyncThunk('rockets/get', async () =>{
  console.log('test');
  fetch(rocketsURL).then(res => res.json()).then(rocketsData => console.log(rocketsData))
})

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
