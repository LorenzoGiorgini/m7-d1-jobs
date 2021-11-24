import { createStore } from "redux";
import mainReducer from "../reducers/reducers";


export const initialState = {
    favourites: [],
    home: {
        search: "",
        isLoading: false,
    },
}



const configureStore = createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default configureStore;