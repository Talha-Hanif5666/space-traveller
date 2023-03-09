import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

const fetchMissions = createAsyncThunk('user/fetchUsers', () => axios.get('https://api.spacexdata.com/v3/missions')
  .then((res) => res.data.map((mission) => (
    {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      reserved: false,
    }

  ))));

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, id) => {
      const newState = state.missions.map((mission) => {
        if (mission.id !== id.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return { ...state, missions: newState };
    },
    leaveMission: (state, id) => {
      const newState = state.missions.map((mission) => {
        if (mission.id !== id.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return { ...state, missions: newState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      const newState = { ...state };
      newState.loading = true;
      return newState;
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.loading = false;
      newState.missions = action.payload;
      newState.error = '';
      return newState;
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      const newState = { ...state };
      newState.loading = false;
      newState.missions = [];
      newState.error = action.error.message;
      return newState;
    });
  },
});

export default missionsSlice.reducer;
export const { joinMission, leaveMission } = missionsSlice.actions;
export { fetchMissions };
