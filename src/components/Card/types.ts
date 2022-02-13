import { ITents } from "src/redux/modules/types";

type TGeneralCardProps = {
  color: boolean;
  onClickSelectModule: <T>(args:T, optional?:any) => void;
  withDetails: boolean;
  title?: string;
  description?: string;
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
