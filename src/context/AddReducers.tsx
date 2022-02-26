import { Action } from './index';
import { ActionType } from './actionType';


interface reducerState {
    data: { [key: string]: any };
    loading: boolean
    error: string | null
}
const AddReducers = (state: reducerState, action: Action): reducerState => {
    switch (action.type) {
        case ActionType.GET_FAVORITE_FRIENDS_SUCCESS:
            return {
                ...state,
                loading: true,
                data: { ...state.data, favoriteFriendsList: action.payload }
            }
        
        case ActionType.GET_FAVORITE_FRIENDS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        case ActionType.GET_FRIENDS_SUCCESS:
            return {
                ...state,
                loading: true,
                data: { ...state.data, friends: action.payload }
            }
        
        case ActionType.GET_FRIENDS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        case ActionType.GET_GROUPS_SUCCESS:
            return {
                ...state,
                loading: true,
                data: { ...state.data, groups: action.payload }
            }
        
        
        case ActionType.GET_GROUPS_FAILURE:
            return {
                ...state,
                loading: false,
            }
        
        
        default:
            return state
        
        
    }
};

export default AddReducers