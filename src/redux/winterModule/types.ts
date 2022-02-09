import { TDefaultState } from "src/redux/types";

interface IWinterModuleResponse {
  img: string;
  price: number;
  size: string;
}

type TWinterModuleState = TDefaultState<IWinterModuleResponse[]>

export type {
  TWinterModuleState
};
