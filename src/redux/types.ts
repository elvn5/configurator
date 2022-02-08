type TDefaultState<T> = {
  data: T | null,
  error: any;
  loading: boolean;
}

type TFrameAndAwning = {
  frameAndAwning: TDefaultState<any>
}

export type {
  TDefaultState,
  TFrameAndAwning,
};
