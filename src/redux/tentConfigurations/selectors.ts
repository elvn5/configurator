import { RootState } from "src/redux/store";
import { TTentConfigurationState } from "src/redux/tentConfigurations/types";
import { ICard } from "src/redux/modules/types";

const selectCurrentConfiguration = (state:RootState):TTentConfigurationState =>
  state.tentReducer;

const selectCurrentBaseConfiguration = (state: RootState):ICard | null =>{
  if(state.tentReducer.currentConfiguration.base){
    return state.tentReducer.currentConfiguration.base;
  }else{
    return null;
  }
};


export {
  selectCurrentConfiguration,
  selectCurrentBaseConfiguration,
};
