import { IFrameAndAwning } from "src/redux/frameAndAwning/types";
import { EColors } from "src/components/Setup/types";

type TTentConfigurationState = {
  currentConfiguration: {
    base: IFrameAndAwning | null;
    selectedColor: EColors,
  }
}

export type {
  TTentConfigurationState
};
