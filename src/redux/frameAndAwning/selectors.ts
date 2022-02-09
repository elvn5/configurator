import { RootState } from "src/redux/store";
import { IFrameAndAwning } from "src/redux/frameAndAwning/types";
import { TDefaultState } from "src/redux/types";

const selectFrameAndAwnings =
  (state:RootState):TDefaultState<IFrameAndAwning[]> =>
    state.frameAndAwningReducer.frameAndAwning;

export {
  selectFrameAndAwnings
};
