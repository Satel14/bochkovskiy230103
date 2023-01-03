import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import User from '../types/types';


interface UsersState {
  users: User[] | null;
  loading: boolean;
}

const initialState: UsersState = {
  users: null,
  loading: false,
};
export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('/initData.json');
  const users = await res.json();

  return users as User[];
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.loading = false;
    });
  },
});

export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    const users = await getUsers();
    return users;
  },
);

export default usersSlice.reducer;
