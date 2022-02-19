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
  input?: string;
}

type TCardProps = TGeneralCardProps  & ICard

type TColors = {
  color: string,
  selected: boolean,
}

type TTooltipState = {
  x: number | null,
  y: number | null,
  display: boolean;
}

type TWindowsState = {
  label: string,
  value: number,
  type: string,
}

export type {
  TCardProps,
  TColors,
  TTooltipState,
  TWindowsState
};
