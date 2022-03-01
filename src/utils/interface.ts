export interface IformData {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
}

export interface User {
  user?: string;
  userName?: string;
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
