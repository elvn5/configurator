import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTentConfigurationState } from "src/redux/tentConfigurations/types";
import { EColors } from "src/components/Setup/types";
import { TWindowsState } from "src/components/Card/types";

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
      state: null,
    },
    roofWindows: {
      price: null,
      type: null,
      size: null,
      state: null,
    }
  },
};

const TentConfigurations = createSlice({
  name: "tentConfigurations",
  initialState,
  reducers:{
    addConfiguration: (state, action)=>{
      state.currentConfiguration.base = action.payload;
      state.currentConfiguration.selectedColor = action.payload.selectedColor;
    },
    setWinterModule: (state, action: PayloadAction<number | null>) => {
      state.currentConfiguration.winterModulePrice = action.payload;
    },
    setCurtainsModule: (state, action:PayloadAction<{name: string, price: number} | null>) => {
      if( action.payload?.name && action.payload.price) {
        state.currentConfiguration.curtainsModule.name = action.payload.name;
        state.currentConfiguration.curtainsModule.price = action.payload.price;
        return;
      }
      state.currentConfiguration.curtainsModule.name = null;
      state.currentConfiguration.curtainsModule.price = null;
    },
    setWindowsModule: (state, action:PayloadAction<{
      price: number,
      size: string,
      type: string,
      windows: TWindowsState[],
    }>) => {
      state.currentConfiguration.windows.price = action.payload.price;
      state.currentConfiguration.windows.size = action.payload.size;
      state.currentConfiguration.windows.type = action.payload.type;
      state.currentConfiguration.windows.state = action.payload.windows;
    },
    setRoofWindows: (state, action: PayloadAction<{
      price: number,
      size: string,
      type: string,
      windows: TWindowsState[],
    }>) => {
      state.currentConfiguration.roofWindows.price = action.payload.price;
      state.currentConfiguration.roofWindows.size = action.payload.size;
      state.currentConfiguration.roofWindows.type = action.payload.type;
      state.currentConfiguration.roofWindows.state = action.payload.windows;
    },
    resetState: () => initialState
  }
});

const tentReducer = TentConfigurations.reducer;
const {
  addConfiguration,
  setWinterModule,
  setCurtainsModule,
  setWindowsModule,
  setRoofWindows,
  resetState
} = TentConfigurations.actions;

export{
  tentReducer,
  addConfiguration,
  setWinterModule,
  setCurtainsModule,
  setWindowsModule,
  setRoofWindows,
  resetState
};
