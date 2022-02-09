import { IFrameAndAwning } from "src/redux/frameAndAwning/types";

type TDefaultState<T> = {
  data: T | null,
  error: string | null;
  loading: boolean;
}

type TFrameAndAwning = {
  frameAndAwning: TDefaultState<IFrameAndAwning[]>
}

export type {
  TDefaultState,
  TFrameAndAwning,
};
