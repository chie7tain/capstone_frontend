import { User } from "../utils/interface";
import { ActionType } from "./actionType";

interface GET_FAVORITE_FRIENDS_SUCCESS {
  type: typeof ActionType.GET_FAVORITE_FRIENDS_SUCCESS;
  payload: any[];
}

interface GET_FAVORITE_FRIENDS_FAILURE {
  type: typeof ActionType.GET_FAVORITE_FRIENDS_FAILURE;
  payload: string;
}

interface GET_FRIENDS_SUCCESS {
  type: typeof ActionType.GET_FRIENDS_SUCCESS;
  payload: any[];
}

interface GET_FRIENDS_FAILURE {
  type: typeof ActionType.GET_FRIENDS_FAILURE;
  payload: string;
}

interface GET_GROUPS_SUCCESS {
  type: typeof ActionType.GET_GROUPS_SUCCESS;
  payload: any[];
}

interface GET_GROUPS_FAILURE {
  type: typeof ActionType.GET_GROUPS_FAILURE;
  payload: string;
}

interface GET_USER_LOGIN_SUCCESS {
  type: typeof ActionType.GET_USER_LOGIN_SUCCESS;
  payload: { accessToken: string; user: User };
}

export type Action =
  | GET_FAVORITE_FRIENDS_SUCCESS
  | GET_FAVORITE_FRIENDS_FAILURE
  | GET_FRIENDS_SUCCESS
  | GET_FRIENDS_FAILURE
  | GET_GROUPS_SUCCESS
  | GET_GROUPS_FAILURE
  | GET_USER_LOGIN_SUCCESS;
