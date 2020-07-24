import React, { useReducer } from 'react'

const limitRGB = num => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 50;
const INCREMENT_R = 'INCREMENT_R';
const DECREMENT_R = 'DECREMENT_R';
const INCREMENT_G = 'INCREMENT_G';
const DECREMENT_G = 'DECREMENT_G';
const INCREMENT_B = 'INCREMENT_B';
const DECREMENT_B = 'DECREMENT_B';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_R:
      return { ...state, r: limitRGB(state.r + step) };
    case DECREMENT_R:
      return { ...state, r: limitRGB(state.r - step) };
    case INCREMENT_B:
      return { ...state, b: limitRGB(state.b + step) };
    case DECREMENT_B:
      return { ...state, b: limitRGB(state.b - step) };
    case INCREMENT_G:
      return { ...state, g: limitRGB(state.g + step) };
    case DECREMENT_G:
      return { ...state, g: limitRGB(state.g - step) };
    default:
      return state;
  }
}

const ReducerComponent = () => {
  const [{r, g, b}, dispatch] = useReducer(reducer, { r: 0, b: 0, g: 0 })
  const style = {
    marginRight: '0.5rem'
  }
  return (
    <div>
      <h3>useReducer Example</h3>
      <div>
        <span style={style}>Red: {r}</span>
        <button style={style} onClick={() => dispatch({ type: INCREMENT_R })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT_R })}>-</button>
      </div>
      <div>
        <span style={style}>Green: {g}</span>
        <button style={style} onClick={() => dispatch({ type: INCREMENT_G })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT_G })}>-</button>
      </div>
      <div>
        <span style={style}>Blue: {b}</span>
        <button style={style} onClick={() => dispatch({ type: INCREMENT_B })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT_B })}>-</button>
      </div>    
    </div>
  )
}

export default ReducerComponent;