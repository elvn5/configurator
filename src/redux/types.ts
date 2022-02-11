import { TModulesResponse } from "src/redux/modules/types";

type TDefaultState<T> = {
  data: T | null,
  error: string | null;
  loading: boolean;
}

type TModules = {
  modules: TDefaultState<TModulesResponse>
}

export type {
  TDefaultState,
  TModules,
};
