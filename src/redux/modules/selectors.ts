import { RootState } from "src/redux/store";
import { TModulesResponse } from "src/redux/modules/types";
import { TDefaultState } from "src/redux/types";

const selectModules =
  (state:RootState):TDefaultState<TModulesResponse> =>
    state.modulesReducer.modules;

export {
  selectModules
};
