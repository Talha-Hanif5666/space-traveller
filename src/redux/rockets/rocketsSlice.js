import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rocketList: [],
  status: {
    loading:false,
    error:'',
  }

};

const rocketsURL = 'https://api.spacexdata.com/v4/rockets'

const returnStatus = (type, state, action) => {
  const newState = {...state}
  switch (type) {
    case 'pending':
      newState.status.error = ''
      newState.status.loading = true
      return newState;
    case 'fulfilled':
      newState.status.error = ''
      newState.status.loading = false
      return newState;
    case 'rejected':
      newState.status.loading = false
      newState.status.error = action.error.message || 'The operation has failed'
      console.log(newState);
      return newState;
    default:
      break;
  }
  return newState;
};

export const getRockets = createAsyncThunk('rockets/get', async () =>{
  return fetch(rocketsURL)
    .then(res => res.json())
    .then(rocketsData => rocketsData.map((rocket) => (
      {
        id: rocket.id,
        name: rocket.name,
        img: rocket.flickr_images[0],
        desc: rocket.description,
      }
    )))
    .catch(error => error)
})

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    fetchRockets: (state, {action}) => {
      const newState = {...state}
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state)=> {
        returnStatus('pending', state)
      })

      .addCase(getRockets.fulfilled, (state, action)=> {
        const allRockets = action.payload;
        return { ...state, rocketList: [...state.rocketList, ...allRockets], status: { ...state.status, loading: false, error: '' } };
      })
      .addCase(getRockets.rejected, (state, action)=>{
        returnStatus('rejected',state, action)
      })

  },
});

export const { checkStatus } = rocketsSlice.actions;

export default rocketsSlice.reducer;
