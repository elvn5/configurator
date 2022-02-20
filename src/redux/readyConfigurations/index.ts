import { TReadyConfigurationState } from "src/redux/readyConfigurations/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState:TReadyConfigurationState = {
  readyConfigurations: [],
};

const readyConfigurations = createSlice({
  initialState,
  name: "readyConfigs",
  reducers: {
    addConfig: (state, action) =>{
      state.readyConfigurations.push(action.payload);
    }
  }
});

const readyConfigReducer = readyConfigurations.reducer;
const { addConfig } = readyConfigurations.actions;


export {
  readyConfigReducer,
  addConfig
};
