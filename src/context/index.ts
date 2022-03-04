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

interface ADD_FRIEND_SUCCESS {
  type: typeof ActionType.ADD_FRIEND_SUCCESS;
  payload: any;
}

interface ADD_FRIEND_FAILURE {
  type: typeof ActionType.ADD_FRIEND_FAILURE;
  payload: string;
}

interface GET_MESSAGES_SUCCESS {
  type: typeof ActionType.GET_MESSAGES_SUCCESS;
  payload: any[];
}

interface GET_MESSAGES_FAILURE {
  type: typeof ActionType.GET_MESSAGES_FAILURE;
  payload: string;
}

interface ADD_FAVORITE_FRIEND_SUCCESS {
  type: typeof ActionType.ADD_FAVORITE_FRIEND_SUCCESS;
  payload: any;
}

interface ADD_FAVORITE_FRIEND_FAILURE {
  type: typeof ActionType.ADD_FAVORITE_FRIEND_FAILURE;
  payload: string;
}

interface REMOVE_FAVORITE_FRIEND_SUCCESS {
  type: typeof ActionType.REMOVE_FAVORITE_FRIEND_SUCCESS;
  payload: any;
}

interface REMOVE_FAVORITE_FRIEND_FAILURE {
  type: typeof ActionType.REMOVE_FAVORITE_FRIEND_FAILURE;
  payload: string;
}

export type Action =
  | GET_FAVORITE_FRIENDS_SUCCESS
  | GET_FAVORITE_FRIENDS_FAILURE
  | GET_FRIENDS_SUCCESS
  | GET_FRIENDS_FAILURE
  | GET_GROUPS_SUCCESS
  | GET_GROUPS_FAILURE
  | ADD_FRIEND_SUCCESS
  | ADD_FRIEND_FAILURE
  | GET_MESSAGES_SUCCESS
  | GET_MESSAGES_FAILURE
  | ADD_FAVORITE_FRIEND_SUCCESS
  | ADD_FAVORITE_FRIEND_FAILURE
  | REMOVE_FAVORITE_FRIEND_SUCCESS
  | REMOVE_FAVORITE_FRIEND_FAILURE;
