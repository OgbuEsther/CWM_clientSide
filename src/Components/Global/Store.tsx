import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import myReducer from "../Global/ReduxState";

export const store = configureStore({
  reducer: {
    myReducer,
  },
});

//this will define your dispatch and selector functions

// export const UseAppDispatch: () => typeof store.dispatch = useDispatch;

// export const UseAppSelector: TypedUseSelectorHook<
//   ReturnType<typeof store.getState>
// > = useSelector;

// export const useAppSelector :()=> typeof store.dispatch = useDispatch
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
