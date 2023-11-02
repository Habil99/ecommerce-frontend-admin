import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types";
import { RootState } from "@/store";

type UserState = {
  user: User | null;
};

const initialUserState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
    },
  },
});

export const getUser = (state: RootState) => state.user.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
