import { RootState } from "src/redux/store";
import { TTentConfigurationState } from "src/redux/tentConfigurations/types";

const selectCurrentConfiguration = (state:RootState):TTentConfigurationState =>
  state.tentReducer;

export {
  selectCurrentConfiguration
};
