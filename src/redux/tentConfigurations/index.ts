import { createSlice } from "@reduxjs/toolkit";
import { TTentConfigurationState } from "src/redux/tentConfigurations/types";
import { EColors } from "src/components/Setup/types";

const initialState:TTentConfigurationState ={
  currentConfiguration: {
    base: null,
    selectedColor: EColors["#FFFFFF"],
  }
};

const TentConfigurations = createSlice({
  name: "tentConfigurations",
  initialState,
  reducers:{
    addConfiguration: (state, action)=>{
      state.currentConfiguration.base = action.payload;
      state.currentConfiguration.selectedColor = action.payload.selectedColor;
    }
  }
});

const tentReducer = TentConfigurations.reducer;
const { addConfiguration } = TentConfigurations.actions;

export{
  tentReducer,
  addConfiguration,
};
