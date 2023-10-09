import { combineReducers } from "redux";
import { dataReducer, DataStateType } from "./reducer";

export interface RootState {
  dataReducer: DataStateType;
}

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
