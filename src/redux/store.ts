import {
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { tentReducer } from "src/redux/tentConfigurations";
import { modulesReducer } from "src/redux/modules";
import { readyConfigReducer } from "src/redux/readyConfigurations";

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer:{
    modulesReducer,
    tentReducer,
    readyConfigReducer,
  },
  preloadedState:{

  },
  devTools: true,
  middleware
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>

export default store;
