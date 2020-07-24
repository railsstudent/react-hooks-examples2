import React, { useReducer} from 'react'

const limitRGB = num => (num < 0 ? 0 : num > 255 ? 255 : num);

const ReducerComponent = () => {
  return (
    <div>
      <h3>useReducer Example</h3>
    </div>
  )
}

export default ReducerComponent;