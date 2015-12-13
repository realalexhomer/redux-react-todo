import createReducer from 'utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------

const TODO_NEW_TODO = 'TODO_NEW_TODO'

// ------------------------------------
// Actions
// ------------------------------------
export const newTodo = () => ({
	type: TODO_NEW_TODO,
	id: 1,
	text: 'hi'
})

export const actions = {
	newTodo
}

// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer([], {
	[TODO_NEW_TODO]: (state, action) => {
		return [
			...state,
			{
				id: action.id,
				text: action.text,
				completed: false
			}
		]
	}
})
