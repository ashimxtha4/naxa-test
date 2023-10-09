// redux/yourReducer1.ts
import { AnyAction } from "redux";
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./action";

// Define the initial state

export interface singleData {
  category: number[];
  category_description: string[];
  category_title: string[];
  clients: string;
  created_at: string;
  description: string;
  end_date: string;
  focus_area: string[];
  id: number;
  is_international_projects: boolean;
  is_key_highlight: boolean;
  ongoing: boolean;
  photo: string;
  project_order: number;
  project_url: any;
  start_date: string;
  subtitle: string;
  title: string;
  updated_at: string;
}
export interface DataStateType {
  error: boolean;
  data?: singleData[];
  isLoading: boolean;
  // Your reducer state structure here
}

const initialState: DataStateType = {
  error: false,
  data: [],
  isLoading: false,
};

export const dataReducer = (
  state = initialState,
  action: AnyAction
): DataStateType => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, data: [] };
    default:
      return state;
  }
};
