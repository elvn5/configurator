import { TWinterModuleState } from "src/redux/winterModule/types";
import { createSlice } from "@reduxjs/toolkit";


const initialState:TWinterModuleState = {
  data: null,
  error: null,
  loading: false
};

const WinterModuleSlice = createSlice({
  name: "WinterModuleSlice",
  initialState,
  reducers:{
    getWinterModulesRequest: state => {
      state.loading = true;
    },
    getWinterModulesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getWinterModulesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

const winterModuleReducer = WinterModuleSlice.reducer;
const { getWinterModulesRequest, getWinterModulesFailure, getWinterModulesSuccess } = WinterModuleSlice.actions;

export {
  winterModuleReducer,
  getWinterModulesRequest,
  getWinterModulesFailure,
  getWinterModulesSuccess,
};
