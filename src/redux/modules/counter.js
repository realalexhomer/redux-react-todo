import createReducer from 'utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------
const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
const COUNTER_DECREMENT = 'COUNTER_DECREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export const decrement = () => ({ type: COUNTER_DECREMENT })
export const increment = () => ({ type: COUNTER_INCREMENT })

export const actions = {
  decrement,
  increment
}

// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer(0, {
  [COUNTER_DECREMENT]: (state) => {
    return state - 1
  },
  [COUNTER_INCREMENT]: (state) => {
    return state + 1
  }
})
