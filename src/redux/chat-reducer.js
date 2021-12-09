const DELETE_MESSAGE = 'DELETE_MESSAGE'
const ADD_MESSAGE = 'ADD_MESSAGE'


const initialState = [
	{
		message: 'Just to order',
		data: new Date(2021, 0, 1, 12, 45)
	},
	{
		message: 'Okay, for what level of spiciness?',
		data: new Date(2021, 0, 1, 12, 46)
	}
]


const chatReducer = (state = initialState, action) => {
	switch (action.type) {

		case DELETE_MESSAGE: {
			const newState = [...state]
			newState.splice(action.index, 1);
			return newState
		}

		case ADD_MESSAGE: {
			return [...state, {message: action.message, data: new Date()}];
		}

		default:
			return state;
	}
}

export const deleteMessage = (index) => ({type: DELETE_MESSAGE, index})
export const addMessage = (message) => ({type: ADD_MESSAGE, message})

export default chatReducer