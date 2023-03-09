import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import myReducer from "../Global/ReduxState";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  PAUSE,
  PURGE,
  FLUSH,
  REGISTER,
  PERSIST,
  REHYDRATE,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    myReducer,
  },
});

//this will define your dispatch and selector functions

export const UseAppDispatch: () => typeof store.dispatch = useDispatch;

export const UseAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
