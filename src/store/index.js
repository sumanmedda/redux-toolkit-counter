import {createStore} from 'redux';

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
}

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

const store = createStore(reducer, INITIAL_VALUE)

export default store