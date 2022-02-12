import axios from "axios";
import { createContext, useReducer } from "react";
import { ActionType } from "./actionType";
import AddReducers from "./AddReducers";

interface reducerState {
  data: any[];
  loading: boolean;
  error: string | null;
  getFavoriteFriends?: () => void;
  getFriends?: () => void;
  getGroups?: () => void;
}

const initialState: reducerState = {
  data: [],
  loading: false,
  error: null,
};

export const GlobalStateContext = createContext({} as reducerState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AddReducers, initialState);

  const getFavoriteFriends = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3050/api/v1/users/friend"
      );

      console.log(res.data);
      dispatch({
        type: ActionType.GET_FAVORITE_FRIENDS_SUCCESS,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_FAVORITE_FRIENDS_FAILURE,
        payload: error.response.data.error,
      });
    }
  };

  const getFriends = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3050/api/v1/users/friends"
      );

      dispatch({
        type: ActionType.GET_FRIENDS_SUCCESS,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_FRIENDS_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

  const getGroups = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3050/api/v1/groups/user"
      );

      dispatch({
        type: ActionType.GET_GROUPS_SUCCESS,
        payload: res.data.allGroups,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_GROUPS_FAILURE,
        payload: error.response.data.error,
      });
    }

    return (
      <GlobalStateContext.Provider
        value={{
          data: state.data,
          loading: state.loading,
          error: state.error,
          getFavoriteFriends,
          getFriends,
          getGroups,
        }}
      >
        {children}
      </GlobalStateContext.Provider>
    );
  };
};
