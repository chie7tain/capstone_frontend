import axios from "axios";
import { createContext, useReducer } from "react";
import { ActionType } from "./actionType";
import AddReducers from "./AddReducers";

interface reducerState {
  data: { [key: string]: any };
  loading: boolean;
  error: string | null;
  getFavoriteFriends?: () => void;
  getFriends?: () => void;
  getGroups?: () => void;
}
//
const initialState: reducerState = {
  data: { friends: [], groups: [], favoriteFriends: [] },
  loading: false,
  error: null,
};

export const GlobalStateContext = createContext({} as reducerState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AddReducers, initialState);

  const getFavoriteFriends = async () => {
    try {
      const {
        data: { data },
      } = await axios.get("http://localhost:3050/api/v1/users/friend", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NDkxODUxMH0.LtH8KCDZL4jC1psm62dlXQGmaKLFmC3rBFV2XQ_XOBA`,
        },
      });

      // console.log(data, "res");
      dispatch({
        type: ActionType.GET_FAVORITE_FRIENDS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_FAVORITE_FRIENDS_FAILURE,
        payload: "error",
      });
    }
  };

  const getFriends = async () => {
    try {
      const {
        data: { data },
      } = await axios.get("http://localhost:3050/api/v1/users/friends", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NDkxODUxMH0.LtH8KCDZL4jC1psm62dlXQGmaKLFmC3rBFV2XQ_XOBA`,
        },
      });

      // console.log(data, "friends-list");

      dispatch({
        type: ActionType.GET_FRIENDS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_FRIENDS_FAILURE,
        payload: error.response.message,
      });
    }
  };

  const getGroups = async () => {
    try {
      const res = await axios.get("http://localhost:3050/api/v1/groups/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NDk1MDMyM30.oOhY7PqWbPrKn_imN9z-sDrjnIoESXRLBLpTVHE1t5w`,
        },
      });


      console.log(res.data, "groups-list");
      dispatch({
        type: ActionType.GET_GROUPS_SUCCESS,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_GROUPS_FAILURE,
        payload: error.response.error,
      });
    }
  };

  // console.log(state.data, "state");

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
