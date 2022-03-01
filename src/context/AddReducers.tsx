import { Action } from "./index";
import { ActionType } from "./actionType";
import { User } from "../utils/interface";

interface reducerState {
  data: { [key: string]: any };
  loading: boolean;
  error: string | null;
  accessToken: string;
  user: User;
  showProfilePage: boolean;
}

const AddReducers = (state: reducerState, action: Action): reducerState => {
  switch (action.type) {
    case ActionType.GET_FAVORITE_FRIENDS_SUCCESS:
      return {
        ...state,
        loading: true,
        data: { ...state.data, favoriteFriendsList: action.payload },
      };

    case ActionType.GET_FAVORITE_FRIENDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionType.GET_FRIENDS_SUCCESS:
      return {
        ...state,
        loading: true,
        data: { ...state.data, friends: action.payload },
      };

    case ActionType.GET_FRIENDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionType.GET_GROUPS_SUCCESS:
      return {
        ...state,
        loading: true,
        data: { ...state.data, groups: action.payload },
      };

    case ActionType.GET_GROUPS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case ActionType.GET_USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
      };

    case ActionType.SHOW_PROFILE_PAGE:
      return {
        ...state,
        showProfilePage: action.payload,
      };

    default:
      return state;
  }
};

export default AddReducers;
