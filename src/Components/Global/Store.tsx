import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import myReducer from "../Global/ReduxState";

const store = configureStore({
  reducer: {
    myReducer,
  },
});

//this will define your dispatch and selector functions

export const UseAppDispatch: () => typeof store.dispatch = useDispatch;
