import { ICard } from "src/redux/modules/types";
import { EColors } from "src/components/Setup/types";
import { TWindowsState } from "src/components/Card/types";

type TTentConfigurationState = {
  currentConfiguration: {
    base: ICard | null;
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
      state: Array<TWindowsState> | null;
    };
    roofWindows: {
      type: string | null;
      size: string | null;
      price: number | null;
      state: Array<TWindowsState> | null;
    }
  },
}

export type {
  TTentConfigurationState
};
