import { createSlice } from '@reduxjs/toolkit';


const privacySlice = createSlice({
    name: 'privacy',
    initialState: {privacy: false},
    reducers: {
      privacyToggle: (state) => {
        state.privacy = !state.privacy
      }
    }
  })

export const privacyActions = privacySlice.actions;

export default privacySlice;