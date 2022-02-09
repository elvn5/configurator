import { createSlice } from "@reduxjs/toolkit";

const initialState ={

};

const TentConfigurations = createSlice({
  name: "TentConfigurations",
  initialState,
  reducers:{

  }
});

const TentReducer = TentConfigurations.reducer;
const TentConfigurationsActions = TentConfigurations.actions;

export{
  TentReducer,
  TentConfigurationsActions
};
