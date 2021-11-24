import { ADD_TO_FAVOURITES , REMOVE_FROM_FAVOURITES } from '../actions/actions'
import { initialState } from '../store/store'


const mainReducer = (state = initialState, action) => {
    const {type} = action

    switch (type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}



export default mainReducer