import { configureStore } from "@reduxjs/toolkit";
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import userReducer from "@/store/slices/user.slice";
import authReducer from "@/store/slices/auth.slice";
import { authenticationService } from "@/features/authentication";
import { userService } from "@/services";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    [authenticationService.reducerPath]: authenticationService.reducer,
    [userService.reducerPath]: userService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authenticationService.middleware)
      .concat(userService.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppShallowEqualSelector = <TSelected>(
  selector: (state: RootState) => TSelected
) => useSelector(selector, shallowEqual);
