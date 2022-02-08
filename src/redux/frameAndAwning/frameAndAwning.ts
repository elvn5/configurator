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

  }
});

const frameAndAwningReducer = frameAndAwning.reducer;

export {
  frameAndAwningReducer
};
