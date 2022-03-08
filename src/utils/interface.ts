export interface IformData {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
}

export interface User {
  _id?: string;
  user?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  isVerified?: Boolean;
  status?: string;
  confirmCode?: string;
  avatar?: string;
  avatarId?: string;
  about?: string;
  favoriteFriends?: string[];
}

export interface IChat {
  id?: string;
  members?: string[];
}
