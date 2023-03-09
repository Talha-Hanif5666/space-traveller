import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rocketList: [],
  status: {
    loading: false,
    error: '',
  },
  myRockets: [],
};

const rocketsURL = 'https://api.spacexdata.com/v4/rockets';


const returnStatus = (type, state, action) => {
  const newState = { ...state };
  switch (type) {
    case 'pending':
      newState.status.error = '';
      newState.status.loading = true;
      return newState;
    case 'fulfilled':
      newState.status.error = '';
      newState.status.loading = false;
      return newState;
    case 'rejected':
      newState.status.loading = false;
      newState.status.error = action.error.message || 'The operation has failed';
      return newState;
    default:
      break;
  }
  return newState;
};

export const getRockets = createAsyncThunk('rockets/get', async () => fetch(rocketsURL)
  .then((res) => res.json())
  .then((rocketsData) => rocketsData.map((rocket) => (
    {
      id: rocket.id,
      name: rocket.name,
      img: rocket.flickr_images[0],
      desc: rocket.description,
      booked: false,
    }
  )))
  .catch((error) => error));

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    booking: (state, action) => {
      const id = action.payload;
      const rocketArray = state.rocketList.map((rocket) => {
        if (rocket.id === id) {
          if (rocket.booked) {
            return {...rocket,booked: false}
          } else {
            return {...rocket, booked:true}
          }
        } else {
          return rocket
        }
      })
      console.log(rocketArray);
      const bookedRockets = rocketArray.filter((rocket)=> rocket.booked === true)
      console.log(bookedRockets);
      return {...state, rocketList: rocketArray, myRockets: bookedRockets};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        returnStatus('pending', state);
      })

      .addCase(getRockets.fulfilled, (state, action) => {
        const allRockets = action.payload;
        return { ...state, rocketList: [...state.rocketList, ...allRockets], status: { ...state.status, loading: false, error: '' } };
      })
      .addCase(getRockets.rejected, (state, action) => {
        returnStatus('rejected', state, action);
      });
  },
});

export const { booking } = rocketsSlice.actions;

export default rocketsSlice.reducer;
