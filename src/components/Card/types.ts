import { ICard } from "src/redux/modules/types";

type TGeneralCardProps = {
  color: boolean;
  onClickSelectModule: <T>(args:T, optional?:any) => void;
  withDetails: boolean;
  title?: string;
  description?: string;
  size?: string;
  type?: string;
  withPrice?: boolean;
}

type TCardProps = TGeneralCardProps  & ICard

type TColors = {
  color: string,
  selected: boolean,
}

export type {
  TCardProps,
  TColors
};
