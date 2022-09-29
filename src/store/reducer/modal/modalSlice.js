import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customModalOpen: false,
  customModalType: '',
  tempCustomModalData: null
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showCustomModal: (state, { payload }) => {
      state.customModalOpen = true;
      if (payload.customModalType) {
        state.customModalType = payload.customModalType;
      }
      if (payload.tempCustomModalData) {
        state.tempCustomModalData = payload.tempCustomModalData;
      }
    },
    hideCustomModal: (state) => {
      state.customModalOpen = false;
      state.customModalType = '';
      state.tempCustomModalData = null;
    }
  }
});

// Action creators are generated for each case reducer function
export const { showCustomModal, hideCustomModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
