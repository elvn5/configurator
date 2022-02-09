import { IFrameAndAwning } from "src/redux/frameAndAwning/types";

type TGeneralCardProps = {
  color: boolean;
}

type TCardProps = TGeneralCardProps  & IFrameAndAwning

type TColors = {
  color: string,
  selected: boolean,
}

export type {
  TCardProps,
  TColors
};
