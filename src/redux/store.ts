import {
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { tentReducer } from "src/redux/tentConfigurations";
import { frameAndAwningReducer } from "src/redux/frameAndAwning/frameAndAwning";
import { winterModuleReducer } from "src/redux/winterModule";

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer:{
    frameAndAwningReducer,
    tentReducer,
    winterModuleReducer,
  },
  preloadedState:{

  },
  devTools: true,
  middleware
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>

export default store;
