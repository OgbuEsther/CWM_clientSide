import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface userData {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  clientType: string;
  address: string;
}

const initialState = {
  Client: {} as userData | null,
};

const ReduxState = createSlice({
  name: "CWM",
  initialState,
  reducers: {
    registerClient: (state, { payload }: PayloadAction<userData>) => {
      state.Client = payload;
    },
  },
});

export const { registerClient } = ReduxState.actions;

export default ReduxState.reducer;
