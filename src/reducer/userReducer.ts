import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

const initialState: User = {
  _id: '',
  name: '',
  email: '',
  avatar: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      Object.assign(state, action.payload);
    }
  }
});

const {setUser} = userSlice.actions;

export type {User};
export {setUser};
export default userSlice.reducer;