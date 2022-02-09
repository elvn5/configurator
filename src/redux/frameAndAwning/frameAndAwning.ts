import { createSlice } from "@reduxjs/toolkit";

import { TFrameAndAwning } from "../types";

const initialState:TFrameAndAwning = {
  frameAndAwning: {
    data: null,
    error: null,
    loading: false,
  }
};

const frameAndAwning = createSlice({
  name: 'frameAndAwning',
  initialState ,
  reducers: {
    getTentsRequest: state => {
      state.frameAndAwning.loading = true;
    },
    getTentsSuccess: (state, action) => {
      state.frameAndAwning.loading = false;
      state.frameAndAwning.data = action.payload;
    },
    getTentsFailure: (state, action) => {
      state.frameAndAwning.loading = false;
      state.frameAndAwning.error = action.payload;
    }
  }
});

const frameAndAwningReducer = frameAndAwning.reducer;
const frameAndAwningActions = frameAndAwning.actions;

export {
  frameAndAwningReducer,
  frameAndAwningActions,
};
