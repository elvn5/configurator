import { createSlice } from "@reduxjs/toolkit";
import { TTentConfigurationState } from "src/redux/tentConfigurations/types";

const initialState:TTentConfigurationState ={
  configurations: []
};

const TentConfigurations = createSlice({
  name: "tentConfigurations",
  initialState,
  reducers:{
    addConfiguration: (state, action)=>{
      state.configurations.push(action.payload);
    }
  }
});

const tentReducer = TentConfigurations.reducer;
const { addConfiguration } = TentConfigurations.actions;

export{
  tentReducer,
  addConfiguration,
};
