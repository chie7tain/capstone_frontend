import axios from "axios";
import { createContext, useReducer } from "react";
import { ActionType } from "./actionType";
import AddReducers from "./AddReducers";
import { User } from "../utils/interface";

interface reducerState {
  data: { [key: string]: any };
  loading: boolean;
  error: string | null;
  user: User;
  accessToken: string;
  showProfilePage: boolean;
  showProfile?: (value: boolean) => void;
  getUser?: (data: { user: User; accessToken: string }) => void;
  getFavoriteFriends?: () => void;
  getFriends?: () => void;
  getGroups?: () => void;
}

const initialState: reducerState = {
  data: { friends: [], groups: [], favoriteFriends: [] },
  loading: false,
  error: null,
  accessToken: "",
  showProfilePage: true,
  user: {},
};

export const GlobalStateContext = createContext({} as reducerState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AddReducers, initialState);
  // const [hideProfileDrop, setHideProfileDrop] = useState<boolean>(true);

  const getUser = (data: { user: User; accessToken: string }) => {
    dispatch({
      type: ActionType.GET_USER_LOGIN_SUCCESS,
      payload: data,
    });
  };

  const getFavoriteFriends = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(
        "http://localhost:3050/api/v1/friends/getFavoriteFriends",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NTUyNDkwMX0.iyuhySdBAmrqz74wcSLnA9P4t-ts5muzGIOZY0ByMFs`,
          },
        }
      );

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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NTUyNDkwMX0.iyuhySdBAmrqz74wcSLnA9P4t-ts5muzGIOZY0ByMFs`,
        },
      });

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
      const res = await axios.get("http://localhost:3050/api/v1/groups", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NTUyNDkwMX0.iyuhySdBAmrqz74wcSLnA9P4t-ts5muzGIOZY0ByMFs`,
        },
      });

      // console.log(res.data, "groups-list");
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

  const showProfile = (value: boolean) => {
    dispatch({
      type: ActionType.SHOW_PROFILE_PAGE,
      payload: value,
    });
  };

  return (
    <GlobalStateContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        error: state.error,
        getUser,
        accessToken: state.accessToken,
        user: state.user,
        getFavoriteFriends,
        getFriends,
        getGroups,
        showProfile,
        showProfilePage: state.showProfilePage,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
