import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name : 'counter',
    initialState : {counter: 0,},
    reducers : {
      increment : (state, action) => {
        state.counter = state.counter + 1
      },
      decrement : (state, action) => {
        state.counter = state.counter - 1
      },
      addition : (state, action) => {
        state.counter = state.counter + Number(action.payload.number)
      },
      substraction : (state, action) => {
        state.counter = state.counter - Number(action.payload.number)
      }
    }
  }
)

export const counterActions = counterSlice.actions;

export default counterSlice;