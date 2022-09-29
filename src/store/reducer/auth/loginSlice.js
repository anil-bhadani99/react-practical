import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authToken: localStorage.getItem('authToken') || null,
  errorMsg: ''
};

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      localStorage.setItem('authToken', 'true');
      state.errorMsg = '';
      state.authToken = 'true';
    },
    loginFail: (state, { payload }) => {
      state.errorMsg = payload;
    },
    resetLoginErrorMsg: (state) => {
      state.errorMsg = '';
    },

    // logout reducer
    logout: (state) => {
      localStorage.clear();
      state.authToken = null;
      state.errorMsg = '';
    }
  }
});

// Action creators are generated for each case reducer function
export const { loginSuccess, loginFail, resetLoginErrorMsg, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
