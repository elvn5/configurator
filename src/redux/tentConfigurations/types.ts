import { ITents } from "src/redux/modules/types";
import { EColors } from "src/components/Setup/types";

type TTentConfigurationState = {
  currentConfiguration: {
    base: ITents | null;
    selectedColor: EColors,
    winterModulePrice: number | null;
    curtainsModule: {
      price: number | null;
      name: string | null;
    },
    windows: {
      type: string | null;
      size: string | null;
      count: number | null;
      price: number | null;
    };
    roofWindows: {
      type: string | null;
      size: string | null;
      count: number | null;
      price: number | null;
    }
  }
}

export type {
  TTentConfigurationState
};
