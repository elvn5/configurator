import { createSlice } from "@reduxjs/toolkit";
import { initialRequestState } from "src/types";

import { TModules } from "../types";

const initialState:TModules = {
  modules: initialRequestState
};

const modules = createSlice({
  name: 'frameAndAwning',
  initialState ,
  reducers: {
    getModulesRequest: state => {
      state.modules.loading = true;
    },
    getModulesSuccess: (state, action) => {
      state.modules.loading = false;
      state.modules.data = action.payload;
    },
    getModulesFailure: (state, action) => {
      state.modules.loading = false;
      state.modules.error = action.payload;
    }
  }
});

const modulesReducer = modules.reducer;
const {
  getModulesRequest,
  getModulesFailure,
  getModulesSuccess
} = modules.actions;

export {
  modulesReducer,
  getModulesRequest,
  getModulesFailure,
  getModulesSuccess
};
