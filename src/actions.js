import { callApi } from './api/api';
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from './constants';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, //action that is being taken
    payload: text //we are sending whatever data is needed to the reducer
});

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    callApi('https://jsonplaceholder.typicode.com/users')
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}

