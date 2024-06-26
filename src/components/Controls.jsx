import { useDispatch } from "react-redux"
import { useRef } from "react"
import { counterActions } from "../store/counterSlice"
import { privacyActions } from "../store/privacySlice"

function Controls(){
  const inputValElem = useRef()
  const dispatch = useDispatch()
  const decrement = () => dispatch(counterActions.decrement());
  const increment = () => dispatch(counterActions.increment());
  const addition = () => {
    dispatch(counterActions.addition({number: inputValElem.current.value}))
    inputValElem.current.value = ""
  }
  const subtraction = () => {
    dispatch(counterActions.substraction({number: inputValElem.current.value}))
    inputValElem.current.value = ""
  }

  const privacy_msg = () => {dispatch(privacyActions.privacyToggle())}
 
  return<>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button onClick={() => increment()} type="button" className="btn btn-primary">Increment</button>
      <button onClick={() => decrement()} type="button" className="btn btn-success">Decrement</button>
      <button onClick={() => privacy_msg()} type="button" className="btn btn-warning">Privacy Message</button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center custom-input-button">
      <input type="number" ref={inputValElem} className="custom-input" placeholder="Enter Number To Add"/>
      <button onClick={() => addition()} type="button" className="btn btn-dark">Add</button>
      <button onClick={() => subtraction()} type="button" className="btn btn-dark">Subtract</button>
    </div>
  </>
}

export default Controls