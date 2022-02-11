import { ITents } from "src/redux/modules/types";

type TGeneralCardProps = {
  color: boolean;
}

type TCardProps = TGeneralCardProps  & ITents

type TColors = {
  color: string,
  selected: boolean,
}

export type {
  TCardProps,
  TColors
};
