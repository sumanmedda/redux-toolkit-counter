import {configureStore, createSlice} from '@reduxjs/toolkit';

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
}

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
})

const reducer = (store, action) => {
  if(action.type === 'INCREMENT') {
    store = {...store, counter : store.counter + 1}
  }else if(action.type === 'DECREMENT') {
    store = {...store, counter :  store.counter - 1}
  }else if(action.type === 'ADDITION') {
    store = {...store, counter :  store.counter + Number(action.payload.number)}
  }else if(action.type === 'SUBTRACTION') {
    store = {...store, counter :  store.counter - Number(action.payload.number)}
  }else if(action.type === 'PRIVACY_MESSAGE') {
    store = {...store, privacy :  !store.privacy}
  }
  return store;
}

const store = configureStore({
  reducer : {
    counter : counterSlice.reducer
  }
})

export const counterActions = counterSlice.actions;
export default store