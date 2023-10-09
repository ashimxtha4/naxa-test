// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer"; // You need to create your reducers
import { rootSaga } from "./sagas"; // Import your rootSaga

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
  //   applyMiddleware(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);

export default store;
// const action = (type: any) => store.dispatch({ type });
// export type RootState = ReturnType<typeof rootReducer>;
