import { ITents } from "src/redux/modules/types";
import { EColors } from "src/components/Setup/types";

type TTentConfigurationState = {
  currentConfiguration: {
    base: ITents | null;
    selectedColor: EColors,
  }
}

export type {
  TTentConfigurationState
};
