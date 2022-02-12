import { ActionType } from "./actionType";

interface GET_FAVORITE_FRIENDS_SUCCESS {
  type: typeof ActionType.GET_FAVORITE_FRIENDS_SUCCESS;
  payload: any;
}

interface GET_FAVORITE_FRIENDS_FAILURE {
  type: typeof ActionType.GET_FAVORITE_FRIENDS_FAILURE;
  payload: any;
}

interface GET_FRIENDS_SUCCESS {
  type: typeof ActionType.GET_FRIENDS_SUCCESS;
  payload: any;
}

interface GET_FRIENDS_FAILURE {
  type: typeof ActionType.GET_FRIENDS_FAILURE;
  payload: any;
}

interface GET_GROUPS_SUCCESS {
  type: typeof ActionType.GET_GROUPS_SUCCESS;
  payload: any;
}

interface GET_GROUPS_FAILURE {
  type: typeof ActionType.GET_GROUPS_FAILURE;
  payload: any;
}

export type Action =
  | GET_FAVORITE_FRIENDS_SUCCESS
  | GET_FAVORITE_FRIENDS_FAILURE
  | GET_FRIENDS_SUCCESS
  | GET_FRIENDS_FAILURE
  | GET_GROUPS_SUCCESS
  | GET_GROUPS_FAILURE;
