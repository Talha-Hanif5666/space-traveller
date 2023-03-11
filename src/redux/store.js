/* eslint-disable import/no-extraneous-dependencies */
import thunk from 'redux-thunk';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missions from './missions/missionsSlice';

const reducers = combineReducers({
  rockets: rocketsReducer,
  missionsReducer: missions,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
