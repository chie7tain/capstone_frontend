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
  showMessages: boolean;
  showProfile?: (value: boolean) => void;
  setShowMessages?: (value: boolean) => void;
  getUser?: (data: { user: User; accessToken: string }) => void;
  getFavoriteFriends?: () => void;
  getFriends?: () => void;
  getGroups?: () => void;
  getMessages?: () => void;
  addFavoriteFriend?: (data: any) => void;
  addFriend?: (data: any) => void;
  removeFavoriteFriend?: (data: any) => void;
}

const initialState: reducerState = {
  data: { friends: [], groups: [], favoriteFriendsList: [] },
  loading: false,
  error: null,
  accessToken: "",
  showProfilePage: true,
  showMessages: false,
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
      } = await axios.get("http://localhost:3050/api/v1/users/getfavorites", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NjQyMTI1M30.HHjxJvroBNKc0b8cW3T0oS20W-K4T5oIjjfyGR5pxjQ`,
        },
      });

      console.log(data, "favorite friends");
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NjQyMTI1M30.HHjxJvroBNKc0b8cW3T0oS20W-K4T5oIjjfyGR5pxjQ`,
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
      const res = await axios.get("http://localhost:3050/api/v1/groups/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NjQyMTI1M30.HHjxJvroBNKc0b8cW3T0oS20W-K4T5oIjjfyGR5pxjQ`,
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

  const setShowMessages = (value: boolean) => {
    dispatch({
      type: ActionType.SHOW_MESSAGES,
      payload: value,
    });
  };
  // Add friend by email
  const addFriend = async (email: string) => {
    try {
      const res = await axios.post(
        "http://localhost:3050/api/v1/users/friend",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NjQyMTI1M30.HHjxJvroBNKc0b8cW3T0oS20W-K4T5oIjjfyGR5pxjQ`,
          },
        }
      );

      dispatch({
        type: ActionType.ADD_FRIEND_SUCCESS,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.ADD_FRIEND_FAILURE,
        payload: error.response.error,
      });
    }
  };

  // Add favorite friend by id
  const addFavoriteFriend = async (id: string) => {
    try {
      const res = await axios.post(
        "http://localhost:3050/api/v1/users/friends",
        {
          id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NjQyMTI1M30.HHjxJvroBNKc0b8cW3T0oS20W-K4T5oIjjfyGR5pxjQ`,
          },
        }
      );

      dispatch({
        type: ActionType.ADD_FAVORITE_FRIEND_SUCCESS,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.ADD_FAVORITE_FRIEND_FAILURE,
        payload: error.response.error,
      });
    }
  };

  // Remove favorite friend by id

  const removeFavoriteFriend = async (id: string) => {
    try {
      const res = await axios.post(
        `http://localhost:3050/api/v1/users/friends/${id}`,
        {
          id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NjQyMTI1M30.HHjxJvroBNKc0b8cW3T0oS20W-K4T5oIjjfyGR5pxjQ`,
          },
        }
      );

      dispatch({
        type: ActionType.REMOVE_FAVORITE_FRIEND_SUCCESS,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.REMOVE_FAVORITE_FRIEND_FAILURE,
        payload: error.response.error,
      });
    }
  };

  // Get messages

  // const getMessages = async () => {
  //   try {
  //     const res = await axios.get(
  //       "http://localhost:3050/api/v1/chats/61fa3f7e3517687c2ad8ec22/messages",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NjQyMTI1M30.HHjxJvroBNKc0b8cW3T0oS20W-K4T5oIjjfyGR5pxjQ`,
  //         },
  //       }
  //     );

  //     console.log(res.data, "messages");

  //     dispatch({
  //       type: ActionType.GET_MESSAGES_SUCCESS,
  //       payload: res.data,
  //     });
  //   } catch (error: any) {
  //     dispatch({
  //       type: ActionType.GET_MESSAGES_FAILURE,
  //       payload: error.response.error,
  //     });
  //   }
  // };

  console.log(state.data, "state");

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
        setShowMessages,
        showMessages: state.showMessages,
        addFriend,
        addFavoriteFriend,
        removeFavoriteFriend,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
