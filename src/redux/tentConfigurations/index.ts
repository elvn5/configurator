import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTentConfigurationState } from "src/redux/tentConfigurations/types";
import { EColors } from "src/components/Setup/types";

const initialState:TTentConfigurationState ={
  currentConfiguration: {
    base: null,
    selectedColor: EColors["#FFFFFF"],
    winterModulePrice: null,
    curtainsModule: {
      price: null,
      name: null,
    },
    windows: {
      price: null,
      type: null,
      count: null,
      size: null,
    },
    roofWindows: {
      price: null,
      type: null,
      count: null,
      size: null,
    }
  }
};

const TentConfigurations = createSlice({
  name: "tentConfigurations",
  initialState,
  reducers:{
    addConfiguration: (state, action)=>{
      state.currentConfiguration.base = action.payload;
      state.currentConfiguration.selectedColor = action.payload.selectedColor;
    },
    setWinterModule: (state, action: PayloadAction<number>) => {
      state.currentConfiguration.winterModulePrice = action.payload;
    },
    setCurtainsModule: (state, action:PayloadAction<{name: string, price: number}>) => {
      state.currentConfiguration.curtainsModule.name = action.payload.name;
      state.currentConfiguration.curtainsModule.price = action.payload.price;
    },
    setWindowsModule: (state, action) => {
      state.currentConfiguration.windows.price = action.payload.price;
      state.currentConfiguration.windows.size = action.payload.size;
      state.currentConfiguration.windows.type = action.payload.type;
      state.currentConfiguration.windows.count = action.payload.count;
    },
    setRoofWindows: (state, action) => {
      state.currentConfiguration.roofWindows.price = action.payload.price;
      state.currentConfiguration.roofWindows.size = action.payload.size;
      state.currentConfiguration.roofWindows.type = action.payload.type;
      state.currentConfiguration.roofWindows.count = action.payload.count;
    }
  }
});

const tentReducer = TentConfigurations.reducer;
const {
  addConfiguration,
  setWinterModule,
  setCurtainsModule,
  setWindowsModule,
  setRoofWindows,
} = TentConfigurations.actions;

export{
  tentReducer,
  addConfiguration,
  setWinterModule,
  setCurtainsModule,
  setWindowsModule,
  setRoofWindows
};
