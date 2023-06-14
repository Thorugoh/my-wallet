import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

type UserSliceState = {
  value: User | null;
};

const initialState: UserSliceState = {
  value: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.value = action.payload;
    },

    logout(state, action: PayloadAction<number>) {
      state.value = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;