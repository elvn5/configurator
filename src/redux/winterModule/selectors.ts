import { RootState } from "src/redux/store";
import { TWinterModuleState } from "src/redux/winterModule/types";

const selectWinterModules = (state:RootState):TWinterModuleState => state.winterModuleReducer;

export {
  selectWinterModules
};
