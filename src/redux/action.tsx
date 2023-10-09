import { AnyAction } from "redux";

// redux/actions.ts
// import { YourAction1Type } from "./saga";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchData = () => ({ type: FETCH_DATA });

export const fetchDataSuccess = (data: any): AnyAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: any): AnyAction => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
