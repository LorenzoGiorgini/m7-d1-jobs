import { ADD_TO_FAVOURITES , REMOVE_FROM_FAVOURITES, IS_LOADING, STOP_LOADING } from '../actions/actions'
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
                favourites: state.favourites.filter((item , i) => i !== action.payload)
            }
        case IS_LOADING:
            return {
                ...state,
                home: {
                    ...state.home,
                    isLoading: true
                }
            }
        case STOP_LOADING:
            return {
                ...state,
                home: {
                    ...state.home,
                    isLoading: false
                }
            }
        default:
            return state
    }
}



export default mainReducer