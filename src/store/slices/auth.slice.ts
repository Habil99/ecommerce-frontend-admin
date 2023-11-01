import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

type AuthState = {
  tokens: Tokens | null;
  isAuthenticated: boolean;
};

const initialAuthState: AuthState = {
  tokens: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setTokens: (state: AuthState, action: PayloadAction<Tokens>) => {
      state.tokens = action.payload;
    },
    setIsAuthenticated: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const getTokens = (state: RootState) => state.auth.tokens;

export const getIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const { setTokens, setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
